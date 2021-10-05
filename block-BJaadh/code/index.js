// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
strings.push("called");
strings.push("sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");
// - Remove the first word in the array (strings)
strings.unshift();
// - Find all the words that contain 'is' use string method 'includes'
strings.filter((string) => strings.includes("is"));
// - Find all the words that contain 'is' use string method 'indexOf'
strings.filter((string) => strings.indexOf("is")) !== -1;
// - Check if all the numbers in numbers array are divisible by three use array method (every)
[...numbers].every((num) => num % 3 === 0);
// -  Sort Array from smallest to largest
[...numbers].sort((a, b) => a - b);
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
[...numbers].sort((a, b) => a - b).pop();
// - Find longest string in strings
[...strings].sort((a, b) => a.length - b.length).pop();
// - Find all the even numbers
numbers.filter((num) => num % 2 === 0);
// - Find all the odd numbers
numbers.filter((num) => num % 2 !== 0);
// - Place a new word at the start of the array use (unshift)
strings.unshift("New word");
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(3, 5));
// - Replace 12 & 18 with 1221 and 1881
console.log(
  numbers.map((num) => {
    if (num === 12) {
      return 1221;
    } else if (num === 18) {
      return 1881;
    } else {
      return num;
    }
  })
);
// - Replace words in strings array with the length of the word
let stringsLength = console.log(strings.map((string) => strings.length));
// - Find the sum of the length of words using above question
stringsLength.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
}, 0);
// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
let filteredCustomer = customers.filter((customer) =>
  customer.firstname.startsWith("J")
);
// - Create new array with only first name
let firstCustomer = customers.map((customer) => customer.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullNameCustomer = customers.map(
  (customer) => "${customer.firsname} ${customer.lastname}"
);
// - Sort the array created above alphabetically
[...fullNameCustomer].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomers = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u")
  ) {
    return true;
  } else {
    return false;
  }
});
