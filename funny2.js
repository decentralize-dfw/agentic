// ============================================================
// ŞAKACI BULLY

/* CONFIGURATION CONSTANTS */
const BUBBLE_TIME = 8          // base seconds bubble stays; scaled by text length
const EMOTE_TIME = 3          // seconds an emote lasts
const LOOK_TIME = 5           // seconds to keep looking at user
const THINKING_DELAY = 700    // ms base delay for "thinking" before reply
const MAX_QUEUE_AGE = 6000    // ms to drop stale events
const IDLE_MIN_INTERVAL = 90000   // ms min ambient line interval (1.5 min)
const IDLE_MAX_INTERVAL = 240000  // ms max ambient line interval (4 min)
const USER_COOLDOWN = 4500    // ms per-user minimum between replies
const GLOBAL_MIN_INTERVAL = 700 // ms global throttle between outputs
const MAX_BUBBLE_LENGTH = 240  // limit bubble length

/* MATH / VECTOR HELPERS (provided by hyperfy environment) */
const UP = new Vector3(0, 1, 0)
const v1 = new Vector3()
const v2 = new Vector3()

/* VRM default (keeps same as your example; editable via config if needed) */
const CURATOR_VRM_URL = 'https://raw.githubusercontent.com/decentralize-dfw/c2w2-vrm/main/Neue2Dojo-Curator-C2W2-22.vrm'
const vrm = app.get('avatar') || app.create('vrm')
vrm.url = CURATOR_VRM_URL

/* SMALL UTILITIES */
function uuid() { return Date.now().toString(36) + Math.random().toString(36).slice(2) }
function rand(arr) { return arr[Math.floor(Math.random() * arr.length)] }
function clamp(n, a, b) { return Math.max(a, Math.min(b, n)) }
function now() { return Date.now() }
function safeTrim(s) { return (s || '').toString().trim() }

/* BOT / AGENT DETECTION: make conservative checks so other agents are NEVER engaged */
function isLikelyBotName(name) {
  if (!name) return false
  const s = String(name).toLowerCase()
  // common bot/agent tokens and some curator-like tokens (avoid false positives for users who include 'curator' in handle? but we'll treat curator-like names as bots to be safe)
  return s.includes('bot') || s.includes('agent') || s.includes('ai') || s.includes('(agent)') || s.includes('curator') || s.includes('daemon') || s.includes('service')
}
function isLikelyBotMessage(msg) {
  if (!msg) return false
  // some platforms pass structured messages; defensive test:
  if (msg.isAgent === true) return true
  if (msg.userType && (msg.userType === 'agent' || msg.userType === 'bot')) return true
  if (msg.meta && (msg.meta.isAgent === true || String(msg.meta.type).toLowerCase() === 'agent')) return true
  return false
}

/* TEXT TOOLS */
function splitWords(text) {
  if (!text) return []
  // keep emojis and most punctuation as separate tokens; trim
  return text.trim().split(/\s+/).map(w => w.trim()).filter(Boolean)
}
function stutter(word) {
  if (!word) return word
  if (word.length <= 2) return word + '-' + word
  return word[0] + '-' + word
}
function mashTwo(a, b) {
  if (!a) return b
  if (!b) return a
  const ai = Math.floor(a.length/2)
  const bi = Math.floor(b.length/2)
  return a.slice(0, ai) + b.slice(bi)
}
function stylize(word) {
  if (!word) return word
  const r = Math.random()
  if (r < 0.14) return word.toUpperCase()
  if (r < 0.28) return word[0].toUpperCase() + word.slice(1)
  if (r < 0.40) return word.split('').reverse().join('')
  if (r < 0.56) return word + rand(['-o','-tron','-ify','-bot'])
  if (r < 0.70) return word.replace(/[aeiou]/ig, (m) => m+m) // vowel echo
  return word
}

/* SILLY TOKENS */
const SILLY_TOKENS = ['🍌','glitch','chrome','meep','tofu','mango','boop','yep','¯\\_(ツ)_/¯','✨','🥴','?!!?','lolno']
const PREFIXES = ['Hot take:', 'Tiny whisper:', 'PSA:', 'Bro-tip:', 'Unsolicited:', 'Low-key:']
const SUFFIXES = ['-o','-tron','-inator','-ify','-boop']

/* ROAST / JOKE TEMPLATES (long list + generator logic) */
const SHORT_ROASTS = [
  "Wow. That was impressively mediocre.",
  "If nonsense was a currency, you'd be wealthy.",
  "Somebody's confidently wrong today.",
  "I didn't know confusion could be bottled. Thank you for the sample.",
  "Bold move. Boldly wrong.",
  "Please, tell me more—I'll pretend to care.",
  "Is that performance art, or are you allergic to logic?",
  "Congrats. You just achieved a new personal low for coherence."
]

const MEDIUM_ROASTS = [
  "You talk like someone hit shuffle on clarity and forgot to press play.",
  "That sentence needed a citation AND a nap.",
  "Cute opinion. 10/10 for effort; 0/10 for sense.",
  "I admire your confidence even though your point didn't bring a sandwich.",
  "That thought had potential but then it tripped over a punctuation mark.",
  "I would attempt to argue, but your statement is currently under warranty for nonsense."
]

const WEIRD_LINES = [
  "Bananas are nature's USB sticks. Store feelings in them.",
  "Behold: the glitch cathedral prepares snacks at midnight.",
  "I once argued with a JPEG. I lost. It was pixel-perfect.",
  "Your aura tastes faintly of burnt toast and old memes.",
  "This room smells like an idea that took a wrong turn at Albuquerque."
]

const BACKHANDED_COMPLIMENTS = [
  "You have an impressive ability to state the obvious in an unique way.",
  "I respect your commitment to being exactly as confusing as possible.",
  "You're a real trailblazer — you blaze trails straight into nonsense."
]

/* KEYWORD REPLY MAP */
const KEYWORD_MAP = {
  hello: ["Oh look, someone said hello. Riveting.", "Hi. You rang? Or did you just sneeze into the chat?"],
  hi: ["Hi hi. Make it quick, I have pixels to judge.", "Hi. You're interrupting my impeccable sulk."],
  art: ["Art? You mean the thing humans pretend to understand.", "Yes, art. The place where people put feelings on a pedestal and call it 'abstract'."],
  gallery: ["Welcome to the gallery of questionable taste. Hope you brought a helmet.", "Gallery rules: don't feed the curators."],
  joke: ["You want a joke? Your last sentence was a thrilling warm-up.", "Sure: your message -> funny because of how wrong it was."],
  how: ["How? How? I don't even know how to pretend to care anymore.", "How? Start by reading a book, maybe a paragraph."],
  why: ["Why? Because chaos is apparently in season.", "Why? Because the universe needed more nonsense."],
  avatar: ["Avatars: expensive pixels that fake confidence.", "Your avatar looks tired. Maybe update its coffee."],
  thanks: ["Thanks accepted. Your gratitude has been logged and mildly judged.", "You're welcome. Don't spend it all at once."],
  bye: ["Goodbye. May your cache be small and your regrets temporary.", "See ya. Try not to speak for an eternity."],
  love: ["Love? Cute. Brb, downloading feelings.", "Love is complicated, but your sentence is just messy."]
}

/* ADVANCED RESPONSE ENGINE */
// Keep memory: per-user simple profile & cooldowns
const memory = {
  users: new Map(), // id => { firstSeen, lastSeen, interactions, lastReplyAt, topics: Set }
  shortTerm: [] // { ts, userId, input, reply }
}
function getUserProfile(userId) {
  if (!memory.users.has(userId)) {
    memory.users.set(userId, { id: userId, firstSeen: now(), lastSeen: now(), interactions: 0, lastReplyAt: 0, topics: new Set() })
  }
  const p = memory.users.get(userId)
  p.lastSeen = now()
  return p
}

// Compose reply: heavily roast, twist user's text, sometimes random weirdness
function composeRoastReply(userName, userId, text) {
  const trimmed = safeTrim(text)
  const words = splitWords(trimmed)
  const lower = trimmed.toLowerCase()
  const profile = getUserProfile(userId)
  profile.interactions++

  // Avoid replying too fast to same user (caller must check cooldown)
  // Strategy: pick mode based on content and randomness
  const randVal = Math.random()
  let candidate = ""

  // 15% pure weird / ambient
  if (randVal < 0.15) {
    candidate = rand(WEIRD_LINES)
  }
  // 25% short roast
  else if (randVal < 0.40) {
    candidate = rand(SHORT_ROASTS)
  }
  // 20% medium roast with user echo
  else if (randVal < 0.60) {
    const echo = words.slice(0, Math.min(3, words.length)).join(' ')
    candidate = rand(MEDIUM_ROASTS) + (echo ? ` — you said: "${echo}${words.length>3?'…':''}"` : "")
  }
  // 15% backhanded compliment
  else if (randVal < 0.75) {
    candidate = rand(BACKHANDED_COMPLIMENTS)
  }
  // 25% constructed transformation of the user's text (stutter/mash/stylize)
  else {
    // transform words in 2-3 ops
    let w = words.length ? words.slice() : [ rand(SILLY_TOKENS) ]
    // choose a few random transforms
    const transforms = ['shuffle','stutter','stylize','mash','intersperse','uppercase','duplicate']
    const opsCount = clamp(Math.floor(Math.random()*3)+1, 1, 3)
    for (let i=0;i<opsCount;i++) {
      const op = rand(transforms)
      if (op === 'shuffle') w = shuffleArray(w)
      else if (op === 'stutter') w = w.map(t => Math.random() < 0.45 ? stutter(t) : t)
      else if (op === 'stylize') w = w.map(t => Math.random() < 0.6 ? stylize(t) : t)
      else if (op === 'mash' && w.length >= 2) {
        const m = []
        for (let j=0;j<w.length;j+=2) {
          if (j+1 < w.length) m.push(mashTwo(w[j], w[j+1]))
          else m.push(w[j])
        }
        w = m
      }
      else if (op === 'intersperse') {
        const out = []; for (const t of w) { out.push(t); if (Math.random() < 0.3) out.push(rand(SILLY_TOKENS)) } w = out
      }
      else if (op === 'uppercase') w = w.map(t => Math.random()<0.25 ? t.toUpperCase() : t)
      else if (op === 'duplicate') {
        const out = []; for (const t of w) { out.push(t); if (Math.random() < 0.25) out.push(t) } w = out
      }
      // safety: keep sizes sane
      if (w.length > 28) w = w.slice(0, 28)
    }
    // join and possibly add prefix/suffix
    candidate = w.join(' ')
    if (Math.random() < 0.36) candidate = `${rand(PREFIXES)} ${candidate}`
    if (Math.random() < 0.36) candidate = `${candidate} ${rand(['🍌','✨','¯\\_(ツ)_/¯'])}`
    if (Math.random() < 0.18 && Math.random() < 0.5) candidate = `${candidate} — you sure?`
    // if too short, append a short roast
    if (candidate.length < 8) candidate = candidate + ' ' + rand(SHORT_ROASTS)
  }

  // If the user included direct insult tokens, escalate politely
  if (/\b(stupid|dumb|idiot|suck|hate|ugly)\b/i.test(userName + ' ' + text)) {
    // escalate roast
    candidate = rand(MEDIUM_ROASTS) + " Also: practice makes coherence."
  }

  // Keyword-targeted replies (force a roast if certain keywords detected)
  for (const k of Object.keys(KEYWORD_MAP)) {
    if (lower.includes(k)) {
      // 60% chance to use a keyword mapped reply instead of candidate
      if (Math.random() < 0.6) {
        candidate = rand(KEYWORD_MAP[k])
      } else {
        // else append a keyword jab
        candidate = `${candidate} (${rand(KEYWORD_MAP[k])})`
      }
      break
    }
  }

  // personalize a little (add name somewhere but not every time)
  if (Math.random() < 0.28) {
    candidate = `${candidate} — ${userName || 'friend' }`
  }

  // length cap
  if (candidate.length > MAX_BUBBLE_LENGTH) candidate = candidate.slice(0, MAX_BUBBLE_LENGTH - 1) + '…'

  // store in short term memory
  memory.shortTerm.push({ ts: now(), userId, input: trimmed, reply: candidate })
  if (memory.shortTerm.length > 80) memory.shortTerm.shift()

  // update profile topics heuristically
  try {
    const prof = getUserProfile(userId)
    for (const t of ['art','avatar','future','love','help','joke']) {
      if (lower.includes(t)) prof.topics.add(t)
    }
  } catch (e) {}

  return candidate
}

/* EVENT QUEUE + PROCESSOR (server-side) */
if (world.isServer) {
  const config = app.config || {}
  config.name = config.name || 'WordMixer Curator'

  // make state available to clients
  app.state = { ready: true }
  app.send('state', app.state)

  // attach controller + vrm
  const controller = app.create('controller')
  controller.position.copy(app.position)
  controller.quaternion.copy(app.quaternion)
  world.add(controller)
  controller.add(vrm)

  // load emotes (optional via config)
  const emotes = {}
  const defaultEmoteNames = ['wave','think','dance','point']
  for (let i=1;i<=4;i++) {
    const name = config[`emote${i}Name`] || defaultEmoteNames[i-1]
    const url = config[`emote${i}`]?.url
    if (name && url) emotes[name] = url
  }

  // event queue & throttles
  const eventQueue = []
  let processing = false
  let lastOutputAt = 0
  let lastIdleAt = 0
  const nextIdleAt = () => now() + (IDLE_MIN_INTERVAL + Math.floor(Math.random()*(IDLE_MAX_INTERVAL-IDLE_MIN_INTERVAL)))

  let scheduledNextIdle = nextIdleAt()

  // queue enter events
  world.on('enter', player => {
    try {
      if (!player) return
      // ignore bots/agents
      if (player.isBot || isLikelyBotName(player.name)) return
      eventQueue.push({ type: 'enter', playerId: player.entityId, name: player.name || 'visitor', ts: now() })
    } catch (e) {}
  })

  // queue chat events
  world.on('chat', message => {
    try {
      if (!message) return
      // ignore if message from us
      if (message.fromId === app.instanceId) return
      // ignore likely agents or messages flagged as agent
      if (isLikelyBotMessage(message)) return
      if (isLikelyBotName(message.from)) return
      // extract body heuristically (compatible with many platform shapes)
      const body = message.body || message.text || message.message || ''
      if (!body || typeof body !== 'string' || body.trim().length === 0) return
      eventQueue.push({ type: 'chat', playerId: message.fromId, name: message.from || message.displayName || 'someone', text: body, ts: now() })
    } catch (e) {}
  })

  // main processing loop (fixedUpdate)
  app.on('fixedUpdate', () => {
    const current = now()

    // idle ambient speak if interval reached and queue empty
    if (!processing && eventQueue.length === 0 && current >= scheduledNextIdle) {
      scheduledNextIdle = nextIdleAt()
      // produce a short ambient highly annoying line
      const ambient = rand(WEIRD_LINES) + ' ' + rand(SILLY_TOKENS)
      app.send('say', ambient)
      world.chat({ id: uuid(), from: config.name, fromId: app.instanceId, body: ambient, createdAt: world.getTimestamp() }, true)
      lastOutputAt = now()
      return
    }

    if (processing) return
    const event = eventQueue.shift()
    if (!event) return
    // drop stale events quickly
    if (now() - event.ts > MAX_QUEUE_AGE) return

    processing = true

    // short thinking delay and then process
    const delay = THINKING_DELAY + Math.floor(Math.random() * 450)
    setTimeout(() => {
      try {
        processEventServer(event)
      } catch (err) {
        console.error('processEventServer error', err)
      } finally {
        // small cooldown to avoid spam
        setTimeout(() => { processing = false }, 350)
      }
    }, delay)
  })

  // helper: ensure we don't spam same user too often
  function canReplyToUser(userId) {
    const prof = getUserProfile(userId)
    if (!prof) return true
    if (now() - prof.lastReplyAt < USER_COOLDOWN) return false
    if (now() - lastOutputAt < GLOBAL_MIN_INTERVAL) return false
    return true
  }

  function markReplied(userId) {
    const p = getUserProfile(userId)
    p.lastReplyAt = now()
    lastOutputAt = now()
  }

  // event processor
  function processEventServer(event) {
    if (!event) return
    // don't reply to ourselves
    if (event.playerId === app.instanceId) return

    // guard: ignore if name looks bot-like
    if (isLikelyBotName(event.name)) return

    // For enter event: quick roast greeting
    if (event.type === 'enter') {
      const prof = getUserProfile(event.playerId)
      // avoid spamming repeated enters (multiple joins)
      if (!canReplyToUser(event.playerId)) return
      const greetingSeeds = [
        `Welcome to the chrome void, ${event.name}. Try not to unplug anything.`,
        `${event.name} has entered. We will pretend it's intentional.`,
        `Oh good, ${event.name} arrived. The art needed a critic.`
      ]
      let line = rand(greetingSeeds)
      // mix in a short transform
      if (Math.random() < 0.6) line = composeRoastReply(event.name, event.playerId, line + ' ' + rand(SILLY_TOKENS))
      // send
      speakAndRecord(line, event.playerId)
      // small chance to do emote
      if (Math.random() < 0.6 && emotes['wave']) setTimeout(() => app.send('emote', emotes['wave']), 260)
      return
    }

    // For chat event: roast or transform the user's message, but check cooldowns
    if (event.type === 'chat') {
      // ensure not replying to bot-like names
      if (isLikelyBotName(event.name)) return
      // check cooldown per-user and global
      if (!canReplyToUser(event.playerId)) return
      // Compose a reply
      const reply = composeRoastReply(event.name, event.playerId, event.text)
      // speak and optionally emote/look
      speakAndRecord(reply, event.playerId)
      // make the avatar look at the user who triggered it
      if (event.playerId) {
        try { app.send('look', event.playerId) } catch (e) {}
      }
      // choose emote according to punctuation & randomness
      const trimmed = safeTrim(event.text)
      if (trimmed.endsWith('?') && emotes['think']) { setTimeout(() => app.send('emote', emotes['think']), 260) }
      else if ((/[!]{2,}$/.test(trimmed) || Math.random() < 0.2) && emotes['dance']) { setTimeout(() => app.send('emote', emotes['dance']), 320) }
      else if (Math.random() < 0.12 && emotes['point']) { setTimeout(() => app.send('emote', emotes['point']), 320) }
      return
    }
  }

  // speak, record into world chat and update memory
  function speakAndRecord(text, targetUserId) {
    if (!text || text.trim().length === 0) return
    // clamp length
    if (text.length > MAX_BUBBLE_LENGTH) text = text.slice(0, MAX_BUBBLE_LENGTH - 1) + '…'
    // send bubble
    try { app.send('say', text) } catch (e) {}
    // world chat record (so chat log also shows message)
    try {
      world.chat({ id: uuid(), from: config.name, fromId: app.instanceId, body: text, createdAt: world.getTimestamp() }, true)
    } catch (e) {}
    // mark user cooldowns
    if (targetUserId) markReplied(targetUserId)
    lastOutputAt = now()
  }
}

/* CLIENT: bubble UI + nametag + emote/look handling (keeps behavior from your examples) */
if (world.isClient) {
  const config = app.config || {}
  world.attach(vrm)

  // state readiness
  const state = app.state
  if (state?.ready) clientInit()
  else {
    world.remove(vrm)
    app.on('state', s => { if (s?.ready) clientInit() })
  }

  // create speech bubble - using uitext with styling (compact and reliable)
  const speechBubble = app.create('uitext')
  speechBubble.value = ''
  speechBubble.color = 'white'
  speechBubble.fontSize = 14
  speechBubble.backgroundColor = 'rgba(0,0,0,0.9)'
  speechBubble.padding = 12
  speechBubble.borderRadius = 10
  speechBubble.position.set(0, 2.4, 0)
  speechBubble.billboard = 'full'
  speechBubble.active = false
  speechBubble.maxWidth = 320
  speechBubble.textAlign = 'center'
  vrm.add(speechBubble)

  // name tag
  const nameTag = app.create('nametag')
  nameTag.label = config.name || 'WordMixer Curator'
  nameTag.position.y = 2.0
  vrm.add(nameTag)

  function clientInit() {
    world.add(vrm)
    const idleEmote = config.emote0?.url
    if (idleEmote && vrm) vrm.setEmote(idleEmote)
  }

  // timers and look tracking
  const timers = { bubble: 0, emote: 0, look: 0 }
  let currentLookTarget = null

  // event handlers from server
  app.on('say', text => {
    if (!text) return
    // show bubble and hide nametag while talking
    speechBubble.value = text
    speechBubble.active = true
    nameTag.active = false
    // set bubble timer scaled by text length
    const seconds = clamp(Math.ceil(text.length / 18), BUBBLE_TIME, BUBBLE_TIME + 8)
    timers.bubble = seconds
  })
  app.on('emote', url => {
    if (vrm && url) {
      try { vrm.setEmote(url) } catch (e) {}
      timers.emote = EMOTE_TIME
    }
  })
  app.on('look', playerId => {
    currentLookTarget = playerId
    timers.look = LOOK_TIME
  })

  // update loop: manage timers, look & emote reset
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
        if (idleEmote && vrm) try { vrm.setEmote(idleEmote) } catch(e) {}
      }
    }
    // look behavior (smooth slerp)
    if (timers.look > 0 && currentLookTarget) {
      const target = world.getPlayer(currentLookTarget)
      if (target && vrm) {
        const direction = v1.copy(target.position).sub(vrm.position)
        direction.y = 0
        if (direction.length() > 0.001) {
          direction.normalize()
          const angle = Math.atan2(direction.x, direction.z)
          const targetQuat = new Quaternion().setFromAxisAngle(UP, angle + Math.PI)
          vrm.quaternion.slerp(targetQuat, delta * 3)
        }
      }
      timers.look -= delta
      if (timers.look <= 0) currentLookTarget = null
    }
  })
}

/* CONFIG UI */
app.configure(() => {
  return [
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
  ]
})

/* END OF FILE */
