import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { ShoppingCart, Heart, UserRound } from "lucide-react";


export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.brand}>
                    <Link to="/">ZENKAI</Link>
                </div >

                <nav className={styles.navigation}>
                    <Link className={styles.navLabel} to="/">Home</Link>
                    <Link className={styles.navLabel} to="/products">Figuras</Link>
                    <Link className={styles.navLabel} to="/products">Manga</Link>
                    <Link className={styles.navLabel} to="/products">Accesorios</Link>
                    <Link className={styles.navLabel} to="/products">Merchandising</Link>
                    <Link className={styles.navLabel} to="/products">Ofertars</Link>
                </nav>
                <form className={styles.searchForm} role="search" aria-label="Buscar productos">
                    <label className={styles.visuallyHidden} htmlFor="product-search">
                        Buscar
                    </label>
                    <input className={styles.searchInput} type="search" id="product-search" placeholder="Buscar productos, series o categorias..."/>
                    <button className={styles.searchButton}  type="submit">Buscar</button>
                </form>
                
                
                <div className={styles.headerActions}>
                    <button className={styles.headerIcon} aria-label="Cuenta" type="button">
                        <UserRound  size={23} strokeWidth={1.7}/>
                    </button>
                    <button className={styles.headerIcon} aria-label="Favoritos" type="button">
                        <Heart  size={23} strokeWidth={1.7}/>
                    </button>
                    <Link className={styles.headerIcon} to="/cart">
                        <ShoppingCart  size={23} strokeWidth={1.7}/>
                    </Link>
                </div>
                

            </div >
            
        </header>
    )
}