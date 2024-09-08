/**
 * below 100: 100 price
 * 101 to 200 : 90 price
 * more than 200 : 70 price
 */

function discountedPrice(quantity){
    if(quantity<=100){
        const total = quantity*100;
        return total;
    }
    else if(quantity<=200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

const price = discountedPrice(201);
console.log(price);