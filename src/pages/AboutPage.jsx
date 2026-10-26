import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaAward, FaCertificate, FaChalkboardTeacher, FaMicrophone, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { presentations } from "../data/presentations";
import styles from "./AboutPage.module.css";

const certifications = [
    { name: "CISA", org: "ISACA", logo: "/images/logos/ISACA_logo.png" },
    { name: "CEH Master", org: "EC-Council", logo: "/images/logos/Ec_Council_Logo.png" },
    { name: "Security+", org: "CompTIA", logo: "/images/logos/Comptia-logo.svg" },
    { name: "CHFI", org: "EC-Council", logo: "/images/logos/Ec_Council_Logo.png" },
    { name: "CCISO", org: "EC-Council", logo: "/images/logos/Ec_Council_Logo.png" },
];

const experience = [
    {
        title: "Chief Information Security Officer",
        company: "Contraloría General de la República | Costa Rica",
        period: `Enero 2023 - Presente (${new Date().getFullYear() - 2023} años)`,
        location: "San José, Costa Rica",
        description: "Liderar el proceso de la seguridad de la información institucional controlando la calidad de los productos que se generan, conforme a políticas y lineamientos establecidos.",
        achievements: [
            "Apoyo directo a la jefatura en labores de planificación, organización, dirección y gestión de calidad en seguridad de la información",
            "Supervisión administrativa o técnicamente equipos de personas",
            "Monitoreo del grado de madurez del personal respecto a la seguridad de la información",
            "Participación en la atención de ciberincidentes y continuidad del servicio"
        ]
    },
    {
        title: "Auditor de TI",
        company: "Contraloría General de la República",
        period: "Octubre 2020 - Marzo 2023 (2 años 6 meses)",
        location: "San José, Costa Rica",
        description: "Diseñar, aplicar e interpretar los resultados de pruebas de fiscalización relacionadas con la evaluación de controles generales y específicos sobre el gobierno y la gestión de tecnologías de información.",
        achievements: [
            "Evaluación de controles sobre TI, ciberseguridad y modelos de arquitectura de información",
            "Planificación y organización de TI, continuidad de negocio y gestión de proyectos de TI",
            "Auditorias de Ciberseguridad",
            "Implementación de las TI y ciclo de vida de desarrollo de sistemas"
        ]
    },
    {
        title: "Profesional de proyectos de Mejora Continua",
        company: "Contraloría General de la República",
        period: "Enero 2017 - Octubre 2020 (3 años 10 meses)",
        location: "Sabana Sur",
        description: "Área de Secretaría Técnica, de la División de Fiscalización Operativa y Evaluativa (DFOE).",
        achievements: [
            "Proyectos de mejora continua y calidad de los servicios en procesos de fiscalización",
            "Desarrollo de aplicaciones automatizadas para apoyar el proceso de auditoría",
            "Asesoría técnica a equipos de auditoría con enfoque estratégico y metodológico"
        ]
    },
    {
        title: "Administrador de Infraestructura",
        company: "Contraloría General de la República",
        period: "Junio 2012 - Diciembre 2016 (4 años 7 meses)",
        description: "Administración de infraestructura tecnológica y seguridad de la información.",
        achievements: [
            "Administración de infraestructura: Windows Server, Linux, Active Directory, Citrix, VMware",
            "Administración de plataforma de seguridad: Firewall, Control de Ancho de banda, políticas de seguridad",
            "Capacitación en herramientas ofimáticas Google Apps y software especializado"
        ]
    },
    {
        title: "Soporte Técnico",
        company: "Contraloría General de la República",
        period: "Mayo 2008 - Mayo 2012 (4 años 1 mes)",
        description: "Soporte técnico en equipos de cómputo y sistemas operativos.",
        achievements: [
            "Atención de problemas en impresoras, computadoras y equipos periféricos",
            "Administración de instalación, configuración y operación de sistemas operativos Windows y Linux",
            "Instalación y configuración de equipos periféricos"
        ]
    }
];

const teaching = [
    {
        institution: "LEAD University",
        role: "Profesor",
        period: "Julio 2022 - Julio 2023 (1 año)",
        location: "San José, Costa Rica",
        description: "Profesor en la Especialidad en Ciberseguridad"
    },
    {
        institution: "Universidad Latinoamericana de la Ciencia y la Tecnología (ULACIT)",
        role: "Profesor Universitario",
        period: "Enero 2019 - Diciembre 2024 (5 años)",
        location: "San José",
        description: "Profesor de la carrera de Bachillerato en Ingeniería Informática en los cursos de Sistemas Operativos y Seguridad y Protección de Datos"
    },
    {
        institution: "Universidad Cenfotec",
        role: "Profesor en la Maestría de Ciberseguridad",
        period: "Enero 2021 - Presente (5 años 1 mes)",
        location: "San José, Costa Rica",
        description: "Profesor en el curso de Seguridad en Datos almacenados"
    },
    {
        institution: "Universidad Latina de Costa Rica",
        role: "Profesor Universitario",
        period: "Junio 2021 - Diciembre 2021 (7 meses)",
        location: "Costa Rica",
        description: "Profesor en el Técnico en CiberSeguridad, bajo la Certificación CompTIA Security+ (SY0-501)"
    },
    {
        institution: "Universidad Don Bosco",
        role: "Profesor en la Maestría en Seguridad y Gestión de Riesgos Informáticos",
        period: "Julio 2019 - Septiembre 2019 (3 meses)",
        location: "Antiguo Cuscatlán, El Salvador",
        description: "Profesor en el curso de Criptografía"
    }
];

const education = [
    {
        degree: "Maestría en Ciberseguridad, Seguridad informática y de sistemas",
        institution: "Universidad Cenfotec",
        period: "2015 - 2018"
    },
    {
        degree: "Licenciatura en Tecnologías de Información para la Gestión del Negocio, Tecnología de la información",
        institution: "Universidad Latina de Costa Rica",
        period: "2013 - 2014"
    },
    {
        degree: "Bachillerato en Ingenieria en Sistemas Informaticos",
        institution: "Universidad Latina de Costa Rica",
        period: "2009 - 2012"
    },
    {
        degree: "Técnico Medio, Mantenimiento Reparación de Equipo de Computo",
        institution: "Vocacional Monseñor Sanabria",
        period: "2005 - 2007"
    }
];

const AboutPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.pageHeader}
                >
                    <h1 className={styles.pageTitle}>Mario Zamora Madriz, MSeg</h1>
                    <p className={styles.pageSubtitle}>
                        Chief Information Security Officer | CISA | CEH Master | Security+ | CHFI | CCISO
                    </p>
                </motion.div>

                {/* Introduction Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.introSection}
                >
                    <div className={styles.intro}>
                        <p>
                            Profesional con <span className={styles.highlight}>17 años de experiencia en TI</span>.
                            Me desempeño como Chief Information Security Officer (CISO) en la Contraloría General
                            de la República y soy profesor universitario.
                        </p>
                        <p>
                            Poseo una <span className={styles.highlight}>Maestría en Ciberseguridad</span> y
                            certificaciones internacionales como CISA, CCISO, CEH Master, Security+, CHFI.
                        </p>
                        <p>
                            Mi experiencia abarca desde <span className={styles.highlight}>fiscalización de TI</span>,
                            implementación de controles de seguridad, hasta la docencia en ciberseguridad a nivel
                            universitario en múltiples instituciones de Costa Rica y El Salvador.
                        </p>
                    </div>
                </motion.div>

                {/* Resume Section */}
                <div className={styles.resumeSection}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={styles.pageHeader}
                    >
                        <h2 className={styles.pageTitle}>Curriculum Profesional</h2>
                    </motion.div>

                    <div className={styles.resumeGrid}>
                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={styles.sidebar}
                        >
                            {/* Presentations */}
                            <div className={styles.sidebarCard}>
                                <h3 className={styles.sidebarTitle}>
                                    <FaMicrophone className={styles.sidebarIcon} />
                                    Ponencias y Charlas
                                </h3>
                                <div className={styles.presentationsList}>
                                    {presentations.map((presentation, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className={styles.presentationItem}
                                        >
                                            <h4 className={styles.presentationTitle}>{presentation.title}</h4>
                                            <div className={styles.presentationEvent}>{presentation.event}</div>
                                            <div className={styles.presentationOrganizer}>{presentation.organizer}</div>
                                            <div className={styles.presentationDetails}>
                                                <span className={styles.presentationLocation}>
                                                    <FaMapMarkerAlt /> {presentation.location}
                                                </span>
                                                <span className={styles.presentationDate}>
                                                    <FaCalendarAlt /> {presentation.date}
                                                </span>
                                            </div>
                                            {presentation.link && (
                                                <a
                                                    href={presentation.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.presentationLink}
                                                >
                                                    <FaExternalLinkAlt /> Ver más
                                                </a>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className={styles.sidebarCard}>
                                <h3 className={styles.sidebarTitle}>
                                    <FaCertificate className={styles.sidebarIcon} />
                                    Certificaciones
                                </h3>
                                <div className={styles.certList}>
                                    {certifications.map((cert, index) => (
                                        <motion.div
                                            key={cert.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className={styles.certItem}
                                        >
                                            <div className={styles.certLogoWrapper}>
                                                <img
                                                    src={cert.logo}
                                                    alt={`${cert.org} logo`}
                                                    className={styles.certLogo}
                                                />
                                            </div>
                                            <div className={styles.certInfo}>
                                                <div className={styles.certName}>{cert.name}</div>
                                                <div className={styles.certOrg}>{cert.org}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={styles.mainContent}
                        >
                            {/* Experience */}
                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>
                                    <FaBriefcase className={styles.sectionIcon} />
                                    Experiencia Profesional
                                </h3>
                                <div className={styles.timeline}>
                                    {experience.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className={styles.timelineItem}
                                        >
                                            <div className={styles.itemHeader}>
                                                <div>
                                                    <h4 className={styles.itemTitle}>{exp.title}</h4>
                                                    <div className={styles.itemCompany}>{exp.company}</div>
                                                </div>
                                                <div className={styles.itemPeriod}>{exp.period}</div>
                                            </div>
                                            <p className={styles.itemDesc}>{exp.description}</p>
                                            <ul className={styles.itemList}>
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Teaching Experience */}
                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>
                                    <FaChalkboardTeacher className={styles.sectionIcon} />
                                    Experiencia Docente
                                </h3>
                                <div className={styles.timeline}>
                                    {teaching.map((teach, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className={styles.timelineItem}
                                        >
                                            <div className={styles.itemHeader}>
                                                <div>
                                                    <h4 className={styles.itemTitle}>{teach.role}</h4>
                                                    <div className={styles.itemCompany}>{teach.institution}</div>
                                                </div>
                                                <div className={styles.itemPeriod}>{teach.period}</div>
                                            </div>
                                            <p className={styles.itemDesc}>{teach.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Education */}
                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>
                                    <FaGraduationCap className={styles.sectionIcon} />
                                    Formación Académica
                                </h3>
                                <div className={styles.timeline}>
                                    {education.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className={styles.timelineItem}
                                        >
                                            <div className={styles.itemHeader}>
                                                <div>
                                                    <h4 className={styles.itemTitle}>{edu.degree}</h4>
                                                    <div className={styles.itemCompany}>{edu.institution}</div>
                                                </div>
                                                <div className={styles.itemPeriod}>{edu.period}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
