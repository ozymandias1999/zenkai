import { Link } from "react-router-dom";


export default function Header () {
    return (
        <header>
            <Link to="/">ZENKAI</Link>

            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/products">Figuras y productos</Link>
                <Link to="/cart">Carrito</Link>
            </nav>
        </header>
    )
}