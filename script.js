
function onload(){
    
    const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
// Using a for loop:
// Using the forEach method:
// Using the map method:

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
// Answer:

// 3. Display the product of all numbers using reduce
// Answer:

//Final

var results = []
for (let i=0; i<numbers.length; i++){
    results = results.concat(String.fromCharCode(numbers[i]));
}
console.log('results1', results.join(','))

document.getElementById('results1').innerText = results;

var results2 = []
numbers.forEach(function(numbers){
    results2 = results2.concat(String.fromCharCode(numbers))
})
console.log('results2', results2.join())

document.getElementById('results2').innerText = results2;

var results3=[]
numbers.map(function(numbers){
    results3 =results3.concat(String.fromCharCode(numbers))
})
console.log('results3', results3.join())

document.getElementById('results3').innerText = results3;

var results4=[]
for (let i=0; i<numbers.length; i++){
    if (numbers[i]>72 && numbers[i]<88){
        results4 = results4.concat(numbers[i])
    }
}
console.log('results4', results4)

document.getElementById('results4').innerText = results4;

var results5=1
for (let i=0; i<numbers.length; i++){
    results5=numbers[i]*results5
}
document.getElementById('results5').innerText = results5;

    
}