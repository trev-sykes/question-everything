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
];
