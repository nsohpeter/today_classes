/* const reverse = (strn) => {
  return [...String(strn)].reverse().join("");
};

let myReverse = reverse("peter");
console.log(myReverse); */

/* const cmp = (a, b) => {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
};

const cmpValue1 = cmp("peter", "peter"); // 0
const cmpValue2 = cmp("Peter", "peter"); // -1
const cmpValue3 = cmp("peter", "Peter"); // 1

console.log(cmpValue1);
console.log(cmpValue2);
console.log(cmpValue3);
 */

// the concept of split() function : convert string into Array which you can perform or manipulate it NORMALLY goes with join() function which bring it back to the normal string
/* var name = "Peter";
var strnArr = name.split("");
console.log(strnArr); */

// Array. Reduce()

// Using reduce to remove duplicaate values in an Array

/* const numbers = [1, 2, 4, 3, 4, 5, 2, 5, 4, 3];
const newNumbers = numbers.reduce((prev, num) => {
  if (prev.indexOf(num) === -1) {
    prev.push(num);
  }
  return prev;
}, []);

console.log(newNumbers); */

// using Reduce to find Max and Min values in an Array

/* const max = newNumbers.reduce((a, b) => {
  return a > b ? a : b;
}, 0);

console.log(max); */

// Using Filter() to do searching

/* var people = [
  {
    id: 1,
    name: "John",
    age: 28,
  },
  {
    id: 2,
    name: "Jane",
    age: 31,
  },
  {
    id: 3,
    name: "Peter",
    age: 55,
  },
];

const searchValue = people.filter((obj) => {
  let flag = false;

  Object.values(obj).forEach((value) => {
    if (String(value).startsWith("P")) {
      flag = true;
      return;
    }
  });
  if (flag) {
    console.log(obj);
  }
});

console.log(searchValue); */
