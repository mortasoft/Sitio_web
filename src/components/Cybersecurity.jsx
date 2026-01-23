import { motion } from "framer-motion";
import { FaShieldAlt, FaBug, FaLock, FaUserSecret } from "react-icons/fa";
import styles from "./Cybersecurity.module.css";

const features = [
    {
        icon: <FaShieldAlt />,
        title: "Seguridad Proactiva",
        description: "Implementación de medidas preventivas antes de que ocurran los incidentes"
    },
    {
        icon: <FaBug />,
        title: "Análisis de Vulnerabilidades",
        description: "Identificación y evaluación de puntos débiles en sistemas y aplicaciones"
    },
    {
        icon: <FaLock />,
        title: "Protección de Datos",
        description: "Estrategias avanzadas para salvaguardar información sensible"
    },
    {
        icon: <FaUserSecret />,
        title: "Ethical Hacking",
        description: "Pruebas de penetración y evaluación de seguridad desde la perspectiva del atacante"
    }
];

const items = [
    "Artículos sobre las últimas tendencias en ciberseguridad y amenazas emergentes",
    "Análisis detallado de vulnerabilidades, exploits y técnicas de mitigación",
    "Recursos y mejores prácticas para la protección de datos y privacidad",
    "Herramientas, frameworks y técnicas de hacking ético y pentesting",
    "Guías de implementación de controles de seguridad y compliance",
    "Estrategias de respuesta a incidentes y recuperación ante desastres"
];

const Cybersecurity = () => {
    return (
        <section id="cybersecurity" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.sectionTitle}>Ciberseguridad</h2>
                    <p className={styles.sectionSubtitle}>
                        Protegiendo activos digitales con soluciones de seguridad de vanguardia
                    </p>
                </motion.div>

                <div className={styles.featureGrid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={styles.featureCard}
                        >
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDesc}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.content}
                >
                    <div className={styles.listContainer}>
                        <ul className={styles.list}>
                            {items.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={styles.listItem}
                                >
                                    <div className={styles.bullet}></div>
                                    <span className={styles.itemText}>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Cybersecurity;
