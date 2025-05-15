import { Navbar } from "../../components/Navbar"
import { useEffect, useState } from "react"
import { getAllProducts } from "../../api/getAllProducts"
import { ProductCard } from "../../components/ProductCard";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductsByCategory } from "../../utils/getProductsByCategory";

export const Home = () => {

    const [products, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const products = await getAllProducts();
            let categories = await getAllCategories();
            categories = [...categories, { id: 0, name: 'All' }];
            setProduct(products);
            setCategories(categories);
        })()
    }, [])

    const onCategoryClick = async (category) => {
        const products = await getAllProducts();
        const filterByCategories = getProductsByCategory(products, category);
        setProduct(filterByCategories);
    }

    return (
        <>
            <Navbar />
            <main className="p-4">
                <div className="flex flex-col flex-wrap justify-center">
                    <div className="flex gap-4 justify-center p-4">
                        {
                            categories?.length > 0 && categories.map(category => <div className="bg-blue-500 font-semibold rounded-full p-2 whitespace-nowrap hover: cursor-pointer" onClick={() => onCategoryClick(category.name)}>{category.name}</div>)
                        }
                    </div>
                    <div className="flex flex-wrap gap-10 p-8">
                        {
                            products?.length > 0 ? products.map(product => <ProductCard key={product.id} product={product} />)
                            : <h2 className="font-bold text-xl">No products found. Please try another category</h2>
                        }
                    </div>
                </div>

            </main>
        </>
    )
}