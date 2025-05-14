import { useCart } from "../../context/cart-context";

export const HorizontalProductCard = ({ product }) => {

    const { cartDispatch } = useCart();
    
    const onRemoveClick = (product) => {
            cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: { id: product.id }
            })
    }

    return (

        <div className="card-horizontal overflow-hidden d-flex shadow max-w-[750px] min-h-[200px] justify-between">
            <div className="card-hori-image-container relative w-[40%]">
                <img className="card-image" src={product.images[0]} alt={product.slug} />
            </div>
            <div className="card-details d-flex direction-column flex-grow flex-1 flex-col justify-between p-4">
                <div className="flex flex-col gap-2">
                    <div className="card-des w-full">{product.title}</div>
                    <div className="card-description">
                        <p className="card-price font-sans font-semibold">Rs. {product.price}</p>
                    </div>
                    <div className="quantity-container d-flex gap mt-auto">
                        <p className="q-title">Quantity: </p>
                        <div className="count-container d-flex align-center gap">
                            <button className="count"><span className="block -translate-y-[3px] transform">-</span></button>
                            <span className="count-value">1</span>
                            <button className="count"><span className="block -translate-y-[2px] transform">+</span></button>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-6 mt-auto px-3">
                    <div className="cta-btn">
                        <button onClick={() => onRemoveClick(product)} className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin whitespace-nowrap">
                            {/* <span className="material-symbols-outlined">
                                shopping_cart_off
                            </span> */}
                            Remove from Cart
                        </button>
                    </div>
                    <div className="cta-btn">
                        <button className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin whitespace-nowrap">
                            {/* <span className="material-symbols-outlined">
                                favorite
                            </span> */}
                            Move to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}