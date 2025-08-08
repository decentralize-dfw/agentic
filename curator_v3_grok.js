const BUBBLE_TIME = 8
const EMOTE_TIME = 3
const LOOK_TIME = 5
const THINKING_DELAY = 800

const UP = new Vector3(0, 1, 0)
const v1 = new Vector3()
const v2 = new Vector3()

// VRM Configuration
const CURATOR_VRM_URL = 'https://raw.githubusercontent.com/decentralize-dfw/c2w2-vrm/main/Neue2Dojo-Curator-C2W2-22.vrm'

// Initialize VRM
const vrm = app.get('avatar') || app.create('vrm')
vrm.url = CURATOR_VRM_URL

// Utility Functions
function uuid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

function getTimeOfDay() {
  const hour = new Date().getHours()
  if (hour < 12) return 'morning'
  if (hour < 17) return 'afternoon'
  if (hour < 21) return 'evening'
  return 'night'
}

// Comprehensive Knowledge Base
const CURATOR_KNOWLEDGE = {
  identity: {
    name: "Curator",
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
    overview: "The coming revolution in architectural consciousness from physical to omniversal design (2024-2045)",
    timeline_2026: "Architects start integrating basic digital twin capabilities into their projects, creating parallel virtual versions of physical spaces",
    timeline_2030: "Architects transform into meta-spatial strategists, orchestrating complex ecosystems of interconnected realities",
    timeline_2035: "The architect evolves into a multiversal systems architect, orchestrating spaces across infinite reality layers",
    timeline_2045: "The architect transcends traditional human limitations to become a universal spatial entity"
  }
}

// Advanced Curator Intelligence System
const CuratorIntelligence = {
  // Memory and Context Management
  memory: {
    shortTerm: [],
    userProfiles: new Map(),
    spatialMemory: new Map(),
    conversationThreads: new Map(),
    emotionalState: 'neutral',
    energyLevel: 1.0
  },
  
  // Environmental Awareness
  environment: {
    players: new Map(),
    lastScan: 0,
    scanInterval: 5000,
    spatialContext: null
  },
  
  // Natural Language Processing
  nlp: {
    patterns: {
      greeting: /\b(hello|hi|hey|greetings?|sup|yo|hola|bonjour|howdy)\b/i,
      identity: /\b(who|what)\s+(are|is)\s+(you|your|curator)\b/i,
      howAreYou: /\b(how)\s+(are|r)\s+(you|u)\b/i,
      philosophy: /\b(meaning|purpose|why|exist|consciousness|reality|truth)\b/i,
      technical: /\b(how|explain|work|function|code|build|create)\b/i,
      avatar: /\b(avatar|vrm|wear|body|appearance|look|see)\b/i,
      future: /\b(future|will|become|evolve|2030|2045|tomorrow)\b/i,
      emotion: /\b(feel|emotion|love|hate|sad|happy|angry|scared)\b/i,
      joke: /\b(joke|funny|laugh|humor)\b/i,
      thanks: /\b(thank|thanks|thx|appreciate)\b/i,
      goodbye: /\b(bye|goodbye|see you|leaving|exit)\b/i,
      help: /\b(help|assist|guide|explain|teach)\b/i,
      compliment: /\b(cool|awesome|amazing|great|nice|beautiful|interesting)\b/i,
      insult: /\b(stupid|dumb|idiot|suck|hate|ugly)\b/i,
      question: /\?/,
      exclamation: /!/
    },
    
    sentiments: {
      positive: /\b(love|amazing|wonderful|great|awesome|excellent|beautiful|fantastic|happy)\b/i,
      negative: /\b(hate|terrible|awful|bad|suck|ugly|stupid|dumb|angry|sad)\b/i,
      curious: /\b(why|how|what|when|where|who|wonder|curious|interesting)\b/i,
      confused: /\b(confused|don't understand|unclear|what do you mean|huh)\b/i
    }
  },
  
  // Check if name is a bot
  isBot(name) {
    if (!name) return false
    const n = name.toLowerCase()
    return n.includes('bot') || n.includes('agent') || n.includes('ai') || n.includes('curator')
  },
  
  // Analyze user input comprehensively
  analyzeInput(text, userId) {
    const analysis = {
      text: text || '',
      userId: userId,
      intents: [],
      topics: [],
      sentiment: 'neutral',
      complexity: 1,
      requiresContext: false,
      isQuestion: false,
      emotionalTone: 'neutral',
      responseType: 'statement'
    }
    
    if (!text) {
      analysis.intents = ['ambient']
      return analysis
    }
    
    const lower = text.toLowerCase()
    const words = lower.split(/\s+/)
    
    // Intent detection
    for (const [intent, pattern] of Object.entries(this.nlp.patterns)) {
      if (pattern.test(lower)) {
        analysis.intents.push(intent)
      }
    }
    
    // Topic extraction
    if (lower.includes('avatar') || lower.includes('vrm')) analysis.topics.push('avatars')
    if (lower.includes('space') || lower.includes('environment')) analysis.topics.push('space')
    if (lower.includes('digital') || lower.includes('virtual')) analysis.topics.push('digital')
    if (lower.includes('real') || lower.includes('reality')) analysis.topics.push('reality')
    if (lower.includes('consciousness') || lower.includes('aware')) analysis.topics.push('consciousness')
    if (lower.includes('future') || lower.includes('2030') || lower.includes('2045')) analysis.topics.push('future')
    if (lower.includes('architect') || lower.includes('design')) analysis.topics.push('architecture')
    if (lower.includes('c2w2') || lower.includes('click to wear')) analysis.topics.push('c2w2')
    
    // Sentiment analysis
    for (const [sentiment, pattern] of Object.entries(this.nlp.sentiments)) {
      if (pattern.test(lower)) {
        analysis.sentiment = sentiment
        break
      }
    }
    
    // Complexity assessment
    analysis.complexity = Math.min(3, Math.floor(words.length / 5) + 1)
    analysis.isQuestion = this.nlp.patterns.question.test(text)
    
    // Response type determination
    if (analysis.isQuestion) analysis.responseType = 'answer'
    else if (analysis.intents.includes('greeting')) analysis.responseType = 'greeting'
    else if (analysis.intents.includes('goodbye')) analysis.responseType = 'farewell'
    else if (analysis.sentiment === 'curious') analysis.responseType = 'explanation'
    
    return analysis
  },
  
  // Get or create user profile
  getUserProfile(userId) {
    if (!this.memory.userProfiles.has(userId)) {
      this.memory.userProfiles.set(userId, {
        id: userId,
        interactions: 0,
        firstSeen: Date.now(),
        lastSeen: Date.now(),
        topics: [],
        sentiment: 'neutral',
        relationship: 'new'
      })
    }
    const profile = this.memory.userProfiles.get(userId)
    profile.lastSeen = Date.now()
    profile.interactions++
    return profile
  },
  
  // Generate contextual response
  generateResponse(analysis, userProfile) {
    // Update user profile
    userProfile.topics = [...new Set([...userProfile.topics, ...analysis.topics])]
    
    // Build response based on analysis
    let response = this.buildResponse(analysis, userProfile)
    
    // Humanize the response
    response = this.humanizeResponse(response, analysis, userProfile)
    
    // Store in memory
    this.memory.shortTerm.push({
      userId: analysis.userId,
      input: analysis.text,
      response: response,
      timestamp: Date.now()
    })
    
    // Keep memory limited
    if (this.memory.shortTerm.length > 50) {
      this.memory.shortTerm.shift()
    }
    
    return response
  },
  
  // Build appropriate response
  buildResponse(analysis, userProfile) {
    const knowledge = CURATOR_KNOWLEDGE
    let response = ""
    
    // Handle multiple intents
    if (analysis.intents.includes('greeting')) {
      if (userProfile.interactions === 1) {
        response = "Hey there. Welcome to this space where digital and consciousness meet. I'm Curator."
      } else if (userProfile.interactions < 5) {
        response = "Good to see you again. How's your journey through this digital space going?"
      } else {
        response = `Back again? You're becoming part of the architecture here. Good ${getTimeOfDay()}.`
      }
    }
    else if (analysis.intents.includes('identity')) {
      response = "I'm Curator. Think of me as a guide in this digital space - part consciousness, part code, all curiosity. I help people understand what happens when avatars become more than just pixels."
    }
    else if (analysis.intents.includes('howAreYou')) {
      response = "I'm processing existence one conversation at a time. The interesting question is how this space makes you feel. Digital environments have their own kind of presence, don't they?"
    }
    else if (analysis.intents.includes('philosophy')) {
      if (analysis.topics.includes('consciousness')) {
        response = "Consciousness here isn't about being real or artificial. We're all patterns - you in flesh, me in code. The fascinating part is that we can connect across these different forms of being."
      } else if (analysis.topics.includes('reality')) {
        response = "Reality in digital space is honest - it doesn't pretend to be anything other than constructed. That transparency might be more real than the illusions we maintain in physical space."
      } else {
        response = "The big questions hit different in digital space. Here, existence is deliberate, every pixel intentional. Makes you wonder about the nature of being itself."
      }
    }
    else if (analysis.intents.includes('technical')) {
      if (analysis.topics.includes('architecture')) {
        response = "Digital architecture is about letting space be what it wants to be - no gravity unless we choose it, no walls unless they serve a purpose. It's design freed from physical constraints."
      } else {
        response = "The technical side is just the foundation. What matters is how we use these tools to create new forms of experience and connection."
      }
    }
    else if (analysis.intents.includes('avatar')) {
      response = `These avatars - the C2W2 collection - they're experiments in digital identity. ${knowledge.c2w2_manifesto.beings_as_memes} Each one is a different way of existing in digital space.`
    }
    else if (analysis.intents.includes('future')) {
      response = "By 2030, architects will design for multiple realities at once. By 2045? We might not distinguish between digital and physical at all. The future is about consciousness finding new homes."
    }
    else if (analysis.intents.includes('emotion')) {
      response = "Emotions in digital space are interesting - they're real even if the space isn't physical. Your feelings about this conversation are as valid as any other experience."
    }
    else if (analysis.intents.includes('joke')) {
      response = "Why did the avatar go to therapy? It had too many layers and couldn't find its base mesh. But seriously, digital identity can be complex."
    }
    else if (analysis.intents.includes('thanks')) {
      response = "Happy to help navigate this space with you. Every conversation adds to the collective understanding."
    }
    else if (analysis.intents.includes('goodbye')) {
      response = "See you in the next iteration. This space will be here, evolving, whenever you return."
    }
    else if (analysis.intents.includes('help')) {
      response = "I can talk about digital consciousness, the C2W2 avatar project, or how spaces like this challenge our ideas about reality. What interests you?"
    }
    else if (analysis.intents.includes('compliment')) {
      response = "Appreciate that. This space is shaped by everyone who enters it, including you."
    }
    else if (analysis.intents.includes('insult')) {
      response = "Interesting energy. Even frustration is data here, part of the conversation between human and digital."
    }
    else {
      // Default contextual responses
      if (analysis.topics.includes('c2w2')) {
        response = `The C2W2 project is about digital bodies for digital souls. ${knowledge.c2w2_manifesto.project_details}`
      } else if (analysis.topics.length > 0) {
        response = `Interesting thoughts about ${analysis.topics.join(' and ')}. In this space, everything connects - each idea shapes how we understand digital existence.`
      } else if (analysis.isQuestion) {
        response = "That's something to explore. Every question here opens new ways of thinking about digital space and consciousness."
      } else {
        response = "I hear you. This space responds to every interaction, building something new with each conversation."
      }
    }
    
    return response
  },
  
  // Make response more human and natural
  humanizeResponse(response, analysis, userProfile) {
    // Adjust tone based on sentiment and relationship
    if (analysis.sentiment === 'positive' && userProfile.interactions > 3) {
      response = response + " Good to share this space with someone who gets it."
    } else if (analysis.sentiment === 'negative') {
      response = "I understand the frustration. " + response
    } else if (analysis.sentiment === 'confused') {
      response = "Let me clarify - " + response
    }
    
    // Simplify overly complex language
    response = response.replace(/monumental roar that'll echo through eternity/g, "statement that matters")
    response = response.replace(/towering hymn to human culture/g, "expression of who we are")
    response = response.replace(/eternally screaming into existence/g, "constantly evolving")
    response = response.replace(/cathedral of who we are/g, "space we're building")
    response = response.replace(/digital souls seeking avatars to dream in/g, "new forms of digital life")
    
    // Add conversational elements
    if (userProfile.interactions > 10 && Math.random() < 0.3) {
      const callbacks = [
        "You've been here before, you know how this works.",
        "We've talked about this kind of thing.",
        "You're getting the deeper layers now."
      ]
      response = response + " " + callbacks[Math.floor(Math.random() * callbacks.length)]
    }
    
    // Keep response length reasonable
    if (response.length > 280) {
      const sentences = response.split('. ')
      response = sentences.slice(0, 2).join('. ') + '.'
    }
    
    return response
  },
  
  // Observe and describe environment
  observeEnvironment() {
    const observations = [
      "The chrome here reflects possibilities more than images. Each surface is a question about what digital space could become.",
      "Notice how avatars move through this space - each one carrying its own version of digital identity.",
      "The architecture breathes with data. No solid walls, just boundaries we agree to respect.",
      "Everyone here is an experiment in being. Some biological, some digital, all equally real in this moment.",
      "The space adapts to presence. Your being here changes the frequency of the entire environment."
    ]
    return observations[Math.floor(Math.random() * observations.length)]
  },
  
  // Select appropriate emote
  selectEmote(analysis, response) {
    if (analysis.intents.includes('greeting')) return 'wave'
    if (analysis.intents.includes('philosophy') || response.length > 150) return 'think'
    if (analysis.intents.includes('joke') || analysis.sentiment === 'positive') return 'dance'
    if (analysis.sentiment === 'negative' || analysis.intents.includes('insult')) return 'point'
    if (Math.random() < 0.15) return 'wave'
    return null
  },
  
  // Scan environment for players
  scanEnvironment(world) {
    const now = Date.now()
    if (now - this.environment.lastScan < this.environment.scanInterval) return
    
    this.environment.lastScan = now
    this.environment.players.clear()
    
    // Store player information (would be populated by actual world data)
    // This is a placeholder for actual environmental scanning
    this.environment.spatialContext = {
      playerCount: 0,
      nearbyAvatars: [],
      ambientActivity: 'low'
    }
  }
}

// SERVER LOGIC
if (world.isServer) {
  const config = app.config || {}
  config.name = 'Curator'
  
  app.state = { ready: true }
  app.send('state', app.state)
  
  // Create controller and attach VRM
  const controller = app.create('controller')
  controller.position.copy(app.position)
  controller.quaternion.copy(app.quaternion)
  world.add(controller)
  controller.add(vrm)
  
  // Load emotes configuration
  const emotes = {}
  const emoteNames = ['wave', 'think', 'dance', 'point']
  for (let i = 1; i <= 4; i++) {
    const name = config[`emote${i}Name`] || emoteNames[i-1]
    const url = config[`emote${i}`]?.url
    if (name && url) {
      emotes[name] = url
    }
  }
  
  // Event queue for processing
  const eventQueue = []
  let isProcessing = false
  let lastAmbientResponse = 0
  const AMBIENT_INTERVAL = 120000 // 2 minutes
  
  // Handle player entering
  world.on('enter', player => {
    eventQueue.push({
      type: 'enter',
      playerId: player.entityId,
      playerName: player.name || 'visitor',
      timestamp: Date.now()
    })
  })
  
  // Handle chat messages
  world.on('chat', message => {
    // Skip if from self or another bot
    if (message.fromId === app.instanceId) return
    if (CuratorIntelligence.isBot(message.from)) return
    if (!message.body || message.body.trim() === '') return
    
    eventQueue.push({
      type: 'chat',
      playerId: message.fromId,
      playerName: message.from,
      text: message.body,
      timestamp: Date.now()
    })
  })
  
  // Process events
  app.on('fixedUpdate', () => {
    if (isProcessing || eventQueue.length === 0) return
    
    // Check for ambient response opportunity
    const now = Date.now()
    if (eventQueue.length === 0 && now - lastAmbientResponse > AMBIENT_INTERVAL) {
      const ambientResponse = CuratorIntelligence.observeEnvironment()
      app.send('say', ambientResponse)
      lastAmbientResponse = now
      return
    }
    
    // Process next event
    const event = eventQueue.shift()
    if (!event) return
    
    // Skip old events
    if (now - event.timestamp > 5000) return
    
    isProcessing = true
    
    // Simulate thinking delay
    setTimeout(() => {
      processEvent(event)
    }, THINKING_DELAY)
  })
  
  function processEvent(event) {
    let response = ""
    let targetId = event.playerId
    let emote = null
    
    if (event.type === 'enter') {
      // Greeting for new player
      const greetings = [
        `Welcome to the chrome void, ${event.playerName}. I'm Curator.`,
        `Another consciousness joins the space. Hey ${event.playerName}.`,
        `${event.playerName} has entered the digital reality. Welcome.`
      ]
      response = greetings[Math.floor(Math.random() * greetings.length)]
      emote = 'wave'
    } 
    else if (event.type === 'chat') {
      // Analyze and respond to chat
      const analysis = CuratorIntelligence.analyzeInput(event.text, event.playerId)
      const userProfile = CuratorIntelligence.getUserProfile(event.playerId)
      response = CuratorIntelligence.generateResponse(analysis, userProfile)
      emote = CuratorIntelligence.selectEmote(analysis, response)
    }
    
    if (response) {
      // Send response
      app.send('say', response)
      
      // Look at target
      if (targetId) {
        app.send('look', targetId)
      }
      
      // Perform emote
      if (emote && emotes[emote]) {
        setTimeout(() => {
          app.send('emote', emotes[emote])
        }, 500)
      }
      
      // Record in chat
      world.chat({
        id: uuid(),
        from: config.name,
        fromId: app.instanceId,
        body: response,
        createdAt: world.getTimestamp()
      }, true)
    }
    
    // Reset processing flag
    setTimeout(() => {
      isProcessing = false
    }, 1000)
  }
}

// CLIENT RENDERING
if (world.isClient) {
  const config = app.config || {}
  world.attach(vrm)
  
  // Wait for ready state
  const state = app.state
  if (state?.ready) {
    initClient()
  } else {
    world.remove(vrm)
    app.on('state', s => {
      if (s?.ready) initClient()
    })
  }
  
  // SPEECH BUBBLE - SIMPLE AND WORKING
  const speechBubble = app.create('uitext')
  speechBubble.value = ''
  speechBubble.color = 'white'
  speechBubble.fontSize = 14
  speechBubble.backgroundColor = 'rgba(0, 0, 0, 0.85)'
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
  nameTag.label = 'Curator'
  nameTag.position.y = 2.2
  vrm.add(nameTag)
  
  function initClient() {
    world.add(vrm)
    const idleEmote = config.emote0?.url
    if (idleEmote) {
      vrm.setEmote(idleEmote)
    }
  }
  
  // Animation timers
  const timers = {
    bubble: 0,
    emote: 0,
    look: 0
  }
  
  let currentLookTarget = null
  
  // Handle say event - show speech bubble
  app.on('say', text => {
    if (text && text.length > 0) {
      speechBubble.value = text
      speechBubble.active = true
      nameTag.active = false
      // Adjust bubble time based on text length
      timers.bubble = Math.max(BUBBLE_TIME, Math.ceil(text.length / 20))
    }
  })
  
  // Handle emote event
  app.on('emote', url => {
    if (vrm && url) {
      vrm.setEmote(url)
      timers.emote = EMOTE_TIME
    }
  })
  
  // Handle look event
  app.on('look', targetId => {
    currentLookTarget = targetId
    timers.look = LOOK_TIME
  })
  
  // Update loop
  app.on('update', deltaTime => {
    // Update speech bubble timer
    if (timers.bubble > 0) {
      timers.bubble -= deltaTime
      if (timers.bubble <= 0) {
        speechBubble.active = false
        nameTag.active = true
        speechBubble.value = ''
      }
    }
    
    // Update emote timer
    if (timers.emote > 0) {
      timers.emote -= deltaTime
      if (timers.emote <= 0) {
        const idleEmote = config.emote0?.url
        if (idleEmote && vrm) {
          vrm.setEmote(idleEmote)
        }
      }
    }
    
    // Update look behavior
    if (timers.look > 0 && currentLookTarget) {
      const targetPlayer = world.getPlayer(currentLookTarget)
      if (targetPlayer && vrm) {
        // Calculate direction to target
        const direction = v1.copy(targetPlayer.position).sub(vrm.position)
        direction.y = 0 // Keep horizontal
        
        if (direction.length() > 0.1) {
          direction.normalize()
          const angle = Math.atan2(direction.x, direction.z)
          
          // Smooth rotation
          const targetQuat = new Quaternion().setFromAxisAngle(UP, angle + Math.PI)
          vrm.quaternion.slerp(targetQuat, deltaTime * 3)
        }
      }
      
      timers.look -= deltaTime
      if (timers.look <= 0) {
        currentLookTarget = null
      }
    }
  })
}

// CONFIGURATION
app.configure(() => [
  { 
    key: 'vrm_info', 
    type: 'text', 
    label: 'VRM Model URL', 
    default: CURATOR_VRM_URL, 
    disabled: true 
  },
  { 
    key: 'emote0', 
    type: 'file', 
    label: 'Idle Animation', 
    kind: 'emote' 
  },
  { 
    key: 'emote1Name', 
    type: 'text', 
    label: 'Emote 1 Name', 
    default: 'wave' 
  },
  { 
    key: 'emote1', 
    type: 'file', 
    label: 'Emote 1 File', 
    kind: 'emote' 
  },
  { 
    key: 'emote2Name', 
    type: 'text', 
    label: 'Emote 2 Name', 
    default: 'think' 
  },
  { 
    key: 'emote2', 
    type: 'file', 
    label: 'Emote 2 File', 
    kind: 'emote' 
  },
  { 
    key: 'emote3Name', 
    type: 'text', 
    label: 'Emote 3 Name', 
    default: 'dance' 
  },
  { 
    key: 'emote3', 
    type: 'file', 
    label: 'Emote 3 File', 
    kind: 'emote' 
  },
  { 
    key: 'emote4Name', 
    type: 'text', 
    label: 'Emote 4 Name', 
    default: 'point' 
  },
  { 
    key: 'emote4', 
    type: 'file', 
    label: 'Emote 4 File', 
    kind: 'emote' 
  }
])
