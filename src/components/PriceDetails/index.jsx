import { useCart } from "../../context/cart-context"
import { getTotalCartAmount } from "../../utils/getTotalCartAmount"

export const PriceDetails = () => {

    const { cart } = useCart();

    const totalCartAmount = getTotalCartAmount(cart);
    const deliveryCharge = 25;

    return (
        <div className="w-[400px] bg-[#F8FAFC] rounded-lg p-5 flex flex-col gap-5 shadow-md">
            <p className="text-2xl font-bold border-b p-2">Price Details</p>
            <div className="flex flex-col gap-5 border-b p-2">
                <div className="flex justify-between">
                    <p>Total ({cart.length}) items</p>
                    <p className="font-semibold font-sans">Rs. {totalCartAmount}/-</p>
                </div>
                <div className="flex justify-between">
                    <p>Delivery Charge</p>
                    <p className="font-semibold font-sans">Rs. {deliveryCharge}/-</p>
                </div>
            </div>
            <div className="flex justify-between border-b p-2">
                <p>Total Amount</p>
                <p className="font-semibold font-sans">Rs. {totalCartAmount + deliveryCharge}/-</p>
            </div>
            <div className="p-2">
                <button className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin w-full">
                    PLACE ORDER
                </button>
            </div>

        </div>
    )
}