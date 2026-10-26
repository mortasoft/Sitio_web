import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaEnvelope, FaMicrophone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", path: "/", icon: <FaHome /> },
        { name: "Sobre Mí", path: "/about", icon: <FaUser /> },
        { name: "Ponencias", path: "/talks", icon: <FaMicrophone /> },
        { name: "Proyectos", path: "/projects", icon: <FaCode /> },
        { name: "Contacto", path: "/contact", icon: <FaEnvelope /> },
    ];

    const handleNavClick = (link) => {
        setIsOpen(false);

        if (link.isHash) {
            // If we're on home page, scroll to section
            if (location.pathname === '/') {
                const element = document.querySelector(link.path.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    MORTASOFT
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {link.isHash ? (
                                    <a
                                        href={link.path}
                                        onClick={(e) => {
                                            if (location.pathname === '/') {
                                                e.preventDefault();
                                                handleNavClick(link);
                                            }
                                        }}
                                    >
                                        <span className={styles.navIcon}>{link.icon}</span>
                                        <span>{link.name}</span>
                                    </a>
                                ) : (
                                    <Link to={link.path}>
                                        <span className={styles.navIcon}>{link.icon}</span>
                                        <span>{link.name}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={styles.mobileToggle}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className={styles.mobileOverlay}
                    >
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {link.isHash ? (
                                        <a
                                            href={link.path}
                                            onClick={(e) => {
                                                if (location.pathname === '/') {
                                                    e.preventDefault();
                                                }
                                                handleNavClick(link);
                                            }}
                                        >
                                            <span className={styles.navIcon}>{link.icon}</span>
                                            <span>{link.name}</span>
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => handleNavClick(link)}
                                        >
                                            <span className={styles.navIcon}>{link.icon}</span>
                                            <span>{link.name}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
