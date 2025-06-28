import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Article from '../pages/Article';
import { Eye } from 'lucide-react';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
    const location = useLocation();
    const [secretMode, setSecretMode] = useState(false);

    useEffect(() => {
        const keys = [
            'ArrowUp', 'ArrowUp',
            'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight',
            'ArrowLeft', 'ArrowRight',
            'b', 'a',
        ];
        let i = 0;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === keys[i]) {
                i++;
                if (i === keys.length) {
                    setSecretMode(true);
                    i = 0;
                }
            } else {
                i = 0;
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    QUESTION EVERYTHING
                </div>
                <div className={styles.navLinks}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/blogs" className={styles.link}>Archives</Link>
                </div>
            </nav>

            <main className={styles.main}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/:blogName" element={<Article />} />
                </Routes>
            </main>

            {secretMode && (
                <div className={styles.secret}>
                    🔐 SECRET MODE ACTIVATED
                </div>
            )}
        </div>
    );
};
