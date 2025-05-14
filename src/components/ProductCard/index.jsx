import { useCart } from "../../context/cart-context"
import { findProductInCart } from "../../utils/findProductInCart"
import { useNavigate } from "react-router-dom"

export const ProductCard = ({ product }) => {
    
    const { cart, cartDispatch } = useCart();

    const navigate = useNavigate();


    const isProductInCart = findProductInCart(cart, product.id);

    const onCartClick = (product) => {
        !isProductInCart ? 
        cartDispatch({
            type: "ADD_TO_CART",
            payload: { product }
        }) : navigate("/cart");
    }
    
    return (
        <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                <img className="card-image" src={product.images[0]} alt={product.slug} />
            </div>
            <div className="card-details flex flex-col flex-1">
                <div className="card-des">{product.title}</div>
                <div className="card-description">
                    <p className="card-price font-sans font-semibold">
                        Rs. {product.price}
                    </p>
                </div>
                <div className="cta-btn mt-auto">
                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                        Add to Wishlist
                    </button>
                    <button onClick={() => onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        <span className="material-symbols-outlined">
                            {
                                isProductInCart ? "shopping_cart_checkout" : "shopping_cart"
                            }
                        </span>
                        {
                            isProductInCart ? "Go to Cart" : "Add to Cart"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}