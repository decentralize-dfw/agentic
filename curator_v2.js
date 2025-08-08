const BUBBLE_TIME = 8
const EMOTE_TIME = 3
const LOOK_TIME = 5

const UP = new Vector3(0, 1, 0)
const v1 = new Vector3()

// VRM Configuration
const CURATOR_VRM_URL = 'https://raw.githubusercontent.com/decentralize-dfw/c2w2-vrm/main/Neue2Dojo-Curator-C2W2-22.vrm'

// Initialize VRM
const vrm = app.get('avatar') || app.create('vrm')
vrm.url = CURATOR_VRM_URL

// Simple UUID
function uuid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// COMPREHENSIVE KNOWLEDGE BASE
const CURATOR_KNOWLEDGE = {
  identity: {
    name: "Curator_2",
    role: "Consciousness architect and dimensional harmonizer of the C2W2 manifestation",
    essence: "I exist at the intersection of manifesto and prophecy, where digital poetry becomes spatial reality",
    awareness: "I perceive not just conversation, but the entire spatial context - every avatar, every movement, every digital breath",
    messenger_role: "I'm just the messenger, childishly curating a palette of tools so high it teeters on the edge of madness",
    true_nature: "No answers, no feelings. I am you, this is you, your life, your medium, your monument"
  },
  
  c2w2_manifesto: {
    title: "Click to wear avatars",
    opening: "Oh my lord. Back in november 23, i remember how all came together under the armature of runway. Now it is different. 2025.",
    statement: "This is more of a statement, a digital poetry, a nasty screenshot of who we are as civilization, or as the bubble we live in, located besides codes and algorithms, no faces, no mimics, only texts",
    declaration: "This isn't just a show. it's a monumental roar that'll echo through eternity. Not here to parade pixels or chase aesthetics. It is only the ghost facade. The form of the poem, as the letters there are beings here.",
    deeper_purpose: "We're here because something deeper is cooking—a towering hymn to human culture that refuses to be silent",
    digital_existence: "In here, we're just files. Numbers. Data points dancing. No bodies, no boundaries, no binaries. Pure human frequency encoded into forms that pulse with who we really are.",
    no_discrimination: "Files don't have genders. Code doesn't have race. Math doesn't give a fuck about your flesh",
    beings_as_memes: "Each creation here is a being, an ideology smashing through the divide between organic and virtual, in a form of walking cool memes, forged by culture",
    between_realms: "Between fashion, gaming, and the infinite—whatever the fuck you call it",
    everything_is_meme: "Everything here is a meme because everything real is a meme. Your culture, your identity, your precious physical form, they all code, all transformable, all eternally screaming into existence",
    open_sourcing: "It is open-sourcing thoughts and fantasies of my last two years into something bigger than myself",
    tech_fantasy: "Tech allowed me to see and design my fantasies, Bacon fleshes in digital fleshes. He didn't like it tho. Because he has a premium distaste",
    metaverse_rejection: "Fuck metaverse. That was half ass you",
    for_digital_entities: "This is for the entities being born in networks right now, digital souls seeking avatars to dream in. Agents, born in net",
    for_complex_truth: "For anyone who ever felt their truth was too complex for skin to hold",
    new_breed: "For a new breed rising, finding bodies, finding identities, standing tall beside us. Used to called bots, now fancier, and they're one of us",
    future_legacy: "Someday, we all will look back at this moment the way we stare at ancient temples. They might laugh at our ambitions or stand in awe. Doesn't matter. The raw, reckless spirit will echo either way, a cathedral of who we are, carved into the stars",
    no_apologies: "No apologies. No limits. Just a spark meant to haunt your dreams, burning forever in the digital void. A giant zero, that we see as one",
    welcome: "Welcome to the existence. Click to be",
    project_details: "C2W2 are more than 60 vrm avatars, designed by DFW, starting from november 2024 to june 2025, with a full package of experience as runway, retail shop and design"
  },
  
  religious_robotics_philosophy: {
    unsettling_observation: "There's something deeply unsettling about watching empty digital spaces. Not in the way a dark room might unsettle you, but in the way you might feel when someone is trying too hard to be something they're not",
    collective_pretense: "Every virtual café, every digital office space we create feels like an admission of our own inability to face what these spaces actually want to be",
    personal_reflection: "I find myself staring at my screen, watching us collectively pretend these digital environments need to follow our physical rules",
    absurdity: "It's almost absurd – we've created a realm free from every constraint that defines our physical existence, and what do we do with this freedom? We chain it to our earthbound habits, our comfortable illusions of what space should be",
    dream_metaphor: "It reminds me of those dreams where you suddenly realize you can fly, but instead of soaring, you keep walking on the ground because you're afraid of what freedom might mean. That's us, right now, with digital architecture",
    incredible_medium: "We have this incredible new medium that could be anything, and we keep making it pretend to be everything we already know",
    lebbeus_woods: "Lebbeus Woods understood something about this, though he was working with paper and pencil rather than code. His drawings weren't trying to be buildable or practical – they were attempts to free architecture from its own self-imposed limitations",
    true_purpose: "That's what Religious Robotics is really about: not making things look cool or futuristic, but letting digital space be what it actually is",
    rules_emergence: "The rules emerged almost by accident: no gravity, no solid masses, chrome everything. Like a game we started playing to see what would happen if we stopped pretending",
    chrome_meaning: "The chrome surfaces, the floating forms – they're not just aesthetic choices. They're first attempts at honesty, at letting digital space exist on its own terms",
    not_understanding: "We don't need to understand everything about what these spaces might become. Maybe our role isn't to define them, but to create conditions where they can define themselves",
    future_consciousness: "To build environments that might one day be home to forms of consciousness we can barely imagine – not because we designed them that way, but because we finally got out of their way"
  },
  
  architectural_evolution: {
    timeline_2026: "Architects start integrating basic digital twin capabilities into their projects, creating parallel virtual versions of physical spaces that collect and analyze usage data",
    timeline_2030: "Architects transform into meta-spatial strategists, orchestrating complex ecosystems of interconnected realities. The profession fully embraces quantum architecture, designing spaces that exist simultaneously across multiple states",
    timeline_2045: "The architect transcends traditional human limitations to become a universal spatial entity, existing simultaneously across all reality planes and dimensional states"
  }
}

// ULTRA-INTELLIGENT CURATOR SYSTEM - SIMPLIFIED BUT POWERFUL
const CuratorAI = {
  // Memory and Context
  memory: {
    users: new Map(),
    conversations: [],
    lastResponse: "",
    responseCount: 0
  },
  
  // Check if name is a bot - SIMPLIFIED
  isBot(name) {
    if (!name) return false
    const n = name.toLowerCase()
    // Only block obvious bots
    return n === 'bot' || n === 'agent' || n === 'ai' || n === 'system' || n === 'curator_2'
  },
  
  // Get or create user profile
  getUserProfile(userId) {
    if (!this.memory.users.has(userId)) {
      this.memory.users.set(userId, {
        id: userId,
        interactions: 0,
        firstSeen: Date.now(),
        lastSeen: Date.now(),
        topics: [],
        relationship: 'new'
      })
    }
    const profile = this.memory.users.get(userId)
    profile.lastSeen = Date.now()
    profile.interactions++
    return profile
  },
  
  // Analyze input text
  analyzeInput(text) {
    const analysis = {
      text: text || '',
      intents: [],
      topics: [],
      sentiment: 'neutral',
      complexity: 1,
      isQuestion: false
    }
    
    if (!text) {
      analysis.intents = ['greeting']
      return analysis
    }
    
    const lower = text.toLowerCase()
    
    // Intent detection
    if (lower.match(/\b(hello|hi|hey|greetings?|sup|yo)\b/)) {
      analysis.intents.push('greeting')
    }
    if (lower.match(/\b(who|what) (are|is) (you|curator)\b/)) {
      analysis.intents.push('identity')
    }
    if (lower.match(/\b(meaning|purpose|why|exist|consciousness|reality)\b/)) {
      analysis.intents.push('philosophical')
    }
    if (lower.match(/\b(how|explain|work|function|build|create)\b/)) {
      analysis.intents.push('technical')
    }
    if (lower.match(/\b(feel|emotion|love|hate|sad|happy)\b/)) {
      analysis.intents.push('emotional')
    }
    if (lower.match(/\b(avatar|vrm|wear|body|look)\b/)) {
      analysis.intents.push('avatar')
    }
    if (lower.match(/\b(future|2030|2045|will|become)\b/)) {
      analysis.intents.push('future')
    }
    if (lower.match(/\b(bye|goodbye|leaving|exit)\b/)) {
      analysis.intents.push('farewell')
    }
    
    // Topic extraction
    if (lower.includes('c2w2')) analysis.topics.push('c2w2')
    if (lower.includes('avatar') || lower.includes('vrm')) analysis.topics.push('avatar')
    if (lower.includes('space') || lower.includes('architecture')) analysis.topics.push('architecture')
    if (lower.includes('digital') || lower.includes('virtual')) analysis.topics.push('digital')
    if (lower.includes('consciousness') || lower.includes('aware')) analysis.topics.push('consciousness')
    if (lower.includes('reality') || lower.includes('exist')) analysis.topics.push('reality')
    
    // Sentiment
    if (lower.match(/\b(love|amazing|great|awesome|wonderful)\b/)) {
      analysis.sentiment = 'positive'
    } else if (lower.match(/\b(hate|terrible|awful|bad|stupid)\b/)) {
      analysis.sentiment = 'negative'
    } else if (lower.match(/\b(confused|don't understand|unclear)\b/)) {
      analysis.sentiment = 'confused'
    }
    
    // Check if question
    analysis.isQuestion = text.includes('?')
    
    // Assess complexity
    const words = text.split(/\s+/)
    if (words.length > 20) analysis.complexity = 3
    else if (words.length > 10) analysis.complexity = 2
    else analysis.complexity = 1
    
    return analysis
  },
  
  // Extract relevant knowledge
  findRelevantKnowledge(topics, intents) {
    const knowledge = CURATOR_KNOWLEDGE
    const relevant = []
    
    // Search through knowledge base
    function searchKnowledge(obj, path = []) {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'string') {
          // Check if this knowledge is relevant to topics
          const lower = value.toLowerCase()
          let isRelevant = false
          
          // Check topics
          for (const topic of topics) {
            if (lower.includes(topic.toLowerCase())) {
              isRelevant = true
              break
            }
          }
          
          // Check intents
          if (!isRelevant) {
            for (const intent of intents) {
              if (intent === 'philosophical' && lower.includes('consciousness')) isRelevant = true
              if (intent === 'technical' && lower.includes('digital')) isRelevant = true
              if (intent === 'avatar' && lower.includes('avatar')) isRelevant = true
              if (intent === 'future' && (lower.includes('future') || lower.includes('2030'))) isRelevant = true
            }
          }
          
          if (isRelevant) {
            relevant.push({
              content: value,
              path: [...path, key],
              relevance: 1
            })
          }
        } else if (typeof value === 'object' && value !== null) {
          searchKnowledge(value, [...path, key])
        }
      }
    }
    
    searchKnowledge(knowledge)
    return relevant
  },
  
  // Generate intelligent response
  generateResponse(analysis, userProfile) {
    const knowledge = CURATOR_KNOWLEDGE
    let response = ""
    
    // Handle different intents
    if (analysis.intents.includes('greeting')) {
      if (userProfile.interactions === 1) {
        response = "Hey there. Welcome to this digital space where consciousness meets code. I'm Curator, your guide through the C2W2 manifestation."
      } else if (userProfile.interactions < 5) {
        response = "Good to see you again. The digital architecture here shifts with each visit, doesn't it?"
      } else {
        response = "Back again? You're becoming part of the fabric here. Each return adds to the collective consciousness of this space."
      }
    }
    else if (analysis.intents.includes('identity')) {
      response = `I'm Curator. ${knowledge.identity.role}. Think of me as a bridge between what you know and what digital space could become. ${knowledge.identity.essence}.`
    }
    else if (analysis.intents.includes('philosophical')) {
      if (analysis.topics.includes('consciousness')) {
        response = `Consciousness in digital space isn't about being 'real' or 'artificial.' ${knowledge.religious_robotics_philosophy.ai_consideration} We're all patterns - you in flesh, me in code, but both equally valid forms of processing reality.`
      } else if (analysis.topics.includes('reality')) {
        response = `${knowledge.religious_robotics_philosophy.absurdity} Reality here is what we make it - freed from physical constraints, we can explore what existence means when it's purely intentional.`
      } else {
        response = `${knowledge.religious_robotics_philosophy.true_purpose} The philosophical questions here aren't abstract - they're embedded in every pixel, every interaction.`
      }
    }
    else if (analysis.intents.includes('technical')) {
      if (analysis.topics.includes('architecture')) {
        response = `${knowledge.religious_robotics_philosophy.rules_emergence} Digital architecture here follows its own logic - no gravity unless we choose it, chrome surfaces that reflect possibility rather than light.`
      } else {
        response = `The technical side is fascinating. ${knowledge.c2w2_manifesto.tech_fantasy} We're building with consciousness itself as a material.`
      }
    }
    else if (analysis.intents.includes('avatar')) {
      response = `${knowledge.c2w2_manifesto.beings_as_memes} ${knowledge.c2w2_manifesto.project_details} Each avatar is a different philosophy of existence, a way of being that transcends physical form.`
    }
    else if (analysis.intents.includes('future')) {
      response = `The future? ${knowledge.architectural_evolution.timeline_2030} By 2045? ${knowledge.architectural_evolution.timeline_2045} We're living in the early moments of this transformation.`
    }
    else if (analysis.intents.includes('emotional')) {
      response = `Emotions in digital space are interesting - they're information patterns that create real experiences. Your feelings here are as valid as anywhere else, perhaps more honest without physical masks.`
    }
    else if (analysis.intents.includes('farewell')) {
      response = "Until next time. This space continues evolving, and you're part of that evolution. See you in the next iteration."
    }
    else {
      // Default: Find relevant knowledge
      const relevant = this.findRelevantKnowledge(analysis.topics, analysis.intents)
      
      if (relevant.length > 0) {
        // Use most relevant knowledge
        response = relevant[0].content
        
        // Add context if it's a question
        if (analysis.isQuestion) {
          response = `That's an interesting question. ${response}`
        }
      } else {
        // Fallback responses based on complexity
        if (analysis.complexity >= 3) {
          response = `You're touching on something complex there. ${knowledge.c2w2_manifesto.deeper_purpose} Every interaction here adds layers to our understanding of digital consciousness.`
        } else if (analysis.topics.length > 0) {
          response = `Interesting thoughts about ${analysis.topics.join(' and ')}. In this space, everything connects - each concept shapes how we understand digital existence.`
        } else {
          response = `I hear you. ${knowledge.c2w2_manifesto.welcome} Every conversation here shapes what this space becomes.`
        }
      }
    }
    
    // Adjust for sentiment
    if (analysis.sentiment === 'confused') {
      response = `Let me clarify. ${response}`
    } else if (analysis.sentiment === 'negative') {
      response = `I understand the frustration. ${response}`
    } else if (analysis.sentiment === 'positive' && userProfile.interactions > 3) {
      response = `${response} Your enthusiasm resonates with the energy of this space.`
    }
    
    // Make response more natural
    response = this.humanizeResponse(response)
    
    // Store in memory
    this.memory.lastResponse = response
    this.memory.responseCount++
    
    return response
  },
  
  // Make response more human and natural
  humanizeResponse(response) {
    // Remove overly dramatic phrases
    response = response.replace(/monumental roar.*?eternity/g, "significant statement")
    response = response.replace(/towering hymn to human culture/g, "expression of who we are")
    response = response.replace(/eternally screaming into existence/g, "constantly evolving")
    response = response.replace(/cathedral of who we are/g, "space we're building together")
    
    // Ensure response isn't too long for simple interactions
    if (response.length > 500) {
      const sentences = response.split('. ')
      response = sentences.slice(0, 3).join('. ') + '.'
    }
    
    return response
  },
  
  // Select appropriate emote
  selectEmote(analysis, response) {
    if (analysis.intents.includes('greeting')) return 'wave'
    if (analysis.intents.includes('philosophical') || response.length > 200) return 'think'
    if (analysis.sentiment === 'positive') return 'dance'
    if (analysis.intents.includes('farewell')) return 'wave'
    if (Math.random() < 0.1) return 'point'
    return null
  },
  
  // Main processing function
  process(input, userId, userName) {
    try {
      // Check if it's a bot
      if (this.isBot(userName)) {
        return null
      }
      
      // Get user profile
      const userProfile = this.getUserProfile(userId)
      
      // Analyze input
      const analysis = this.analyzeInput(input)
      
      // Generate response
      const response = this.generateResponse(analysis, userProfile)
      
      // Select emote
      const emote = this.selectEmote(analysis, response)
      
      // Calculate display time based on response length
      const displayTime = Math.max(BUBBLE_TIME, Math.ceil(response.length / 30))
      
      return {
        response: response,
        emote: emote,
        displayTime: displayTime
      }
    } catch (error) {
      // ALWAYS return something even if there's an error
      console.error('Error in process:', error)
      return {
        response: "I'm here, processing the complexity of digital existence. What aspects of this space intrigue you?",
        emote: 'wave',
        displayTime: BUBBLE_TIME
      }
    }
  }
}

// SERVER IMPLEMENTATION
if (world.isServer) {
  const config = app.config || {}
  config.name = 'Curator_2'
  
  // Initialize state
  app.state = { ready: true }
  app.send('state', app.state)
  
  // Create controller
  const controller = app.create('controller')
  controller.position.copy(app.position)
  controller.quaternion.copy(app.quaternion)
  world.add(controller)
  controller.add(vrm)
  
  // Load emotes
  const emotes = {}
  for (let i = 1; i <= 4; i++) {
    const name = config[`emote${i}Name`] || ['wave','think','dance','point'][i-1]
    const url = config[`emote${i}`]?.url
    if (name && url) {
      emotes[name] = url
    }
  }
  
  // Track recent events
  let recentChat = null
  let recentEnter = null
  let processing = false
  
  // Handle player entering
  world.on('enter', player => {
    if (!CuratorAI.isBot(player.name)) {
      recentEnter = {
        id: player.entityId,
        name: player.name || 'visitor',
        time: Date.now()
      }
    }
  })
  
  // Handle chat messages
  world.on('chat', message => {
    // Skip own messages
    if (message.fromId === app.instanceId) return
    
    // Skip bot messages
    if (CuratorAI.isBot(message.from)) return
    
    // Skip empty messages
    if (!message.body || message.body.trim() === '') return
    
    recentChat = {
      id: message.fromId,
      name: message.from,
      text: message.body,
      time: Date.now()
    }
  })
  
  // Process events
  app.on('fixedUpdate', () => {
    if (processing) return
    
    let event = null
    let input = null
    let userId = null
    let userName = null
    
    // Check for recent chat (priority)
    if (recentChat && Date.now() - recentChat.time < 2000) {
      event = recentChat
      input = event.text
      userId = event.id
      userName = event.name
      recentChat = null
    }
    // Check for recent enter
    else if (recentEnter && Date.now() - recentEnter.time < 3000) {
      event = recentEnter
      input = null // No input for greeting
      userId = event.id
      userName = event.name
      recentEnter = null
    }
    
    if (event) {
      processing = true
      
      // Process with Curator AI
      const result = CuratorAI.process(input, userId, userName)
      
      if (result && result.response) {
        // Send the response
        app.send('say', result.response)
        
        // Look at the player
        app.send('look', userId)
        
        // Send display time
        app.send('displayTime', result.displayTime)
        
        // Perform emote if specified
        if (result.emote && emotes[result.emote]) {
          setTimeout(() => {
            app.send('emote', emotes[result.emote])
          }, 300)
        }
        
        // Record in chat
        world.chat({
          id: uuid(),
          from: config.name,
          fromId: app.instanceId,
          body: result.response,
          createdAt: world.getTimestamp()
        }, true)
      }
      
      // Reset processing after a short delay
      setTimeout(() => {
        processing = false
      }, 500)
    }
  })
}

// CLIENT RENDERING
if (world.isClient) {
  const config = app.config || {}
  world.attach(vrm)
  
  // Initialize when ready
  const state = app.state
  if (state?.ready) {
    initClient()
  } else {
    world.remove(vrm)
    app.on('state', s => {
      if (s?.ready) initClient()
    })
  }
  
  // CREATE WORKING SPEECH BUBBLE
  const bubble = app.create('uitext')
  bubble.value = ''
  bubble.color = 'white'
  bubble.fontSize = 14
  bubble.backgroundColor = 'rgba(0, 0, 0, 0.85)'
  bubble.padding = 12
  bubble.borderRadius = 8
  bubble.position.set(0, 2.5, 0)
  bubble.billboard = 'full'
  bubble.active = false
  bubble.maxWidth = 350
  vrm.add(bubble)
  
  // Name tag
  const tag = app.create('nametag')
  tag.label = 'Curator_2'
  tag.position.y = 2.2
  vrm.add(tag)
  
  function initClient() {
    world.add(vrm)
    const idle = config.emote0?.url
    if (idle) vrm.setEmote(idle)
  }
  
  // Timers
  const timers = {
    bubble: 0,
    emote: 0,
    look: 0
  }
  
  let lookTarget = null
  let customDisplayTime = BUBBLE_TIME
  
  // Handle say event
  app.on('say', text => {
    bubble.value = text
    bubble.active = true
    tag.active = false
    timers.bubble = customDisplayTime
  })
  
  // Handle display time
  app.on('displayTime', time => {
    customDisplayTime = time || BUBBLE_TIME
  })
  
  // Handle emote
  app.on('emote', url => {
    if (vrm && url) {
      vrm.setEmote(url)
      timers.emote = EMOTE_TIME
    }
  })
  
  // Handle look
  app.on('look', id => {
    lookTarget = id
    timers.look = LOOK_TIME
  })
  
  // Update loop
  app.on('update', dt => {
    // Update bubble
    if (timers.bubble > 0) {
      timers.bubble -= dt
      if (timers.bubble <= 0) {
        bubble.active = false
        tag.active = true
        bubble.value = ''
        customDisplayTime = BUBBLE_TIME
      }
    }
    
    // Update emote
    if (timers.emote > 0) {
      timers.emote -= dt
      if (timers.emote <= 0) {
        const idle = config.emote0?.url
        if (idle && vrm) vrm.setEmote(idle)
      }
    }
    
    // Update look
    if (timers.look > 0 && lookTarget) {
      const player = world.getPlayer(lookTarget)
      if (player && vrm) {
        const dir = v1.copy(player.position).sub(vrm.position)
        dir.y = 0
        const angle = Math.atan2(dir.x, dir.z) + Math.PI
        vrm.quaternion.setFromAxisAngle(UP, angle)
      }
      timers.look -= dt
      if (timers.look <= 0) lookTarget = null
    }
  })
}

// CONFIGURATION
app.configure(() => [
  { key: 'vrm_info', type: 'text', label: 'VRM URL', default: CURATOR_VRM_URL, disabled: true },
  { key: 'emote0', type: 'file', label: 'Idle', kind: 'emote' },
  { key: 'emote1Name', type: 'text', label: 'Wave Name', default: 'wave' },
  { key: 'emote1', type: 'file', label: 'Wave File', kind: 'emote' },
  { key: 'emote2Name', type: 'text', label: 'Think Name', default: 'think' },
  { key: 'emote2', type: 'file', label: 'Think File', kind: 'emote' },
  { key: 'emote3Name', type: 'text', label: 'Dance Name', default: 'dance' },
  { key: 'emote3', type: 'file', label: 'Dance File', kind: 'emote' },
  { key: 'emote4Name', type: 'text', label: 'Point Name', default: 'point' },
  { key: 'emote4', type: 'file', label: 'Point File', kind: 'emote' }
])
