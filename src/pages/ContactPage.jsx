import { motion } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log("Form submitted");
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h1 className={styles.pageTitle}>Trabajemos Juntos</h1>
                    <p className={styles.pageSubtitle}>
                        ¿Tienes un proyecto en mente o quieres mejorar la seguridad de tu infraestructura?
                        Escríbeme y exploremos cómo puedo ayudarte.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.contactCard}
                >
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Nombre</label>
                            <input
                                type="text"
                                id="name"
                                className={styles.input}
                                placeholder="Tu nombre"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                className={styles.input}
                                placeholder="tu@email.com"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Mensaje</label>
                            <textarea
                                id="message"
                                className={styles.textarea}
                                placeholder="Cuéntame sobre tu proyecto..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            <FaPaperPlane /> Enviar Mensaje
                        </button>
                    </form>

                    <div className={styles.socialLinks}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaTwitter />
                        </a>
                        <a href="mailto:contacto@ejemplo.com" className={styles.socialIcon}>
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
