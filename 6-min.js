const prices = [2000, 1600, 5000, 1000, 1200, 10000, 3000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;}

const cheap = getMin(prices);
console.log('cheapest one is:', cheap);