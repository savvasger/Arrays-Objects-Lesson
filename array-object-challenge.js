const numbers = [4, 7, 10, 13, 18, 21, 24, 29];

let evenNumbers = numbers.filter((val) => val % 2 === 0 )
console.log(evenNumbers)

let doubleNumbers = numbers.map((val) => val*2)
console.log(doubleNumbers)

let squaredOdds = (numbers.filter(val => val % 2 !== 0)).map(val => val**2)
console.log(squaredOdds)


let adjustedNumbers = (numbers.filter(val => val > 15)).map(val => val - 5)
console.log(adjustedNumbers)

