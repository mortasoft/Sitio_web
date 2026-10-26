import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMeta = {
    "/": {
        title: "Mario Zamora Madriz | CISO & Especialista en Ciberseguridad",
        description: "Portafolio oficial de Mario Zamora Madriz (Mortasoft). Master en Ciberseguridad, C|CISO, CEH Master, CISA, Security+. Especialista en ciberdefensa y seguridad en IA.",
    },
    "/about": {
        title: "Sobre Mí & Trayectoria | Mario Zamora Madriz (Mortasoft)",
        description: "Conoce la trayectoria profesional, certificaciones (C|CISO, CEH Master, CISA) y experiencia en auditoría y gestión de riesgos de Mario Zamora Madriz.",
    },
    "/talks": {
        title: "Ponencias y Charlas | Mario Zamora Madriz (Mortasoft)",
        description: "Conferencias, paneles de expertos y charlas técnicas sobre Ciberseguridad en IA, Criptografía Post-Cuántica y Resiliencia Digital impartidas por Mario Zamora.",
    },
    "/ponencias": {
        title: "Ponencias y Charlas | Mario Zamora Madriz (Mortasoft)",
        description: "Conferencias, paneles de expertos y charlas técnicas sobre Ciberseguridad en IA, Criptografía Post-Cuántica y Resiliencia Digital impartidas por Mario Zamora.",
    },
    "/projects": {
        title: "Proyectos & Herramientas | Mario Zamora Madriz (Mortasoft)",
        description: "Herramientas de hacking ético, pentesting, scripts de seguridad y proyectos de software desarrollados por Mario Zamora (Auroxus, MySQL Password Cracker, etc.).",
    },
    "/contact": {
        title: "Contacto & Asesorías | Mario Zamora Madriz (Mortasoft)",
        description: "Inicia contacto profesional con Mario Zamora Madriz para consultorías CISO, auditorías de seguridad de la información, conferencias y talleres técnicos.",
    },
};

export const SEO = () => {
    const location = useLocation();

    useEffect(() => {
        const meta = pageMeta[location.pathname] || {
            title: "Página no encontrada | Mario Zamora Madriz (Mortasoft)",
            description: "La página solicitada no existe en el sitio oficial de Mario Zamora Madriz.",
        };

        document.title = meta.title;

        // Actualizar meta description
        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
            descTag.setAttribute("content", meta.description);
        }

        // Actualizar OpenGraph title y description
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", meta.title);
        }
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute("content", meta.description);
        }

        // Actualizar URL canónica
        const canonicalTag = document.querySelector('link[rel="canonical"]');
        if (canonicalTag) {
            canonicalTag.setAttribute("href", `https://mortasoft.com${location.pathname === "/" ? "" : location.pathname}`);
        }
    }, [location]);

    return null;
};

export default SEO;
