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
        date: "June 20, 2025",
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
        date: "June 25, 2025",
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
        date: "June 27, 2025",
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
    },
    {
        title: "Tartaria: The Empire Erased From History?",
        description: "Was there a global civilization wiped from our collective memory? Uncover the architectural anomalies, mud flood theories, and historical contradictions behind the lost empire of Tartaria.",
        slug: "tartaria-alternative-history",
        date: "July 6, 2025",
        imageUrl: "https://plus.unsplash.com/premium_photo-1676747209644-ec89dbd9d590?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5jaWVudCUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
        content: [
            {
                type: "heading",
                content: "The Civilization That Wasn't Supposed to Exist"
            },
            {
                type: "paragraph",
                content: "Scattered throughout old world maps and 18th-century encyclopedias is the name 'Tartaria' — once labeled as a vast empire stretching across Eurasia. Official history dismisses it as a catch-all term for unknown territories. But what if it wasn’t?"
            },
            {
                type: "quote",
                content: `"History is written by the victors. What if it was also erased by them?"`,
            },
            {
                type: "paragraph",
                content: "Alternative researchers argue Tartaria was a highly advanced civilization — technologically sophisticated, spiritually developed, and globally influential. Its sudden disappearance? A deliberate cover-up by emerging world powers."
            },
            {
                type: "image",
                content: "https://plus.unsplash.com/premium_photo-1694475091665-3660e20997eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5jaWVudCUyMGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
                alt: "Grand, anachronistic architecture hidden in plain sight"
            },
            {
                type: "heading",
                content: "The Mud Flood Theory"
            },
            {
                type: "paragraph",
                content: "Proponents of the Tartaria theory often cite 'mud floods' — unexplained layers of earth seemingly burying buildings worldwide. From Paris to St. Petersburg to parts of the American Midwest, entire lower levels of architecture appear submerged beneath soil without geological cause."
            },
            {
                type: "paragraph",
                content: "The theory goes: a cataclysmic event in the 1800s — whether natural or engineered — wiped out Tartaria, and history was rewritten by colonial empires. Surviving structures were repurposed and labeled with false dates to fit the new narrative."
            },
            {
                type: "image",
                content: "https://plus.unsplash.com/premium_photo-1664205028390-a5a6992e0f49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG11ZCUyMG9uJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
                alt: "Building with buried first floor, showcasing mud flood evidence"
            },
            {
                type: "heading",
                content: "Architecture That Shouldn't Exist"
            },
            {
                type: "paragraph",
                content: "Look closely at World's Fairs structures from the 1800s — impossibly ornate, colossal, and allegedly built in just months with horse-drawn wagons and hand tools. Critics argue these weren’t built from scratch, but inherited from a forgotten empire."
            },
            {
                type: "quote",
                content: `"How do you build Rome in a summer — and tear it down the same year?"`,
            },
            {
                type: "paragraph",
                content: "Terms like 'repurposed antiquitech' and 'inherited architecture' have emerged, challenging mainstream narratives about our past. Were we really the first advanced civilization to span continents?"
            },
            {
                type: "heading",
                content: "Why Erase Tartaria?"
            },
            {
                type: "paragraph",
                content: "The motive? Control. A unified, self-sufficient global culture doesn’t fit neatly into colonialist or capitalist frameworks. By erasing Tartaria, elites allegedly created the illusion of national fragmentation, technological scarcity, and historical linearity."
            },
            {
                type: "paragraph",
                content: "Whether myth, misinterpretation, or memory-holing of the grandest scale — Tartaria continues to inspire those who believe the past isn’t dead. It’s hidden."
            }
        ]
    },
    {
        title: "Quantum Shadows: The Hidden Tech Behind Reality",
        description: "Unveiling the covert experiments and technologies that might be manipulating the very fabric of our existence.",
        slug: "quantum-shadows-hidden-tech",
        date: "July 13, 2025",
        imageUrl: "https://plus.unsplash.com/premium_photo-1690297733164-958ea1f806ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVhbnR1bXxlbnwwfHwwfHx8MA%3D%3D",
        content: [
            {
                type: "heading",
                content: "Beyond the Visible: Quantum Manipulation in Secret Labs"
            },
            {
                type: "paragraph",
                content: "Quantum physics isn’t just a theoretical playground for academics — it’s fast becoming the foundation for hidden technologies that could alter reality itself. From covert government projects to shadowy private ventures, experiments with quantum entanglement and superposition are rumored to manipulate time, space, and consciousness."
            },
            {
                type: "image",
                content: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                alt: "Quantum particle wave visualization"
            },
            {
                type: "paragraph",
                content: "These technologies, while classified, could explain unexplained phenomena — time distortions, ghost sightings, and even inexplicable disappearances. The very fabric of our reality may be subject to manipulation beyond our current understanding."
            },
            {
                type: "quote",
                content: `"Reality is not what it seems; it's what is manipulated behind closed doors."`
            },
            {
                type: "heading",
                content: "Quantum Computing: Unlocking Power and Peril"
            },
            {
                type: "paragraph",
                content: "Quantum computers promise unparalleled computational power, capable of breaking encryption and solving problems once thought impossible. But with great power comes great secrecy — and risk. Could this technology be weaponized to rewrite history or control minds through data manipulation?"
            },
            {
                type: "paragraph",
                content: "Ethical debates rage as insiders warn of clandestine quantum AI projects designed for surveillance and control, hidden from public scrutiny under layers of national security."
            },
            {
                type: "image",
                content: "https://plus.unsplash.com/premium_photo-1700942980011-27621d04d45f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHF1YW50dW18ZW58MHx8MHx8fDA%3D",
                alt: "Quantum computer chip close-up"
            },
            {
                type: "heading",
                content: "What If Our Reality Is a Quantum Construct?"
            },
            {
                type: "paragraph",
                content: "Philosophical theories have long posited that reality is a simulation or construct. Emerging evidence from quantum experiments hints this might not be far from the truth. Are secret agencies and corporations harnessing quantum tech to shape what we perceive as 'real'?"
            },
            {
                type: "paragraph",
                content: "Whether conspiracy or possibility, the intersection of quantum science and hidden technology challenges us to question the very nature of existence."
            },
            {
                type: "quote",
                content: `"In questioning everything, we begin to see the shadows behind the light."`
            },
            {
                type: "paragraph",
                content: "Stay curious, keep questioning, and remember — reality may be stranger than fiction."
            }
        ]
    }

];
