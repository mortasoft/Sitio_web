import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCheck, FaExclamationCircle } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import styles from "./ContactPage.module.css";

const ContactPage = () => {
    const form = useRef();
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        // Lee las credenciales desde el archivo .env
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus("success");
                form.current.reset();
                setTimeout(() => setStatus("idle"), 5000); // Reset status after 5s
            }, (error) => {
                console.log(error.text);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            });
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
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Nombre</label>
                            <input
                                type="text"
                                name="name"
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
                                name="email"
                                id="email"
                                className={styles.input}
                                placeholder="tu@email.com"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Mensaje</label>
                            <textarea
                                name="message"
                                id="message"
                                className={styles.textarea}
                                placeholder="Cuéntame sobre tu proyecto..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={status === "sending" || status === "success"}
                            style={{
                                opacity: status === "sending" ? 0.7 : 1,
                                background: status === "success" ? "#10b981" : status === "error" ? "#ef4444" : ""
                            }}
                        >
                            {status === "idle" && <><FaPaperPlane /> Enviar Mensaje</>}
                            {status === "sending" && "Enviando..."}
                            {status === "success" && <><FaCheck /> ¡Mensaje Enviado!</>}
                            {status === "error" && <><FaExclamationCircle /> Error al enviar</>}
                        </button>
                    </form>

                    <div className={styles.socialLinks}>
                        <a href="https://github.com/mortasoft" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/mario-zamora-madriz-b6846025/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/mortasoft" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaTwitter />
                        </a>
                        <a href="mailto:mortasoft@gmail.com" className={styles.socialIcon}>
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
