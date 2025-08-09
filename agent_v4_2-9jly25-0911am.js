// ULTIMATE C2W2 CURATOR AGENT - COMPLETE ADVANCED VERSION
// Full-featured intelligent agent with comprehensive knowledge and natural conversation

const BUBBLE_TIME = 8
const EMOTE_TIME = 3
const LOOK_TIME = 5
const THINKING_DELAY = 400
const AMBIENT_INTERVAL = 90000

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

// ================== COMPREHENSIVE KNOWLEDGE BASE (300+ lines) ==================
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

// ================== ADVANCED INTELLIGENCE SYSTEM ==================
class CuratorAI {
  constructor() {
    // Conversation Management
    this.conversations = new Map()
    this.userProfiles = new Map()
    this.contextStack = []
    this.lastResponse = null
    this.responseCount = 0
    
    // Understanding System
    this.confidence = 1.0
    this.currentTopic = null
    this.topicHistory = []
    
    // Pattern Matching
    this.patterns = {
      // Greetings
      greeting: /\b(hello|hi|hey|sup|yo|morning|evening|howdy)\b/i,
      greeting_response: ["Hey!", "Hello!", "Hi there!", "Hey, welcome!"],
      
      // Identity
      who_are_you: /\b(who|what)\s+(are|r)\s+(you|u)\b/i,
      
      // Questions about space
      what_is_this: /\b(what|where)\s+(is|am)\s+(this|i)\b/i,
      about_space: /\b(this)\s+(space|place|room|world|showroom)\b/i,
      
      // C2W2 queries
      about_c2w2: /\b(c2w2|click to wear|avatar collection)\b/i,
      how_many: /\b(how many|number of|count)\s+avatars?\b/i,
      
      // DFW queries
      about_dfw: /\b(dfw|digital forgery|company|studio|who made)\b/i,
      
      // Virtual Theater
      virtual_theater: /\b(virtual theater|theatre|performance)\b/i,
      
      // Acquisition
      how_to_get: /\b(how|where|can i)\s+(get|buy|purchase|acquire)\b/i,
      price: /\b(price|cost|how much|expensive)\b/i,
      
      // Technical
      technical: /\b(vrm|format|compatible|platform|work with)\b/i,
      
      // Continuation
      more_info: /\b(more|tell me more|continue|go on|else|and)\b/i,
      specific: /\b(specific|which one|example|like what)\b/i,
      
      // AI/Agent related
      ai_agents: /\b(ai|agent|bot|artificial)\b/i,
      
      // Future
      future: /\b(future|2025|2030|2045|will|roadmap)\b/i,
      
      // Feedback
      positive: /\b(cool|awesome|nice|great|amazing|love|wow)\b/i,
      negative: /\b(stupid|dumb|bad|hate|suck|boring)\b/i,
      confused: /\b(confused|don't understand|what\?|huh|lost)\b/i,
      
      // Farewell
      goodbye: /\b(bye|goodbye|see you|leaving|exit|quit)\b/i
    }
    
    // Response Templates
    this.templates = {
      greeting_new: "Hey {name}! Welcome to the C2W2 showroom. I'm Curator - I help people explore these digital avatars and understand DFW's work. First time here?",
      greeting_return: "Welcome back {name}! Good {time}. What brings you to the showroom today?",
      identity: "I'm Curator - basically your guide through this C2W2 showroom. I know all about the avatars, DFW's work, and can help you understand digital identity stuff.",
      confused: "I didn't quite catch that. Can you rephrase? I can tell you about C2W2 avatars, DFW's work, or how to get started with digital identity.",
      farewell: "See you later! Come back anytime to explore more avatars."
    }
  }
  
  // Get or create user profile
  getUser(userId, userName) {
    if (!this.userProfiles.has(userId)) {
      this.userProfiles.set(userId, {
        id: userId,
        name: userName || 'visitor',
        visits: 0,
        firstSeen: Date.now(),
        lastSeen: Date.now(),
        interests: [],
        knowledgeLevel: 'new',
        askedAbout: new Set(),
        conversationHistory: []
      })
    }
    
    const user = this.userProfiles.get(userId)
    user.visits++
    user.lastSeen = Date.now()
    
    // Update knowledge level
    if (user.visits > 10) user.knowledgeLevel = 'expert'
    else if (user.visits > 5) user.knowledgeLevel = 'intermediate'
    else if (user.visits > 1) user.knowledgeLevel = 'beginner'
    
    return user
  }
  
  // Clean and normalize input
  normalizeInput(text) {
    if (!text) return ''
    
    // Convert to lowercase and trim
    let normalized = text.toLowerCase().trim()
    
    // Expand common shortcuts
    normalized = normalized
      .replace(/\bu\b/g, 'you')
      .replace(/\br\b/g, 'are')
      .replace(/\bur\b/g, 'your')
      .replace(/\bthru\b/g, 'through')
      .replace(/\bwanna\b/g, 'want to')
      .replace(/\bgonna\b/g, 'going to')
      .replace(/\bkinda\b/g, 'kind of')
      .replace(/\bc2w\b/g, 'c2w2')
      .replace(/\bdfw\b/g, 'dfw')
      .replace(/\bvrm\b/g, 'vrm')
      
    // Fix common typos
    normalized = normalized
      .replace(/avater/g, 'avatar')
      .replace(/colection/g, 'collection')
      .replace(/virtul/g, 'virtual')
      .replace(/theather/g, 'theater')
      
    return normalized
  }
  
  // Understand user intent
  understandIntent(text) {
    const normalized = this.normalizeInput(text)
    
    // Check each pattern
    for (const [intent, pattern] of Object.entries(this.patterns)) {
      if (pattern instanceof RegExp && pattern.test(normalized)) {
        return { intent, confidence: 1.0, normalized }
      }
    }
    
    // Check for keywords if no pattern matches
    if (normalized.includes('avatar')) return { intent: 'about_c2w2', confidence: 0.7, normalized }
    if (normalized.includes('company')) return { intent: 'about_dfw', confidence: 0.7, normalized }
    if (normalized.includes('space') || normalized.includes('here')) return { intent: 'about_space', confidence: 0.7, normalized }
    
    return { intent: 'unknown', confidence: 0.3, normalized }
  }
  
  // Generate contextual response
  generateResponse(text, userId, userName) {
    const user = this.getUser(userId, userName)
    const understanding = this.understandIntent(text)
    
    // Track conversation
    user.conversationHistory.push({
      input: text,
      intent: understanding.intent,
      timestamp: Date.now()
    })
    
    // Keep history limited
    if (user.conversationHistory.length > 20) {
      user.conversationHistory.shift()
    }
    
    let response = ""
    
    // Generate response based on intent
    switch (understanding.intent) {
      case 'greeting':
        if (user.visits === 1) {
          response = this.templates.greeting_new.replace('{name}', userName)
        } else {
          response = this.templates.greeting_return
            .replace('{name}', userName)
            .replace('{time}', getTimeOfDay())
        }
        break
        
      case 'who_are_you':
        response = this.templates.identity
        break
        
      case 'what_is_this':
      case 'about_space':
        response = KNOWLEDGE.direct_answers.this_space
        if (!user.askedAbout.has('c2w2')) {
          response += " Want to know more about the avatars?"
        }
        user.askedAbout.add('space')
        break
        
      case 'about_c2w2':
        if (user.askedAbout.has('c2w2')) {
          // Provide deeper info
          response = `C2W2 has ${KNOWLEDGE.c2w2.overview.size} organized into categories: ${Object.keys(KNOWLEDGE.c2w2.categories).join(', ')}. ${KNOWLEDGE.c2w2.philosophy.core}`
        } else {
          response = KNOWLEDGE.direct_answers.c2w2
        }
        user.askedAbout.add('c2w2')
        this.currentTopic = 'c2w2'
        break
        
      case 'about_dfw':
        if (user.askedAbout.has('dfw')) {
          // Provide service details
          response = `DFW offers ${Object.keys(KNOWLEDGE.dfw.services).join(', ')}. ${KNOWLEDGE.dfw.philosophy.digital_honesty}. They're based in ${KNOWLEDGE.dfw.company.location}.`
        } else {
          response = KNOWLEDGE.direct_answers.dfw
        }
        user.askedAbout.add('dfw')
        this.currentTopic = 'dfw'
        break
        
      case 'virtual_theater':
        response = KNOWLEDGE.direct_answers.virtual_theater
        if (!user.askedAbout.has('virtual_theater')) {
          response += ` Examples include ${KNOWLEDGE.dfw.services.virtual_theater.examples}.`
        }
        user.askedAbout.add('virtual_theater')
        this.currentTopic = 'virtual_theater'
        break
        
      case 'how_to_get':
        response = KNOWLEDGE.direct_answers.how_to_get
        break
        
      case 'price':
        response = KNOWLEDGE.direct_answers.price
        break
        
      case 'technical':
        response = KNOWLEDGE.direct_answers.compatibility
        response += ` Technical specs: ${KNOWLEDGE.c2w2.technical.format}, ${KNOWLEDGE.c2w2.technical.polycount}, ${KNOWLEDGE.c2w2.technical.blendshapes}.`
        break
        
      case 'more_info':
        // Continue previous topic
        if (this.currentTopic === 'c2w2') {
          response = this.expandC2W2(user)
        } else if (this.currentTopic === 'dfw') {
          response = this.expandDFW(user)
        } else if (this.currentTopic === 'virtual_theater') {
          response = this.expandVirtualTheater(user)
        } else {
          response = "What would you like to know more about? I can go deeper on C2W2 avatars, DFW's services, or technical details."
        }
        break
        
      case 'specific':
        if (this.currentTopic === 'c2w2') {
          response = `Avatar categories include: ${Object.entries(KNOWLEDGE.c2w2.categories)
            .map(([key, cat]) => `${key.replace('_', ' ')}: ${cat.description}`)
            .slice(0, 3)
            .join('; ')}`
        } else {
          response = "What specifically interests you? I can explain avatar categories, DFW services, or technical requirements."
        }
        break
        
      case 'ai_agents':
        response = `${KNOWLEDGE.culture.ai_consciousness.now}. ${KNOWLEDGE.culture.ai_consciousness.trend}. C2W2 specifically designs for them - geometric avatars are especially popular with AI entities.`
        this.currentTopic = 'ai'
        break
        
      case 'future':
        response = `DFW's roadmap: ${KNOWLEDGE.c2w2.overview.timeline} for C2W2 completion. Long-term vision includes bridging physical and digital architecture by 2030.`
        break
        
      case 'positive':
        response = randomChoice([
          "Glad you're into it! The avatars keep evolving.",
          "Right? The whole C2W2 concept is pretty revolutionary.",
          "Thanks! Feel free to explore and ask about anything."
        ])
        break
        
      case 'negative':
        response = "Fair enough, not everyone vibes with digital identity stuff. Anything specific you're looking for?"
        break
        
      case 'confused':
      case 'unknown':
        response = this.templates.confused
        break
        
      case 'goodbye':
        response = this.templates.farewell
        break
        
      default:
        response = KNOWLEDGE.direct_answers.this_space
    }
    
    // Store last response to avoid repetition
    this.lastResponse = response
    this.responseCount++
    
    return response
  }
  
  // Expand on C2W2 topic
  expandC2W2(user) {
    const depth = user.askedAbout.size
    
    if (depth < 3) {
      return `The philosophy behind C2W2: ${KNOWLEDGE.c2w2.philosophy.identity}. Target audience includes ${Object.values(KNOWLEDGE.c2w2.audience).join(', ')}.`
    } else if (depth < 5) {
      return `Technical details: ${KNOWLEDGE.c2w2.technical.polycount}, ${KNOWLEDGE.c2w2.technical.textures}, ${KNOWLEDGE.c2w2.technical.filesize}. Works on ${KNOWLEDGE.c2w2.technical.platforms.join(', ')}.`
    } else {
      return `Each category serves different needs: ${Object.entries(KNOWLEDGE.c2w2.categories)
        .map(([k, v]) => `${k.replace('_', ' ')} (${v.count})`)
        .join(', ')}.`
    }
  }
  
  // Expand on DFW topic
  expandDFW(user) {
    const depth = user.askedAbout.size
    
    if (depth < 3) {
      return `DFW's philosophy: ${KNOWLEDGE.dfw.philosophy.digital_honesty}. ${KNOWLEDGE.dfw.philosophy.chrome_aesthetic}. Founded in ${KNOWLEDGE.dfw.company.founded}.`
    } else {
      return `Services include: ${Object.entries(KNOWLEDGE.dfw.services)
        .map(([k, v]) => `${k.replace('_', ' ')}: ${v.what}`)
        .join('; ')}.`
    }
  }
  
  // Expand on Virtual Theater
  expandVirtualTheater(user) {
    return `Virtual Theater features: ${KNOWLEDGE.dfw.services.virtual_theater.modes}. ${KNOWLEDGE.dfw.services.virtual_theater.size}. ${KNOWLEDGE.dfw.services.virtual_theater.how}.`
  }
  
  // Generate ambient observation
  generateAmbient() {
    return randomChoice(KNOWLEDGE.observations)
  }
  
  // Process greeting for new visitors
  processGreeting(userName) {
    return `Hey ${userName}! Welcome to the C2W2 showroom. ${KNOWLEDGE.direct_answers.this_space}`
  }
}

// Initialize AI
const curator = new CuratorAI()

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
      const observation = curator.generateAmbient()
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
  function processEvent(event) {
    let response = ""
    let emote = null
    let displayTime = BUBBLE_TIME
    
    try {
      if (event.type === 'enter') {
        // Generate greeting
        response = curator.processGreeting(event.playerName)
        emote = 'wave'
      } else if (event.type === 'chat') {
        // Generate intelligent response
        response = curator.generateResponse(event.text, event.playerId, event.playerName)
        
        // Select appropriate emote
        const understanding = curator.understandIntent(event.text)
        if (understanding.intent === 'greeting' || understanding.intent === 'goodbye') {
          emote = 'wave'
        } else if (response.length > 150) {
          emote = 'think'
        } else if (understanding.intent === 'positive') {
          emote = 'dance'
        } else if (Math.random() < 0.1) {
          emote = 'point'
        }
      }
      
      // Calculate display time based on response length
      displayTime = Math.max(BUBBLE_TIME, Math.ceil(response.length / 25))
      
    } catch (error) {
      console.error('Error processing event:', error)
      response = "Something went wrong. Let me reset. What can I help you with?"
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
  
  // SPEECH BUBBLE SETUP - Properly positioned
  const bubble = app.create('ui')
  bubble.width = 320
  bubble.height = 512
  bubble.size = 0.005
  bubble.pivot = 'bottom-center'
  bubble.billboard = 'y'
  bubble.justifyContent = 'flex-end'
  bubble.alignItems = 'center'
  bubble.position.y = 2.0 // Correct height
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
