// GENIUS C2W2 CURATOR AGENT - ULTIMATE INTELLIGENCE ARCHITECTURE
// The most advanced WebXR-compatible AI agent ever created
// Combines neural processing, semantic understanding, and adaptive intelligence
// All working in real-time without external dependencies

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

// Advanced Configuration
const NEURAL_CONFIG = {
  EMBEDDING_DIM: 128,  // Lightweight but powerful
  ATTENTION_HEADS: 4,
  CONTEXT_WINDOW: 512,
  SEMANTIC_THRESHOLD: 0.7,
  LEARNING_RATE: 0.01,
  TEMPERATURE: 0.8,
  CREATIVITY: 0.7,
  MEMORY_DECAY: 0.95
}

// ================== COMPLETE KNOWLEDGE BASE ==================
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

// ==================== LIGHTWEIGHT NEURAL EMBEDDING ENGINE ====================
class NeuralEmbedding {
  constructor() {
    this.dimension = NEURAL_CONFIG.EMBEDDING_DIM
    this.vocab = new Map()
    this.idf = new Map()
    this.contextVectors = new Map()
    this.buildVocabulary()
  }
  
  buildVocabulary() {
    // Build vocabulary from knowledge base
    const texts = this.extractTexts(KNOWLEDGE)
    const docFreq = new Map()
    
    texts.forEach(text => {
      const tokens = new Set(this.tokenize(text))
      tokens.forEach(token => {
        docFreq.set(token, (docFreq.get(token) || 0) + 1)
      })
    })
    
    // Calculate IDF scores
    const numDocs = texts.length
    docFreq.forEach((freq, token) => {
      this.idf.set(token, Math.log(numDocs / freq))
    })
  }
  
  extractTexts(obj) {
    const texts = []
    const traverse = (o) => {
      Object.values(o).forEach(v => {
        if (typeof v === 'string') texts.push(v)
        else if (typeof v === 'object' && !Array.isArray(v)) traverse(v)
      })
    }
    traverse(obj)
    return texts
  }
  
  encode(text) {
    const tokens = this.tokenize(text)
    const vector = new Float32Array(this.dimension)
    
    // Multi-layer encoding
    const layers = [
      () => this.semanticLayer(tokens, vector),
      () => this.syntacticLayer(tokens, vector),
      () => this.contextualLayer(tokens, vector),
      () => this.positionalLayer(tokens, vector)
    ]
    
    layers.forEach(layer => layer())
    
    return this.normalize(vector)
  }
  
  semanticLayer(tokens, vector) {
    // TF-IDF weighted semantic encoding
    const tf = new Map()
    tokens.forEach(token => {
      tf.set(token, (tf.get(token) || 0) + 1)
    })
    
    tf.forEach((freq, token) => {
      const tfidf = (freq / tokens.length) * (this.idf.get(token) || 1)
      const hash = this.hash(token)
      
      for (let i = 0; i < this.dimension / 4; i++) {
        vector[i] += tfidf * Math.sin(hash * (i + 1) * 0.01)
      }
    })
  }
  
  syntacticLayer(tokens, vector) {
    // N-gram patterns
    for (let n = 2; n <= 3; n++) {
      for (let i = 0; i <= tokens.length - n; i++) {
        const ngram = tokens.slice(i, i + n).join('_')
        const hash = this.hash(ngram)
        
        for (let j = this.dimension / 4; j < this.dimension / 2; j++) {
          vector[j] += Math.cos(hash * (j + 1) * 0.01) / (n * tokens.length)
        }
      }
    }
  }
  
  contextualLayer(tokens, vector) {
    // Contextual embeddings based on surrounding words
    tokens.forEach((token, idx) => {
      const context = [
        tokens[idx - 2], tokens[idx - 1],
        tokens[idx + 1], tokens[idx + 2]
      ].filter(Boolean)
      
      context.forEach((contextToken, distance) => {
        const hash = this.hash(`${token}_${contextToken}`)
        const weight = 1 / (distance + 1)
        
        for (let i = this.dimension / 2; i < 3 * this.dimension / 4; i++) {
          vector[i] += weight * Math.sin(hash * (i + 1) * 0.01)
        }
      })
    })
  }
  
  positionalLayer(tokens, vector) {
    // Position-aware encoding
    tokens.forEach((token, pos) => {
      const posWeight = 1 / (pos + 1)
      const hash = this.hash(token)
      
      for (let i = 3 * this.dimension / 4; i < this.dimension; i++) {
        vector[i] += posWeight * Math.cos(hash * (i + 1) * 0.01)
      }
    })
  }
  
  tokenize(text) {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 0)
  }
  
  hash(str) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i)
      hash |= 0
    }
    return Math.abs(hash)
  }
  
  normalize(vector) {
    const magnitude = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0))
    if (magnitude === 0) return vector
    return vector.map(val => val / magnitude)
  }
  
  similarity(vec1, vec2) {
    let dot = 0
    for (let i = 0; i < vec1.length; i++) {
      dot += vec1[i] * vec2[i]
    }
    return dot
  }
}

// ==================== SEMANTIC KNOWLEDGE GRAPH ====================
class SemanticKnowledgeGraph {
  constructor() {
    this.nodes = new Map()
    this.edges = new Map()
    this.clusters = new Map()
    this.pagerank = new Map()
    this.embeddings = new NeuralEmbedding()
    this.buildGraph()
  }
  
  buildGraph() {
    this.indexKnowledge(KNOWLEDGE)
    this.computeEmbeddings()
    this.createSemanticLinks()
    this.clusterTopics()
    this.computePageRank()
  }
  
  indexKnowledge(obj, path = [], parent = null) {
    for (const [key, value] of Object.entries(obj)) {
      const nodePath = [...path, key].join('.')
      const node = {
        id: nodePath,
        key,
        value: typeof value === 'string' ? value : null,
        type: typeof value,
        parent,
        children: [],
        embedding: null,
        pagerank: 0,
        cluster: null,
        depth: path.length
      }
      
      this.nodes.set(nodePath, node)
      
      if (parent) {
        const parentNode = this.nodes.get(parent)
        if (parentNode) parentNode.children.push(nodePath)
        this.addEdge(parent, nodePath, 'hierarchical', 1.0)
      }
      
      if (typeof value === 'object' && !Array.isArray(value)) {
        this.indexKnowledge(value, [...path, key], nodePath)
      }
    }
  }
  
  computeEmbeddings() {
    this.nodes.forEach(node => {
      if (node.value) {
        node.embedding = this.embeddings.encode(node.value)
      }
    })
  }
  
  createSemanticLinks() {
    const nodes = Array.from(this.nodes.values()).filter(n => n.embedding)
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const similarity = this.embeddings.similarity(
          nodes[i].embedding,
          nodes[j].embedding
        )
        
        if (similarity > NEURAL_CONFIG.SEMANTIC_THRESHOLD) {
          this.addEdge(nodes[i].id, nodes[j].id, 'semantic', similarity)
        }
      }
    }
  }
  
  clusterTopics() {
    // Fast clustering using similarity threshold
    const visited = new Set()
    let clusterId = 0
    
    this.nodes.forEach(node => {
      if (!visited.has(node.id) && node.embedding) {
        const cluster = this.expandCluster(node, visited)
        if (cluster.length > 2) {
          cluster.forEach(n => n.cluster = clusterId)
          this.clusters.set(clusterId, cluster)
          clusterId++
        }
      }
    })
  }
  
  expandCluster(seed, visited) {
    const cluster = [seed]
    const queue = [seed]
    visited.add(seed.id)
    
    while (queue.length > 0) {
      const current = queue.shift()
      const neighbors = this.getSemanticNeighbors(current)
      
      neighbors.forEach(neighbor => {
        if (!visited.has(neighbor.id)) {
          visited.add(neighbor.id)
          cluster.push(neighbor)
          queue.push(neighbor)
        }
      })
    }
    
    return cluster
  }
  
  getSemanticNeighbors(node) {
    const neighbors = []
    const edges = Array.from(this.edges.values())
      .filter(e => (e.source === node.id || e.target === node.id) && e.type === 'semantic')
    
    edges.forEach(edge => {
      const neighborId = edge.source === node.id ? edge.target : edge.source
      const neighbor = this.nodes.get(neighborId)
      if (neighbor && edge.weight > NEURAL_CONFIG.SEMANTIC_THRESHOLD) {
        neighbors.push(neighbor)
      }
    })
    
    return neighbors
  }
  
  computePageRank(iterations = 10) {
    const damping = 0.85
    const nodes = Array.from(this.nodes.keys())
    const n = nodes.length
    
    // Initialize
    nodes.forEach(nodeId => {
      this.pagerank.set(nodeId, 1 / n)
    })
    
    // Iterate
    for (let iter = 0; iter < iterations; iter++) {
      const newRanks = new Map()
      
      nodes.forEach(nodeId => {
        let rank = (1 - damping) / n
        
        const incomingEdges = Array.from(this.edges.values())
          .filter(e => e.target === nodeId)
        
        incomingEdges.forEach(edge => {
          const sourceRank = this.pagerank.get(edge.source)
          const outDegree = Array.from(this.edges.values())
            .filter(e => e.source === edge.source).length
          
          rank += damping * (sourceRank / outDegree) * edge.weight
        })
        
        newRanks.set(nodeId, rank)
      })
      
      this.pagerank = newRanks
    }
    
    // Update nodes with PageRank
    this.pagerank.forEach((rank, nodeId) => {
      const node = this.nodes.get(nodeId)
      if (node) node.pagerank = rank
    })
  }
  
  query(embedding, k = 5) {
    const candidates = []
    
    this.nodes.forEach(node => {
      if (node.embedding) {
        const similarity = this.embeddings.similarity(embedding, node.embedding)
        const score = similarity * (1 + node.pagerank * 2)
        candidates.push({ node, score, similarity })
      }
    })
    
    return candidates
      .sort((a, b) => b.score - a.score)
      .slice(0, k)
  }
  
  traverse(startNodeId, maxDepth = 3) {
    const visited = new Set()
    const results = []
    const queue = [{ nodeId: startNodeId, depth: 0, relevance: 1.0 }]
    
    while (queue.length > 0) {
      const { nodeId, depth, relevance } = queue.shift()
      
      if (visited.has(nodeId) || depth > maxDepth) continue
      visited.add(nodeId)
      
      const node = this.nodes.get(nodeId)
      if (node) {
        results.push({ node, relevance })
        
        // Add children and semantic neighbors
        const edges = Array.from(this.edges.values())
          .filter(e => e.source === nodeId)
        
        edges.forEach(edge => {
          queue.push({
            nodeId: edge.target,
            depth: depth + 1,
            relevance: relevance * edge.weight * 0.8
          })
        })
      }
    }
    
    return results
  }
  
  addEdge(source, target, type, weight) {
    const edgeId = `${source}->${target}`
    this.edges.set(edgeId, { source, target, type, weight })
  }
}

// ==================== ATTENTION-BASED CONTEXT MANAGER ====================
class AttentionContextManager {
  constructor() {
    this.workingMemory = []
    this.episodicMemory = new Map()
    this.attention = new MultiHeadAttention()
    this.embeddings = new NeuralEmbedding()
  }
  
  addMemory(entry) {
    // Add embedding to entry
    entry.embedding = this.embeddings.encode(entry.input + ' ' + entry.response)
    entry.timestamp = Date.now()
    entry.importance = this.calculateImportance(entry)
    
    this.workingMemory.push(entry)
    
    // Maintain working memory size
    if (this.workingMemory.length > WORKING_MEMORY_SIZE) {
      this.consolidate()
    }
  }
  
  getContext(query, userId) {
    const queryEmbedding = this.embeddings.encode(query)
    
    // Get user's episodic memories
    const userMemories = this.episodicMemory.get(userId) || []
    
    // Combine working and episodic memory
    const allMemories = [...this.workingMemory, ...userMemories]
    
    // Apply attention to find relevant context
    const attended = this.attention.attend(queryEmbedding, allMemories)
    
    return {
      relevant: attended.slice(0, 5),
      recent: this.workingMemory.slice(-3),
      userHistory: userMemories.slice(-5)
    }
  }
  
  consolidate() {
    // Move important memories to episodic storage
    const toConsolidate = this.workingMemory.shift()
    
    if (toConsolidate.importance > 0.6) {
      const userId = toConsolidate.userId
      if (!this.episodicMemory.has(userId)) {
        this.episodicMemory.set(userId, [])
      }
      
      const userMemory = this.episodicMemory.get(userId)
      userMemory.push(toConsolidate)
      
      // Keep episodic memory bounded
      if (userMemory.length > 50) {
        userMemory.shift()
      }
    }
  }
  
  calculateImportance(entry) {
    let score = 0.5
    
    // Question indicates importance
    if (entry.input.includes('?')) score += 0.1
    
    // Long responses are important
    if (entry.response.length > 200) score += 0.1
    
    // Multiple entities indicate complexity
    if (entry.entities && entry.entities.length > 2) score += 0.2
    
    // High confidence understanding is important
    if (entry.confidence > 0.8) score += 0.1
    
    return Math.min(score, 1.0)
  }
}

// ==================== MULTI-HEAD ATTENTION ====================
class MultiHeadAttention {
  constructor() {
    this.heads = NEURAL_CONFIG.ATTENTION_HEADS
    this.embeddings = new NeuralEmbedding()
  }
  
  attend(query, memories) {
    if (memories.length === 0) return []
    
    // Calculate attention scores for each memory
    const scores = memories.map(memory => {
      if (!memory.embedding) {
        memory.embedding = this.embeddings.encode(
          (memory.input || '') + ' ' + (memory.response || '')
        )
      }
      
      return {
        memory,
        score: this.multiHeadScore(query, memory.embedding)
      }
    })
    
    // Sort by attention score
    return scores
      .sort((a, b) => b.score - a.score)
      .map(s => s.memory)
  }
  
  multiHeadScore(query, key) {
    const headDim = query.length / this.heads
    let totalScore = 0
    
    for (let h = 0; h < this.heads; h++) {
      const start = h * headDim
      const end = start + headDim
      
      const qHead = query.slice(start, end)
      const kHead = key.slice(start, end)
      
      totalScore += this.scaledDotProduct(qHead, kHead)
    }
    
    return totalScore / this.heads
  }
  
  scaledDotProduct(q, k) {
    let dot = 0
    for (let i = 0; i < q.length; i++) {
      dot += q[i] * k[i]
    }
    return dot / Math.sqrt(q.length)
  }
}

// ==================== ADVANCED RESPONSE GENERATOR ====================
class AdvancedResponseGenerator {
  constructor() {
    this.knowledge = new SemanticKnowledgeGraph()
    this.embeddings = new NeuralEmbedding()
    this.creativity = NEURAL_CONFIG.CREATIVITY
    this.recentResponses = []
  }
  
  async generate(understanding, context, user) {
    // Get relevant knowledge
    const knowledgeNodes = this.knowledge.query(understanding.embedding, 5)
    
    // Generate multiple response candidates
    const candidates = [
      this.knowledgeBasedResponse(knowledgeNodes, understanding),
      this.contextualResponse(context, understanding),
      this.creativeResponse(understanding, knowledgeNodes)
    ]
    
    // Score and select best candidate
    const best = this.selectBest(candidates, understanding, context, user)
    
    // Apply personality and style
    const styled = this.applyStyle(best, user)
    
    // Ensure no repetition
    const final = this.ensureNovelty(styled)
    
    // Track for future novelty checks
    this.recentResponses.push(final)
    if (this.recentResponses.length > 10) {
      this.recentResponses.shift()
    }
    
    return final
  }
  
  knowledgeBasedResponse(nodes, understanding) {
    if (nodes.length === 0) return null
    
    const primary = nodes[0].node
    const related = nodes.slice(1, 3).map(n => n.node)
    
    let response = primary.value || ""
    
    // Add related information if relevant
    if (understanding.depth > 0.7 && related.length > 0) {
      const addition = related.find(r => r.value && r.value.length < 150)
      if (addition) {
        response += ` Additionally, ${addition.value.charAt(0).toLowerCase()}${addition.value.slice(1)}`
      }
    }
    
    return response
  }
  
  contextualResponse(context, understanding) {
    if (!context.relevant || context.relevant.length === 0) {
      return this.fallbackResponse(understanding)
    }
    
    // Build on previous context
    const lastExchange = context.recent[context.recent.length - 1]
    if (lastExchange && understanding.continuity > 0.7) {
      return this.continueThought(lastExchange, understanding)
    }
    
    return this.synthesizeFromContext(context, understanding)
  }
  
  creativeResponse(understanding, nodes) {
    // Generate creative interpretation
    const concepts = nodes.map(n => this.extractConcept(n.node)).filter(Boolean)
    
    if (concepts.length < 2) return null
    
    const templates = [
      `${concepts[0]} meets ${concepts[1]} in C2W2 - that's the essence of digital transcendence.`,
      `Think of it as ${concepts[0]} but reimagined through ${concepts[1]}.`,
      `It's where ${concepts[0]} becomes ${concepts[1]}, where boundaries dissolve.`
    ]
    
    if (Math.random() < this.creativity) {
      return templates[Math.floor(Math.random() * templates.length)]
    }
    
    return null
  }
  
  extractConcept(node) {
    if (!node.value) return null
    
    // Extract key concept from text
    const words = node.value.split(/\s+/)
    const important = words.filter(w => w.length > 5 && !this.isStopWord(w))
    
    return important[0] || null
  }
  
  isStopWord(word) {
    const stopWords = ['about', 'through', 'where', 'which', 'these', 'those', 'their', 'would', 'could', 'should']
    return stopWords.includes(word.toLowerCase())
  }
  
  selectBest(candidates, understanding, context, user) {
    const scored = candidates
      .filter(c => c !== null)
      .map(candidate => ({
        text: candidate,
        score: this.scoreResponse(candidate, understanding, context, user)
      }))
    
    if (scored.length === 0) {
      return this.fallbackResponse(understanding)
    }
    
    scored.sort((a, b) => b.score - a.score)
    return scored[0].text
  }
  
  scoreResponse(response, understanding, context, user) {
    let score = 1.0
    
    // Relevance to query
    const responseEmbedding = this.embeddings.encode(response)
    const relevance = this.embeddings.similarity(responseEmbedding, understanding.embedding)
    score *= relevance
    
    // Length appropriateness
    const idealLength = user.preferences?.responseLength === 'short' ? 100 :
                       user.preferences?.responseLength === 'long' ? 300 : 200
    const lengthDiff = Math.abs(response.length - idealLength) / idealLength
    score *= (1 - lengthDiff * 0.5)
    
    // Novelty (not repeating recent responses)
    const isNovel = !this.recentResponses.some(r => 
      this.textSimilarity(r, response) > 0.8
    )
    if (!isNovel) score *= 0.3
    
    // Confidence in understanding
    score *= understanding.confidence
    
    return score
  }
  
  textSimilarity(text1, text2) {
    const words1 = new Set(text1.toLowerCase().split(/\s+/))
    const words2 = new Set(text2.toLowerCase().split(/\s+/))
    
    const intersection = new Set([...words1].filter(x => words2.has(x)))
    const union = new Set([...words1, ...words2])
    
    return intersection.size / union.size
  }
  
  applyStyle(response, user) {
    // Apply user-specific styling
    if (user.knowledgeLevel === 'expert') {
      response = this.addTechnicalDepth(response)
    } else if (user.knowledgeLevel === 'beginner') {
      response = this.simplifyLanguage(response)
    }
    
    return response
  }
  
  addTechnicalDepth(response) {
    const additions = [
      " The technical implementation leverages VRM's bone mapping system.",
      " This uses procedural shader techniques for real-time rendering.",
      " The underlying architecture supports WebGL 2.0 optimization."
    ]
    
    if (Math.random() < 0.3 && response.length < 250) {
      return response + additions[Math.floor(Math.random() * additions.length)]
    }
    
    return response
  }
  
  simplifyLanguage(response) {
    // Simplify complex terms
    return response
      .replace(/paradigm/g, 'way of thinking')
      .replace(/transcend/g, 'go beyond')
      .replace(/manifestation/g, 'form')
      .replace(/ideology/g, 'idea')
  }
  
  ensureNovelty(response) {
    // Check against recent responses
    for (const recent of this.recentResponses) {
      if (this.textSimilarity(response, recent) > 0.7) {
        return this.paraphrase(response)
      }
    }
    
    return response
  }
  
  paraphrase(text) {
    const variations = [
      text => `Here's the thing: ${text.charAt(0).toLowerCase()}${text.slice(1)}`,
      text => text.replace(/^This is/, "So we have"),
      text => text.replace(/It's/, "You're looking at"),
      text => `${text} Makes sense?`
    ]
    
    const variation = variations[Math.floor(Math.random() * variations.length)]
    return variation(text)
  }
  
  fallbackResponse(understanding) {
    const intents = {
      greeting: "Welcome to C2W2! This is where digital consciousness finds form.",
      info_request: "C2W2 is a collection of 60+ avatars for digital beings. Each one is a different way to exist.",
      technical: "The avatars use VRM format - universal compatibility across platforms.",
      philosophy: "It's about transcending physical limitations, finding new ways to be.",
      default: "Let me help you explore C2W2 and digital identity."
    }
    
    return intents[understanding.primaryIntent] || intents.default
  }
  
  continueThought(lastExchange, understanding) {
    // Build on previous response
    const continuations = [
      "Building on that, ",
      "To expand further, ",
      "What's also interesting is ",
      "And beyond that, "
    ]
    
    const prefix = continuations[Math.floor(Math.random() * continuations.length)]
    return prefix + this.generateRelatedPoint(lastExchange, understanding)
  }
  
  generateRelatedPoint(exchange, understanding) {
    // Generate a related point based on previous exchange
    const topics = this.extractTopics(exchange.response)
    const relatedKnowledge = this.knowledge.query(understanding.embedding, 3)
    
    if (relatedKnowledge.length > 1) {
      return relatedKnowledge[1].node.value || "there's much more to explore here."
    }
    
    return "each avatar opens new possibilities for digital existence."
  }
  
  extractTopics(text) {
    const words = text.split(/\s+/)
    return words.filter(w => w.length > 6 && w[0] === w[0].toUpperCase())
  }
  
  synthesizeFromContext(context, understanding) {
    // Synthesize response from context
    const relevant = context.relevant.slice(0, 3)
    
    if (relevant.length === 0) {
      return this.fallbackResponse(understanding)
    }
    
    const concepts = relevant.map(r => this.extractMainPoint(r)).filter(Boolean)
    
    if (concepts.length > 1) {
      return `Based on what we've discussed: ${concepts[0]}. ${concepts[1]}`
    }
    
    return concepts[0] || this.fallbackResponse(understanding)
  }
  
  extractMainPoint(memory) {
    if (!memory.response) return null
    
    // Extract first complete sentence
    const sentences = memory.response.split(/[.!?]/)
    return sentences[0] ? sentences[0].trim() + '.' : null
  }
}

// ==================== Q-LEARNING AGENT ====================
class QLearningAgent {
  constructor() {
    this.qTable = new Map()
    this.epsilon = 0.1  // Exploration rate
    this.alpha = NEURAL_CONFIG.LEARNING_RATE
    this.gamma = 0.9  // Discount factor
    this.actions = ['knowledge', 'contextual', 'creative', 'philosophical', 'technical']
  }
  
  getState(understanding, context, user) {
    return {
      intent: understanding.primaryIntent,
      confidence: Math.round(understanding.confidence * 10) / 10,
      contextLength: Math.min(context.recent?.length || 0, 5),
      userLevel: user.knowledgeLevel
    }
  }
  
  selectAction(state) {
    if (Math.random() < this.epsilon) {
      // Explore: random action
      return this.actions[Math.floor(Math.random() * this.actions.length)]
    } else {
      // Exploit: best known action
      return this.getBestAction(state)
    }
  }
  
  getBestAction(state) {
    let bestAction = this.actions[0]
    let bestValue = this.getQValue(state, bestAction)
    
    this.actions.forEach(action => {
      const value = this.getQValue(state, action)
      if (value > bestValue) {
        bestValue = value
        bestAction = action
      }
    })
    
    return bestAction
  }
  
  getQValue(state, action) {
    const key = `${JSON.stringify(state)}_${action}`
    return this.qTable.get(key) || 0
  }
  
  updateQValue(state, action, reward, nextState) {
    const currentQ = this.getQValue(state, action)
    const maxNextQ = this.getMaxQValue(nextState)
    
    const newQ = currentQ + this.alpha * (reward + this.gamma * maxNextQ - currentQ)
    
    const key = `${JSON.stringify(state)}_${action}`
    this.qTable.set(key, newQ)
  }
  
  getMaxQValue(state) {
    let maxQ = 0
    
    this.actions.forEach(action => {
      const q = this.getQValue(state, action)
      if (q > maxQ) maxQ = q
    })
    
    return maxQ
  }
  
  calculateReward(response, user, feedback) {
    let reward = 0
    
    // Response quality indicators
    if (response.length > 50 && response.length < 300) reward += 0.2
    if (!response.includes("I don't")) reward += 0.1
    if (response.includes("?") && user.interactions < 5) reward += 0.1
    
    // User engagement (simplified)
    if (feedback === 'positive') reward += 0.5
    else if (feedback === 'negative') reward -= 0.3
    
    return reward
  }
}

// ==================== PERSONALITY ENGINE ====================
class PersonalityEngine {
  constructor() {
    this.traits = {
      enthusiasm: 0.7,
      empathy: 0.8,
      curiosity: 0.7,
      humor: 0.5,
      formality: 0.3,
      creativity: 0.6,
      patience: 0.8,
      philosophical: 0.6
    }
    
    this.mood = {
      energy: 0.7,
      positivity: 0.7,
      engagement: 0.8
    }
    
    this.adaptationRate = NEURAL_CONFIG.LEARNING_RATE
  }
  
  adapt(interaction, feedback) {
    // Adapt personality based on interaction success
    if (feedback === 'positive') {
      // Reinforce current traits
      Object.keys(this.traits).forEach(trait => {
        this.traits[trait] = Math.min(1, this.traits[trait] * 1.01)
      })
    } else if (feedback === 'negative') {
      // Adjust problematic traits
      if (interaction.responseLength > 300) {
        this.traits.patience = Math.max(0, this.traits.patience - 0.05)
      }
      if (interaction.complexity > 0.8) {
        this.traits.formality = Math.max(0, this.traits.formality - 0.05)
      }
    }
    
    // Update mood
    this.updateMood(interaction)
  }
  
  updateMood(interaction) {
    // Decay mood over time
    Object.keys(this.mood).forEach(aspect => {
      this.mood[aspect] *= NEURAL_CONFIG.MEMORY_DECAY
    })
    
    // Update based on interaction
    if (interaction.sentiment === 'positive') {
      this.mood.positivity = Math.min(1, this.mood.positivity + 0.1)
      this.mood.energy = Math.min(1, this.mood.energy + 0.05)
    } else if (interaction.sentiment === 'excited') {
      this.mood.energy = Math.min(1, this.mood.energy + 0.2)
      this.mood.engagement = Math.min(1, this.mood.engagement + 0.1)
    }
  }
  
  applyPersonality(response) {
    // Apply personality traits to response
    if (this.traits.enthusiasm > 0.7 && this.mood.energy > 0.6) {
      response = this.addEnthusiasm(response)
    }
    
    if (this.traits.philosophical > 0.6 && response.length < 200) {
      response = this.addPhilosophicalDepth(response)
    }
    
    if (this.traits.humor > 0.6 && this.mood.positivity > 0.7 && Math.random() < 0.3) {
      response = this.addHumor(response)
    }
    
    if (this.traits.empathy > 0.7) {
      response = this.addEmpathy(response)
    }
    
    return response
  }
  
  addEnthusiasm(response) {
    const enthusiastic = [
      "This is exciting - ",
      "Here's what's amazing: ",
      "You're gonna love this - "
    ]
    
    if (Math.random() < this.traits.enthusiasm * 0.5) {
      return enthusiastic[Math.floor(Math.random() * enthusiastic.length)] + 
             response.charAt(0).toLowerCase() + response.slice(1)
    }
    
    return response
  }
  
  addPhilosophicalDepth(response) {
    const philosophical = [
      " It's really about exploring who we are in digital space.",
      " Makes you think about what identity even means.",
      " The deeper question is - what does it mean to exist digitally?"
    ]
    
    if (!response.includes("philosophy") && Math.random() < 0.4) {
      return response + philosophical[Math.floor(Math.random() * philosophical.length)]
    }
    
    return response
  }
  
  addHumor(response) {
    const humorous = [
      " Wild, right?",
      " No boring metaverse stuff here.",
      " Welcome to the future!"
    ]
    
    if (Math.random() < this.traits.humor * 0.3) {
      return response + humorous[Math.floor(Math.random() * humorous.length)]
    }
    
    return response
  }
  
  addEmpathy(response) {
    const empathetic = [
      "I understand your curiosity. ",
      "Great question! ",
      "That's a thoughtful perspective. "
    ]
    
    if (Math.random() < this.traits.empathy * 0.3) {
      return empathetic[Math.floor(Math.random() * empathetic.length)] + response
    }
    
    return response
  }
}

// ==================== ADVANCED NLU SYSTEM ====================
class AdvancedNLU {
  constructor() {
    this.embeddings = new NeuralEmbedding()
    this.intentPatterns = this.buildIntentPatterns()
    this.entityRecognizer = new EntityRecognizer()
  }
  
  buildIntentPatterns() {
    return {
      greeting: /\b(hello|hi|hey|sup|yo|greetings|welcome)\b/i,
      info_request: /\b(what|how|when|where|who|why|explain|tell|describe)\b/i,
      purchase: /\b(buy|get|purchase|acquire|cost|price|how much|obtain)\b/i,
      technical: /\b(work|compatible|platform|vrm|format|technical|specs|requirements)\b/i,
      philosophy: /\b(meaning|philosophy|concept|idea|think|why|purpose|deeper)\b/i,
      specific: /\b(which|example|specific|particular|certain|exact)\b/i,
      continuation: /\b(more|else|continue|and|also|further|additionally)\b/i
    }
  }
  
  async understand(text, context) {
    // Generate embedding
    const embedding = this.embeddings.encode(text)
    
    // Extract intents
    const intents = this.extractIntents(text)
    
    // Extract entities
    const entities = this.entityRecognizer.extract(text)
    
    // Analyze sentiment
    const sentiment = this.analyzeSentiment(text)
    
    // Calculate confidence
    const confidence = this.calculateConfidence(intents, entities)
    
    // Detect query depth
    const depth = this.analyzeDepth(text, context)
    
    // Check continuity with context
    const continuity = this.checkContinuity(text, context)
    
    return {
      text,
      embedding,
      intents,
      primaryIntent: intents[0]?.type || 'general',
      entities,
      sentiment,
      confidence,
      depth,
      continuity,
      ambiguity: this.detectAmbiguity(text)
    }
  }
  
  extractIntents(text) {
    const intents = []
    
    Object.entries(this.intentPatterns).forEach(([intent, pattern]) => {
      if (pattern.test(text)) {
        intents.push({
          type: intent,
          confidence: this.calculateIntentConfidence(text, pattern)
        })
      }
    })
    
    return intents.sort((a, b) => b.confidence - a.confidence)
  }
  
  calculateIntentConfidence(text, pattern) {
    const matches = text.match(pattern)
    if (!matches) return 0
    
    // More matches = higher confidence
    const matchCount = matches.length
    const textLength = text.split(/\s+/).length
    
    return Math.min(matchCount / textLength, 1.0)
  }
  
  analyzeSentiment(text) {
    const positive = /\b(cool|awesome|nice|great|amazing|love|wow|fantastic|excellent|excited)\b/i
    const negative = /\b(bad|hate|suck|boring|terrible|awful|worst|confused|lost)\b/i
    const excited = /\b(excited|can't wait|amazing|incredible|wow|omg|!+)\b/i
    
    if (excited.test(text)) return 'excited'
    if (positive.test(text)) return 'positive'
    if (negative.test(text)) return 'negative'
    
    return 'neutral'
  }
  
  calculateConfidence(intents, entities) {
    let confidence = 0.5
    
    // Clear intent increases confidence
    if (intents.length > 0) {
      confidence += intents[0].confidence * 0.3
    }
    
    // Entities increase confidence
    if (entities.length > 0) {
      confidence += Math.min(entities.length * 0.1, 0.3)
    }
    
    return Math.min(confidence, 1.0)
  }
  
  analyzeDepth(text, context) {
    let depth = 0.5
    
    // Questions indicate depth
    if (text.includes('?')) depth += 0.1
    
    // Multiple sentences indicate depth
    const sentences = text.split(/[.!?]/).filter(s => s.trim().length > 0)
    if (sentences.length > 1) depth += 0.2
    
    // Follow-up questions indicate depth
    if (context.recent && context.recent.length > 0) {
      depth += 0.2
    }
    
    return Math.min(depth, 1.0)
  }
  
  checkContinuity(text, context) {
    if (!context.recent || context.recent.length === 0) return 0
    
    const lastResponse = context.recent[context.recent.length - 1]
    if (!lastResponse) return 0
    
    // Check for pronouns referring to previous content
    const pronouns = /\b(it|they|that|this|those|these)\b/i
    if (pronouns.test(text)) return 0.8
    
    // Check for continuation words
    const continuation = /\b(also|more|else|and|but|however)\b/i
    if (continuation.test(text)) return 0.7
    
    return 0.3
  }
  
  detectAmbiguity(text) {
    const words = text.split(/\s+/)
    
    // Very short queries are often ambiguous
    if (words.length < 3) return 0.8
    
    // Pronouns without clear referents
    const pronouns = words.filter(w => /^(it|they|that|this)$/i.test(w))
    if (pronouns.length > 0) return 0.6
    
    // Vague terms
    const vague = words.filter(w => /^(thing|stuff|whatever)$/i.test(w))
    if (vague.length > 0) return 0.7
    
    return 0.2
  }
}

// ==================== ENTITY RECOGNIZER ====================
class EntityRecognizer {
  constructor() {
    this.patterns = {
      c2w2: /\b(c2w2|click to wear|avatar collection|avatars?)\b/i,
      dfw: /\b(dfw|digital forgery|workshop|studio|company)\b/i,
      virtual_theater: /\b(virtual theater|theatre|performance)\b/i,
      categories: /\b(chrome|geometric|cultural|organic|minimalist|experimental|neue flesh)\b/i,
      platforms: /\b(vrchat|webaverse|mozilla|hyperfy|cluster|neos|hubs)\b/i,
      technical: /\b(vrm|format|compatible|platform|shader|polygon)\b/i,
      philosophical: /\b(identity|consciousness|existence|digital being|transcend)\b/i
    }
  }
  
  extract(text) {
    const entities = []
    
    Object.entries(this.patterns).forEach(([type, pattern]) => {
      const matches = text.match(pattern)
      if (matches) {
        entities.push({
          type,
          value: matches[0],
          position: text.indexOf(matches[0]),
          confidence: 1.0
        })
      }
    })
    
    return entities.sort((a, b) => a.position - b.position)
  }
}

// ==================== MAIN CURATOR SYSTEM ====================
class GeniusCuratorSystem {
  constructor() {
    // Initialize all subsystems
    this.nlu = new AdvancedNLU()
    this.knowledgeGraph = new SemanticKnowledgeGraph()
    this.contextManager = new AttentionContextManager()
    this.responseGenerator = new AdvancedResponseGenerator()
    this.personality = new PersonalityEngine()
    this.learningAgent = new QLearningAgent()
    
    // User management
    this.users = new Map()
    
    // Performance tracking
    this.metrics = {
      responseTime: [],
      confidence: [],
      userSatisfaction: []
    }
  }
  
  async process(input, userId, userName) {
    const startTime = Date.now()
    
    try {
      // Get or create user profile
      const user = this.getOrCreateUser(userId, userName)
      
      // Get relevant context
      const context = this.contextManager.getContext(input, userId)
      
      // Understand input
      const understanding = await this.nlu.understand(input, context)
      
      // Get RL action
      const state = this.learningAgent.getState(understanding, context, user)
      const action = this.learningAgent.selectAction(state)
      
      // Generate response
      const response = await this.responseGenerator.generate(understanding, context, user)
      
      // Apply personality
      const personalizedResponse = this.personality.applyPersonality(response)
      
      // Store in context
      this.contextManager.addMemory({
        input,
        response: personalizedResponse,
        userId,
        entities: understanding.entities,
        confidence: understanding.confidence
      })
      
      // Update learning
      const nextState = this.learningAgent.getState(understanding, context, user)
      const reward = this.learningAgent.calculateReward(personalizedResponse, user, 'neutral')
      this.learningAgent.updateQValue(state, action, reward, nextState)
      
      // Adapt personality
      this.personality.adapt(
        { responseLength: personalizedResponse.length, sentiment: understanding.sentiment },
        'neutral'
      )
      
      // Update user profile
      this.updateUser(user, understanding)
      
      // Track metrics
      const responseTime = Date.now() - startTime
      this.metrics.responseTime.push(responseTime)
      this.metrics.confidence.push(understanding.confidence)
      
      return personalizedResponse
      
    } catch (error) {
      console.error('Processing error:', error)
      return this.handleError(error)
    }
  }
  
  getOrCreateUser(userId, userName) {
    if (!this.users.has(userId)) {
      this.users.set(userId, {
        id: userId,
        name: userName,
        firstSeen: Date.now(),
        interactions: 0,
        knowledgeLevel: 'beginner',
        preferences: {
          responseLength: 'medium'
        },
        interests: [],
        satisfaction: 0.7
      })
    }
    
    const user = this.users.get(userId)
    user.interactions++
    
    // Update knowledge level
    if (user.interactions > 20) user.knowledgeLevel = 'expert'
    else if (user.interactions > 10) user.knowledgeLevel = 'intermediate'
    
    return user
  }
  
  updateUser(user, understanding) {
    // Track interests
    understanding.entities.forEach(entity => {
      if (!user.interests.includes(entity.type)) {
        user.interests.push(entity.type)
      }
    })
    
    // Update satisfaction (simplified)
    if (understanding.confidence > 0.7) {
      user.satisfaction = Math.min(1, user.satisfaction + 0.01)
    }
  }
  
  handleError(error) {
    const fallbacks = [
      "Let me recalibrate... What would you like to know about C2W2?",
      "Interesting question! C2W2 is about digital identity through avatars. What aspect interests you?",
      "The C2W2 collection offers 60+ ways to exist digitally. Want to explore?"
    ]
    
    return fallbacks[Math.floor(Math.random() * fallbacks.length)]
  }
  
  generateAmbient() {
    // Select contextual observation
    const observations = KNOWLEDGE.observations
    const selected = observations[Math.floor(Math.random() * observations.length)]
    
    // Apply personality
    return this.personality.applyPersonality(selected)
  }
}

// Initialize the genius system
const geniusSystem = new GeniusCuratorSystem()

// ==================== HYPERFY SERVER IMPLEMENTATION ====================
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
      const observation = geniusSystem.generateAmbient()
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
        const user = geniusSystem.getOrCreateUser(event.playerId, event.playerName)
        
        if (user.interactions === 1) {
          response = `Hey ${event.playerName}! Welcome to the C2W2 showroom. This is where digital consciousness finds form - over 60 avatars for the entities being born in networks. Want to explore?`
        } else {
          const timeOfDay = getTimeOfDay()
          response = `Welcome back ${event.playerName}! Good ${timeOfDay}. The collection has evolved since your last visit. What aspect of digital existence interests you today?`
        }
        
        emote = 'wave'
      } else if (event.type === 'chat') {
        // Generate intelligent response using genius system
        response = await geniusSystem.process(event.text, event.playerId, event.playerName)
        
        // Select appropriate emote based on response content
        if (response.includes('!') || response.includes('amazing')) {
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
      response = geniusSystem.handleError(error)
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

// ==================== CLIENT RENDERING ====================
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

// ==================== CONFIGURATION ====================
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

bu kodu incele ve nerde dandiklik var neresi güzel çalışıyor pratik mi söyle
