import { Link } from "react-router-dom"

export default function ProductCard ({product}) {
    return (
        <article>
            <div className="ProductImage">
                <div className="ProductTag"></div>
                <button className="FavoriteButton"></button>
                <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                </Link>
            </div>
            <div className="ProductInfo">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <div>{product.price}</div>
                <p>{product.status}</p>
                <button>Add To Card</button>
            </div>
        </article>
    )
}