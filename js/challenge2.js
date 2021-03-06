/*

Arquivo js para resolução do segundo desafio do Project Euler
Segue o desafio: "Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms."

*/

var numbers = [];

function fibonacci(array, primeiro = 1, segundo = 2, max) {
  var count = 0;
  array.push(primeiro);
  array.push(segundo);
  while(count < max) {
    var index = array.length;
    var ultimo = array[index - 1];
    var antepenultimo = array[index - 2];
    count = antepenultimo + ultimo;
    array.push(count);
  }
  return array;
}

var result = fibonacci(numbers, 1, 2, 4000000);

var pares = result.filter(function(x) {
  if(x % 2 == 0) {
    return x;
  }
});

var final = pares.reduce(function(x, y) {
  return x + y;
});

console.log(final);
