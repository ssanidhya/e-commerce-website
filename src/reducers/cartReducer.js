export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload.product]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            }
        
        default:
            return state;
    }
}