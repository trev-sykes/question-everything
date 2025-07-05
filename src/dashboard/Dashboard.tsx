import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Article from '../pages/Article';
import styles from './Dashboard.module.css';

const PageWrapper = ({ children }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
    >
        {children}
    </motion.div>
);

const Navbar = () => {
    const { scrollY } = useScroll();

    // Create a slower movement for the nav based on scroll
    const y = useTransform(scrollY, [0, 600], [0, -50]);

    return (
        <motion.nav
            className={styles.navbar}
            style={{ y }} // <-- Apply parallax scroll
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
        >
            <div className={styles.logo}>QUESTION EVERYTHING</div>
            <div className={styles.navLinks}>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/blogs" className={styles.link}>Archives</Link>
            </div>
        </motion.nav>
    );
};

export const Dashboard = () => {
    const location = useLocation();

    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.main}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                        <Route path="/blogs" element={<PageWrapper><Blog /></PageWrapper>} />
                        <Route path="/:blogName" element={<PageWrapper><Article /></PageWrapper>} />
                    </Routes>
                </AnimatePresence>
            </main>
        </div>
    );
};
