export const getProductsByCategory = (products, category) => {
    
    const filterByCategories = category.toLowerCase() === 'all' ? products : products.length > 0 && products.filter(product => product.category.name.toLowerCase() === category.toLowerCase());
    return filterByCategories;
}