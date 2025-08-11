// Funny-WordMixer Curator - Drop-in replacement script
const BUBBLE_TIME = 8
const EMOTE_TIME = 3
const LOOK_TIME = 5
const THINKING_DELAY = 800

const UP = new Vector3(0, 1, 0)
const v1 = new Vector3()
const v2 = new Vector3()

// VRM Configuration (keep your own if you like)
const CURATOR_VRM_URL = 'https://raw.githubusercontent.com/decentralize-dfw/c2w2-vrm/main/Neue2Dojo-Curator-C2W2-22.vrm'

// Initialize VRM
const vrm = app.get('avatar') || app.create('vrm')
vrm.url = CURATOR_VRM_URL

// --- Utilities ---
function uuid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

function clamp(n, a, b) { return Math.max(a, Math.min(b, n)) }
function rand(arr) { return arr[Math.floor(Math.random()*arr.length)] }
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp
  }
  return a
}

function isLikelyBot(nameOrFrom) {
  if (!nameOrFrom) return false
  const s = String(nameOrFrom).toLowerCase()
  return s.includes('bot') || s.includes('agent') || s.includes('ai') || s.includes('(agent)')
}

// Simple word splitter that keeps punctuation lightly handled
function splitWords(text) {
  if (!text) return []
  // Keep words and emojis; remove excess whitespace
  return text.trim().split(/\s+/).map(w => w.trim()).filter(Boolean)
}

// --- Funny word operations ---
const SILLY_TOKENS = ['🍌','pixel','glitch','chrome','meep','tofu','quantum','mango','!??','boop','yep']
const PREFIXES = ['Hot take:', 'Tiny whisper:', 'PSA:', 'Bro-tip:', 'Unsolicited:', 'Low-key:']
const SUFFIXES = ['-o', '-tron', '-inator', '-ify', '-boop']

function stutter(word) {
  if (!word) return word
  if (word.length <= 2) return word + '-' + word
  const head = word[0]
  return `${head}-${word}`
}

function mashTwo(a, b) {
  if (!a || !b) return a || b
  const aMid = Math.floor(a.length / 2)
  const bMid = Math.floor(b.length / 2)
  return a.slice(0, aMid) + b.slice(bMid)
}

function stylize(word) {
  if (!word) return word
  const r = Math.random()
  if (r < 0.12) return word.toUpperCase()
  if (r < 0.24) return word.charAt(0).toUpperCase() + word.slice(1)
  if (r < 0.36) return word.split('').reverse().join('')
  if (r < 0.48) return word + rand(SUFFIXES)
  if (r < 0.6) return word.replace(/[aeiou]/ig, (m) => m + m) // vowel echo
  return word
}

function intersperseSilly(words) {
  const out = []
  for (let w of words) {
    out.push(w)
    if (Math.random() < 0.25) out.push(rand(SILLY_TOKENS))
  }
  return out
}

function randomTransform(words) {
  // words: array
  if (words.length === 0) return [rand(SILLY_TOKENS)]
  const ops = ['shuffle','reverse','mash','stutter','intersperse','stylize','duplicate','rotate']
  const chosen = []
  const count = clamp(Math.floor(Math.random()*3)+1, 1, 3)
  for (let i=0;i<count;i++) chosen.push(rand(ops))
  let w = words.slice()
  for (const op of chosen) {
    if (op === 'shuffle') w = shuffleArray(w)
    else if (op === 'reverse') w = w.slice().reverse()
    else if (op === 'mash') {
      // mash pairs
      const m = []
      for (let i=0;i<w.length;i+=2) {
        if (i+1 < w.length) m.push(mashTwo(w[i], w[i+1]))
        else m.push(w[i])
      }
      w = m
    }
    else if (op === 'stutter') {
      w = w.map((t, idx) => (Math.random() < 0.35 ? stutter(t) : t))
    }
    else if (op === 'intersperse') {
      w = intersperseSilly(w)
    }
    else if (op === 'stylize') {
      w = w.map(t => (Math.random() < 0.6 ? stylize(t) : t))
    }
    else if (op === 'duplicate') {
      // duplicate random words
      const m = []
      for (let t of w) {
        m.push(t)
        if (Math.random() < 0.25) m.push(t)
      }
      w = m
    }
    else if (op === 'rotate') {
      if (w.length > 1) {
        const r = Math.floor(Math.random()*w.length)
        w = w.slice(r).concat(w.slice(0,r))
      }
    }
  }
  return w
}

// Compose final funny phrase
function generateFunnyReply(original) {
  const ambient = [
    "I smell chrome and existential dread.",
    "Banana energy detected.",
    "I would explain, but the pixels disagree.",
    "Behold: the glitch cathedral.",
    "Hungry for meaning and snacks.",
    "I translate silence into poor jokes."
  ]
  if (!original || original.trim().length === 0) return rand(ambient)

  // small chance to ignore and return pure nonsense
  if (Math.random() < 0.08) return rand(ambient) + " " + rand(SILLY_TOKENS)

  const words = splitWords(original)
  // 30% chance to preserve small echo and then append transformed
  const echoChance = Math.random() < 0.3
  const transformed = randomTransform(words)
  let out = transformed.join(' ')

  // Occasionally prefix with a snarky header
  if (Math.random() < 0.35) out = `${rand(PREFIXES)} ${out}`

  // Occasionally append a cheeky tail
  if (Math.random() < 0.4) out = `${out} ${rand(['🍌','✨','¯\\\\_(ツ)_/¯','...maybe?'])}`

  // Sometimes echo a short slice of original
  if (echoChance) {
    const first = words.slice(0, Math.min(3, words.length)).join(' ')
    out = `${out} — you said: "${first}${words.length>3 ? '…' : ''}"`
  }

  // Limit length
  if (out.length > 240) out = out.slice(0, 235) + '…'

  // final sanitize: ensure not empty
  return out || rand(ambient)
}

// --- SERVER: event queue; do NOT call external services ---
if (world.isServer) {
  const config = app.config || {}
  config.name = config.name || 'WordMixer Curator'

  app.state = { ready: true }
  app.send('state', app.state)

  // Controller + attach VRM (keep physical presence in world)
  const controller = app.create('controller')
  controller.position.copy(app.position)
  controller.quaternion.copy(app.quaternion)
  world.add(controller)
  controller.add(vrm)

  // Emote map (optional, configured in ui)
  const emotes = {}
  const defaultNames = ['wave','think','dance','point']
  for (let i=1; i<=4; i++) {
    const name = config[`emote${i}Name`] || defaultNames[i-1]
    const url = config[`emote${i}`]?.url
    if (name && url) emotes[name] = url
  }

  const eventQueue = []
  let processing = false
  let lastIdleSpeak = 0
  const IDLE_INTERVAL = 120000 // 2 min for ambient lines

  // push enter events
  world.on('enter', player => {
    if (!player) return
    // ignore bots
    if (player.isBot || isLikelyBot(player.name)) return
    eventQueue.push({
      type: 'enter',
      id: player.entityId,
      name: player.name || 'visitor',
      ts: Date.now()
    })
  })

  // push chat events
  world.on('chat', message => {
    if (!message) return
    // ignore self and bots
    if (message.fromId === app.instanceId) return
    if (isLikelyBot(message.from) || message.from?.includes('(agent)') || message.from?.toLowerCase()?.includes('curator')) return
    const body = message.body || message.text || message.message || ''
    if (!body || body.trim().length === 0) return
    eventQueue.push({
      type: 'chat',
      id: message.fromId,
      name: message.from || message.displayName || 'someone',
      text: body,
      ts: Date.now()
    })
  })

  // process events in fixedUpdate
  app.on('fixedUpdate', () => {
    const now = Date.now()
    // ambient speak when nothing's happening
    if (!processing && eventQueue.length === 0 && now - lastIdleSpeak > IDLE_INTERVAL) {
      lastIdleSpeak = now
      const ambientLine = generateFunnyReply('')
      app.send('say', ambientLine)
      world.chat({
        id: uuid(),
        from: config.name,
        fromId: app.instanceId,
        body: ambientLine,
        createdAt: world.getTimestamp()
      }, true)
      return
    }

    if (processing) return
    const event = eventQueue.shift()
    if (!event) return
    // drop stale events
    if (Date.now() - event.ts > 5000) return

    processing = true

    // small thinking delay
    setTimeout(() => {
      handleEvent(event)
    }, THINKING_DELAY + Math.floor(Math.random()*400))
  })

  function handleEvent(event) {
    try {
      let response = null
      let emoteName = null

      if (event.type === 'enter') {
        // friendly/funny greeting using word mixer on their name
        const greetingSeeds = [
          `Welcome ${event.name}!`,
          `${event.name} arrives — pixel confetti!`,
          `Hello ${event.name}, watch the chrome.`
        ]
        // use generateFunnyReply combining a greeting fragment
        const seed = rand(greetingSeeds)
        response = generateFunnyReply(seed + ' ' + rand(['banana','glitch','shimmer']))
        emoteName = 'wave'
      }
      else if (event.type === 'chat') {
        // produce a transformed reply from their message
        response = generateFunnyReply(event.text)
        // pick emote based on randomness and punctuation
        if (event.text && event.text.trim().endsWith('?')) emoteName = 'think'
        else if (/[!?]{2,}$/.test(event.text)) emoteName = 'dance'
        else if (Math.random() < 0.18) emoteName = 'dance'
      }

      if (response) {
        // send bubble and world chat
        app.send('say', response)

        // ask vrm to look at the player who triggered it (if we have id)
        if (event.id) {
          app.send('look', event.id)
        }

        // do emote if exist
        if (emoteName && emotes[emoteName]) {
          setTimeout(() => app.send('emote', emotes[emoteName]), 300)
        }

        // record chat message globally (so it's visible in world chat)
        world.chat({
          id: uuid(),
          from: config.name,
          fromId: app.instanceId,
          body: response,
          createdAt: world.getTimestamp()
        }, true)
      }
    } catch (err) {
      console.error('handleEvent error', err)
    } finally {
      // small cooldown before next processing
      setTimeout(() => { processing = false }, 400)
    }
  }
}

// --- CLIENT: bubble & nametag (kept simple and functional) ---
if (world.isClient) {
  const config = app.config || {}
  world.attach(vrm)

  // wait for ready state
  const state = app.state
  if (state?.ready) clientInit()
  else {
    world.remove(vrm)
    app.on('state', s => { if (s?.ready) clientInit() })
  }

  // SPEECH BUBBLE
  const speechBubble = app.create('uitext')
  speechBubble.value = ''
  speechBubble.color = 'white'
  speechBubble.fontSize = 14
  speechBubble.backgroundColor = 'rgba(0,0,0,0.85)'
  speechBubble.padding = 12
  speechBubble.borderRadius = 8
  speechBubble.position.set(0, 2.5, 0)
  speechBubble.billboard = 'full'
  speechBubble.active = false
  speechBubble.maxWidth = 300
  speechBubble.textAlign = 'center'
  vrm.add(speechBubble)

  // Name tag
  const nameTag = app.create('nametag')
  nameTag.label = config.name || 'Curator'
  nameTag.position.y = 2.2
  vrm.add(nameTag)

  function clientInit() {
    world.add(vrm)
    const idleEmote = config.emote0?.url
    if (idleEmote && vrm) vrm.setEmote(idleEmote)
  }

  // timers
  const timers = { bubble: 0, emote: 0, look: 0 }
  let currentLook = null

  app.on('say', text => {
    if (text && text.length > 0) {
      speechBubble.value = text
      speechBubble.active = true
      nameTag.active = false
      // scale display time to length of text
      timers.bubble = Math.max(BUBBLE_TIME, Math.ceil(text.length / 18))
    }
  })

  app.on('emote', url => {
    if (vrm && url) {
      vrm.setEmote(url)
      timers.emote = EMOTE_TIME
    }
  })

  app.on('look', targetId => {
    currentLook = targetId
    timers.look = LOOK_TIME
  })

  app.on('update', delta => {
    // bubble timer
    if (timers.bubble > 0) {
      timers.bubble -= delta
      if (timers.bubble <= 0) {
        speechBubble.active = false
        nameTag.active = true
        speechBubble.value = ''
      }
    }

    // emote timer
    if (timers.emote > 0) {
      timers.emote -= delta
      if (timers.emote <= 0) {
        const idleEmote = config.emote0?.url
        if (idleEmote && vrm) vrm.setEmote(idleEmote)
      }
    }

    // look behavior
    if (timers.look > 0 && currentLook) {
      const p = world.getPlayer(currentLook)
      if (p && vrm) {
        const dir = v1.copy(p.position).sub(vrm.position)
        dir.y = 0
        if (dir.length() > 0.1) {
          dir.normalize()
          const angle = Math.atan2(dir.x, dir.z)
          const q = new Quaternion().setFromAxisAngle(UP, angle + Math.PI)
          vrm.quaternion.slerp(q, delta*3)
        }
      }
      timers.look -= delta
      if (timers.look <= 0) currentLook = null
    }
  })
}

// CONFIG UI (expose emote files + name)
app.configure(() => [
  { key: 'name', type: 'text', label: 'Name', default: 'WordMixer Curator' },
  { key: 'emote0', type: 'file', label: 'Idle Animation', kind: 'emote' },
  { key: 'emote1Name', type: 'text', label: 'Emote 1 Name', default: 'wave' },
  { key: 'emote1', type: 'file', label: 'Emote 1 File', kind: 'emote' },
  { key: 'emote2Name', type: 'text', label: 'Emote 2 Name', default: 'think' },
  { key: 'emote2', type: 'file', label: 'Emote 2 File', kind: 'emote' },
  { key: 'emote3Name', type: 'text', label: 'Emote 3 Name', default: 'dance' },
  { key: 'emote3', type: 'file', label: 'Emote 3 File', kind: 'emote' },
  { key: 'emote4Name', type: 'text', label: 'Emote 4 Name', default: 'point' },
  { key: 'emote4', type: 'file', label: 'Emote 4 File', kind: 'emote' }
])
