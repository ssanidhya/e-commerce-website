import { Navbar } from "../../components/Navbar"
import { useCart } from "../../context/cart-context"
import { HorizontalProductCard } from "../../components/HorizontalProductCard"
import { PriceDetails } from "../../components/PriceDetails"

export const Cart = () => {

    const { cart } = useCart();

    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center pt-6">
                <h1 className="text-3xl font-bold mt-8">My Cart</h1>
                <div className="flex items-start">
                    <div className="flex flex-1 flex-col gap-8 items-center p-4">
                        {
                            cart?.length > 0 && cart.map(product => <HorizontalProductCard key={product.id} product={product} />)
                                
                        }
                    </div>
                    <PriceDetails />
                </div>
            </main>
        </>
    )
}