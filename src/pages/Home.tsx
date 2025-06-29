import React from 'react';
import styles from './Home.module.css';
// import { BlogCard } from '../components/blogCard/BlogCard';

const Home: React.FC = () => {
    return (
        <main className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.heading}>Question Everything</h1>
                <p className={styles.subheading}>
                    Welcome to <strong>Question Everything</strong> — a portal into the unknown. From conspiracies and AI to lost civilizations and alternative histories, this blog is for those who dare to think differently.
                </p>
            </section>

            {/* Featured Topics (Blog Cards) */}
            {/* <section className={styles.topics}>
                <BlogCard
                    title="Conspiracies Unveiled"
                    description="From the moon landing to modern surveillance—explore the rabbit holes with open eyes."
                    slug="conspiracy"
                    date="Truth or Fiction?"
                    imageUrl="/images/conspiracy.jpg"
                />
                <BlogCard
                    title="AI & Frontend Futures"
                    description="Dive into artificial intelligence, frontend experiments, and future tech shaping our world."
                    slug="tech"
                    date="Tech & Code"
                    imageUrl="/images/ai-coding.jpg"
                />
                <BlogCard
                    title="Ancient Technology"
                    description="Were ancient civilizations more advanced than we think? Decode myths, legends, and megaliths."
                    slug="ancient-tech"
                    date="Lost Knowledge"
                    imageUrl="/images/ancient-tech.jpg"
                />
            </section> */}

            {/* Call to Action */}
            <section className={styles.cta}>
                <h2>Stay Woke, Stay Curious</h2>
                <p>Subscribe to get updates on new investigations, code drops, and hidden knowledge.</p>
                <a href="/subscribe" className={styles.ctaLink}>
                    Join the Watchers
                </a>
            </section>
        </main>
    );
};

export default Home;
