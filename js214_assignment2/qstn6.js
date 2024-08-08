//map
function square(n){
    const num=n.split(' ').map(Number);
    const square=num.map(nums => nums*2);
    return square
}
const n = "1 2 3 4"
const res=square(n);
console.log('squares num',res)

//filter
function evennums (input){
    const numb=input.split(',').map(Number);
    const evennums=numb.filter(num => num%2===0);
    return evennums
}
const input = "1, 2, 3, 4, 5"
const result=evennums(input);
console.log('even numbers',result)

//reduce

function sums (inputs){
    const numbers=inputs.split(';').map(Number);
    const sum=numbers.reduce((acc,curr) =>acc+curr,0);
    return sum
}
const inputs = "5;10;15"
const results=sums(inputs);
console.log('sum is',results)

