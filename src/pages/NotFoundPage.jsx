import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.errorCode}>404</div>
                <h1 className={styles.title}>Página No Encontrada</h1>
                <p className={styles.message}>
                    Lo sentimos, parece que te has aventurado en territorio inexplorado.
                    La página que buscas no existe o ha sido movida.
                </p>
                <Link to="/" className={styles.homeButton}>
                    <FaHome /> Volver al Inicio
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
