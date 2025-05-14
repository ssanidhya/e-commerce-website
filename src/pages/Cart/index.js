import { Navbar } from "../../components/Navbar"
import { useCart } from "../../context/cart-context"
import { HorizontalProductCard } from "../../components/HorizontalProductCard"
import { PriceDetails } from "../../components/PriceDetails"
import { useNavigate } from "react-router-dom"

export const Cart = () => {

    const navigate = useNavigate();

    const { cart } = useCart();

    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center pt-6">
                <h1 className="text-3xl font-bold mt-8">Your Cart</h1>
                {
                    cart?.length > 0 ? (
                        <>
                            <div className="flex items-start">
                                <div className="flex flex-1 flex-col gap-8 items-center p-4">
                                    {
                                        cart?.length > 0 && cart.map(product => <HorizontalProductCard key={product.id} product={product} />)

                                    }
                                </div>
                                <PriceDetails />
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="text-2xl font-bold">Cart is Empty</h2>
                            <p onClick={() => navigate("/")} className="text-blue-900 underline text-lg hover: cursor-pointer">Cick to add items to cart</p>
                        </div>
                    )
                }
            </main>
        </>
    )
}