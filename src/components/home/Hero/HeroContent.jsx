import { Link } from "react-router-dom"
import styles from "./HeroContent.module.css"
import { ShoppingCart, CirclePlay } from "lucide-react"

export default function HeroContent () {
    return (
        <div className={styles.heroContent}>
            <div className={styles.heroContentDescription}>
                <h5>ANIME - MANGA - FIGURAS - COLECCIONABLES</h5>
                <h1>ZENKAI</h1>
                <h2 >Tu tienda de anime <br /> y cultura japonesa </h2>
                <p className={styles.description}>Figuras, manga, artbooks y más de tus <br /> series favoritas, con la calidad que <br /> todo fanático merece.</p>
            </div>
            <div className={styles.heroContentActions}>
                <Link className={styles.explore} to="/products" >
                    <ShoppingCart size={20} strokeWidth={1.8} />
                    Explorar Catalogo 
                    <span> → </span>
                </Link>
                <a className={styles.aboutUs} >
                    <CirclePlay size={21} strokeWidth={1.8}/>Conoce ZENKAI
                </a>
            </div>
        </div>
    )
}