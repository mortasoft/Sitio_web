import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaHeart, FaShieldAlt } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/mortasoft", label: "GitHub" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/mortasoft", label: "LinkedIn" },
        { icon: <FaInstagram />, url: "https://instagram.com/mortasoft", label: "Instagram" },
        { icon: <FaTwitter />, url: "https://twitter.com/mortasoft", label: "Twitter" },
        { icon: <FaTiktok />, url: "https://www.tiktok.com/@mortasoft2", label: "TikTok" },
        { icon: <FaYoutube />, url: "https://www.youtube.com/@mortasoft", label: "YouTube" },
    ];

    const quickLinks = [
        { name: "Inicio", path: "/" },
        { name: "Sobre Mí", path: "/about" },
        { name: "Ciberseguridad", path: "/#cybersecurity" },
        { name: "Proyectos", path: "/#projects" },
        { name: "Contacto", path: "/#contact" },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top Section */}
                <div className={styles.topSection}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <div className={styles.logo}>
                            <FaShieldAlt className={styles.logoIcon} />
                            MORTASOFT
                        </div>
                        <p className={styles.tagline}>
                            Especialista en Ciberseguridad & Desarrollo de Sistemas Seguros
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>Enlaces Rápidos</h3>
                        <ul className={styles.linksList}>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    {link.path.startsWith('/#') ? (
                                        <a href={link.path}>{link.name}</a>
                                    ) : (
                                        <Link to={link.path}>{link.name}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className={styles.contactColumn}>
                        <h3 className={styles.columnTitle}>Contacto</h3>
                        <ul className={styles.contactList}>
                            <li>📧 mario@mortasoft.com</li>
                            <li>📍 Costa Rica</li>
                            <li>🕐 Lun - Vie, 9AM - 6PM</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Bottom Section */}
                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} Mortasoft. Todos los derechos reservados.
                    </p>
                    <p className={styles.madeWith}>
                        Hecho con <FaHeart className={styles.heartIcon} /> y React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
