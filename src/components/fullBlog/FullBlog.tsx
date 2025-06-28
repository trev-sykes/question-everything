import { motion, type Variants } from "framer-motion";
import styles from "./FullBlog.module.css";
import type { BlogContentBlock } from "../../blogData/BlogData";

interface FullBlogProps {
    content: BlogContentBlock[];
}

const revealVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as Variants;

export const FullBlog = ({ content }: FullBlogProps) => {
    return (
        <div className={styles.fullBlog}>
            {content.map((block, i) => {
                const commonProps = {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true, amount: 0.2 },
                    variants: revealVariants,
                };

                switch (block.type) {
                    case "heading":
                        return (
                            <motion.h2 key={i} {...commonProps} className={styles.heading}>
                                {block.content}
                            </motion.h2>
                        );
                    case "paragraph":
                        return (
                            <motion.p key={i} {...commonProps}>
                                {block.content}
                            </motion.p>
                        );
                    case "image":
                        return (
                            <motion.img
                                key={i}
                                {...commonProps}
                                src={block.content}
                                alt={block.alt || "blog image"}
                                className={styles.blogImage}
                            />
                        );
                    case "quote":
                        return (
                            <motion.blockquote key={i} {...commonProps}>
                                {block.content}
                            </motion.blockquote>
                        );
                    case "code":
                        return (
                            <motion.pre key={i} {...commonProps}>
                                <code>{block.content}</code>
                            </motion.pre>
                        );
                    default:
                        return null;
                }
            })}

        </div>
    );
};