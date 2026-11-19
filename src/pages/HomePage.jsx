import Hero from "../components/home/Hero/Hero"
import products from "../data/products"
import ProductList from "../components/products/ProductList/ProductList"


export default function HomePage() {
    return (
        <main>
            <Hero/>
            <ProductList products={products}/>
        </main>
    )
}