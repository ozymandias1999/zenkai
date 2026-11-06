import styles from "./HeroFeatures.module.css"
import { Package, ShieldCheck, Star } from "lucide-react";


export default function HeroFeatures () {
    return (
    <ul className={styles.heroFeatures}>
        <li>
            <Package size={27} strokeWidth={1.6} aria-hidden="true" />
            <p>Envíos a <br /> todo el Perú</p>
        </li>
        <li>
            <ShieldCheck size={27} strokeWidth={1.6} aria-hidden="true" />
            <p>Productos <br /> originales</p>
        </li>
        <li>
            <Star size={27} strokeWidth={1.6} aria-hidden="true" />
            <p>Novedades <br /> todas las semanas</p>
        </li>
    </ul>)
}