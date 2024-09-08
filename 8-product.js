
const products = [
    { name: 'shampoo', price: 299 },
    { name: 'chiruni', price: 20 },
    { name: 'shirt', price: 500 },
    { name: 'pant', price: 200 }
]

function getShoppingTotal(products){
    let total = 0;
    for (const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('total price :', total);