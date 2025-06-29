export interface BlogContentBlock {
    type: 'paragraph' | 'image' | 'quote' | 'code' | 'heading';
    content: string;
    alt?: string;
}

export interface BlogEntry {
    title: string;
    description: string;
    slug: string;
    date: string;
    imageUrl: string;
    content: BlogContentBlock[];
}
export const blogData: BlogEntry[] = [
    {
        title: "Neon Cities & Neural Nets",
        description: "Exploring the overlap between techno-urbanism and artificial intelligence in 2084.",
        slug: "neon-cities-ai",
        date: "June 26, 2025",
        imageUrl: "https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                type: "heading",
                content: "The Rise of Algorithmic Architecture",
            },
            {
                type: "paragraph",
                content: "Neon cities aren't just aesthetic — they're intelligent. Buildings respond to biometric data, streets adapt to foot traffic, and drones monitor the health of infrastructure in real time.",
            },
            {
                type: "image",
                content: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                alt: "Glowing buildings in a neon skyline",
            },
            {
                type: "paragraph",
                content: "AI governs more than traffic — it optimizes human emotion in public spaces. Mood-sensing streetlamps, adaptive ambient soundscapes, and emotion-aware public ads are the new normal.",
            },
            {
                type: "quote",
                content: "The smartest cities are the ones you feel, not just see.",
            },
            {
                type: "heading",
                content: "Digital Souls in Urban Shells",
            },
            {
                type: "paragraph",
                content: "Citizens carry AI assistants not in phones, but embedded into their environment. The city is the device. Context-aware AI reacts to a citizen’s movement, gestures, and social signals.",
            },
            {
                type: "image",
                content: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                alt: "Neural city schematic",
            },
            {
                type: "paragraph",
                content: "2084 isn't cold and robotic. It's vibrant, intimate, and alive — cities breathe with their people. And at the center of it all: data with a heartbeat.",
            }
        ],
    },
    {
        title: "Whistleblowers, Wreckage & the UAP Files",
        description: "Peeling back the classified veil on UAPs, non-human technology, and high-stakes secrecy in the post-Disclosure age.",
        slug: "uap-whistleblower-revelations",
        date: "June 29, 2025",
        imageUrl: "https://images.unsplash.com/photo-1743412059152-d577187040c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNjaWVudGlzdCUyMGFsaWVufGVufDB8fDB8fHww",
        content: [
            {
                type: "heading",
                content: "The Testimony Heard 'Round the World",
            },
            {
                type: "paragraph",
                content: "In 2023, former intelligence official David Grusch dropped a bombshell under oath: the U.S. government has recovered 'non-human biologics' and crafts not made by human hands. This wasn't a movie — this was a congressional hearing.",
            },
            {
                type: "quote",
                content: `"We are not alone... and the government has known for decades." — David Grusch, U.S. Congressional Testimony`,
            },
            {
                type: "paragraph",
                content: "Grusch testified that special access programs have operated without proper oversight, housing reverse-engineering efforts of exotic technology — potentially of extraterrestrial origin. These programs allegedly exist across military contractors, buried in classification black holes.",
            },
            {
                type: "image",
                content: "https://images.unsplash.com/photo-1689235994269-687ee1019652?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Mystery object hovering over desert landscape",
            },
            {
                type: "heading",
                content: "Reverse Engineering the Unknown",
            },
            {
                type: "paragraph",
                content: "Claims suggest these recovered craft exhibit materials with isotopic ratios not found on Earth, along with propulsion systems that defy known physics. Former defense insiders hinted at breakthroughs in gravitational manipulation — not science fiction, but classified reality.",
            },
            {
                type: "paragraph",
                content: "Yet whistleblowers like Grusch allege more than secrecy: intimidation, threats, and even harm befalling those who got too close to the truth. It paints a chilling picture — not just of alien contact, but of human suppression.",
            },
            {
                type: "image",
                content: "https://images.unsplash.com/photo-1547316020-aa1fa142313a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNsYXNzaWZpZWQlMjBkb2N1bWVudCUyMHVmb3xlbnwwfHwwfHx8MA%3D%3D",
                alt: "Declassified military document with redactions",
            },
            {
                type: "heading",
                content: "Controlled Disclosure or Cosmic Cover-Up?",
            },
            {
                type: "paragraph",
                content: "The question isn't just 'are we alone?' — it's 'who gets to know?' Are governments gradually releasing information to acclimate the public, or is full disclosure a risk to global control structures?",
            },
            {
                type: "quote",
                content: `"It's not about aliens. It's about who controls the truth."`,
            },
            {
                type: "paragraph",
                content: "As more insiders step forward and Congress demands answers, we inch closer to a paradigm shift. One where the biggest conspiracy isn’t that we’re being visited — but that we’ve always known.",
            }
        ]
    },
    {
        title: "CERN: Gateway to the Unknown or Pandora’s Box?",
        description: "Exploring the shadowy experiments, secret agendas, and cosmic risks lurking beneath the world’s largest particle accelerator.",
        slug: "cern-gateway-to-unknown",
        date: "June 29, 2025",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                type: "heading",
                content: "Beneath the Swiss Countryside: A Machine Like No Other",
            },
            {
                type: "paragraph",
                content: "Deep underground near Geneva lies CERN’s Large Hadron Collider — a 27-kilometer ring smashing particles at near-light speeds to unlock the universe’s deepest secrets. But for some, this isn’t just science — it’s a gateway. Rumors swirl that CERN’s experiments may be tearing open portals to other dimensions, awakening forces beyond human comprehension.",
            },
            {
                type: "quote",
                content: `"The biggest risk isn’t what we find — it’s what we accidentally unleash." — Anonymous former CERN scientist`,
            },
            {
                type: "paragraph",
                content: "From black holes that could swallow the Earth to experiments testing the very fabric of space-time, CERN operates on the edge of reality. Though physicists assure safety, whistleblowers and conspiracy theorists warn of a cover-up — that these experiments go far beyond particle physics, dabbling in forbidden territory.",
            },
            {
                type: "image",
                content: "https://plus.unsplash.com/premium_photo-1697729839093-d19da5b3b549?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5kZXJncm91bmQlMjB0dW5uZWx8ZW58MHx8MHx8fDA%3D",
                alt: "Complex underground tunnels and machinery at CERN",
            },
            {
                type: "heading",
                content: "Portals, Parallel Universes, and Unseen Forces",
            },
            {
                type: "paragraph",
                content: "CERN’s attempts to recreate conditions moments after the Big Bang have led to wild speculation: Are scientists cracking open portals to parallel dimensions? Some reports suggest unexplained phenomena — strange lights, time distortions, even disappearances near the site.",
            },
            {
                type: "paragraph",
                content: "Multiverse theories supported by string theory and quantum mechanics suggest countless realities may coexist. Could CERN’s collider be the key to bridging these worlds? And if so, what’s waiting on the other side?",
            },
            {
                type: "image",
                content: "https://images.unsplash.com/photo-1686519093104-3140c6dcf284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Visual representation of particle collisions and quantum effects",
            },
            {
                type: "heading",
                content: "Occult Symbols & Hidden Agendas",
            },
            {
                type: "paragraph",
                content: "Beyond physics, conspiracy theorists point to CERN’s logo, the architecture of its facilities, and its connections to elite funding sources as evidence of occult influence. The hexagonal design of the collider resembles ancient symbols linked to secret societies and cosmic gateways.",
            },
            {
                type: "paragraph",
                content: "Some insiders whisper that experiments are part of a larger agenda — a push by global elites to harness otherworldly powers or break free from earthly limits.",
            },
            {
                type: "image",
                content: "https://images.unsplash.com/photo-1672255877511-7643d19bfbfb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Abstract hexagonal patterns and cosmic symbols overlay",
            },
            {
                type: "heading",
                content: "Whistleblowers, Warnings, and Silenced Voices",
            },
            {
                type: "paragraph",
                content: "Former employees have surfaced claiming censorship, unexplained health issues, and pressure to stay silent. Rumors of experimental side effects, including strange electromagnetic sensations and psychological disturbances, have fueled fears of something far darker than mere particle physics.",
            },
            {
                type: "paragraph",
                content: "In the world of classified science, where do we draw the line between discovery and danger? What truths lie buried beneath official statements and carefully curated press releases?",
            },
            {
                type: "quote",
                content: `"They told me to stop asking questions. Some things are better left in the dark." — Anonymous CERN insider`,
            },
            {
                type: "heading",
                content: "A New Age or Pandora’s Box?",
            },
            {
                type: "paragraph",
                content: "CERN stands at a crossroads: are we witnessing humanity’s greatest leap or the opening of a cosmic Pandora’s box? As experiments push boundaries and governments stay silent, the question remains — what price will we pay for peering too deep?",
            },
            {
                type: "paragraph",
                content: "One thing is certain: the true story of CERN is not just about atoms, but about power, secrecy, and the unknown forces shaping our future.",
            },
            {
                type: "quote",
                content: `"In the pursuit of knowledge, we risk everything — even reality itself."`,
            },
            {
                type: "paragraph",
                content: "Stay curious, stay vigilant, and question everything.",
            }
        ]
    },
    {
        title: "The Evolution of AI: Friend or Foe?",
        description: "A deep dive into artificial intelligence’s rapid rise, its impact on society, and the ethical questions we can’t ignore.",
        slug: "evolution-of-ai-friend-or-foe",
        date: "June 29, 2025",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: [
            {
                type: "heading",
                content: "From Code to Consciousness?",
            },
            {
                type: "paragraph",
                content: "Artificial intelligence has transformed from lines of code executing simple tasks into sprawling neural networks capable of creating art, composing music, and even writing software. Yet, this dizzying progress raises a fundamental question: Are we witnessing the birth of something truly conscious, or is it merely a complex illusion crafted by algorithms?",
            },
            {
                type: "paragraph",
                content: "As a front-end developer, I marvel at how AI can assist in automating mundane tasks, freeing us to focus on creativity. But I also find myself wondering — when does assistance cross the line into autonomy? And what does that mean for the future of human creativity and employment?",
            },
            {
                type: "image",
                content: "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Abstract AI neural network visualization",
            },
            {
                type: "heading",
                content: "The Double-Edged Sword of Automation",
            },
            {
                type: "paragraph",
                content: "Automation promises unparalleled efficiency, but it also threatens to disrupt livelihoods. As AI tools increasingly shoulder creative and technical workloads, we face a pivotal cultural shift. What becomes of human labor and identity when machines can learn and adapt faster than we ever could?",
            },
            {
                type: "quote",
                content: `"Technology should empower, not replace." — Anonymous tech ethicist`,
            },
            {
                type: "paragraph",
                content: "Moreover, AI inherits the biases embedded within its training data, perpetuating social inequalities under a veneer of objectivity. This raises pressing ethical challenges — who is accountable when AI systems falter or discriminate? And how do we design technology that uplifts rather than undermines human dignity?",
            },
            {
                type: "heading",
                content: "AI in Culture: Catalyst or Threat?",
            },
            {
                type: "paragraph",
                content: "Artificial intelligence doesn't just change how we work — it challenges how we create and perceive art, meaning, and intelligence itself. Can a piece of AI-generated music move us as deeply as a human composition? Does coding poetry dilute the essence of creativity, or expand its horizons?",
            },
            {
                type: "paragraph",
                content: "These questions aren’t just theoretical — they touch the core of what it means to be human in a world increasingly shaped by machine intelligence.",
            },
            {
                type: "quote",
                content: `"The question isn’t whether AI will change the world — it’s how we choose to change with it."`,
            },
            {
                type: "paragraph",
                content: "Ultimately, the evolution of AI acts as a mirror reflecting our greatest hopes and fears. It challenges us to rethink intelligence, ethics, and the future we want to create — not for machines, but for ourselves.",
            }
        ]
    }


];
