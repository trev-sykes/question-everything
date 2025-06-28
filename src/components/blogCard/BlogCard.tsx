import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    description: string;
    slug: string;
    date: string;
    imageUrl: string;
}

export const BlogCard = ({ title, description, slug, date, imageUrl }: BlogCardProps) => {
    return (
        <Link to={`/${slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={imageUrl} alt={title} className={styles.image} />
                <div className={styles.overlay} />
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <span className={styles.date}>{date}</span>
                </div>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.readMore}>
                Read More <ArrowRight size={16} />
            </div>
        </Link>
    );
};
