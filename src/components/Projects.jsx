import { motion } from "framer-motion";
import { FaGithub, FaTerminal, FaLock, FaTools } from "react-icons/fa";
import styles from "./Projects.module.css";

const projects = [
    {
        title: "Scripts de Linux",
        description: "Colección de scripts útiles para automatización de tareas en sistemas Linux. Incluye herramientas para administración de sistemas, backup automatizado y monitoreo de recursos.",
        tags: ["Bash", "Linux", "Automation"],
        icon: <FaTerminal />,
        image: "/images/linux-scripts.png",
        link: "https://github.com/mortasoft/linux-scripts"
    },
    {
        title: "MySQL Password Cracker",
        description: "Herramienta avanzada para crackear contraseñas MySQL 8.0 usando el algoritmo caching_sha2_password mediante wordlists. Optimizado para pentesting y auditorías de seguridad.",
        tags: ["Python", "Security", "MySQL"],
        icon: <FaLock />,
        image: "/images/mysql-cracker.png",
        link: "https://github.com/mortasoft/mysql_password_cracker"
    },
    {
        title: "Auroxus",
        description: "Suite completa de herramientas de hacking ético y pentesting. Incluye módulos para reconocimiento, escaneo de vulnerabilidades, explotación y post-explotación.",
        tags: ["Python", "Pentesting", "Security"],
        icon: <FaTools />,
        image: "/images/auroxus.png",
        link: "https://github.com/mortasoft/Auroxus"
    }
];

const Projects = () => {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
                    <p className={styles.sectionSubtitle}>
                        Herramientas y proyectos de código abierto para ciberseguridad
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={styles.card}
                        >
                            {/* Project Image */}
                            <div className={styles.imageContainer}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.projectImage}
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>

                            {/* Card Content */}
                            <div className={styles.cardContent}>
                                <div className={styles.projectHeader}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <div className={styles.projectIcon}>{project.icon}</div>
                                </div>

                                <p className={styles.projectDesc}>{project.description}</p>

                                <div className={styles.tags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className={styles.cardFooter}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    <FaGithub /> Ver en GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
