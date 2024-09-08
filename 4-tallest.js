const heights = [23, 56, 87, 34, 94, 72];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
        // console.log(num);
    }
    return max;
}

const max = getMax(heights);
console.log('max value is', max);



const heights2=[12,32,5,48,12,2,10];

function getMin(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number<min){
            min=number;
        }
    }
    return min;
}

const min= getMin(heights2);
console.log('min value is', min);