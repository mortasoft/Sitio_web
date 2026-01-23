import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            {/* Floating Shapes Background */}
            <div className={styles.floatingShapes}>
                <div className={`${styles.shape} ${styles.shape1}`}></div>
                <div className={`${styles.shape} ${styles.shape2}`}></div>
                <div className={`${styles.shape} ${styles.shape3}`}></div>
            </div>

            <div className={styles.content}>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.title}
                >
                    Hola, soy <span className={styles.highlight}>Mario Zamora</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.subtitle}
                >
                    Master en Ciberseguridad | C|CISO, CEH Master, CISA, Security+
                    <br />
                    Especialista en ciberseguridad, desarrollo e Inteligencia Artificial
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={styles.cta}
                >
                    <a href="#contact" className={styles.primaryBtn}>
                        Contactar
                    </a>
                    <a href="#projects" className={styles.secondaryBtn}>
                        Ver Proyectos
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className={styles.socialLinks}
                >
                    <a href="https://github.com/mortasoft" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/mortasoft" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/mortasoft" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/mortasoft" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaTwitter />
                    </a>
                    <a href="https://www.tiktok.com/@mortasoft2" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaTiktok />
                    </a>
                    <a href="https://www.youtube.com/@mortasoft" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaYoutube />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
