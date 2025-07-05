import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import { BlogCard } from '../components/blogCard/BlogCard';
import { blogData } from '../blogData/BlogData';

const Home: React.FC = () => {
    return (
        <main className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <motion.h1
                    className={styles.heading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Question Everything
                </motion.h1>
                <motion.p
                    className={styles.subheading}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Welcome to <strong>Question Everything</strong> — a portal into the unknown. From conspiracies and AI to lost civilizations and alternative histories, this blog is for those who dare to think differently.
                </motion.p>
            </section>

            {/* Featured Blogs */}
            <section className={styles.featured}>
                <h2>Latest Dispatches</h2>
                <div className={styles.blogGrid}>
                    {blogData.slice(0, 3).map((blog) => (
                        <BlogCard key={blog.slug} {...blog} />
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.cta}>
                <h2>👁️ Join the Watchers</h2>
                <p>Unlock hidden drops, code, and ancient truths. No spam — only signal.</p>
                {/* <a href="/subscribe" className={styles.ctaLink}>
                    Enter the Gate
                </a> */}
            </section>
        </main>
    );
};

export default Home;
