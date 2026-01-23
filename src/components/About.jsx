import { motion } from "framer-motion";
import { FaShieldAlt, FaCode, FaBug, FaUserSecret, FaDownload, FaLinkedin } from "react-icons/fa";
import styles from "./About.module.css";

const stats = [
    { number: "10+", label: "Años Experiencia" },
    { number: "50+", label: "Proyectos" },
    { number: "15+", label: "Certificaciones" },
    { number: "100%", label: "Satisfacción" },
];

const expertise = [
    {
        icon: <FaShieldAlt />,
        title: "Ciberseguridad Empresarial",
        description: "Implementación de estrategias de seguridad integral, gestión de riesgos y cumplimiento normativo para proteger activos críticos de negocio."
    },
    {
        icon: <FaBug />,
        title: "Pentesting & Red Team",
        description: "Pruebas de penetración avanzadas, simulación de ataques y evaluación de vulnerabilidades para identificar y mitigar riesgos de seguridad."
    },
    {
        icon: <FaCode />,
        title: "Desarrollo Seguro",
        description: "Diseño y desarrollo de aplicaciones con seguridad integrada desde el inicio, siguiendo mejores prácticas de OWASP y DevSecOps."
    },
    {
        icon: <FaUserSecret />,
        title: "Análisis Forense Digital",
        description: "Investigación de incidentes de seguridad, análisis de malware y recuperación de evidencia digital para respuesta ante amenazas."
    },
];

const About = () => {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.sectionTitle}>Sobre Mí</h2>
                    <p className={styles.sectionSubtitle}>
                        Profesional dedicado a la excelencia en ciberseguridad y desarrollo de sistemas
                    </p>
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={styles.leftColumn}
                    >
                        <div className={styles.intro}>
                            <p>
                                Soy <span className={styles.highlight}>Mario Zamora Madriz</span>, un profesional apasionado
                                por la ciberseguridad con más de una década de experiencia protegiendo organizaciones contra
                                amenazas digitales.
                            </p>
                            <p>
                                Como <span className={styles.highlight}>Chief Information Security Officer (CISO)</span>,
                                he liderado la implementación de estrategias de seguridad robustas, combinando conocimientos
                                técnicos profundos con visión estratégica de negocio.
                            </p>
                            <p>
                                Mi enfoque integra <span className={styles.highlight}>pentesting avanzado</span>,
                                desarrollo seguro de software y análisis de vulnerabilidades para crear ecosistemas
                                digitales resilientes y confiables.
                            </p>
                        </div>

                        <div className={styles.cta}>
                            <a href="#contact" className={styles.primaryBtn}>
                                <FaLinkedin /> Conectar en LinkedIn
                            </a>
                            <a href="#projects" className={styles.secondaryBtn}>
                                <FaDownload /> Ver Proyectos
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={styles.rightColumn}
                    >
                        <div className={styles.imageWrapper}>
                            <div className={styles.statsGrid}>
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={styles.statCard}
                                    >
                                        <div className={styles.statNumber}>{stat.number}</div>
                                        <div className={styles.statLabel}>{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Expertise Section */}
                <div className={styles.expertiseSection}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={styles.header}
                    >
                        <h2 className={styles.sectionTitle}>Áreas de Especialización</h2>
                    </motion.div>

                    <div className={styles.expertiseGrid}>
                        {expertise.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={styles.expertiseCard}
                            >
                                <div className={styles.iconWrapper}>
                                    <div className={styles.icon}>{item.icon}</div>
                                </div>
                                <h3 className={styles.expertiseTitle}>{item.title}</h3>
                                <p className={styles.expertiseDesc}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
