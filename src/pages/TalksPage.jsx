import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophone, FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaTag } from "react-icons/fa";
import { presentations } from "../data/presentations";
import styles from "./TalksPage.module.css";

const TalksPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    const categories = useMemo(() => {
        const unique = Array.from(new Set(presentations.map(p => p.category).filter(Boolean)));
        return ["Todas", ...unique];
    }, []);

    const filteredPresentations = useMemo(() => {
        return presentations.filter(p => {
            const matchesCategory = selectedCategory === "Todas" || p.category === selectedCategory;
            const query = searchQuery.toLowerCase().trim();
            if (!query) return matchesCategory;

            const matchesText = 
                p.title.toLowerCase().includes(query) ||
                p.event.toLowerCase().includes(query) ||
                p.organizer.toLowerCase().includes(query) ||
                (p.description && p.description.toLowerCase().includes(query)) ||
                (p.tags && p.tags.some(tag => tag.toLowerCase().includes(query)));

            return matchesCategory && matchesText;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.header}
                >
                    <h1 className={styles.pageTitle}>Ponencias y Charlas</h1>
                    <p className={styles.pageSubtitle}>
                        Conferencias, paneles de expertos y ponencias especializadas en Ciberseguridad, Inteligencia Artificial y Criptografía.
                    </p>
                </motion.header>

                {/* Search & Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={styles.controls}
                >
                    <div className={styles.searchWrapper}>
                        <FaSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Buscar por tema, evento, organizador o etiqueta..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                            aria-label="Buscar ponencias"
                        />
                    </div>

                    <div className={styles.categories}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.categoryBtnActive : ""}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <AnimatePresence mode="popLayout">
                    {filteredPresentations.length > 0 ? (
                        <motion.div layout className={styles.grid}>
                            {filteredPresentations.map((talk, index) => (
                                <motion.article
                                    layout
                                    key={talk.id || talk.title}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={styles.card}
                                >
                                    <div className={styles.cardHeader}>
                                        <div className={styles.metaRow}>
                                            <span className={styles.categoryBadge}>
                                                <FaTag /> {talk.category}
                                            </span>
                                            <span className={styles.dateBadge}>
                                                <FaCalendarAlt /> {talk.date}
                                            </span>
                                        </div>

                                        <h2 className={styles.title}>{talk.title}</h2>
                                        <div className={styles.event}>{talk.event}</div>
                                        <div className={styles.organizer}>{talk.organizer}</div>
                                        <div className={styles.location}>
                                            <FaMapMarkerAlt /> {talk.location}
                                        </div>
                                    </div>

                                    {talk.description && (
                                        <p className={styles.description}>{talk.description}</p>
                                    )}

                                    {talk.tags && talk.tags.length > 0 && (
                                        <div className={styles.tags}>
                                            {talk.tags.map((tag) => (
                                                <span key={tag} className={styles.tag}>
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className={styles.cardFooter}>
                                        {talk.link ? (
                                            <a
                                                href={talk.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.actionBtn}
                                            >
                                                <FaExternalLinkAlt /> Ver más información
                                            </a>
                                        ) : (
                                            <span className={styles.location}>
                                                <FaMicrophone /> Ponencia impartida
                                            </span>
                                        )}
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={styles.emptyState}
                        >
                            <h3 className={styles.emptyTitle}>No se encontraron ponencias</h3>
                            <p className={styles.emptyDesc}>
                                Intenta buscar con otros términos o selecciona otra categoría.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TalksPage;
