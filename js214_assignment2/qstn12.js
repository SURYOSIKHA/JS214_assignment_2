const products = [
    { name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true },
    { name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true },
    { name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false },
    { name: "Book", category: "Books", price: 20, quantity: 100, available: true }
];

// 1. Filtered Products by category 'Electronics'
const filteredProducts = products.filter(product => product.category === 'Electronics');
console.log('Filtered Products:', filteredProducts);

// 2. Sorted Products by Price (ascending)
const sortedByPrice = products.slice().sort((a, b) => a.price - b.price);
console.log('Sorted Products by Price:', sortedByPrice);

// 3. Products with Total Value
const productsWithTotalValue = products.map(product => ({
    ...product,
    totalValue: product.price * product.quantity
}));
console.log('Products with Total Value:', productsWithTotalValue);

// 4. Inventory Report
const inventoryReport = products.reduce((report, product) => {
    // Total Products
    report.totalProducts += 1;

    // Total Value
    report.totalValue += product.price * product.quantity;

    // Average Price
    report.totalPriceSum += product.price;

    // Category Distribution
    report.categoryDistribution[product.category] = (report.categoryDistribution[product.category] || 0) + 1;

    return report;
}, {
    totalProducts: 0,
    totalValue: 0,
    totalPriceSum: 0,
    categoryDistribution: {}
});

// Calculate average price
inventoryReport.avgPrice = inventoryReport.totalPriceSum / products.length;

console.log('Inventory Report:', inventoryReport);