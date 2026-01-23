# MORTASOFT - Mario Zamora Portfolio

Bienvenido al repositorio del sitio web personal y portafolio profesional de **Mario Zamora Madriz**. Este proyecto es una aplicación web moderna (SPA) construida con **React** y **Vite**, diseñada para mostrar experiencia profesional, proyectos y habilidades en Ciberseguridad y Desarrollo.

![Portfolio Preview](public/preview.png)

## 🚀 Tecnologías

Este proyecto utiliza un stack moderno enfocado en rendimiento y experiencia de usuario:

*   **Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Routing:** [React Router 7](https://reactrouter.com/)
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
*   **Efectos:** [tsParticles](https://particles.js.org/) (Fondo interactivo)
*   **Estilos:** CSS Modules + Variables CSS (Diseño Glassmorphism)
*   **Iconos:** React Icons (FontAwesome, etc.)
*   **Despliegue:** Docker + Nginx

## ✨ Características

*   **Diseño Premium:** Interfaz oscura con efecto "Glassmorphism" (vidrio esmerilado) y degradados modernos.
*   **Fondo Interactivo:** Partículas dinámicas que reaccionan al movimiento del mouse (efecto repulsión).
*   **Navegación Fluida:** Transiciones suaves entre páginas (Inicio, Sobre Mí, Proyectos, Contacto).
*   **Portafolio Dinámico:** Página de proyectos con buscador en tiempo real y filtrado por categorías.
*   **Página 404 Personalizada:** Diseño único para rutas no encontradas.
*   **Responsive:** Totalmente adaptado a dispositivos móviles y escritorio.

## 🛠️ Instalación y Ejecución Local

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/mortasoft/Sitio_web.git
    cd Sitio_web
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:5173`.

## 🐳 Ejecución con Docker

El proyecto incluye configuración lista para producción usando Docker y Nginx.

1.  **Construir y levantar el contenedor:**
    ```bash
    docker-compose up -d --build
    ```

2.  **Acceder al sitio:**
    Abre tu navegador en `http://localhost:8080`.

    Para detener el contenedor:
    ```bash
    docker-compose down
    ```

## 📂 Estructura del Proyecto

```
/src
  /components     # Componentes reutilizables (Header, Footer, Particles...)
  /pages          # Vistas principales (Home, About, Projects...)
  /assets         # Imágenes y recursos estáticos
  App.jsx         # Configuración principal y Router
  index.css       # Estilos globales y variables
/public           # Archivos públicos estáticos
Dockerfile        # Configuración de construcción Docker
nginx.conf        # Configuración del servidor Nginx
```

## 👤 Autor

**Mario Zamora Madriz**
*   Master en Ciberseguridad | C|CISO | CISA | CEH Master
*   [LinkedIn](https://www.linkedin.com/in/mario-zamora-madriz-b6846025/)
*   [GitHub](https://github.com/mortasoft)

---
© 2026 Mortasoft. Todos los derechos reservados.
