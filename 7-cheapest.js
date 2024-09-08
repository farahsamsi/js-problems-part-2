const mobiles = [
    { name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'xaiomi', price: 158000, camera: '12mp', color: 'black' },
    { name: 'IPhone', price: 1008000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 58000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 200, camera: '12mp', color: 'black' },
];

function getCheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

function getExpensivePhone(phones) {
    let max = phones[0];
    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}

const cheap = getCheapestPhone(mobiles);
const expensive = getExpensivePhone(mobiles);
console.log('cheapest phone is: ', cheap);
console.log('expensive phone is: ', expensive);