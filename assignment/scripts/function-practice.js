console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Test - should give personalized hello', helloName('Jo'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('Test - should give the sum of 3 and 17', addNumbers(3, 17));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log('Test - should give the product of 2, 3, and 4', multiplyThree(2, 3, 4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Test - isPositive(3) should be true', isPositive(3));
console.log('Test - isPositive(-3) should be false', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}
console.log('Testing getLast with an empty array', getLast([]));
console.log('Testing getLast with nonempty array [3, 1, 27]', getLast([3, 1, 27]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log('Testing find(5, [3, 1, 5])', find(5, [3, 1, 5]));
console.log('Testing find(5, [3, 1, 8])', find(5, [3, 1, 8]));
console.log('Testing find(5, [])', find(5, []));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.at(0)) {
    return true;
  }
  return false;
}
console.log('Testing isFirstLetter with H and Hello World', isFirstLetter('H', 'Hello World'));
console.log('Testing isFirstLetter with h and Hello World', isFirstLetter('h', 'Hello World'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}
console.log('Testing sumAll with [1, 3, 7, -2, 0]', sumAll([1, 3, 7, -2, 0]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
      outputArray.push(inputArray[i]);
    } // end if
  } // end loop over array
  return outputArray;
}
console.log('Testing allPositive with [1, 3, 7, -2, 0, 5]', allPositive([1, 3, 7, -2, 0, 5]));
console.log('Testing allPositive with [0, -5]', allPositive([0, -5]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Create a function that takes a number as an argument. Add up all the numbers
// from 1 to the number you passed to the function. For example, if the input is
// 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. Expect any
// positive number between 1 and 1000. (from Edabit)
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log('Testing addUp(4)', addUp(4));
console.log('Testing addUp(1)', addUp(1));
console.log('Testing addUp(13)', addUp(13));
console.log('Testing addUp(600)', addUp(600));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
