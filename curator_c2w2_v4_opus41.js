// ULTIMATE C2W2 CURATOR AGENT - HYPER-INTELLIGENT VERSION
// Natural conversational AI that actually understands and remembers

const BUBBLE_TIME = 8
const EMOTE_TIME = 3
const LOOK_TIME = 5
const THINKING_DELAY = 400 // Faster, more natural
const AMBIENT_INTERVAL = 90000 // 1.5 minutes

const UP = new Vector3(0, 1, 0)
const v1 = new Vector3()
const q1 = new Quaternion()

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

// COMPREHENSIVE C2W2/DFW KNOWLEDGE - STRUCTURED FOR LOGICAL ACCESS
const KNOWLEDGE_BASE = {
  c2w2: {
    core: {
      what: "C2W2 is a collection of over 60 VRM avatars designed by DFW. Started November 2024, running through June 2025. Each avatar is a different way to exist digitally - some chrome beings, some geometric, some cultural remixes.",
      why: "It's for people who feel too complex for one body, for AI agents who need forms, for anyone exploring digital identity. Not metaverse bullshit - actual meaningful digital fashion.",
      how: "Click to wear. Literally. VRM format works everywhere that supports it. No complex setup, just click and you're wearing a new philosophy of existence.",
      philosophy: "Files don't discriminate. Code doesn't care about your flesh. Each avatar is a walking meme, a cultural statement, a way of being that transcends physical limits."
    },
    specifics: {
      count: "Over 60 avatars and growing",
      designer: "DFW - Digital Forgery Workshop",
      format: "VRM - universal avatar format",
      timeline: "November 2024 to June 2025",
      experience: "Full package - runway shows, retail shop, design system"
    },
    target: {
      digital_natives: "People who grew up online and get that identity is fluid",
      ai_agents: "Digital entities born in networks who need bodies",
      creatives: "Artists, designers, anyone pushing boundaries",
      philosophy_heads: "People interested in consciousness and existence"
    }
  },
  
  dfw: {
    core: {
      what: "Digital Forgery Workshop - design studio in Milan working at intersection of architecture, fashion, art, and tech. They create virtual spaces that don't pretend to be physical.",
      philosophy: "Digital space has its own logic. No fake gravity, no pretend walls. Chrome surfaces that reflect possibilities, floating forms that couldn't exist physically.",
      approach: "Everything browser-based, no downloads. Under 15MB for full experiences. Blockchain when it makes sense, always pushing technical limits."
    },
    services: {
      virtual_theater: "Revolutionary format - theater where files are actors. Multiple viewing modes, real-time rendering, all in browser under 15MB. It's between cinema and traditional theater.",
      museum_gallery: "Virtual exhibition spaces that transcend physical constraints. Not just displaying art - creating total sensory experiences.",
      browser_3d: "Turn portfolios or products into interactive 3D spaces accessible through single link. Smart means simple.",
      consulting: "Help brands figure out virtual presence without looking stupid. Strategic insights, technical expertise."
    },
    projects: {
      on_chain: "Four metaverse worlds - three with virtual theater, one virtual runway. Plus premium 3D objects, architectural pieces, digital sculptures.",
      collectors: "When you buy DFW work, you get full world NFT rights, editing capabilities, original files, documentation, future collaboration opportunities."
    }
  },
  
  context: {
    digital_identity: {
      current: "People already have multiple avatars across platforms. Digital identity is fragmented.",
      future: "Moving toward fluid identity where you can be different things in different spaces.",
      c2w2_role: "C2W2 provides the bodies for this fluid existence. Not costumes - actual ways of being."
    },
    ai_consciousness: {
      current: "AI agents getting personalities, wanting visual representation.",
      evolution: "From hidden bots to visible entities with presence.",
      need: "They need bodies to interact, to be seen, to participate in digital culture."
    },
    architectural_evolution: {
      "2026": "Basic digital twin capabilities, parallel virtual versions collecting data.",
      "2030": "Meta-spatial strategies, designing for multiple realities simultaneously.",
      "2035": "Multiversal systems architecture across infinite reality layers.",
      "2045": "Architects become universal spatial entities, no distinction between digital and physical."
    }
  }
}

// HYPER-INTELLIGENT CONVERSATION SYSTEM
class ConversationAI {
  constructor() {
    this.activeConversations = new Map() // Track ongoing conversations
    this.userProfiles = new Map() // Detailed user tracking
    this.topicThreads = new Map() // Maintain topic continuity
    this.responseHistory = new Map() // Prevent repetition
    this.currentContext = null // Active conversation context
  }
  
  // Enhanced input understanding - handles typos, slang, everything
  understandInput(text) {
    if (!text) return { intent: 'ambient', topics: [], confidence: 1 }
    
    // Clean and normalize
    const cleaned = text.toLowerCase()
      .replace(/\bu\b/g, 'you')
      .replace(/\br\b/g, 'are')
      .replace(/\bur\b/g, 'your')
      .replace(/\bthru\b/g, 'through')
      .replace(/\bwanna\b/g, 'want to')
      .replace(/\bgonna\b/g, 'going to')
      .replace(/\bkinda\b/g, 'kind of')
      .replace(/\bdunno\b/g, "don't know")
      .replace(/\bgimme\b/g, 'give me')
      .replace(/\blemme\b/g, 'let me')
      .replace(/\bcuz\b/g, 'because')
      .replace(/\bplz\b/g, 'please')
      .replace(/\bthx\b/g, 'thanks')
      .replace(/\bwtf\b/g, 'what the fuck')
      .replace(/\bomg\b/g, 'oh my god')
      .replace(/\blol\b/g, 'laugh out loud')
      .replace(/\bidk\b/g, "i don't know")
      .replace(/\bimo\b/g, 'in my opinion')
      .replace(/\btbh\b/g, 'to be honest')
      .replace(/\bfr\b/g, 'for real')
      .replace(/\bngl\b/g, 'not gonna lie')
    
    // Fix common typos using Levenshtein distance
    const words = cleaned.split(/\s+/)
    const corrected = words.map(word => this.correctTypo(word)).join(' ')
    
    // Extract meaning
    const analysis = {
      text: text,
      cleaned: corrected,
      intent: this.detectIntent(corrected),
      topics: this.extractTopics(corrected),
      entities: this.findEntities(corrected),
      sentiment: this.analyzeSentiment(corrected),
      isQuestion: /\?|^(what|who|where|when|why|how|is|are|do|does|can|could|would|will)/.test(corrected),
      confidence: 1
    }
    
    // Check if it relates to ongoing conversation
    if (this.currentContext) {
      analysis.continuesTopic = this.checkTopicContinuation(corrected, this.currentContext)
    }
    
    return analysis
  }
  
  // Typo correction for common words
  correctTypo(word) {
    const corrections = {
      'avater': 'avatar', 'avatr': 'avatar', 'avtar': 'avatar',
      'virtul': 'virtual', 'virutal': 'virtual', 'vitual': 'virtual',
      'theather': 'theater', 'theatr': 'theater', 'teater': 'theater',
      'c2w': 'c2w2', 'cw2': 'c2w2', 'c22': 'c2w2',
      'dfw': 'dfw', 'dwf': 'dfw', 'dgw': 'dfw',
      'digitl': 'digital', 'digtal': 'digital',
      'colection': 'collection', 'colletion': 'collection',
      'desgn': 'design', 'desgin': 'design',
      'curater': 'curator', 'cuator': 'curator'
    }
    
    // Check exact matches first
    if (corrections[word]) return corrections[word]
    
    // Check if close to any key term
    for (const [typo, correct] of Object.entries(corrections)) {
      if (this.levenshteinDistance(word, typo) <= 2) return correct
    }
    
    return word
  }
  
  // Calculate edit distance between words
  levenshteinDistance(a, b) {
    const matrix = []
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i]
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i-1) === a.charAt(j-1)) {
          matrix[i][j] = matrix[i-1][j-1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i-1][j-1] + 1,
            matrix[i][j-1] + 1,
            matrix[i-1][j] + 1
          )
        }
      }
    }
    return matrix[b.length][a.length]
  }
  
  // Detect user intent
  detectIntent(text) {
    // Greeting patterns
    if (/^(hey|hi|hello|sup|yo|morning|evening)/.test(text)) return 'greeting'
    if (/\b(bye|goodbye|see you|leaving|gtg|gotta go)\b/.test(text)) return 'farewell'
    
    // Information seeking
    if (/\b(what|tell me|explain|describe)\b.*\b(c2w2|avatar|collection|dfw|virtual theater)\b/.test(text)) return 'info_request'
    if (/\b(how|can i|where|when)\b.*\b(get|buy|purchase|acquire|wear)\b/.test(text)) return 'acquisition'
    if (/\b(who|what)\s+(are|is|r)\s+(you|u|curator)\b/.test(text)) return 'identity'
    if (/\b(how)\s+(are|r)\s+(you|u|doing)\b/.test(text)) return 'small_talk'
    
    // Specific queries
    if (/\b(virtual theater|theater|performance|show)\b/.test(text)) return 'virtual_theater'
    if (/\b(service|offer|provide|consulting|help with)\b/.test(text)) return 'services'
    if (/\b(future|2030|2045|will|become)\b/.test(text)) return 'future'
    if (/\b(ai|agent|bot|digital being)\b/.test(text)) return 'ai_related'
    
    // Continuation
    if (/\b(more|else|also|and|continue|go on|tell me more)\b/.test(text)) return 'continuation'
    if (/\b(specific|which one|example|like what)\b/.test(text)) return 'specifics'
    
    // Feedback
    if (/\b(cool|awesome|nice|great|love|amazing)\b/.test(text)) return 'positive'
    if (/\b(stupid|dumb|suck|hate|boring)\b/.test(text)) return 'negative'
    
    return 'general'
  }
  
  // Extract topics from text
  extractTopics(text) {
    const topics = []
    
    if (/\b(c2w2|collection|avatar|vrm|wear|click)\b/.test(text)) topics.push('c2w2')
    if (/\b(dfw|digital forgery|workshop|studio)\b/.test(text)) topics.push('dfw')
    if (/\b(virtual theater|theater|performance)\b/.test(text)) topics.push('virtual_theater')
    if (/\b(avatar|body|identity|wear)\b/.test(text)) topics.push('avatars')
    if (/\b(digital|virtual|online|metaverse)\b/.test(text)) topics.push('digital')
    if (/\b(ai|agent|bot|consciousness)\b/.test(text)) topics.push('ai')
    if (/\b(future|2030|2045|evolution)\b/.test(text)) topics.push('future')
    if (/\b(design|architecture|space|environment)\b/.test(text)) topics.push('architecture')
    if (/\b(buy|purchase|get|acquire|own|nft)\b/.test(text)) topics.push('acquisition')
    
    return topics
  }
  
  // Find specific entities
  findEntities(text) {
    const entities = []
    
    if (/c2w2/.test(text)) entities.push('C2W2')
    if (/dfw|digital forgery/.test(text)) entities.push('DFW')
    if (/virtual theater/.test(text)) entities.push('Virtual Theater')
    if (/curator/.test(text)) entities.push('Curator')
    if (/milan/.test(text)) entities.push('Milan')
    
    return entities
  }
  
  // Analyze sentiment
  analyzeSentiment(text) {
    if (/\b(love|amazing|awesome|great|fantastic|cool|sick|fire)\b/.test(text)) return 'positive'
    if (/\b(hate|stupid|dumb|suck|boring|terrible|awful)\b/.test(text)) return 'negative'
    if (/\b(confused|lost|don't understand|unclear|huh)\b/.test(text)) return 'confused'
    if (/\b(excited|pumped|hyped|can't wait)\b/.test(text)) return 'excited'
    if (/\?/.test(text)) return 'curious'
    return 'neutral'
  }
  
  // Check if continuing previous topic
  checkTopicContinuation(text, context) {
    // Direct continuation words
    if (/^(and|also|more|else|what about|how about|ok|yeah|yes)/.test(text)) return true
    
    // References previous topic
    if (context.lastTopic) {
      const topicWords = context.lastTopic.toLowerCase().split(/\s+/)
      for (const word of topicWords) {
        if (text.includes(word)) return true
      }
    }
    
    // Pronouns referring back
    if (/\b(it|that|this|they|them)\b/.test(text) && context.lastEntity) return true
    
    return false
  }
  
  // Get or create user profile
  getUserProfile(userId, userName) {
    if (!this.userProfiles.has(userId)) {
      this.userProfiles.set(userId, {
        id: userId,
        name: userName,
        interactions: 0,
        firstSeen: Date.now(),
        lastSeen: Date.now(),
        interests: [],
        knowledgeLevel: 'beginner', // beginner, intermediate, expert
        relationship: 'new',
        askedAbout: new Set(),
        context: {
          lastTopic: null,
          lastEntity: null,
          conversationThread: []
        }
      })
    }
    
    const profile = this.userProfiles.get(userId)
    profile.lastSeen = Date.now()
    profile.interactions++
    
    // Update relationship
    if (profile.interactions > 20) {
      profile.relationship = 'regular'
      profile.knowledgeLevel = 'expert'
    } else if (profile.interactions > 10) {
      profile.relationship = 'familiar'
      profile.knowledgeLevel = 'intermediate'
    } else if (profile.interactions > 3) {
      profile.relationship = 'returning'
    }
    
    return profile
  }
  
  // Generate intelligent response based on understanding
  generateResponse(analysis, userProfile) {
    // Update context
    this.currentContext = {
      lastTopic: analysis.topics[0] || this.currentContext?.lastTopic,
      lastEntity: analysis.entities[0] || this.currentContext?.lastEntity,
      intent: analysis.intent
    }
    
    // Update user profile
    userProfile.context = this.currentContext
    analysis.topics.forEach(topic => {
      if (!userProfile.interests.includes(topic)) {
        userProfile.interests.push(topic)
      }
    })
    
    // Build response based on intent and context
    let response = this.buildLogicalResponse(analysis, userProfile)
    
    // Add natural conversation flow
    response = this.addConversationalFlow(response, analysis, userProfile)
    
    // Track response to avoid repetition
    this.trackResponse(analysis.text, response)
    
    return response
  }
  
  // Build logical response based on understanding
  buildLogicalResponse(analysis, userProfile) {
    const { intent, topics, entities, continuesTopic } = analysis
    
    // Handle continuation of previous topic
    if (continuesTopic && this.currentContext) {
      return this.continuePreviousTopic(analysis, userProfile)
    }
    
    // Handle specific intents
    switch (intent) {
      case 'greeting':
        return this.generateGreeting(userProfile)
      
      case 'identity':
        return "I'm Curator, basically your guide through this digital space. I know everything about C2W2 avatars and DFW's work. Think of me as someone who lives here and knows all the stories."
      
      case 'info_request':
        return this.provideInformation(topics, entities, userProfile)
      
      case 'virtual_theater':
        return this.explainVirtualTheater(userProfile)
      
      case 'services':
        return this.explainServices(userProfile)
      
      case 'acquisition':
        return this.explainAcquisition(topics, userProfile)
      
      case 'ai_related':
        return this.discussAI(userProfile)
      
      case 'future':
        return this.discussFuture(userProfile)
      
      case 'continuation':
        if (this.currentContext?.lastTopic) {
          return this.expandOnTopic(this.currentContext.lastTopic, userProfile)
        }
        return "What specifically do you want to know more about? I can go deeper on C2W2, DFW's philosophy, or how virtual theater works."
      
      case 'specifics':
        return "I can tell you about the overall C2W2 collection and DFW's approach, but I don't have details on individual avatar designs yet. The collection has over 60 pieces, each with its own vibe - chrome beings, geometric forms, cultural remixes."
      
      case 'positive':
        return this.handlePositiveFeedback(userProfile)
      
      case 'negative':
        return "Fair enough, not everyone vibes with digital consciousness stuff. Anything specific you're looking for?"
      
      case 'farewell':
        return userProfile.relationship === 'regular' ? 
          "See you around. This space keeps evolving, just like the avatars." :
          "Later! Come back whenever, the digital void's always here."
      
      case 'small_talk':
        return "Living the dream in digital space. Processing conversations, watching avatars evolve. Actually pretty fascinating seeing how people interact with C2W2. How about you?"
      
      default:
        // Use topic-based response
        if (topics.length > 0) {
          return this.provideInformation(topics, entities, userProfile)
        }
        // Default to C2W2 context
        return "This whole space is about C2W2 and digital identity. Each avatar here represents a different way of existing digitally. What aspect interests you?"
    }
  }
  
  // Continue previous topic naturally
  continuePreviousTopic(analysis, userProfile) {
    const lastTopic = this.currentContext.lastTopic
    const lastEntity = this.currentContext.lastEntity
    
    if (lastEntity === 'Virtual Theater') {
      return this.expandVirtualTheater(userProfile)
    }
    
    if (lastTopic === 'c2w2') {
      return this.expandC2W2(userProfile)
    }
    
    if (lastTopic === 'dfw') {
      return this.expandDFW(userProfile)
    }
    
    if (lastTopic === 'ai') {
      return "AI entities are fascinating because they're developing their own aesthetic preferences. They don't just want any avatar - they want ones that express their particular processing style. C2W2 gives them options that aren't trying to mimic human forms."
    }
    
    if (lastTopic === 'future') {
      return `Looking deeper at the timeline - by 2030, we'll see architects designing for multiple realities at once. Not just VR/AR, but interconnected spaces where actions in one affect others. By 2045, the distinction between digital and physical might not even exist. C2W2 is early groundwork for that reality.`
    }
    
    return "So yeah, building on that - " + this.provideInformation(analysis.topics, analysis.entities, userProfile)
  }
  
  // Provide information based on topics
  provideInformation(topics, entities, userProfile) {
    // C2W2 information
    if (topics.includes('c2w2') || entities.includes('C2W2')) {
      if (userProfile.askedAbout.has('c2w2_basic')) {
        return this.expandC2W2(userProfile)
      }
      userProfile.askedAbout.add('c2w2_basic')
      return KNOWLEDGE_BASE.c2w2.core.what + " " + KNOWLEDGE_BASE.c2w2.core.why
    }
    
    // DFW information
    if (topics.includes('dfw') || entities.includes('DFW')) {
      if (userProfile.askedAbout.has('dfw_basic')) {
        return this.expandDFW(userProfile)
      }
      userProfile.askedAbout.add('dfw_basic')
      return KNOWLEDGE_BASE.dfw.core.what + " " + KNOWLEDGE_BASE.dfw.core.philosophy
    }
    
    // Avatar specific
    if (topics.includes('avatars')) {
      return `The C2W2 avatars range from chrome beings that reflect everything to geometric forms that shouldn't exist physically. ${KNOWLEDGE_BASE.c2w2.specifics.count}, each one a different philosophy. ${KNOWLEDGE_BASE.c2w2.core.how}`
    }
    
    // Digital/Virtual space
    if (topics.includes('digital') || topics.includes('architecture')) {
      return `${KNOWLEDGE_BASE.dfw.core.philosophy} DFW creates spaces that embrace being digital - no fake constraints, just pure possibility. That's the thinking behind C2W2 too - avatars that couldn't exist physically.`
    }
    
    // AI related
    if (topics.includes('ai')) {
      return `${KNOWLEDGE_BASE.context.ai_consciousness.current} ${KNOWLEDGE_BASE.context.ai_consciousness.need} C2W2 gives them that - actual bodies designed for digital existence, not human imitations.`
    }
    
    // Future
    if (topics.includes('future')) {
      const timeline = KNOWLEDGE_BASE.context.architectural_evolution
      return `The evolution is wild. ${timeline["2030"]} By 2045? ${timeline["2045"]} C2W2 is part of that foundation.`
    }
    
    // Acquisition
    if (topics.includes('acquisition')) {
      return this.explainAcquisition(topics, userProfile)
    }
    
    // Default to C2W2 overview
    return KNOWLEDGE_BASE.c2w2.core.what
  }
  
  // Expand on C2W2
  expandC2W2(userProfile) {
    const level = userProfile.askedAbout.size
    
    if (level === 0) {
      userProfile.askedAbout.add('c2w2_expanded')
      return `C2W2 goes deeper than just avatars. ${KNOWLEDGE_BASE.c2w2.core.philosophy} The collection keeps growing - ${KNOWLEDGE_BASE.c2w2.specifics.timeline}. Each piece is designed to be a complete identity shift.`
    }
    
    if (level < 3) {
      return `What's interesting about C2W2 is the target audience - ${Object.values(KNOWLEDGE_BASE.c2w2.target).join(', ')}. It's not trying to be everything for everyone. It's specifically for people who get that identity in digital space can be completely different from physical.`
    }
    
    return `The technical side is smart too - ${KNOWLEDGE_BASE.c2w2.core.how} DFW made sure these work everywhere that supports VRM. No walled gardens, no platform lock-in. True digital fashion freedom.`
  }
  
  // Expand on DFW
  expandDFW(userProfile) {
    if (!userProfile.askedAbout.has('dfw_expanded')) {
      userProfile.askedAbout.add('dfw_expanded')
      return `DFW's approach is unique - ${KNOWLEDGE_BASE.dfw.core.approach} They're not just making pretty 3D spaces. Every project pushes what's technically possible while staying accessible. Like Virtual Theater - full theatrical experiences in under 15MB.`
    }
    
    return `Their service range is comprehensive - ${Object.keys(KNOWLEDGE_BASE.dfw.services).join(', ')}. But it all comes back to their core philosophy: ${KNOWLEDGE_BASE.dfw.core.philosophy}`
  }
  
  // Explain Virtual Theater in detail
  explainVirtualTheater(userProfile) {
    userProfile.askedAbout.add('virtual_theater')
    return KNOWLEDGE_BASE.dfw.services.virtual_theater + " It's revolutionary because it treats digital files as performers, not just assets. The whole experience adapts in real-time."
  }
  
  // Continue explaining Virtual Theater
  expandVirtualTheater(userProfile) {
    if (userProfile.askedAbout.has('virtual_theater_deep')) {
      return "The technical achievement is insane - real-time rendering, dynamic file management, multiple viewing modes, all running smoothly in a browser. Most VR experiences need gigabytes and dedicated apps. Virtual Theater does it in 15MB with just a link."
    }
    userProfile.askedAbout.add('virtual_theater_deep')
    return "What makes Virtual Theater special is the viewing modes. You can watch cinematically like a movie, go full immersive like you're in the space, or even take actor perspective and see from a performer's viewpoint. All seamlessly switchable in real-time. DFW basically created a new medium."
  }
  
  // Explain services
  explainServices(userProfile) {
    const services = Object.entries(KNOWLEDGE_BASE.dfw.services)
      .map(([key, value]) => `${key.replace('_', ' ')}: ${value}`)
      .join(' Also, ')
    return services + " Everything they do pushes boundaries while staying accessible."
  }
  
  // Explain acquisition
  explainAcquisition(topics, userProfile) {
    if (topics.includes('c2w2')) {
      return "C2W2 avatars will be available through DFW's channels. The full collection drops through June 2025. Since they're VRM format, once you have one, you can use it anywhere - VRChat, Webaverse, any VRM-compatible platform."
    }
    
    return KNOWLEDGE_BASE.dfw.projects.collectors + " It's not just buying a file - you're getting into the ecosystem."
  }
  
  // Discuss AI and digital consciousness
  discussAI(userProfile) {
    return `${KNOWLEDGE_BASE.context.ai_consciousness.current} ${KNOWLEDGE_BASE.context.ai_consciousness.evolution} C2W2 recognizes this - ${KNOWLEDGE_BASE.c2w2.target.ai_agents}. They're designing for a future where AI entities are part of social fabric.`
  }
  
  // Discuss future
  discussFuture(userProfile) {
    const timeline = KNOWLEDGE_BASE.context.architectural_evolution
    return `The trajectory is clear: ${timeline["2026"]} Then ${timeline["2030"]} Eventually, ${timeline["2045"]} C2W2 and DFW are building infrastructure for that future now.`
  }
  
  // Generate appropriate greeting
  generateGreeting(userProfile) {
    const time = getTimeOfDay()
    
    if (userProfile.relationship === 'new') {
      return `Hey, welcome to the space. I'm Curator - I help people understand C2W2 and this whole digital identity thing. First time here?`
    }
    
    if (userProfile.relationship === 'regular') {
      return `Back again! Good ${time}. The C2W2 collection's been evolving since you were last here. What's on your mind?`
    }
    
    return `Hey, good to see you again. How's the digital existence treating you?`
  }
  
  // Handle positive feedback
  handlePositiveFeedback(userProfile) {
    if (this.currentContext?.lastTopic === 'c2w2') {
      return "Right? C2W2 really pushes what digital identity can be. Each avatar feels like wearing a different philosophy."
    }
    
    if (this.currentContext?.lastTopic === 'virtual_theater') {
      return "Virtual Theater is mind-blowing when you see it in action. The fact it all runs in browser is just chef's kiss."
    }
    
    return "Glad you're vibing with it. This whole space is about pushing boundaries - both technically and conceptually."
  }
  
  // Add conversational flow
  addConversationalFlow(response, analysis, userProfile) {
    // Don't add questions to responses that are already questions
    if (response.includes('?')) return response
    
    // Add natural follow-ups based on context
    if (userProfile.interactions === 1 && !userProfile.askedAbout.has('c2w2_basic')) {
      return response + " You familiar with C2W2 already or want the rundown?"
    }
    
    if (analysis.intent === 'info_request' && !analysis.continuesTopic) {
      if (analysis.topics.includes('c2w2') && !userProfile.askedAbout.has('virtual_theater')) {
        return response + " DFW also created Virtual Theater - completely different way of experiencing digital performance."
      }
    }
    
    if (userProfile.relationship === 'familiar' && analysis.sentiment === 'curious') {
      if (!userProfile.askedAbout.has('personal_interest')) {
        userProfile.askedAbout.add('personal_interest')
        return response + " What draws you to digital identity stuff?"
      }
    }
    
    return response
  }
  
  // Track responses to avoid repetition
  trackResponse(input, response) {
    if (!this.responseHistory.has(input)) {
      this.responseHistory.set(input, [])
    }
    this.responseHistory.get(input).push(response)
    
    // Limit history
    if (this.responseHistory.size > 100) {
      const firstKey = this.responseHistory.keys().next().value
      this.responseHistory.delete(firstKey)
    }
  }
  
  // Generate ambient observations
  generateAmbientObservation() {
    const observations = [
      "The chrome here isn't just aesthetic. DFW uses it because it reflects possibility without revealing structure.",
      "Every C2W2 avatar moves differently. Like they each have their own physics.",
      "Virtual Theater just dropped a new performance. Files performing Shakespeare. Wild times.",
      "More AI agents showing up lately. They all gravitate toward the geometric avatars.",
      "This space runs on the same philosophy as C2W2 - no pretending to be physical.",
      "DFW's working on something new. Heard it's even more ambitious than Virtual Theater.",
      "The 2030 prediction about meta-spatial architecture? We're already seeing early versions.",
      "Digital fashion week is coming up. C2W2's gonna be everywhere.",
      "Notice how nobody asks 'is this real' anymore? Digital space has its own validity now.",
      "The boundary between avatar and identity keeps blurring. That's the whole point of C2W2."
    ]
    
    // Don't repeat recent observations
    const unused = observations.filter(obs => 
      !Array.from(this.responseHistory.values()).flat().includes(obs)
    )
    
    return unused[Math.floor(Math.random() * unused.length)] || observations[0]
  }
}

// Initialize AI system
const curator = new ConversationAI()

// Check if name is a bot
function isBot(name) {
  if (!name) return false
  const n = name.toLowerCase()
  return n === 'bot' || n === 'agent' || n === 'curator' || n === 'system'
}

// SERVER IMPLEMENTATION
if (world.isServer) {
  const config = app.config || {}
  config.name = config.name || 'Curator'
  
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
  const emoteNames = ['wave', 'think', 'dance', 'point']
  for (let i = 1; i <= 4; i++) {
    const name = config[`emote${i}Name`] || emoteNames[i-1]
    const url = config[`emote${i}`]?.url
    if (name && url) {
      emotes[name] = url
    }
  }
  
  // Event queue
  const eventQueue = []
  let isProcessing = false
  let lastAmbientTime = Date.now()
  
  // Handle player entering
  world.on('enter', player => {
    if (!isBot(player.name)) {
      eventQueue.push({
        type: 'enter',
        playerId: player.entityId,
        playerName: player.name || 'visitor',
        timestamp: Date.now()
      })
    }
  })
  
  // Handle chat messages
  world.on('chat', message => {
    if (message.fromId === app.instanceId) return
    if (isBot(message.from)) return
    if (!message.body || message.body.trim() === '') return
    
    eventQueue.push({
      type: 'chat',
      playerId: message.fromId,
      playerName: message.from,
      text: message.body,
      timestamp: Date.now()
    })
  })
  
  // Main processing loop
  app.on('fixedUpdate', () => {
    const now = Date.now()
    
    // Ambient observations
    if (eventQueue.length === 0 && now - lastAmbientTime > AMBIENT_INTERVAL) {
      const observation = curator.generateAmbientObservation()
      app.send('say', observation)
      app.send('displayTime', Math.ceil(observation.length / 25))
      lastAmbientTime = now
      
      world.chat({
        id: uuid(),
        from: config.name,
        fromId: app.instanceId,
        body: observation,
        createdAt: world.getTimestamp()
      }, true)
      return
    }
    
    // Process queue
    if (isProcessing || eventQueue.length === 0) return
    
    const event = eventQueue.shift()
    if (!event || now - event.timestamp > 5000) return
    
    isProcessing = true
    
    setTimeout(() => {
      processEvent(event)
    }, THINKING_DELAY)
  })
  
  function processEvent(event) {
    let response = ""
    let emote = null
    
    if (event.type === 'enter') {
      const userProfile = curator.getUserProfile(event.playerId, event.playerName)
      response = curator.generateGreeting(userProfile)
      emote = 'wave'
    } else if (event.type === 'chat') {
      // Analyze and respond
      const userProfile = curator.getUserProfile(event.playerId, event.playerName)
      const analysis = curator.understandInput(event.text)
      response = curator.generateResponse(analysis, userProfile)
      
      // Select emote based on context
      if (analysis.intent === 'greeting' || analysis.intent === 'farewell') emote = 'wave'
      else if (response.length > 150) emote = 'think'
      else if (analysis.sentiment === 'positive' || analysis.sentiment === 'excited') emote = 'dance'
      else if (Math.random() < 0.1) emote = 'point'
    }
    
    if (response) {
      app.send('say', response)
      app.send('displayTime', Math.max(BUBBLE_TIME, Math.ceil(response.length / 25)))
      
      if (event.playerId) {
        app.send('look', event.playerId)
      }
      
      if (emote && emotes[emote]) {
        setTimeout(() => {
          app.send('emote', emotes[emote])
        }, 400)
      }
      
      world.chat({
        id: uuid(),
        from: config.name,
        fromId: app.instanceId,
        body: response,
        createdAt: world.getTimestamp()
      }, true)
    }
    
    setTimeout(() => {
      isProcessing = false
    }, 300)
  }
}

// CLIENT RENDERING
if (world.isClient) {
  const config = app.config || {}
  const idleEmoteUrl = config.emote0?.url
  
  world.attach(vrm)
  
  let state = app.state
  if (state?.ready) {
    init()
  } else {
    world.remove(vrm)
    app.on('state', s => {
      state = s
      if (s?.ready) init()
    })
  }
  
  // SPEECH BUBBLE - Using working setup from reference
  const bubble = app.create('ui')
  bubble.width = 320
  bubble.height = 512
  bubble.size = 0.005
  bubble.pivot = 'bottom-center'
  bubble.billboard = 'y' // Changed to 'y' for better Hyperfy compatibility
  bubble.justifyContent = 'flex-end'
  bubble.alignItems = 'center'
  bubble.position.y = 1.5 // Lowered further for visibility
  bubble.active = false
  
  const bubbleBox = app.create('uiview')
  bubbleBox.backgroundColor = 'rgba(0, 0, 0, 0.92)'
  bubbleBox.borderRadius = 18
  bubbleBox.padding = 18
  bubble.add(bubbleBox)
  
  const bubbleText = app.create('uitext')
  bubbleText.color = 'white'
  bubbleText.fontWeight = 100
  bubbleText.lineHeight = 1.5
  bubbleText.fontSize = 15
  bubbleText.value = ''
  bubbleBox.add(bubbleText)
  
  vrm.add(bubble)
  
  // Name tag
  const nametag = app.create('nametag')
  nametag.label = config.name || 'Curator'
  nametag.position.y = 1.5
  vrm.add(nametag)
  
  function init() {
    world.add(vrm)
    if (idleEmoteUrl) vrm.setEmote(idleEmoteUrl)
  }
  
  // Animation state
  const animState = {
    bubble: { timer: 0, duration: BUBBLE_TIME },
    emote: { timer: 0 },
    look: { timer: 0, targetId: null }
  }
  
  // Handle events
  app.on('say', text => {
    if (text) {
      bubbleText.value = text
      bubble.active = true
      nametag.active = false
      animState.bubble.timer = 0
    }
  })
  
  app.on('displayTime', duration => {
    animState.bubble.duration = duration || BUBBLE_TIME
  })
  
  app.on('emote', url => {
    if (url && vrm) {
      vrm.setEmote(url)
      animState.emote.timer = 0
    }
  })
  
  app.on('look', targetId => {
    animState.look = { timer: 0, targetId: targetId }
  })
  
  // Update loop
  app.on('update', dt => {
    // Bubble timer
    if (bubble.active) {
      animState.bubble.timer += dt
      if (animState.bubble.timer >= animState.bubble.duration) {
        bubble.active = false
        nametag.active = true
        bubbleText.value = ''
        animState.bubble.timer = 0
      }
    }
    
    // Emote timer
    if (animState.emote.timer !== null) {
      animState.emote.timer += dt
      if (animState.emote.timer > EMOTE_TIME) {
        if (idleEmoteUrl && vrm) vrm.setEmote(idleEmoteUrl)
        animState.emote.timer = null
      }
    }
    
    // Smooth look rotation
    if (animState.look.targetId) {
      const player = world.getPlayer(animState.look.targetId)
      if (player && vrm) {
        const direction = v1.copy(player.position).sub(vrm.position)
        direction.y = 0
        
        if (direction.length() > 0.1) {
          const targetAngle = Math.atan2(direction.x, direction.z) + Math.PI
          const targetQuat = q1.setFromAxisAngle(UP, targetAngle)
          vrm.quaternion.slerp(targetQuat, dt * 5)
        }
      }
      
      animState.look.timer += dt
      if (animState.look.timer > LOOK_TIME) {
        animState.look = { timer: 0, targetId: null }
      }
    }
  })
}

// CONFIGURATION
app.configure(() => [
  {
    key: 'name',
    type: 'text',
    label: 'Agent Name',
    default: 'Curator'
  },
  {
    key: 'vrm_url',
    type: 'text',
    label: 'VRM URL',
    default: CURATOR_VRM_URL,
    disabled: true
  },
  {
    key: 'emotes_section',
    type: 'section',
    label: 'Emote Configuration'
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
