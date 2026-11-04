import { Link } from "react-router-dom";
import styles from "./Header.module.css"


export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.brand}>
                    <Link to="/">ZENKAI</Link>
                </div >
                <form className={styles.searchForm} role="search" aria-label="Buscar productos">
                    <label className={styles.visuallyHidden} htmlFor="product-search">
                        Buscar
                    </label>
                    <input className={styles.searchInput} type="search" id="product-search" placeholder="Buscar productos, series o categorias..."/>
                    <button className={styles.searchButton}  type="submit">Buscar</button>
                </form>
                
                <div className={styles.headerActions}>
                    <button aria-label="Cuenta">a</button>
                    <button aria-label="Favoritos">b</button>
                    <Link to="/cart">Carrito</Link>
                </div>
                

            </div >

            <nav className={styles.navigation}>
                <Link className={styles.navLabel} to="/">Home</Link>
                <Link className={styles.navLabel} to="/products">Figuras</Link>
                <Link className={styles.navLabel} to="/products">Manga</Link>
                <Link className={styles.navLabel} to="/products">Accesorios</Link>
                <Link className={styles.navLabel} to="/products">Merchandising</Link>
                <Link className={styles.navLabel} to="/products">Ofertars</Link>
            </nav>
        </header>
    )
}