import ProductCard from "../ProductCard/ProductCard";

export default function ProductList ({products}) {
    return (
        <div className="ProductList">
        {products.map((product=>(<ProductCard product={product} key={product}/>)))}
        </div>
    )
}