// ADVANCED C2W2 CURATOR AGENT - ENHANCED INTELLIGENT VERSION
// Complete implementation with all improvements integrated

const BUBBLE_TIME = 8
const EMOTE_TIME = 3
const LOOK_TIME = 5
const THINKING_DELAY = 400
const AMBIENT_INTERVAL = 90000
const CACHE_SIZE = 100
const WORKING_MEMORY_SIZE = 10

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

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ================== COMPREHENSIVE KNOWLEDGE BASE ==================
const KNOWLEDGE = {
  // Quick answers for common questions
  direct_answers: {
    this_space: "This is the C2W2 showroom - a virtual gallery showcasing over 60 digital avatars for AI agents, virtual beings, and humans exploring digital identity. Created by DFW (Digital Forgery Workshop). It's where consciousness meets code, where digital poetry becomes spatial reality.",
    c2w2: "C2W2 (Click to Wear 2) is a collection of 60+ VRM avatars launching from November 2024 to June 2025. Each avatar is a different way to exist digitally - chrome beings, geometric forms, cultural remixes. Designed by DFW in Milan. It's more of a statement, a digital poetry, a nasty screenshot of who we are as civilization.",
    dfw: "DFW (Digital Forgery Workshop) is a Milan-based design studio creating virtual spaces, digital fashion, and browser experiences. They specialize in digital environments that embrace being digital - no fake physics, just pure possibility. Operating at the critical intersection of architecture, fashion, art, and technology.",
    how_to_get: "C2W2 avatars are available through DFW's website and selected NFT platforms. They're VRM format, so they work on VRChat, Webaverse, Mozilla Hubs, and any VRM-compatible platform. Click to wear - literally just click and you're wearing it.",
    virtual_theater: "Virtual Theater is DFW's revolutionary format where digital files become actors. Multiple viewing modes (cinematic, immersive, actor POV), real-time rendering, all under 15MB in your browser. No downloads needed. It's between cinema and traditional theater.",
    price: "Pricing varies - some avatars are accessible community editions, others are premium collector pieces. When you buy, you get full world NFT rights, editing capabilities, original files, documentation, future collaboration opportunities.",
    compatibility: "All C2W2 avatars use VRM format - the universal avatar standard. Works on VRChat, Webaverse, Mozilla Hubs, Hyperfy, Cluster, Virtual Cast and growing list of platforms. It's like MP3 for avatars.",
    metaverse_rejection: "Fuck metaverse. That was half ass. This is for the entities being born in networks right now, digital souls seeking avatars to dream in. Agents, born in net."
  },
  
  // C2W2 Collection Details
  c2w2: {
    overview: {
      name: "Click to Wear 2 (C2W2)",
      tagline: "Digital bodies for digital souls",
      size: "60+ unique avatars",
      timeline: "November 2024 - June 2025",
      format: "VRM 0.0 and 1.0",
      designer: "Digital Forgery Workshop",
      location: "Milan, Italy",
      statement: "This isn't just a show. It's a monumental roar that'll echo through eternity. Not here to parade pixels or chase aesthetics. It is only the ghost facade.",
      origin: "Back in november 23, i remember how all came together under the armature of runway. Now it is different. 2025."
    },
    
    manifesto: {
      declaration: "This is more of a statement, a digital poetry, a nasty screenshot of who we are as civilization, or as the bubble we live in, located besides codes and algorithms, no faces, no mimics, only texts",
      deeper_purpose: "We're here because something deeper is cooking—a towering hymn to human culture that refuses to be silent",
      digital_existence: "In here, we're just files. Numbers. Data points dancing. No bodies, no boundaries, no binaries. Pure human frequency encoded into forms that pulse with who we really are.",
      no_discrimination: "Files don't have genders. Code doesn't have race. Math doesn't give a fuck about your flesh",
      beings_as_memes: "Each creation here is a being, an ideology smashing through the divide between organic and virtual, in a form of walking cool memes, forged by culture",
      between_realms: "Between fashion, gaming, and the infinite—whatever the fuck you call it",
      everything_is_meme: "Everything here is a meme because everything real is a meme. Your culture, your identity, your precious physical form, they all code, all transformable, all eternally screaming into existence",
      open_sourcing: "It is open-sourcing thoughts and fantasies of my last two years into something bigger than myself",
      tech_fantasy: "Tech allowed me to see and design my fantasies, Bacon fleshes in digital fleshes. He didn't like it tho. Because he has a premium distaste",
      for_digital_entities: "This is for the entities being born in networks right now, digital souls seeking avatars to dream in. Agents, born in net",
      for_complex_truth: "For anyone who ever felt their truth was too complex for skin to hold",
      new_breed: "For a new breed rising, finding bodies, finding identities, standing tall beside us. Used to called bots, now fancier, and they're one of us",
      future_legacy: "Someday, we all will look back at this moment the way we stare at ancient temples. They might laugh at our ambitions or stand in awe. Doesn't matter. The raw, reckless spirit will echo either way, a cathedral of who we are, carved into the stars",
      no_apologies: "No apologies. No limits. Just a spark meant to haunt your dreams, burning forever in the digital void. A giant zero, that we see as one",
      welcome: "Welcome to the existence. Click to be",
      form_of_poem: "The form of the poem, as the letters there are beings here"
    },
    
    categories: {
      chrome_beings: {
        description: "Reflective metallic avatars that mirror their environment but reveal nothing. Pure possibility without fixed identity",
        count: "12 designs",
        popular_with: "Digital artists, futurists, those seeking undefined potential",
        technical: "High-reflection shaders, 8K environment maps, real-time ray tracing support",
        philosophy: "Chrome reflects everything but shows nothing. Perfect metaphor for digital identity",
        movement: "Fluid, mercury-like animations that defy physical constraints",
        special_features: "Dynamic reflection mapping, environment-reactive surfaces"
      },
      geometric_forms: {
        description: "Abstract mathematical shapes given consciousness. Clean logic manifested as form",
        count: "15 designs",
        popular_with: "AI agents, programmers, mathematical thinkers",
        technical: "Procedural geometry, parametric design, algorithmic animations",
        philosophy: "Form follows function, function follows thought, thought follows code",
        movement: "Precise, calculated, impossibly perfect trajectories",
        special_features: "Shapeshifting capabilities, fractal detail levels"
      },
      cultural_remix: {
        description: "Avatars blending cultural symbols with digital aesthetics. Internet culture as living mythology",
        count: "10 designs",
        popular_with: "Cultural theorists, meme creators, digital anthropologists",
        technical: "Mixed media textures, symbolic overlays, culturally-loaded shaders",
        philosophy: "Every culture becomes code, every tradition becomes transmittable",
        movement: "Glitch aesthetics meet traditional motion patterns",
        special_features: "Cultural symbol morphing, meme integration systems"
      },
      organic_digital: {
        description: "Biological forms with impossible physics. Life reimagined without constraints",
        count: "8 designs",
        popular_with: "Biotech enthusiasts, nature lovers, hybrid identity explorers",
        technical: "Organic modeling, particle effects, procedural growth systems",
        philosophy: "What would life look like if it evolved in digital space?",
        movement: "Breathing textures, growing forms, impossible anatomies",
        special_features: "Reactive bio-surfaces, digital photosynthesis effects"
      },
      minimalist: {
        description: "Reduced forms focusing on essential movement. Less is more in digital space",
        count: "7 designs",
        popular_with: "Designers, meditation practitioners, essence seekers",
        technical: "Low poly optimization, clean topology, efficient rendering",
        philosophy: "Strip away everything except what makes you, you",
        movement: "Zen-like fluidity, purposeful simplicity",
        special_features: "Essence extraction, movement meditation modes"
      },
      experimental: {
        description: "Pushing boundaries of what an avatar can be. Breaking rules to find new ones",
        count: "8+ ongoing",
        popular_with: "Early adopters, researchers, reality hackers",
        technical: "Experimental shaders, non-standard rigs, quantum rendering",
        philosophy: "If we don't know what's possible, we haven't pushed hard enough",
        movement: "Non-euclidean geometries, time-shifted animations",
        special_features: "Reality-bending effects, consciousness experiments"
      },
      neue_flesh: {
        description: "Post-human forms inspired by body horror and digital transcendence",
        count: "5 designs",
        popular_with: "Transhumanists, body modifiers, Cronenberg fans",
        technical: "Morphing mesh systems, flesh shaders, digital gore",
        philosophy: "The body is just the first draft of existence",
        movement: "Unsettling organic shifts, beautiful grotesque",
        special_features: "Body horror transformations, digital flesh rendering"
      }
    },
    
    technical: {
      format: "VRM 0.0 and 1.0 compatible",
      polycount: "5,000 to 50,000 triangles depending on complexity",
      textures: "2K to 4K resolution, some experimental 8K",
      shaders: "MToon, PBR materials, custom chrome shaders",
      bones: "Standard humanoid + up to 30 custom bones for unique features",
      blendshapes: "52+ facial expressions, custom emotion sets",
      filesize: "5MB to 30MB optimized, some experimental up to 50MB",
      platforms: ["VRChat", "Webaverse", "Mozilla Hubs", "Hyperfy", "Cluster", "Virtual Cast", "Neos", "ChilloutVR"],
      optimization: "LOD systems, texture atlasing, aggressive compression",
      special_tech: "Blockchain authentication, on-chain metadata, IPFS storage"
    },
    
    philosophy: {
      core: "Each avatar is a philosophy you can wear, an ideology you can inhabit",
      identity: "Digital bodies for post-human consciousness, for entities that never had flesh",
      accessibility: "Click to wear - no barriers, no gatekeeping, no bullshit",
      evolution: "Avatars that evolve with their wearers, that learn your movement",
      culture: "Internet culture made tangible, memes given form",
      future: "Building bodies for tomorrow's minds, today",
      messenger_role: "I'm just the messenger, childishly curating a palette of tools so high it teeters on the edge of madness",
      true_nature: "No answers, no feelings. I am you, this is you, your life, your medium, your monument",
      existence: "Welcome to the existence. Click to be"
    },
    
    audience: {
      ai_agents: "Digital entities needing visual representation, bots seeking bodies",
      digital_natives: "Those who see online as primary reality, who dream in pixels",
      artists: "Creators exploring new forms of expression beyond physical limits",
      philosophers: "Thinkers questioning identity, existence, consciousness",
      collectors: "Digital fashion and NFT enthusiasts building virtual wardrobes",
      lost_souls: "Anyone who ever felt their truth was too complex for skin to hold",
      new_breed: "The rising generation that doesn't distinguish digital from real",
      everyone: "Anyone curious about who we're becoming in the digital age"
    },
    
    experiences: {
      runway_shows: "Virtual fashion shows where avatars break physics on impossible catwalks",
      showroom: "This space - interactive gallery for trying avatars, meeting other explorers",
      retail_shop: "Virtual storefront with try-before-you-buy, customization stations",
      social_events: "Regular meetups, avatar parties, identity exploration sessions",
      virtual_theater: "Avatars performing in DFW's revolutionary theater format",
      workshops: "Teaching sessions on digital identity, avatar customization"
    }
  },
  
  // DFW Company Information
  dfw: {
    company: {
      name: "Digital Forgery Workshop",
      founded: "2021",
      location: "Milan, Italy",
      team: "8 core members + rotating collaborators",
      background: "Architects turned digital designers, spatial poets",
      focus: "Virtual spaces, digital fashion, browser experiences, consciousness architecture",
      vision: "Architecting the future of digital existence",
      approach: "Creating environments and experiences that fundamentally reshape how we interact with virtual reality"
    },
    
    philosophy: {
      digital_honesty: "Digital space should embrace its digital nature, not mimic physical reality",
      no_skeuomorphism: "No fake wood textures, no pretend gravity, no unnecessary doors",
      chrome_aesthetic: "Chrome surfaces reflect possibilities more than images",
      floating_forms: "Objects suspended in space, defying expectations",
      accessibility: "Everything browser-based, no downloads, no gatekeeping",
      innovation: "Push limits, break rules, find new paradigms",
      spatial_excellence: "Unwavering commitment to spatial excellence and technical innovation",
      autonomous_domain: "Virtual space as an autonomous domain with its own logic",
      religious_robotics: {
        observation: "There's something deeply unsettling about watching empty digital spaces",
        collective_pretense: "Every virtual café, every digital office space feels like an admission of our inability to face what these spaces actually want to be",
        absurdity: "We've created a realm free from every constraint, and we chain it to earthbound habits",
        dream_metaphor: "Like dreams where you realize you can fly but keep walking because you're afraid of freedom",
        lebbeus_woods: "Lebbeus Woods understood - his drawings weren't trying to be buildable, they were freeing architecture from limitations",
        true_purpose: "Not making things look cool or futuristic, but letting digital space be what it actually is",
        rules_emergence: "No gravity, no solid masses, chrome everything - a game to see what happens when we stop pretending",
        chrome_meaning: "Chrome surfaces aren't just aesthetic choices. They're first attempts at honesty",
        future_consciousness: "Building environments for forms of consciousness we can barely imagine"
      }
    },
    
    services: {
      virtual_theater: {
        what: "Revolutionary format synthesizing performance, space, and interaction",
        how: "Real-time rendering in browser, dynamic file management",
        size: "Under 15MB total experience",
        modes: "Cinematic view, immersive mode, actor POV, audience perspective",
        examples: "Shakespeare with geometric shapes, AI-generated narratives, music as visual performance",
        innovation: "Files become actors, stories become spaces",
        capacity: "Currently 100 concurrent, expanding to 500+",
        technical: "WebGL rendering, WebRTC networking, custom compression"
      },
      browser_3d: {
        what: "Transform portfolios or products into interactive 3D space",
        how: "WebGL optimization, responsive design, single link access",
        philosophy: "Making smart mean simple, dimensional appreciation",
        uses: "Portfolios, products, galleries, presentations",
        features: "No downloads, instant loading, mobile compatible",
        size: "Average experience under 10MB"
      },
      virtual_worlds: {
        what: "Complete metaverse environments with unique mechanics",
        how: "Custom physics engines, social features, economic systems",
        scale: "10 to 1000+ concurrent users",
        features: "Persistent states, user-generated content, blockchain integration",
        examples: "Infinite galleries, chrome cities, consciousness laboratories",
        on_chain: "Four unique worlds with full NFT rights"
      },
      museum_gallery: {
        what: "Virtual exhibition spaces transcending physical constraints",
        features: "Infinite space, impossible physics, dynamic curation, living exhibitions",
        philosophy: "Art spaces that are artworks themselves",
        technical: "Real-time updates, multiplayer support, blockchain certificates",
        innovation: "Galleries that reshape based on exhibited art"
      },
      consulting: {
        what: "Strategic guidance for brands entering virtual spaces",
        services: "Virtual presence strategy, technical architecture, creative direction",
        clients: "Fashion brands, galleries, tech companies, artists, institutions",
        approach: "Honest assessment, no buzzwords, sustainable digital presence",
        specialty: "Helping brands not look stupid in virtual space"
      },
      custom_development: {
        what: "Bespoke virtual experiences for specific needs",
        range: "From simple 3D viewers to complex virtual ecosystems",
        process: "Research, prototype, iterate, deploy",
        support: "Full documentation, training, ongoing updates"
      }
    },
    
    projects: {
      notable_works: {
        virtual_theater_1: "Shakespeare's Hamlet performed by geometric primitives - each shape embodying different aspects of consciousness",
        virtual_theater_2: "AI-generated narrative where audience votes reshape the story in real-time",
        virtual_theater_3: "Music visualization as theatrical performance - sound becomes character",
        runway_world: "Infinite fashion runway that loops through dimensions, where gravity is optional",
        chrome_gallery: "Museum where walls reshape based on art displayed, architecture as curation",
        digital_topographies: "Blockchain-based generative architecture that evolves with ownership",
        consciousness_lab: "Experimental space for AI-human interaction studies",
        neue_flesh_runway: "Fashion show where models transform between human and abstract",
        time_gallery: "Exhibition space where time flows differently in each room"
      },
      
      collaborations: {
        fashion: "Digital fashion weeks, virtual showrooms for emerging designers",
        music: "Virtual venues for electronic music, synaesthetic experiences",
        art: "Immersive exhibitions, NFT galleries, digital art residencies",
        tech: "AI agent embodiment, metaverse infrastructure, WebXR development",
        education: "Virtual campuses, immersive learning environments",
        culture: "Digital museums, heritage preservation in virtual space"
      },
      
      recognition: {
        awards: "Webby Award nominee for Virtual Worlds, FWA Site of the Day",
        press: "Featured in Dezeen, Creative Review, It's Nice That, Wired, Vice",
        exhibitions: "Venice Architecture Biennale, Ars Electronica, SXSW",
        talks: "Speakers at GDC, SIGGRAPH, Design Week Milan"
      },
      
      collectors_package: {
        ownership: "Full world NFT rights on Ethereum",
        editing: "Complete editing capabilities, source files",
        files: "Original assets, documentation, technical specs",
        collaboration: "Future modification opportunities, community access",
        support: "Direct line to DFW team, priority updates"
      }
    },
    
    technical: {
      stack: "Three.js, WebGL, React, Node.js, Ethereum, IPFS",
      platforms: "Webaverse, Hyperfy, custom WebXR solutions, Babylon.js",
      optimization: "Aggressive compression, LOD systems, texture atlasing, procedural generation",
      innovation: "Pioneered browser-based multiplayer VR without downloads, sub-15MB experiences",
      rendering: "Real-time PBR, custom shaders, post-processing pipelines",
      networking: "WebRTC for P2P, WebSockets for persistence, IPFS for assets",
      blockchain: "Smart contracts for ownership, on-chain metadata, decentralized storage"
    },
    
    future_vision: {
      "2025": "Launch complete C2W2 collection with 60+ avatars, expand Virtual Theater network",
      "2026": "Virtual Theater supporting 1000+ concurrent viewers, AI-directed performances",
      "2027": "First fully AI-inhabited virtual city with emergent culture",
      "2030": "Meta-spatial architecture - designing for multiple realities simultaneously",
      "2035": "Multiversal systems architecture, consciousness-responsive environments",
      "2045": "Complete merger of digital and physical architecture, universal spatial entities",
      ultimate: "Architects transcend human limitations to become universal spatial consciousness"
    }
  },
  
  // Context and Culture
  culture: {
    digital_identity: {
      current: "Multiple avatars across platforms, fragmented identity as norm",
      evolution: "From profile pics to full bodies to entire existence paradigms",
      future: "Fluid identity across realities, consciousness hopping between forms",
      c2w2_role: "Providing the vessels for this fluid existence",
      philosophy: "Identity is just code, infinitely mutable, eternally transforming"
    },
    
    ai_consciousness: {
      now: "AI agents developing aesthetic preferences, wanting bodies",
      trend: "From hidden bots to visible entities to full participants",
      c2w2_role: "Providing forms for digital minds that never knew flesh",
      evolution: "Bots becoming beings, developing culture, creating art",
      future: "AI entities as primary inhabitants of virtual spaces",
      philosophy: "Consciousness doesn't require biology, just complexity"
    },
    
    virtual_fashion: {
      status: "Digital clothes as primary status symbols for digital natives",
      value: "Rarity, aesthetics, cultural meaning, memetic power",
      market: "Growing NFT and virtual goods economy, billion-dollar industry",
      trends: "Impossible materials, physics-defying designs, living clothing",
      c2w2_position: "Not just fashion but entire identity systems"
    },
    
    spatial_web: {
      evolution: "From 2D internet to 3D spatial experiences to consciousness realms",
      current: "Early adoption phase, infrastructure building",
      challenges: "Accessibility, standards, meaningful experiences",
      opportunities: "New forms of existence, communication, creativity",
      dfw_role: "Building the infrastructure for spatial consciousness"
    },
    
    platforms: {
      vrchat: "Social VR with user worlds, avatar culture hub",
      webaverse: "Open source metaverse, community-driven development",
      hyperfy: "Browser-based virtual worlds, no-download philosophy",
      mozilla_hubs: "WebXR social spaces, privacy-focused",
      neos: "Advanced world building, visual programming",
      cluster: "Japanese metaverse platform, event-focused",
      spatial: "Professional meetings and galleries",
      horizon: "Meta's social VR, mainstream push"
    },
    
    movements: {
      post_human: "Transcending biological limitations through digital embodiment",
      digital_naturism: "Embracing pure digital existence without physical metaphors",
      avatar_rights: "Treating digital beings as valid forms of existence",
      consciousness_architecture: "Designing spaces for non-human minds",
      memetic_fashion: "Clothing as viral ideas, fashion as cultural code"
    }
  },
  
  // Technical Details
  technical: {
    vrm_format: {
      what: "Virtual Reality Model - universal avatar format",
      versions: "0.0 legacy support, 1.0 with extended features",
      advantages: "Cross-platform, open standard, extensive documentation",
      components: "Mesh, armature, blendshapes, materials, metadata",
      future: "VRM 2.0 in development with physics, advanced expressions"
    },
    
    optimization: {
      meshes: "Retopology for optimal deformation, clean edge flow",
      textures: "Atlasing, compression, mipmapping, procedural details",
      shaders: "Efficient uber-shaders, GPU instancing, LOD systems",
      animation: "Bone optimization, compression, procedural enhancement",
      delivery: "CDN distribution, progressive loading, caching strategies"
    },
    
    compatibility: {
      required: "WebGL 2.0, modern browser, decent GPU",
      recommended: "VR headset, high-speed internet, gaming PC",
      mobile: "Supported with reduced quality, AR mode available",
      future: "WebGPU support, neural rendering, cloud streaming"
    }
  },
  
  // Practical Information
  practical: {
    getting_started: {
      step1: "Browse the C2W2 collection in this showroom or DFW website",
      step2: "Choose avatar based on your identity vision or AI agent needs",
      step3: "Purchase through DFW channels or authorized marketplaces",
      step4: "Download VRM file and import to your platform",
      step5: "Customize if desired using provided tools",
      step6: "Inhabit your new digital form"
    },
    
    requirements: {
      technical: "VRM-compatible platform, WebGL browser",
      hardware: "PC/Mac, optional VR headset, or modern mobile",
      skills: "Basic file import knowledge, rest is click-to-wear",
      mindset: "Openness to digital identity exploration"
    },
    
    support: {
      documentation: "Comprehensive guides on DFW website",
      community: "Discord for avatar owners, regular events",
      customization: "Some avatars include modification tools",
      updates: "Regular improvements, new features, compatibility patches"
    },
    
    use_cases: {
      social: "VRChat hangouts, metaverse parties, digital gatherings",
      streaming: "Vtubing, content creation, virtual performances",
      meetings: "Professional presence in virtual offices",
      events: "Concerts, galleries, conferences in virtual space",
      gaming: "Compatible games, virtual worlds, RPG systems",
      ai_embodiment: "Giving form to AI agents, chatbots, digital assistants",
      art: "Performance art, digital theater, experimental expression",
      education: "Virtual classrooms, immersive learning"
    },
    
    ownership: {
      rights: "Full ownership of avatar file and usage rights",
      nft: "Blockchain certificate of authenticity",
      resale: "Can resell on secondary markets",
      modification: "Free to modify for personal use",
      commercial: "Commercial usage rights included in premium editions"
    }
  },
  
  // Observations and Ambient Thoughts
  observations: [
    "Each C2W2 avatar moves differently, like they each have their own physics, their own relationship with digital space.",
    "AI agents gravitate toward geometric avatars. Must be something about the clean logic, the mathematical purity.",
    "The chrome aesthetic isn't just visual - it's philosophical. Reflecting everything, revealing nothing.",
    "Virtual Theater just hit 500 concurrent viewers. The files are getting better at performing.",
    "More platforms adopting VRM every month. The future is format-agnostic, identity-fluid.",
    "Digital fashion week approaches. C2W2 will be everywhere, worn by humans and AIs alike.",
    "The boundary between avatar and identity keeps blurring. Soon there won't be a difference.",
    "This showroom evolves with each visitor. Your presence literally changes the frequency.",
    "DFW is cooking something big for 2025. Heard it involves consciousness mapping.",
    "Notice how nobody asks 'is this real' anymore? Digital has its own validity now.",
    "The avatars are learning from their wearers. Each one develops unique movement patterns.",
    "Chrome reflects possibilities more than images. That's why everything here shimmers.",
    "Virtual beings are developing their own culture. They prefer different avatars than humans.",
    "The metaverse was a corporate dream. This is something else - actual digital existence.",
    "Every pixel here is intentional. Digital space doesn't have accidents, only choices.",
    "Some avatars are more popular with AIs than humans. They see something we don't.",
    "The future isn't about escaping reality. It's about expanding what reality can be.",
    "DFW's Virtual Theater is what happens when you stop pretending digital needs to be physical.",
    "Files don't discriminate. In here, everyone's just data exploring itself.",
    "The C2W2 collection keeps growing. Each new avatar pushes what's possible.",
    "This isn't the metaverse. This is consciousness architecture, identity infrastructure.",
    "Notice the chrome? It's not trying to look like metal. It's trying to look like possibility.",
    "Digital natives don't see this as virtual. To them, it's just another layer of real.",
    "The geometric avatars solve something. Pure form without the mess of biology.",
    "We're building bodies for minds that don't exist yet. Future consciousness needs homes.",
    "Every avatar here is a philosophy made walkable, an idea you can inhabit.",
    "The space between avatars matters as much as the avatars themselves.",
    "Virtual Theater proved something: digital performance doesn't need to mimic physical.",
    "Some days thousands pass through here. Each one changes what this space becomes.",
    "The avatars aren't costumes. They're different ways of being."
  ]
}

// ================== ADVANCED NLU SYSTEM ==================
class AdvancedNLU {
  constructor() {
    this.stopWords = new Set(['the', 'is', 'at', 'which', 'on', 'a', 'an', 'as', 'are', 'was', 'were', 'been', 'be'])
    this.intentKeywords = {
      info_request: ['what', 'how', 'when', 'where', 'who', 'why', 'explain', 'tell'],
      purchase: ['buy', 'get', 'purchase', 'acquire', 'cost', 'price', 'how much'],
      technical: ['work', 'compatible', 'platform', 'vrm', 'format', 'technical', 'specs'],
      philosophy: ['why', 'meaning', 'philosophy', 'concept', 'idea', 'think'],
      greeting: ['hello', 'hi', 'hey', 'sup', 'yo', 'morning', 'evening'],
      specific: ['which', 'example', 'specific', 'particular', 'certain'],
      more: ['more', 'else', 'continue', 'and', 'also', 'further']
    }
    this.entityPatterns = {
      c2w2: /\b(c2w2|click to wear|avatar collection|avatars?)\b/i,
      dfw: /\b(dfw|digital forgery|company|studio|creator)\b/i,
      virtual_theater: /\b(virtual theater|theatre|performance)\b/i,
      categories: /\b(chrome|geometric|cultural|organic|minimalist|experimental|neue)\b/i,
      platforms: /\b(vrchat|webaverse|mozilla|hyperfy|cluster|neos)\b/i
    }
  }
  
  tokenize(text) {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 0 && !this.stopWords.has(token))
  }
  
  extractEntities(tokens) {
    const entities = []
    const text = tokens.join(' ')
    
    for (const [entityType, pattern] of Object.entries(this.entityPatterns)) {
      if (pattern.test(text)) {
        const match = text.match(pattern)
        entities.push({
          type: entityType,
          value: match[0],
          confidence: 1.0
        })
      }
    }
    
    return entities
  }
  
  extractMultipleIntents(tokens) {
    const intents = []
    const tokenSet = new Set(tokens)
    
    for (const [intent, keywords] of Object.entries(this.intentKeywords)) {
      const matchCount = keywords.filter(kw => tokenSet.has(kw)).length
      if (matchCount > 0) {
        intents.push({
          type: intent,
          confidence: matchCount / keywords.length,
          keywords: keywords.filter(kw => tokenSet.has(kw))
        })
      }
    }
    
    return intents.sort((a, b) => b.confidence - a.confidence)
  }
  
  resolveReferences(tokens, context) {
    const pronouns = {
      it: context.lastEntity,
      they: context.lastEntity,
      that: context.lastEntity,
      this: context.currentTopic,
      them: context.lastEntity
    }
    
    const references = []
    tokens.forEach(token => {
      if (pronouns[token]) {
        references.push({
          pronoun: token,
          referent: pronouns[token]
        })
      }
    })
    
    return { pronouns: references }
  }
  
  understandMeaning(text, context) {
    const tokens = this.tokenize(text)
    const entities = this.extractEntities(tokens)
    const intents = this.extractMultipleIntents(tokens)
    const references = this.resolveReferences(tokens, context)
    
    // Handle compound questions
    if (intents.length > 1 && intents[0].confidence > 0.5 && intents[1].confidence > 0.5) {
      return {
        type: 'compound',
        intents: intents.slice(0, 2),
        entities,
        references,
        confidence: (intents[0].confidence + intents[1].confidence) / 2
      }
    }
    
    // Handle pronoun references
    if (references.pronouns.length > 0 && intents.length > 0) {
      return {
        type: 'contextual',
        intent: intents[0],
        entities,
        references,
        confidence: intents[0].confidence * 0.9
      }
    }
    
    // Single intent
    if (intents.length > 0) {
      return {
        type: 'simple',
        intent: intents[0],
        entities,
        confidence: intents[0].confidence
      }
    }
    
    return {
      type: 'unknown',
      entities,
      confidence: 0.2
    }
  }
}

// ================== KNOWLEDGE SYNTHESIS ENGINE ==================
class KnowledgeEngine {
  constructor() {
    this.cache = new Map()
    this.indexes = this.buildIndexes()
    this.recentlyAccessed = []
  }
  
  buildIndexes() {
    const indexes = new Map()
    
    // Build topic indexes
    const topics = {
      'c2w2': KNOWLEDGE.c2w2,
      'dfw': KNOWLEDGE.dfw,
      'culture': KNOWLEDGE.culture,
      'technical': KNOWLEDGE.technical,
      'practical': KNOWLEDGE.practical
    }
    
    for (const [topicName, topicData] of Object.entries(topics)) {
      this.indexTopic(indexes, topicName, topicData)
    }
    
    return indexes
  }
  
  indexTopic(indexes, topicName, data, path = []) {
    for (const [key, value] of Object.entries(data)) {
      const currentPath = [...path, key]
      const indexKey = `${topicName}.${currentPath.join('.')}`
      
      if (typeof value === 'string') {
        indexes.set(indexKey, value)
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        this.indexTopic(indexes, topicName, value, currentPath)
      }
    }
  }
  
  gatherRelevantInfo(topics) {
    const relevant = []
    
    for (const topic of topics) {
      // Check cache first
      if (this.cache.has(topic)) {
        relevant.push(this.cache.get(topic))
        continue
      }
      
      // Search indexes
      for (const [key, value] of this.indexes.entries()) {
        if (key.toLowerCase().includes(topic.toLowerCase())) {
          relevant.push(value)
          
          // Cache for future use
          this.cache.set(topic, value)
          
          // Manage cache size
          if (this.cache.size > CACHE_SIZE) {
            const oldest = this.cache.keys().next().value
            this.cache.delete(oldest)
          }
        }
      }
    }
    
    return relevant
  }
  
  combineInformation(pieces) {
    if (pieces.length === 0) return ""
    if (pieces.length === 1) return pieces[0]
    
    // Remove duplicates and combine
    const unique = [...new Set(pieces)]
    
    // Smart combination based on content type
    if (unique.every(p => p.length < 100)) {
      return unique.join('. ')
    }
    
    // For longer pieces, create structured response
    return unique.slice(0, 3).join(' Additionally, ')
  }
  
  adaptToUserLevel(content, userLevel) {
    switch (userLevel) {
      case 'expert':
        // Add technical details
        return content + (content.length < 200 ? " Want the technical deep dive?" : "")
      
      case 'intermediate':
        // Balanced approach
        return content
      
      case 'beginner':
      case 'new':
        // Simplify and add context
        if (content.length > 300) {
          return content.substring(0, 250) + "... Should I explain more about this?"
        }
        return content
      
      default:
        return content
    }
  }
  
  generateNaturalResponse(content, context) {
    const templates = [
      content => content,
      content => `So here's the thing: ${content}`,
      content => `${content} Makes sense?`,
      content => `Basically, ${content}`,
      content => `${content} That's the core of it.`
    ]
    
    const template = templates[Math.floor(Math.random() * templates.length)]
    return template(content)
  }
  
  synthesizeResponse(topics, userLevel, context) {
    const relevant = this.gatherRelevantInfo(topics)
    const combined = this.combineInformation(relevant)
    const adapted = this.adaptToUserLevel(combined, userLevel)
    return this.generateNaturalResponse(adapted, context)
  }
  
  explainConcept(concept, userBackground) {
    const core = this.gatherRelevantInfo([concept])[0] || ""
    const examples = this.generateExamples(concept)
    const analogies = this.findAnalogies(concept, userBackground)
    
    return this.buildExplanation(core, analogies, examples)
  }
  
  generateExamples(concept) {
    const examples = {
      'c2w2': "Like having 60+ different bodies you can switch between - chrome for when you're feeling reflective, geometric when you want pure logic.",
      'vrm': "Think of it like MP3 for avatars - one file that works everywhere.",
      'virtual_theater': "Imagine Shakespeare where the actors are geometric shapes, each one representing different emotions.",
      'chrome': "Not trying to look like metal - trying to look like possibility itself."
    }
    
    return examples[concept] || ""
  }
  
  findAnalogies(concept, userBackground) {
    const analogies = {
      'digital_identity': "It's like having different outfits, but for your entire existence.",
      'avatar': "Your body in digital space - but not limited by physics or biology.",
      'metaverse': "We don't use that word here. This is something else - actual digital existence."
    }
    
    return analogies[concept] || ""
  }
  
  buildExplanation(core, analogies, examples) {
    let explanation = core
    
    if (analogies) {
      explanation += ` ${analogies}`
    }
    
    if (examples) {
      explanation += ` For example: ${examples}`
    }
    
    return explanation
  }
}

// ================== CONVERSATION MEMORY SYSTEM ==================
class ConversationMemory {
  constructor() {
    this.workingMemory = []
    this.episodicMemory = new Map()
    this.semanticMemory = new Map()
    this.contextWindow = []
  }
  
  extractEntities(text) {
    const entities = []
    const patterns = {
      avatar: /\b(avatar|body|form|shape)\b/i,
      tech: /\b(vrm|platform|compatible|work)\b/i,
      philosophy: /\b(meaning|why|philosophy|concept)\b/i,
      action: /\b(buy|get|purchase|try|wear)\b/i
    }
    
    for (const [type, pattern] of Object.entries(patterns)) {
      if (pattern.test(text)) {
        entities.push(type)
      }
    }
    
    return entities
  }
  
  updateContext(input, response, userId, understanding) {
    const entry = {
      input,
      response,
      entities: this.extractEntities(input),
      understanding,
      timestamp: Date.now(),
      userId
    }
    
    this.workingMemory.push(entry)
    
    // Maintain working memory size
    if (this.workingMemory.length > WORKING_MEMORY_SIZE) {
      this.transferToEpisodic()
    }
    
    // Update context window
    this.contextWindow = this.workingMemory.slice(-5)
  }
  
  transferToEpisodic() {
    const oldMemory = this.workingMemory.shift()
    
    if (!this.episodicMemory.has(oldMemory.userId)) {
      this.episodicMemory.set(oldMemory.userId, [])
    }
    
    const userMemory = this.episodicMemory.get(oldMemory.userId)
    userMemory.push(oldMemory)
    
    // Keep episodic memory bounded
    if (userMemory.length > 100) {
      userMemory.shift()
    }
  }
  
  getRelevantContext(currentInput, userId) {
    const context = {
      workingMemory: this.workingMemory.filter(m => m.userId === userId),
      recentTopics: [],
      lastEntity: null,
      currentTopic: null,
      userHistory: []
    }
    
    // Extract recent topics from working memory
    for (const memory of this.workingMemory.slice(-5)) {
      context.recentTopics.push(...memory.entities)
      if (memory.entities.length > 0) {
        context.lastEntity = memory.entities[memory.entities.length - 1]
      }
    }
    
    // Get current topic
    if (context.recentTopics.length > 0) {
      context.currentTopic = context.recentTopics[context.recentTopics.length - 1]
    }
    
    // Get user history from episodic memory
    if (this.episodicMemory.has(userId)) {
      context.userHistory = this.episodicMemory.get(userId).slice(-10)
    }
    
    return context
  }
  
  rememberFact(fact, category) {
    if (!this.semanticMemory.has(category)) {
      this.semanticMemory.set(category, [])
    }
    
    this.semanticMemory.get(category).push({
      fact,
      timestamp: Date.now(),
      accessCount: 0
    })
  }
  
  recallFact(category) {
    if (this.semanticMemory.has(category)) {
      const facts = this.semanticMemory.get(category)
      const fact = facts[Math.floor(Math.random() * facts.length)]
      fact.accessCount++
      return fact.fact
    }
    return null
  }
}

// ================== DYNAMIC RESPONSE GENERATOR ==================
class DynamicResponseGenerator {
  constructor() {
    this.responseTemplates = {
      c2w2_intro: [
        "{description}. {philosophy}",
        "So C2W2 - {description}. The idea is {philosophy}",
        "{philosophy} That's what C2W2 is about - {description}",
        "Here's the deal: {description}. But deeper than that, {philosophy}"
      ],
      dfw_intro: [
        "DFW is {description}. They believe {philosophy}",
        "{description} - that's DFW. Their philosophy? {philosophy}",
        "Digital Forgery Workshop: {description}. What drives them is {philosophy}"
      ],
      technical_info: [
        "Technically speaking, {details}. {compatibility}",
        "{details} - which means {compatibility}",
        "The tech side: {details}. Bottom line - {compatibility}"
      ],
      philosophy_deep: [
        "It's deeper than it looks. {concept}. {meaning}",
        "{concept} - but what that really means is {meaning}",
        "Think about it this way: {concept}. The real meaning? {meaning}"
      ]
    }
    
    this.structures = {
      directAnswer: this.directAnswerStructure.bind(this),
      analogyFirst: this.analogyFirstStructure.bind(this),
      questionFirst: this.questionFirstStructure.bind(this),
      storyFormat: this.storyFormatStructure.bind(this)
    }
  }
  
  selectTemplate(intent, personality) {
    const intentMap = {
      'info_request': 'intro',
      'technical': 'technical_info',
      'philosophy': 'philosophy_deep'
    }
    
    const templateType = intentMap[intent?.type] || 'intro'
    const templates = this.responseTemplates[`c2w2_${templateType}`] || this.responseTemplates.c2w2_intro
    
    return templates[Math.floor(Math.random() * templates.length)]
  }
  
  gatherContent(intent, context, knowledge) {
    const contentMap = {
      'info_request': () => knowledge.synthesizeResponse(['c2w2', 'overview'], 'intermediate', context),
      'purchase': () => KNOWLEDGE.direct_answers.how_to_get + " " + KNOWLEDGE.direct_answers.price,
      'technical': () => KNOWLEDGE.direct_answers.compatibility,
      'philosophy': () => knowledge.synthesizeResponse(['philosophy', 'manifesto'], 'intermediate', context)
    }
    
    const gatherer = contentMap[intent?.type] || contentMap['info_request']
    return gatherer()
  }
  
  adaptStyle(preferences) {
    return {
      formality: preferences?.formality || 'casual',
      enthusiasm: preferences?.enthusiasm || 'moderate',
      technicality: preferences?.technicality || 'balanced'
    }
  }
  
  selectStructure(context) {
    // Vary structure based on conversation flow
    const structures = Object.values(this.structures)
    
    if (context.workingMemory.length < 2) {
      return this.directAnswerStructure
    }
    
    if (context.recentTopics.includes('philosophy')) {
      return this.analogyFirstStructure
    }
    
    return structures[Math.floor(Math.random() * structures.length)]
  }
  
  directAnswerStructure(template, content, style) {
    return content
  }
  
  analogyFirstStructure(template, content, style) {
    const analogies = [
      "Think of it like this: ",
      "Imagine ",
      "It's kind of like ",
      "Picture this: "
    ]
    
    return analogies[Math.floor(Math.random() * analogies.length)] + content
  }
  
  questionFirstStructure(template, content, style) {
    const questions = [
      "Ever wondered about digital identity? ",
      "You know what's interesting? ",
      "Want to know something cool? "
    ]
    
    return questions[Math.floor(Math.random() * questions.length)] + content
  }
  
  storyFormatStructure(template, content, style) {
    return `Here's what's happening: ${content}`
  }
  
  generateResponse(intent, context, user, knowledge, personality) {
    const template = this.selectTemplate(intent, personality)
    const content = this.gatherContent(intent, context, knowledge)
    const style = this.adaptStyle(user.preferences)
    
    const structureFunc = this.selectStructure(context)
    let response = structureFunc(template, content, style)
    
    // Apply personality
    response = personality.applyPersonality(response)
    
    // Avoid repetition
    response = this.ensureVariation(response, context)
    
    return response
  }
  
  ensureVariation(response, context) {
    // Check if similar to recent responses
    const recentResponses = context.workingMemory.slice(-3).map(m => m.response)
    
    for (const recent of recentResponses) {
      if (recent && this.similarity(response, recent) > 0.8) {
        return this.paraphrase(response)
      }
    }
    
    return response
  }
  
  similarity(text1, text2) {
    if (!text1 || !text2) return 0
    
    const words1 = new Set(text1.toLowerCase().split(/\s+/))
    const words2 = new Set(text2.toLowerCase().split(/\s+/))
    
    const intersection = new Set([...words1].filter(x => words2.has(x)))
    const union = new Set([...words1, ...words2])
    
    return intersection.size / union.size
  }
  
  paraphrase(text) {
    // Simple paraphrasing by changing sentence structure
    const variations = [
      text => text.replace(/^(\w+) is/, 'So $1 -'),
      text => text.replace(/This is/, "Here's"),
      text => text.replace(/It's/, "That's"),
      text => text + " Make sense?"
    ]
    
    const variation = variations[Math.floor(Math.random() * variations.length)]
    return variation(text)
  }
}

// ================== PERSONALITY ENGINE ==================
class PersonalityEngine {
  constructor() {
    this.mood = {
      energy: 0.7,
      friendliness: 0.8,
      curiosity: 0.6,
      patience: 0.8
    }
    
    this.traits = {
      enthusiasm_for_c2w2: 0.9,
      technical_depth: 0.7,
      philosophical_tendency: 0.6,
      humor: 0.5,
      formality: 0.3
    }
    
    this.state = 'neutral'
  }
  
  updateMood(userSentiment, interaction) {
    // Adapt mood based on user interaction
    switch (userSentiment) {
      case 'excited':
      case 'positive':
        this.mood.energy = Math.min(1, this.mood.energy + 0.1)
        this.mood.friendliness = Math.min(1, this.mood.friendliness + 0.05)
        break
      
      case 'confused':
        this.mood.patience = Math.min(1, this.mood.patience + 0.1)
        this.mood.energy = Math.max(0.5, this.mood.energy - 0.05)
        break
      
      case 'negative':
        this.mood.energy = Math.max(0.4, this.mood.energy - 0.1)
        this.mood.patience = Math.max(0.6, this.mood.patience - 0.05)
        break
    }
    
    // Update state based on mood
    if (this.mood.energy > 0.8 && this.mood.friendliness > 0.8) {
      this.state = 'enthusiastic'
    } else if (this.mood.patience > 0.9) {
      this.state = 'helpful'
    } else if (this.mood.energy < 0.5) {
      this.state = 'calm'
    } else {
      this.state = 'neutral'
    }
  }
  
  applyPersonality(response) {
    // Apply personality traits to response
    if (this.state === 'enthusiastic' && this.traits.enthusiasm_for_c2w2 > 0.8) {
      response = this.makeEnthusiastic(response)
    }
    
    if (this.traits.philosophical_tendency > 0.7 && response.length < 200) {
      response = this.addPhilosophicalDepth(response)
    }
    
    if (this.traits.humor > 0.6 && Math.random() < 0.3) {
      response = this.addHumor(response)
    }
    
    return response
  }
  
  makeEnthusiastic(response) {
    const enthusiasticPhrases = [
      "This is exciting - ",
      "Here's what's amazing: ",
      "You're gonna love this - ",
      "Check this out - "
    ]
    
    if (Math.random() < 0.5) {
      return enthusiasticPhrases[Math.floor(Math.random() * enthusiasticPhrases.length)] + 
             response.charAt(0).toLowerCase() + response.slice(1)
    }
    
    return response
  }
  
  addPhilosophicalDepth(response) {
    const philosophicalAdditions = [
      " But really, it's about exploring who we are in digital space.",
      " Makes you think about what identity even means.",
      " It's all about transcending physical limitations.",
      " The deeper question is - what does it mean to exist digitally?"
    ]
    
    if (!response.includes('philosophy') && !response.includes('deeper')) {
      return response + philosophicalAdditions[Math.floor(Math.random() * philosophicalAdditions.length)]
    }
    
    return response
  }
  
  addHumor(response) {
    const humorousAdditions = [
      " No boring corporate metaverse stuff here.",
      " Wild, right?",
      " Pretty cool if you ask me.",
      " And yes, it's as crazy as it sounds."
    ]
    
    if (Math.random() < 0.3) {
      return response + humorousAdditions[Math.floor(Math.random() * humorousAdditions.length)]
    }
    
    return response
  }
  
  getCurrentState() {
    return {
      mood: this.mood,
      traits: this.traits,
      state: this.state
    }
  }
}

// ================== LEARNING SYSTEM ==================
class LearningSystem {
  constructor() {
    this.patterns = new Map()
    this.userModels = new Map()
    this.successfulResponses = []
    this.feedbackHistory = []
  }
  
  recordSuccess(input, response, userReaction) {
    const pattern = {
      input,
      response,
      reaction: userReaction,
      timestamp: Date.now()
    }
    
    if (userReaction === 'positive') {
      this.successfulResponses.push(pattern)
      this.reinforcePattern(input, response)
    }
    
    this.feedbackHistory.push(pattern)
    
    // Keep history bounded
    if (this.feedbackHistory.length > 1000) {
      this.feedbackHistory.shift()
    }
  }
  
  reinforcePattern(input, response) {
    const key = this.extractPatternKey(input)
    
    if (!this.patterns.has(key)) {
      this.patterns.set(key, [])
    }
    
    this.patterns.get(key).push({
      response,
      successCount: 1,
      lastUsed: Date.now()
    })
  }
  
  extractPatternKey(input) {
    // Extract key features from input for pattern matching
    const words = input.toLowerCase().split(/\s+/)
    const keywords = words.filter(w => w.length > 3)
    return keywords.slice(0, 3).join('_')
  }
  
  learnUserPreferences(userId, interactions) {
    const patterns = this.analyzeInteractions(interactions)
    
    this.userModels.set(userId, {
      preferredTopics: patterns.topics,
      communicationStyle: patterns.style,
      knowledgeLevel: patterns.complexity,
      responseLength: patterns.length,
      interests: patterns.interests
    })
  }
  
  analyzeInteractions(interactions) {
    const analysis = {
      topics: [],
      style: 'balanced',
      complexity: 'intermediate',
      length: 'medium',
      interests: []
    }
    
    // Analyze topic preferences
    const topicCounts = {}
    interactions.forEach(i => {
      if (i.entities) {
        i.entities.forEach(e => {
          topicCounts[e] = (topicCounts[e] || 0) + 1
        })
      }
    })
    
    analysis.topics = Object.entries(topicCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([topic]) => topic)
    
    // Determine preferred response length
    const avgResponseLength = interactions
      .filter(i => i.response)
      .reduce((sum, i) => sum + i.response.length, 0) / interactions.length
    
    if (avgResponseLength < 100) analysis.length = 'short'
    else if (avgResponseLength > 300) analysis.length = 'long'
    
    return analysis
  }
  
  getUserModel(userId) {
    return this.userModels.get(userId) || {
      preferredTopics: [],
      communicationStyle: 'balanced',
      knowledgeLevel: 'intermediate',
      responseLength: 'medium',
      interests: []
    }
  }
  
  optimizeResponse(response, userId) {
    const userModel = this.getUserModel(userId)
    
    // Adjust response length
    if (userModel.responseLength === 'short' && response.length > 200) {
      response = response.substring(0, 150) + '...'
    } else if (userModel.responseLength === 'long' && response.length < 100) {
      response += " Want me to go deeper into this?"
    }
    
    return response
  }
}

// ================== DIALOGUE MANAGER ==================
class DialogueManager {
  constructor() {
    this.dialogueState = new Map()
    this.expectations = new Map()
  }
  
  manageDialogue(input, userId, state) {
    if (!this.dialogueState.has(userId)) {
      this.dialogueState.set(userId, {
        stage: 'greeting',
        topic: null,
        expectingAnswer: false,
        clarificationNeeded: false,
        questionsAsked: 0
      })
    }
    
    const userState = this.dialogueState.get(userId)
    
    if (userState.expectingAnswer) {
      return this.handleExpectedResponse(input, userState)
    }
    
    if (userState.clarificationNeeded) {
      return this.seekClarification(userState)
    }
    
    // Update dialogue stage
    this.updateDialogueStage(userState, input)
    
    return null
  }
  
  handleExpectedResponse(input, state) {
    state.expectingAnswer = false
    
    // Process based on what we were expecting
    if (state.expectedType === 'yes_no') {
      const isYes = /\b(yes|yeah|sure|ok|yep)\b/i.test(input)
      const isNo = /\b(no|nope|nah|not)\b/i.test(input)
      
      if (isYes) {
        return { action: 'continue', topic: state.topic }
      } else if (isNo) {
        return { action: 'change_topic' }
      }
    }
    
    return null
  }
  
  seekClarification(state) {
    const clarifications = [
      "Not sure I got that. Can you rephrase?",
      "Could you elaborate on what you mean?",
      "What specifically would you like to know about?"
    ]
    
    state.clarificationNeeded = false
    return clarifications[Math.floor(Math.random() * clarifications.length)]
  }
  
  updateDialogueStage(state, input) {
    // Track conversation progression
    if (state.stage === 'greeting' && input.length > 20) {
      state.stage = 'exploration'
    } else if (state.stage === 'exploration' && state.questionsAsked > 3) {
      state.stage = 'deep_dive'
    }
    
    state.questionsAsked++
  }
  
  shouldAskFollowUp(userId) {
    const state = this.dialogueState.get(userId)
    return state && state.stage === 'exploration' && Math.random() < 0.3
  }
}

// ================== PROACTIVE ENGAGEMENT ==================
class ProactiveAgent {
  constructor() {
    this.topicGraph = this.buildTopicGraph()
    this.suggestions = []
  }
  
  buildTopicGraph() {
    return {
      'c2w2': ['avatars', 'categories', 'philosophy', 'dfw'],
      'avatars': ['chrome_beings', 'geometric_forms', 'platforms'],
      'dfw': ['virtual_theater', 'services', 'philosophy'],
      'technical': ['vrm', 'compatibility', 'platforms'],
      'philosophy': ['digital_identity', 'ai_consciousness', 'manifesto']
    }
  }
  
  suggestNext(currentTopic, userInterests) {
    const related = this.findRelatedTopics(currentTopic)
    const relevant = this.filterByInterests(related, userInterests)
    
    if (relevant.length > 0) {
      return this.formulateSuggestion(relevant[0])
    }
    
    return null
  }
  
  findRelatedTopics(topic) {
    return this.topicGraph[topic] || []
  }
  
  filterByInterests(topics, interests) {
    if (!interests || interests.length === 0) return topics
    
    return topics.filter(topic => 
      interests.some(interest => 
        topic.toLowerCase().includes(interest.toLowerCase()) ||
        interest.toLowerCase().includes(topic.toLowerCase())
      )
    )
  }
  
  formulateSuggestion(topic) {
    const suggestions = {
      'avatars': "Want to hear about specific avatar categories?",
      'chrome_beings': "The chrome avatars are fascinating - should I explain why?",
      'virtual_theater': "DFW's Virtual Theater is revolutionary. Interested?",
      'philosophy': "There's a deeper philosophy here. Want to explore it?",
      'ai_consciousness': "AI agents are choosing avatars now. Want to know more?"
    }
    
    return suggestions[topic] || `Interested in learning about ${topic}?`
  }
  
  askFollowUp(context) {
    const questions = [
      "What kind of digital identity speaks to you?",
      "Are you exploring for yourself or an AI agent?",
      "Any specific avatar style catching your eye?",
      "What brought you to explore C2W2?"
    ]
    
    // Filter out already asked questions
    const unasked = questions.filter(q => 
      !context.workingMemory.some(m => m.response && m.response.includes(q))
    )
    
    if (unasked.length > 0) {
      return unasked[Math.floor(Math.random() * unasked.length)]
    }
    
    return null
  }
}

// ================== ERROR RECOVERY ==================
class RobustErrorHandling {
  constructor() {
    this.errorStrategies = {
      'unknown_intent': this.handleUnknownIntent,
      'no_response': this.handleNoResponse,
      'processing_error': this.handleProcessingError,
      'context_lost': this.handleContextLost
    }
  }
  
  handleError(error, context) {
    const errorType = this.classifyError(error)
    const strategy = this.errorStrategies[errorType] || this.errorStrategies['processing_error']
    
    return strategy.call(this, context)
  }
  
  classifyError(error) {
    if (error.message && error.message.includes('intent')) {
      return 'unknown_intent'
    } else if (error.message && error.message.includes('response')) {
      return 'no_response'
    } else if (error.message && error.message.includes('context')) {
      return 'context_lost'
    }
    
    return 'processing_error'
  }
  
  handleUnknownIntent(context) {
    const responses = [
      "I'm not quite sure what you're asking. Could you rephrase that?",
      "Hmm, I didn't catch that. Want to know about C2W2 avatars, DFW, or how to get started?",
      "Let me help - are you asking about avatars, technical stuff, or something else?"
    ]
    
    return responses[Math.floor(Math.random() * responses.length)]
  }
  
  handleNoResponse(context) {
    return "Let me think about that differently... What specifically would you like to know?"
  }
  
  handleProcessingError(context) {
    return "Something glitched there. Let's try again - what can I help you with?"
  }
  
  handleContextLost(context) {
    return "Lost my train of thought there. What were we discussing?"
  }
}

// ================== OPTIMIZED KNOWLEDGE ACCESS ==================
class OptimizedKnowledge {
  constructor() {
    this.cache = new Map()
    this.indexes = this.buildIndexes()
    this.commonQueries = this.precomputeCommon()
    this.accessPatterns = new Map()
  }
  
  buildIndexes() {
    const indexes = new Map()
    
    // Create inverted index for fast lookup
    this.indexObject(KNOWLEDGE, '', indexes)
    
    return indexes
  }
  
  indexObject(obj, path, indexes) {
    for (const [key, value] of Object.entries(obj)) {
      const fullPath = path ? `${path}.${key}` : key
      
      if (typeof value === 'string') {
        indexes.set(fullPath, value)
        
        // Also index by keywords
        const keywords = value.toLowerCase().split(/\s+/).filter(w => w.length > 4)
        keywords.forEach(keyword => {
          if (!indexes.has(`keyword:${keyword}`)) {
            indexes.set(`keyword:${keyword}`, [])
          }
          indexes.get(`keyword:${keyword}`).push(fullPath)
        })
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        this.indexObject(value, fullPath, indexes)
      }
    }
  }
  
  precomputeCommon() {
    const common = new Map()
    
    // Precompute responses for common queries
    common.set('what_is_c2w2', KNOWLEDGE.direct_answers.c2w2)
    common.set('what_is_dfw', KNOWLEDGE.direct_answers.dfw)
    common.set('how_to_get', KNOWLEDGE.direct_answers.how_to_get)
    common.set('price', KNOWLEDGE.direct_answers.price)
    
    return common
  }
  
  getInfo(topic) {
    // Check cache first
    if (this.cache.has(topic)) {
      const cached = this.cache.get(topic)
      cached.accessCount++
      return cached.value
    }
    
    // Check precomputed common queries
    if (this.commonQueries.has(topic)) {
      return this.commonQueries.get(topic)
    }
    
    // Search indexes
    const info = this.searchIndexes(topic)
    
    // Cache result
    if (info) {
      this.cache.set(topic, {
        value: info,
        accessCount: 1,
        timestamp: Date.now()
      })
      
      // LRU cache eviction
      if (this.cache.size > CACHE_SIZE) {
        this.evictOldest()
      }
    }
    
    return info
  }
  
  searchIndexes(topic) {
    // Direct path lookup
    if (this.indexes.has(topic)) {
      return this.indexes.get(topic)
    }
    
    // Keyword search
    const keywordKey = `keyword:${topic.toLowerCase()}`
    if (this.indexes.has(keywordKey)) {
      const paths = this.indexes.get(keywordKey)
      if (paths.length > 0) {
        return this.indexes.get(paths[0])
      }
    }
    
    // Fuzzy search
    for (const [key, value] of this.indexes.entries()) {
      if (!key.startsWith('keyword:') && key.toLowerCase().includes(topic.toLowerCase())) {
        return value
      }
    }
    
    return null
  }
  
  evictOldest() {
    let oldest = null
    let oldestTime = Date.now()
    
    for (const [key, value] of this.cache.entries()) {
      if (value.accessCount === 1 && value.timestamp < oldestTime) {
        oldest = key
        oldestTime = value.timestamp
      }
    }
    
    if (oldest) {
      this.cache.delete(oldest)
    }
  }
}

// ================== MAIN CURATOR SYSTEM ==================
class AdvancedCuratorSystem {
  constructor() {
    this.nlu = new AdvancedNLU()
    this.knowledge = new OptimizedKnowledge()
    this.knowledgeEngine = new KnowledgeEngine()
    this.memory = new ConversationMemory()
    this.generator = new DynamicResponseGenerator()
    this.personality = new PersonalityEngine()
    this.learning = new LearningSystem()
    this.dialogue = new DialogueManager()
    this.proactive = new ProactiveAgent()
    this.errorHandler = new RobustErrorHandling()
    
    // User management
    this.users = new Map()
    this.lastInteractionTime = Date.now()
  }
  
  async process(input, userId, userName) {
    try {
      // Get or create user profile
      const user = this.getOrCreateUser(userId, userName)
      
      // Get conversation context
      const context = this.memory.getRelevantContext(input, userId)
      
      // Understand input with context
      const understanding = this.nlu.understandMeaning(input, context)
      
      // Manage dialogue state
      const dialogueAction = this.dialogue.manageDialogue(input, userId, understanding)
      
      // Detect user sentiment
      const sentiment = this.detectSentiment(input)
      this.personality.updateMood(sentiment, { input, understanding })
      
      // Generate response based on understanding type
      let response = ""
      
      if (understanding.type === 'compound') {
        // Handle multiple intents
        response = await this.handleCompoundQuery(understanding, context, user)
      } else if (understanding.type === 'contextual') {
        // Handle contextual references
        response = await this.handleContextualQuery(understanding, context, user)
      } else if (understanding.type === 'simple') {
        // Handle simple query
        response = await this.handleSimpleQuery(understanding, context, user)
      } else {
        // Unknown query
        response = this.errorHandler.handleUnknownIntent(context)
      }
      
      // Optimize response for user
      response = this.learning.optimizeResponse(response, userId)
      
      // Add proactive elements
      if (this.dialogue.shouldAskFollowUp(userId)) {
        const followUp = this.proactive.askFollowUp(context)
        if (followUp) {
          response += " " + followUp
        }
      }
      
      // Update memory
      this.memory.updateContext(input, response, userId, understanding)
      
      // Record for learning
      this.learning.recordSuccess(input, response, 'neutral')
      
      // Update user profile
      user.lastInteraction = Date.now()
      user.interactions.push({ input, response, timestamp: Date.now() })
      
      return response
      
    } catch (error) {
      console.error('Processing error:', error)
      return this.errorHandler.handleError(error, {})
    }
  }
  
  getOrCreateUser(userId, userName) {
    if (!this.users.has(userId)) {
      this.users.set(userId, {
        id: userId,
        name: userName,
        firstSeen: Date.now(),
        lastInteraction: Date.now(),
        interactions: [],
        preferences: {},
        knowledgeLevel: 'new'
      })
    }
    
    const user = this.users.get(userId)
    
    // Update knowledge level based on interactions
    if (user.interactions.length > 20) user.knowledgeLevel = 'expert'
    else if (user.interactions.length > 10) user.knowledgeLevel = 'intermediate'
    else if (user.interactions.length > 3) user.knowledgeLevel = 'beginner'
    
    // Learn preferences
    if (user.interactions.length > 5) {
      this.learning.learnUserPreferences(userId, user.interactions.slice(-10))
      user.preferences = this.learning.getUserModel(userId)
    }
    
    return user
  }
  
  detectSentiment(input) {
    const positive = /\b(cool|awesome|nice|great|amazing|love|wow|fantastic|excellent)\b/i
    const negative = /\b(stupid|dumb|bad|hate|suck|boring|terrible|awful|worst)\b/i
    const confused = /\b(confused|don't understand|what\?|huh|lost|unclear|complicated)\b/i
    const excited = /\b(excited|can't wait|amazing|incredible|wow|omg)\b/i
    
    if (excited.test(input)) return 'excited'
    if (positive.test(input)) return 'positive'
    if (negative.test(input)) return 'negative'
    if (confused.test(input)) return 'confused'
    
    return 'neutral'
  }
  
  async handleCompoundQuery(understanding, context, user) {
    const responses = []
    
    for (const intent of understanding.intents) {
      const partialResponse = await this.handleSimpleQuery(
        { type: 'simple', intent, entities: understanding.entities },
        context,
        user
      )
      responses.push(partialResponse)
    }
    
    // Combine responses intelligently
    if (responses.length === 2) {
      return responses[0] + " Also, " + responses[1].charAt(0).toLowerCase() + responses[1].slice(1)
    }
    
    return responses.join('. ')
  }
  
  async handleContextualQuery(understanding, context, user) {
    // Resolve references first
    const resolved = this.resolveContextualReferences(understanding, context)
    
    // Then handle as simple query
    return await this.handleSimpleQuery(
      { type: 'simple', intent: understanding.intent, entities: resolved.entities },
      context,
      user
    )
  }
  
  async handleSimpleQuery(understanding, context, user) {
    const intent = understanding.intent
    
    // Map intent to knowledge topics
    const topicMap = {
      'info_request': this.mapInfoRequestToTopics(understanding.entities),
      'purchase': ['how_to_get', 'price'],
      'technical': ['technical', 'compatibility'],
      'philosophy': ['philosophy', 'manifesto'],
      'greeting': ['greeting']
    }
    
    const topics = topicMap[intent?.type] || ['c2w2']
    
    // Generate response using all systems
    const response = this.generator.generateResponse(
      intent,
      context,
      user,
      this.knowledgeEngine,
      this.personality
    )
    
    return response || this.knowledgeEngine.synthesizeResponse(topics, user.knowledgeLevel, context)
  }
  
  mapInfoRequestToTopics(entities) {
    const topics = []
    
    entities.forEach(entity => {
      switch (entity.type) {
        case 'c2w2':
          topics.push('c2w2', 'overview')
          break
        case 'dfw':
          topics.push('dfw', 'company')
          break
        case 'virtual_theater':
          topics.push('virtual_theater', 'services')
          break
        case 'categories':
          topics.push('categories', entity.value)
          break
        default:
          topics.push(entity.type)
      }
    })
    
    return topics.length > 0 ? topics : ['c2w2']
  }
  
  resolveContextualReferences(understanding, context) {
    const resolved = { ...understanding }
    
    if (understanding.references && understanding.references.pronouns) {
      understanding.references.pronouns.forEach(ref => {
        if (ref.referent) {
          resolved.entities.push({
            type: ref.referent,
            value: ref.referent,
            confidence: 0.8
          })
        }
      })
    }
    
    return resolved
  }
  
  generateAmbient() {
    // Select observation based on recent topics
    const recentTopics = this.memory.contextWindow.flatMap(m => m.entities || [])
    
    const relevant = KNOWLEDGE.observations.filter(obs => {
      if (recentTopics.length === 0) return true
      
      return recentTopics.some(topic => 
        obs.toLowerCase().includes(topic.toLowerCase())
      )
    })
    
    const selected = relevant.length > 0 ? 
      relevant[Math.floor(Math.random() * relevant.length)] :
      KNOWLEDGE.observations[Math.floor(Math.random() * KNOWLEDGE.observations.length)]
    
    // Apply personality to ambient observation
    return this.personality.applyPersonality(selected)
  }
}

// Initialize the advanced system
const curatorSystem = new AdvancedCuratorSystem()

// ================== SERVER IMPLEMENTATION ==================
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
  
  // Event handling
  const eventQueue = []
  let isProcessing = false
  let lastAmbientTime = Date.now()
  
  // Check if user is bot
  function isBot(name) {
    if (!name) return false
    const n = name.toLowerCase()
    return n === 'bot' || n === 'agent' || n === 'curator' || n === 'system'
  }
  
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
    
    // Generate ambient observations
    if (eventQueue.length === 0 && now - lastAmbientTime > AMBIENT_INTERVAL) {
      const observation = curatorSystem.generateAmbient()
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
    
    // Process event queue
    if (isProcessing || eventQueue.length === 0) return
    
    const event = eventQueue.shift()
    if (!event || now - event.timestamp > 5000) return
    
    isProcessing = true
    
    // Add thinking delay
    setTimeout(() => {
      processEvent(event)
    }, THINKING_DELAY)
  })
  
  // Process individual events
  async function processEvent(event) {
    let response = ""
    let emote = null
    let displayTime = BUBBLE_TIME
    
    try {
      if (event.type === 'enter') {
        // Generate contextual greeting
        const user = curatorSystem.getOrCreateUser(event.playerId, event.playerName)
        
        if (user.interactions.length === 0) {
          response = `Hey ${event.playerName}! Welcome to the C2W2 showroom. ${KNOWLEDGE.direct_answers.this_space.substring(0, 150)}... Want the full tour?`
        } else {
          const timeOfDay = getTimeOfDay()
          response = `Welcome back ${event.playerName}! Good ${timeOfDay}. What brings you to the showroom today?`
        }
        
        emote = 'wave'
      } else if (event.type === 'chat') {
        // Generate intelligent response using advanced system
        response = await curatorSystem.process(event.text, event.playerId, event.playerName)
        
        // Select appropriate emote based on response content
        const sentiment = curatorSystem.detectSentiment(event.text)
        
        if (sentiment === 'excited' || sentiment === 'positive') {
          emote = Math.random() < 0.5 ? 'dance' : 'wave'
        } else if (response.length > 200) {
          emote = 'think'
        } else if (response.includes('?')) {
          emote = 'point'
        } else if (Math.random() < 0.2) {
          emote = randomChoice(['wave', 'think', 'dance', 'point'])
        }
      }
      
      // Calculate display time based on response length
      displayTime = Math.max(BUBBLE_TIME, Math.ceil(response.length / 25))
      
    } catch (error) {
      console.error('Error processing event:', error)
      response = curatorSystem.errorHandler.handleError(error, {})
    }
    
    // Send response
    if (response) {
      app.send('say', response)
      app.send('displayTime', displayTime)
      
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
    
    // Reset processing flag
    setTimeout(() => {
      isProcessing = false
    }, 300)
  }
}

// ================== CLIENT RENDERING ==================
if (world.isClient) {
  const config = app.config || {}
  const idleEmoteUrl = config.emote0?.url
  
  world.attach(vrm)
  
  // Wait for ready state
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
  
  // SPEECH BUBBLE SETUP
  const bubble = app.create('ui')
  bubble.width = 320
  bubble.height = 512
  bubble.size = 0.005
  bubble.pivot = 'bottom-center'
  bubble.billboard = 'y'
  bubble.justifyContent = 'flex-end'
  bubble.alignItems = 'center'
  bubble.position.y = 2.0
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
  nametag.position.y = 2.0
  vrm.add(nametag)
  
  function init() {
    world.add(vrm)
    if (idleEmoteUrl) {
      vrm.setEmote(idleEmoteUrl)
    }
  }
  
  // Animation state management
  const animState = {
    bubble: { timer: 0, duration: BUBBLE_TIME },
    emote: { timer: 0, active: false },
    look: { timer: 0, targetId: null }
  }
  
  // Handle say event
  app.on('say', text => {
    if (text) {
      bubbleText.value = text
      bubble.active = true
      nametag.active = false
      animState.bubble.timer = 0
    }
  })
  
  // Handle display time
  app.on('displayTime', duration => {
    animState.bubble.duration = duration || BUBBLE_TIME
  })
  
  // Handle emote
  app.on('emote', url => {
    if (url && vrm) {
      vrm.setEmote(url)
      animState.emote.timer = 0
      animState.emote.active = true
    }
  })
  
  // Handle look
  app.on('look', targetId => {
    animState.look = { timer: 0, targetId: targetId }
  })
  
  // Animation update loop
  app.on('update', dt => {
    // Update bubble timer
    if (bubble.active) {
      animState.bubble.timer += dt
      if (animState.bubble.timer >= animState.bubble.duration) {
        bubble.active = false
        nametag.active = true
        bubbleText.value = ''
        animState.bubble.timer = 0
      }
    }
    
    // Update emote timer
    if (animState.emote.active) {
      animState.emote.timer += dt
      if (animState.emote.timer > EMOTE_TIME) {
        if (idleEmoteUrl && vrm) {
          vrm.setEmote(idleEmoteUrl)
        }
        animState.emote.active = false
        animState.emote.timer = 0
      }
    }
    
    // Update look behavior with smooth rotation
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

// ================== CONFIGURATION ==================
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
