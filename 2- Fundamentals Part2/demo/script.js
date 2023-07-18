// Activating Strict Mode
'use strict';


///////////////////////////////////////

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;
*/


///////////////////////////////////////
// Functions

/*
function logger() {
  console.log('My name is Ayman');
}

// calling / running / invoking function
logger();
logger();
logger();
*/

/*
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/


///////////////////////////////////////
// Function Declarations vs. Expressions

/*
// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1999);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1999);

console.log(age1, age2);
*/


///////////////////////////////////////
// Arrow functions

/*
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, 'Ayman')); console.log(yearsUntilRetirement(1981, 'Mohamed'));
*/


///////////////////////////////////////
// Functions Calling Other Functions

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/


///////////////////////////////////////
// Reviewing Functions

/*
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1999, 'Ayman'));
console.log(yearsUntilRetirement(1950, 'Sedik'));
*/


///////////////////////////////////////
// PROBLEM #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas){
  if (avgDolphins >= 2*avgKoalas){
  console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  }
  else if (avgKoalas >= 2*avgDolphins){
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }
  else
  console.log('No team wins...');

}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);


// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/


///////////////////////////////////////
// Introduction to Arrays

/*
const friend1 = 'Ayman';
const friend2 = 'Ahmed';
const friend3 = 'Mahmoud';

const friends = ['Ayman', 'Ahmed', 'Mahmoud'];
console.log(friends);

const y = new Array(1991, 1984, 2000, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends.length-1);
console.log(friends[friends.length-1]);

friends[2] = 'Mostafa';
console.log(friends);
// friends = ['Abdo', 'Moamen'];

const firstName = 'Ayman'
const ayman = [firstName, 'Sedik', 2037 - 1999, 'programmer', friends]
console.log(ayman);
console.log(ayman.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));

console.log(calcAge(years[0]));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);
*/


///////////////////////////////////////
// Basic Array Operations (Methods)

/*
const friends = ['Ayman', 'Ahmed', 'Mahmoud'];

// Add elements
const newLength = friends.push('Ezz');
console.log(friends);
console.log(newLength);

friends.unshift('Karem');
console.log(friends);

// Remove element
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Ahmed'));
console.log(friends.indexOf('Omar'));

friends.push(32);
console.log(friends.includes('Ahmed'));
console.log(friends.includes('Amr'));
console.log(friends.includes(32));

if (friends.includes('Ahmed')) {
  console.log('You have a friend called Ahmed');
}
*/


///////////////////////////////////////
// PROBLEM #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 
*/

/*
const calcTip = function(bill) {
  return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

// With Arrow Function
// const calcTip = bill => bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/


///////////////////////////////////////
// Introduction to Objects

/*
const aymanArray = [
  'Ayman',
  'Sedik',
  2037- 1999,
  'programmer',
  ['Ahmed', 'Mohamed', 'Mahmoud']
];
// console.log(aymanArray[4]);

const ayman = {
  firstName: 'Ayman',
  lastName: 'Sedik',
  age: 2037- 1999,
  job: 'programmer',
  friends: ['Ahmed', 'Mohamed', 'Mahmoud'],
};
*/


///////////////////////////////////////
// Dot vs. Bracket Notation

/*
const ayman = {
  firstName: 'Ayman',
  lastName: 'Sedik',
  age: 2037- 1999,
  job: 'programmer',
  friends: ['Ahmed', 'Mohamed', 'Mahmoud'],
};
console.log(ayman);

console.log(ayman.firstName);
console.log(ayman['firstName']);

const nameKey = 'Name';
console.log(ayman['first' + nameKey]);
console.log(ayman['last' + nameKey]);

// console.log(ayman.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Ayman? Choose between firstName, lastName, age, job, and friends'); 


if (ayman[interestedIn]) {
  console.log(ayman[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

ayman.location = 'cairo';
ayman['facebook'] = 'Ayman Sedik';
console.log(ayman);

// Challenge
// "Ayman has 3 friends, and his best friend is called Mohamed"

console.log(`${ayman.firstName} has ${ayman.friends.length} friends, and his best friend is called ${ayman.friends[1]}`);
*/


///////////////////////////////////////
// Object Methods

/*
const ayman = {
  firstName: 'Ayman',
  lastName: 'Sedik',
  birthYear: 1999,
  job: 'programmer',
  friends: ['Ahmed', 'Mohamed', 'Mahmoud'],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear
  // }

  // calcAge: function() {
  //   console.log(this.firstName);
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function() {
    this.age = 2037 - this.birthYear;
    return  this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ?'a':'no'} driver's license.`;
  }
};

console.log(ayman.calcAge());

console.log(ayman.age);
console.log(ayman.age);
console.log(ayman.age);
// console.log (ayman['calcAge'](1991));


// Challenge
// "Ayman is a 23-year old programmer, and he has a driver's license"
console.log(ayman.getSummary());
*/


///////////////////////////////////////
// PROBLEM #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
}else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
*/


///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE

/*
for (let rep=1; rep<=10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

/*
const aymanArray = [
  'Ayman',
  'Sedik',
  2037- 1999,
  'programmer',
  ['Ahmed', 'Mohamed', 'Mahmoud'],
  true,
];

const types = [];

for (let i = 0; i<aymanArray.length ; i++) {
  // Reading from aymanArray
  console.log(aymanArray[i], typeof aymanArray[i]);

  // Filling types array
  // types[i] = typeof aymanArray[i];
  types.push(typeof aymanArray[i]);
}

console.log(types);

const years = [1991, 2008, 1999, 2023];
const ages = [];

for (let i=0; i<years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRING ---');
for (let i = 0; i<aymanArray.length ; i++) {
  if (typeof aymanArray[i] !== 'string') continue;

  console.log(aymanArray[i], typeof aymanArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i<aymanArray.length ; i++) {
  if (typeof aymanArray[i] === 'number') break;
  
  console.log(aymanArray[i], typeof aymanArray[i]);
}
*/


///////////////////////////////////////
// Looping Backwards and Loops in Loops

/*
const aymanArray = [
  'Ayman',
  'Sedik',
  2037- 1999,
  'programmer',
  ['Ahmed', 'Mohamed', 'Mahmoud'],
  true,
];

for(let i=aymanArray.length-1; i>=0; i--) {
  console.log(i, aymanArray[i]);
}

// Loops in Loops
for(let i =1; i<4; i++) {
  console.log(`Ayman Sedik ${i}`);

  for(let j =1; j<6;j++) {
    console.log(`Job ${i} Programs Developer ${j}`);
  }
}
*/


///////////////////////////////////////
// The while Loop

// let i=1;
// while(i<=10) {
//   console.log(`Ayman Sedik ${i}`);
//   i++;
// }

// let d = Math.trunc(Math.random() * 6) + 1;
// // console.log(d);

// while(d!==6){
//   console.log(`You rolled a ${d}`);
//   d = Math.trunc(Math.random() * 6) + 1;
//   if (d===6) console.log("Loop is about to end");
// }


///////////////////////////////////////
// PROBLEM #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
*/

// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i=0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function(arr) {
//   let  sum = 0;
//   for (let i=0;i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum+=arr[i];
//   }
//   // console.log(sum);
//   return sum / arr.length;
// }

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips  ));




///////////////////////////////////////  (Applications / Developer Skills)
// Using Google, StackOverflow and MDN

/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
*/


/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/


/*
PROBLEM 2:
Function should now receive 2 arrays of temps

1) Understanding the problem
- With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

2) Breaking up into sub-problems
- Merge 2 arrays
*/

/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/


///////////////////////////////////////
// Debugging with the Console and Breakpoints

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // 3) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // 2) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// 1) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// 1) IDENTIFY
console.log(amplitudeBug);
*/


///////////////////////////////////////
// PROBLEM #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/


// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console


/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
*/


