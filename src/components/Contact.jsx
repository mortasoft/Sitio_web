import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.sectionTitle}>Trabajemos Juntos</h2>
                    <p className={styles.sectionSubtitle}>
                        ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.text}
                >
                    <p>
                        Estoy siempre abierto a discutir nuevos proyectos, oportunidades de colaboración
                        o simplemente charlar sobre ciberseguridad y tecnología.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.ctaContainer}
                >
                    <a href="mailto:mario@mortasoft.com" className={styles.emailBtn}>
                        <FaEnvelope /> Enviar Email
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className={styles.contactCard}
                >
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>
                                <FaEnvelope />
                            </div>
                            <div className={styles.infoLabel}>Email</div>
                            <div className={styles.infoValue}>mario@mortasoft.com</div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>
                                <FaMapMarkerAlt />
                            </div>
                            <div className={styles.infoLabel}>Ubicación</div>
                            <div className={styles.infoValue}>Costa Rica</div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>
                                <FaPhone />
                            </div>
                            <div className={styles.infoLabel}>Disponibilidad</div>
                            <div className={styles.infoValue}>Lun - Vie, 9AM - 6PM</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className={styles.socials}
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
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
