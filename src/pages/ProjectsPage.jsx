import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTerminal, FaLock, FaTools, FaSearch, FaCode, FaRobot, FaShieldAlt, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectsPage.module.css";



// Project Data
const projects = [
    {
        title: "Senderismo Costa Rica",
        description: "Sitio Web para explorar las maravillas naturales de Costa Rica. Aventuras seguras con guías certificados y experiencias inolvidables. https://www.senderismocostarica.co.cr/",
        tags: ["Python FastAPI", "SQLAlchemy", "React (Vite)", "Docker"],
        category: "Desarrollo",
        icon: <FaCode />,
        image: "/images/senderismo.png",
        link: "https://www.senderismocostarica.co.cr/"
    },
    {
        title: "Scripts de Linux",
        description: "Colección de scripts útiles para automatización de tareas en sistemas Linux. Incluye herramientas para administración de sistemas, backup automatizado y monitoreo de recursos.",
        tags: ["Bash", "Linux", "Automation"],
        category: "Scripting",
        icon: <FaTerminal />,
        image: "/images/linux-scripts.png",
        link: "https://github.com/mortasoft/linux-scripts"
    },
    {
        title: "MySQL Password Cracker",
        description: "Herramienta avanzada para crackear contraseñas MySQL 8.0 usando el algoritmo caching_sha2_password mediante wordlists. Optimizado para pentesting y auditorías de seguridad.",
        tags: ["Python", "Security", "MySQL"],
        category: "Ciberseguridad",
        icon: <FaLock />,
        image: "/images/mysql-cracker.png",
        link: "https://github.com/mortasoft/mysql_password_cracker"
    },
    {
        title: "Auroxus",
        description: "Suite completa de herramientas de hacking ético y pentesting. Incluye módulos para reconocimiento, escaneo de vulnerabilidades, explotación y post-explotación.",
        tags: ["Python", "Pentesting", "Security"],
        category: "Ciberseguridad",
        icon: <FaTools />,
        image: "/images/auroxus.png",
        link: "https://github.com/mortasoft/Auroxus"
    },
];

// Extract unique categories
const allCategories = ["Todos", ...new Set(projects.map(p => p.category).filter(Boolean))];

const ProjectsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        const filtered = projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCategory = selectedCategory === "Todos" || project.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
        setFilteredProjects(filtered);
    }, [searchQuery, selectedCategory]);

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h1 className={styles.pageTitle}>Mis Proyectos</h1>
                    <p className={styles.pageSubtitle}>
                        Una colección de herramientas open source, scripts de automatización y experimentos en ciberseguridad e IA.
                    </p>
                </motion.div>

                {/* Controls: Search & Filter */}
                <div className={styles.controls}>
                    <div className={styles.searchWrapper}>
                        <input
                            type="text"
                            placeholder="Buscar proyectos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                        <FaSearch className={styles.searchIcon} />
                    </div>

                    <div className={styles.categories}>
                        {allCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className={styles.grid}
                >
                    <AnimatePresence>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className={styles.card}
                                >
                                    {/* Project Image */}
                                    <div className={styles.imageContainer}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={styles.projectImage}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://via.placeholder.com/600x400/0f172a/818cf8?text=Project+Image";
                                            }}
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
                                            {project.category === "Desarrollo" ? (
                                                <>
                                                    <FaExternalLinkAlt /> Visitar Sitio
                                                </>
                                            ) : (
                                                <>
                                                    <FaGithub /> Ver Código
                                                </>
                                            )}
                                        </a>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={styles.noResults}
                            >
                                <FaCode />
                                <p>No se encontraron proyectos con esos criterios.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsPage;
