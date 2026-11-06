import { Link } from "react-router-dom"
import { siInstagram, siFacebook, siYoutube, siTiktok } from 'simple-icons'
import SocialIcon from "./SocialLinks/SocialLinks"
import styles from "./Footer.module.css"
import stylesLinks from "./SocialLinks/SocialLinks.module.css"


export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerBrand}>
                    <h2>ZENKAI</h2>
                    <p>Tu universo de anime y cultura japonesa</p>
                </div>
                <hr />
                <nav className={styles.footerNavigation}>
                    <div className={styles.footerSection}>
                        <h3>Explorar</h3>
                        <ul>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/products">Productos</Link>
                            </li>
                            <li>
                                <Link to="/products">Figuras</Link>
                            </li>
                            <li>
                                <Link to="/products">Manga</Link>
                            </li>
                            <li>
                                <Link to="/products">Ofertas</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h3>Información Legal</h3>
                        <ul>
                            <li>
                                <a href="" >Sobre nosotros</a>
                            </li>
                            <li>
                                <a href="">Términos y condiciones</a>
                            </li>
                            <li>
                                <a href="">Política de privacidad</a>
                            </li>
                            <li>
                                <a href="">Libro de reclamaciones</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h3>Atención al cliente</h3>
                        <ul>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer">Contacto</a>
                            </li>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer">Envíos</a>
                            </li>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer">Cambios y devoluciones</a>
                            </li>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer">Preguntas Frecuentes</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h3>Síguenos</h3>
                        <div className={stylesLinks.socialLinks}>
                            <a href="https://www.instagram.com/" aria-label="Visitar Instagram de ZENKAI" target="_blank" rel="noopener noreferrer">
                            <SocialIcon icon={siInstagram}/>
                            </a>
                            <a href="https://www.facebook.com/" aria-label="Visitar Facebook de ZENKAI" target="_blank" rel="noopener noreferrer">
                            <SocialIcon icon={siFacebook}/>
                            </a>
                            <a href="https://www.youtube.com/" aria-label="Visitar YouTube de ZENKAI" target="_blank"  rel="noopener noreferrer">
                            <SocialIcon icon={siYoutube}/>
                            </a>
                            <a href="https://www.tiktok.com/" aria-label="Visitar TikTok de ZENKAI" target="_blank" rel="noopener noreferrer">
                            <SocialIcon icon={siTiktok}/>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className={styles.paymentMethods}>
                    <h3>Métodos de pago</h3>
                    <div className={styles.paymentLogos}>
                    <img src="public/images/payments/visa.png" alt="Visa"/>
                    <img src="public/images/payments/mastercard.svg" alt="Mastercard" />
                    <img src="public/images/payments/yape.svg" alt="Yape" />
                    <img src="public/images/payments/plin.png" alt="Plin" />
                    </div>
                </div>
                <hr />
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomBrand}>
                    <p>© 2026 ZENKAI</p>
                    <p>Todos los derechos reservados</p>
                    </div>
                    <div className={styles.footerBottomClaim}>
                        <a href="">Reclamaciones</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}