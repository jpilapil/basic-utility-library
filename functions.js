// add funciton
function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}

// subtract function
function subtract(input1, input2) {
   return input1 - input2;
}

// mulitply function
function multiply(input1, input2) {
   return input1 * input2;
}

// division function
function divide(input1, input2) {
   return input1 / input2;
}

// increment by 1
function increment(input1) {
   input1++;
   return input1;
}

// decrement by 1
function decrement(input1) {
   input1--;
   return input1;
}

// multiply decimal
function multiplyDecimal(input1, input2) {
   return input1 * input2;
}

// divide decimal
function divideDecimal(input1, input2) {
   return input1 / input2;
}

// remainder
function remainder(input1, input2) {
   return input1 % input2;
}

// concatenate strings with + operator
function concatenatePlus(input1, input2) {
   return input1 + " " + input2;
}

// concatenate strings using +=
function concatenatePlusEquals(input1, input2) {
   return (input1 += input2);
}

// construct strings + variables
function constructStringVariables(input1, input2) {
   var yourName = input1 + " " + input2;
   var greeting = "Hello " + yourName + ", nice to meet you";
   return greeting;
}

// find length of a string
function findLength(input1) {
   return input1.length;
}

// find first character of string
function firstCharacter(input1) {
   return input1[0];
}

// find nth character in string
function nthCharacter(input1, input2) {
   // input1 = String
   // input2 = number (nth you're searching for)
   return input1[input2];
}

// find last character
function lastCharacter(input1) {
   // notice input1 inside []
   return input1[input1.length - 1];
}

// find nth to last character
function nthToLast(input1, input2) {
   // example: suh dude[suh dude - 6] = h
   return input1[input1.length - [input2]];
}

// .push()
function arrayWithPush(input1) {
   // creates array with "Water", pushes input1 to the end of array
   myArray = ["Water"];
   myArray.push([input1]);
   return myArray;
}

//.pop()
function arrayWithPop(input1) {
   // takes input and pops it out of the end of old array, returns new array which is your input
   oldArray = ["Cat", "Dog", [input1]];
   newArray = oldArray.pop();
   return newArray;
}

function arrayWithShift() {
   // removes the first item in array (Pink in this case) with .shift() and displays it when pressing Run
   myArray = ["Pink", "Red", "Purple"];
   removedFromArray = myArray.shift();
   return removedFromArray;
}

function addAlbum(album) {
   //A1: frank ocean album
   // unshift adds (album) to beginnning of array
   // returns [(album), nostalgia ultra, channel orange]
   frankOceanAlbums = ["Nostalgia Ultra", "Channel Orange"];
   frankOceanAlbums.unshift(album);
   return frankOceanAlbums;
}

function shoppingList(item, num) {
   // input item and number of items.
   // .push() adds item and number of items to end of existing array
   // returns updated list
   var myList = [
      ["Beef ", 2],
      ["Chicken ", 4],
      ["Fish ", 3],
      ["Candy ", 10],
      ["Water ", 5],
   ];
   myList.push(item, num);
   return myList;
}

function standInLine(name) {
   var line = ["Wendla", "Melchior", "Moritz", "Haunshcen", "Ilsa", "Ernst"];
   backOfLine = line.push(name);
   firstInLine = line.shift();

   return firstInLine + " is next in line, " + backOfLine + "is at the end.";
}
