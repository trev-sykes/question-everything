import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import portfolioLink from "../../public/portfolio.png"
import logo from "../../public/logo.png"
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
            <img className={styles.logo} src={logo} />
            <div className={styles.navLinks}>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/blogs" className={styles.link}>Archives</Link>
            </div>
        </motion.nav>
    );
};
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
                <p className={styles.tagline}>Code. Design. Chaos.</p>
            </div>

            <div className={styles.links}>
                <a href="/" className={styles.link}>Home</a>
                <a href="/blogs" className={styles.link}>Archives</a>
                <a href="mailto:trevsykes97@gmail.com?subject=Regarding%20Your%20Blog&body=Hey%20Trevor%2C%20I%20just%20read..." className={styles.link}>Contact</a>

            </div>

            <div className={styles.socials}>
                <a href="https://github.com/trev-sykes" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/trevsykes/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                </a>
                <a href="https://404devnotfound.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img className={styles.portfolioLink} src={portfolioLink} alt="portfolio link" />
                </a>
            </div>

            <p className={styles.bottom}>© 2025 Trevor Sykes. Built with ❤️ React + Vite</p>
        </footer>
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
                        <Route path="/blogs/:blogName" element={<PageWrapper><Article /></PageWrapper>} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};
