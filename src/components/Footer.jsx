import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaTiktok,
    FaYoutube,
    FaShieldAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaArrowRight,
    FaLock
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = ({ isHome = false }) => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/mortasoft", label: "LinkedIn" },
        { icon: <FaGithub />, url: "https://github.com/mortasoft", label: "GitHub" },
        { icon: <FaTwitter />, url: "https://twitter.com/mortasoft", label: "Twitter" },
        { icon: <FaYoutube />, url: "https://www.youtube.com/@mortasoft", label: "YouTube" },
        { icon: <FaInstagram />, url: "https://instagram.com/mortasoft", label: "Instagram" },
        { icon: <FaTiktok />, url: "https://www.tiktok.com/@mortasoft2", label: "TikTok" },
    ];

    const navigationLinks = [
        { name: "Inicio", path: "/" },
        { name: "Sobre Mí & Trayectoria", path: "/about" },
        { name: "Ponencias y Charlas", path: "/talks" },
        { name: "Proyectos & Tools", path: "/projects" },
        { name: "Canal de Contacto", path: "/contact" },
    ];

    const specializations = [
        "Liderazgo CISO & Gobernanza",
        "Pentesting & Red Teaming",
        "Seguridad en Inteligencia Artificial",
        "Criptografía Post-Cuántica (PQC)",
        "Resiliencia & Cumplimiento Normativo",
    ];

    const credentials = ["C|CISO", "CEH Master", "CISA", "Security+", "CHFI"];

    return (
        <footer className={`${styles.footer} ${isHome ? styles.parallaxFooter : ""}`}>
            <div className={styles.container}>

                {/* Main 4-Column Grid */}
                <div className={styles.mainGrid}>
                    {/* Column 1: Brand & Credentials */}
                    <div className={styles.column}>
                        <Link to="/" className={styles.logo}>
                            <FaShieldAlt className={styles.logoIcon} />
                            MORTASOFT
                        </Link>
                        <p className={styles.tagline}>
                            Mario Zamora Madriz. Master en Ciberseguridad, CISO e investigador enfocado en resiliencia digital y defensa proactiva.
                        </p>


                        <div className={styles.credentialsRow}>
                            {credentials.map((cred) => (
                                <span key={cred} className={styles.credentialPill}>
                                    {cred}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Navegación</h3>
                        <ul className={styles.linksList}>
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Specializations */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Especialidades</h3>
                        <ul className={styles.specList}>
                            {specializations.map((spec) => (
                                <li key={spec} className={styles.specItem}>
                                    <span className={styles.specDot}></span>
                                    <span>{spec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Direct Channels */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Canales Directos</h3>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} />
                                <a href="mailto:mario@mortasoft.com" className={styles.contactLink}>
                                    mario@mortasoft.com
                                </a>
                            </li>
                            <li className={styles.contactItem}>
                                <FaMapMarkerAlt className={styles.contactIcon} />
                                <span>San José, Costa Rica</span>
                            </li>
                            <li className={styles.contactItem}>
                                <FaClock className={styles.contactIcon} />
                                <span>UTC-6 (Horario Centroamérica)</span>
                            </li>
                        </ul>

                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} Mortasoft &bull; Mario Zamora Madriz. Todos los derechos reservados.
                    </p>
                    <div className={styles.securityNote}>
                        <FaLock className={styles.securityIcon} />
                        <span>Seguro por diseño &bull; Sin rastreadores de terceros</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
