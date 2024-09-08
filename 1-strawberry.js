const disha=56;
const swargo=95;

if(disha > swargo){
    console.log('Disha will get strawberry');
}
else{
    console.log('Swargo will get strawberry');
}

// inside function
function getMax(num1, num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(disha, swargo);
console.log(max);