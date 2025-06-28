import { useParams } from "react-router-dom";
import { blogData } from "../blogData/BlogData";
import { FullBlog } from "../components/fullBlog/FullBlog";
import styles from "./Article.module.css";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
} as Variants;
const Article = () => {
    const { blogName } = useParams();
    const blog = blogData.find((b) => b.slug === blogName);

    // Track animation complete status
    const [articleAnimationDone, setArticleAnimationDone] = useState(false);

    if (!blog) return <div style={{ color: "#ff0033" }}>404 Blog not found</div>;

    return (
        <motion.div
            className={styles.container}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            onAnimationComplete={() => setArticleAnimationDone(true)} // <-- fire when done
        >
            <motion.h1 className={styles.title} variants={containerVariants}>
                {blog.title}
            </motion.h1>
            <motion.p className={styles.date} variants={containerVariants}>
                {blog.date}
            </motion.p>
            <motion.img
                src={blog.imageUrl}
                alt={blog.title}
                className={styles.image}
                variants={containerVariants}
            />
            <motion.p className={styles.description} variants={containerVariants}>
                {blog.description}
            </motion.p>

            {/* Only render FullBlog after article animation completes */}
            {articleAnimationDone && <FullBlog content={blog.content} />}
        </motion.div>
    );
};

export default Article;
