// // Chapter 21-25
// // Task 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// var greet = ("Hello " + fullName + ", Welcome to our site!");
// alert(greet);

// // Task 2
// var phonePrompt = prompt("Enter your full mobile phone model");
// var phoneModel = ("My favourite phone is: " + phonePrompt + "<br>");
// var modelLength = ("Length of String: " + phonePrompt.length + "<br>");
// document.write(phoneModel,modelLength);

// // Task 3
// var word = "Pakistani";
// var indexNum = word.indexOf("n");
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + indexNum + "<br>");

// // Task 4
// var greeting = "Hello World";
// var lastIndexNum = greeting.lastIndexOf("l");
// document.write("String: " + greeting + "<br>");
// document.write("Last index of 'l': " + lastIndexNum + "<br>");

// // Task 5
// var word = "Pakistani";
// var charIndexNum = word.charAt(3);
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + charIndexNum + "<br>");

// // Task 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ").concat(lastName);
// var greet = ("Hello, " + fullName + "!");
// alert(greet);

// // Task 7
// var city = "Hyderabad";
// var replaceCity = city.replace("Hyder","Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + replaceCity + "<br>");

// // Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceMessage = message.replace(/and/g,"&");
// document.write(replaceMessage + "<br>");

// // Task 9
// var stringNum = "472";
// var numString = parseInt(stringNum);
// var typeString = typeof(stringNum);
// var typeNum = typeof(numString);
// document.write("Value: " + stringNum + "<br>");
// document.write("Type: " + typeString + "<br>");
// document.write("Value: " + numString + "<br>");
// document.write("Type: " + typeNum + "<br>");

// // Task 10
// var userWord = prompt("Enter a word to capitalize");
// var userWordUpper = userWord.toUpperCase();
// document.write("User input: " + userWord + "<br>");
// document.write("Upper case: " + userWordUpper + "<br>");

// // Task 11
// var userWord = prompt("Enter a word to convert in title case");
// var firstLetter = userWord.slice(0,1);
// firstLetter = firstLetter.toUpperCase();
// var otherLetter = userWord.slice(1);
// otherLetter = otherLetter.toLowerCase();
// var titleLetter = firstLetter + otherLetter;
// document.write("Title case: " + titleLetter + "<br>");

// // Task 12
// var num = 35.36;
// var numToString = num.toString();
// numToString = numToString.replace(".","");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + numToString + "<br>");

// // Task 16
// var university = "University of Karachi";
// var arr = university.split("");
// for(i = 0; i < arr.length; i++){
//     document.write(arr[i] + "<br>");
// }

// // Task 17
// var userWord = prompt("Enter a word to display last character");
// var lastChar = userWord.charAt(userWord.length - 1);
// document.write("User input: " + userWord + "<br>");
// document.write("Last character of input: " + lastChar + "<br>");

// // Task 18
// var text = "the quick brown fox jumps over the lazy dog"
// var arr = text.split(" ");
// var count = 0;
// for(i = 0; i < arr.length; i++){
//     if(arr[i] == "the"){
//         count++;
//     }
// }
// document.write("text: " + text + "<br>");
// document.write("Count of 'the' in above text: " + count);

// // Chapter 26-30
// // Task 1
// var userInput = prompt("Enter a positive number");
// var num = (Math.abs(userInput)).toFixed(5);
// var roundOff = Math.round(userInput);
// var floor = Math.floor(userInput);
// var ceil = Math.ceil(userInput);
// document.write("Number: " + Math.abs(num) + "<br>");
// document.write("Round off value: " + Math.abs(roundOff) + "<br>");
// document.write("Floor value: " + Math.abs(floor) + "<br>");
// document.write("Ceil value: " + Math.abs(ceil) + "<br>");

// // Task 2
// var userInput = prompt("Enter a negative number");
// var num = (-Math.abs(userInput)).toFixed(3);
// var roundOff = Math.round(userInput);
// var floor = Math.floor(userInput);
// var ceil = Math.ceil(userInput);
// document.write("Number: " + (-Math.abs(num)) + "<br>");
// document.write("Round off value: " + (-Math.abs(roundOff)) + "<br>");
// document.write("Floor value: " + (-Math.abs(floor)) + "<br>");
// document.write("Ceil value: " + (-Math.abs(ceil)) + "<br>");

// // Task 3
// var numInput = prompt("Enter a +ve or -ve number for an absolute value");
// var absoluteValue = Math.abs(numInput);
// document.write("The absolute value of " + numInput + " is " + absoluteValue + "<br>");

// // Task 4
// var num = Math.random() * 6;
// var ceilNum = Math.ceil(num);
// document.write("random dice value: " + ceilNum);

// // Task 5
// var num = Math.random() * 2;
// var ceilNum = Math.ceil(num);
// if(ceilNum === 1){
//     document.write("random coin value: " + ceilNum + "<br>");
//     document.write("Heads Win" + "<br>");
// }
// else{
//     document.write("random coin value: " + ceilNum + "<br>");
//     document.write("Tails Win" + "<br>");
// }

// // Task 6
// var num = Math.random() * 100;
// var floorNum = Math.ceil(num);
// document.write("random number between 1 and 100: " + floorNum);

// // Task 7
// var userWeight = prompt("Enter your weight");
// userWeight = parseInt(userWeight);
// var text = "The weight of user is  " + userWeight + " kilograms";
// document.write(text);

// // Task 8
// var userInput = +prompt("Enter a number between 1 and 10");
// var secretNum = Math.ceil(Math.random() * 10);
// if(userInput === secretNum){
//     alert("Congratulations! You found the secret number.");
// }
// else {
//     alert("Try again to find a secret number.");
// }

// Chapter 31-34