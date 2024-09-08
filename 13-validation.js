function multiply (num1, num2){
    console.log(typeof num1, typeof num2);

    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('Please provide a number');
    }
    const mult = num1*num2;
    return mult;
}

// const result =multiply(5,'seven');
// console.log(result);
// gives output NaN;

// const result =multiply(5,'seven');
// console.log(result);

function fullName(first , second){
    if (typeof first !== 'string'){
        return 'first name should be a string';
    }
    else if (typeof second !== 'string'){
        return 'second name should be a string';
    }
    const full = first + ' ' + second;
    return full;
}

// const full = fullName('roni', 7);
// console.log(full);

function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide object';
    }
    const price = product.price;
    return price;
}

// const price = getPrice({name: 'anything', price: 35, color: 'blue'});
const price = getPrice('two');
console.log(price);