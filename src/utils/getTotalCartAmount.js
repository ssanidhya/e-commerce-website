const getTotalCartAmount = (cart) => {
    console.log(cart);
    return (
        cart?.length > 0 ? cart.reduce((acc, cur) => acc + cur.price, 0) : 0
    )
}

export { getTotalCartAmount }