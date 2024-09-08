const products = [
    { name: 'shampoo', price: 299, quantity: 5 },
    { name: 'chiruni', price: 20, quantity: 2 },
    { name: 'shirt', price: 500, quantity: 1 },
    { name: 'pant', price: 200, quantity: 3 }
]

function cartTotal(products){
    let total = 0;
    for (const product of products){
        total = total + (product.price*product.quantity);
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log('You have to pay :', shoppingCost);