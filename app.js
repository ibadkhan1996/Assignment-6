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

// // Chapter 31-34

// // Task 1
// var currentDate = new Date();
// document.write(currentDate);

// // Task 2
// var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var currentMonth = date.getMonth();
// alert(monthArr[currentMonth]);

// // Task 3
// var dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var date = new Date();
// var today = date.getDay();
// var day = dayArr[today];
// if(day.length > 3){
//     var shortDay = day.slice(0,3);
// }
// alert(shortDay);

// // Task 4
// var date = new Date();
// var today = date.getDay();
// if(today == 0 || today == 6){
//     alert("It's Fun day");
// }
// else{
//     alert("It's week day");
// }

// // Task 5
// var date = new Date();
// var currentDate = date.getDate();
// var firstHalf = "First fifteen days of the month";
// var secondHalf = "Last fifteen days of the month";
// if(currentDate < 16){
//     document.write(firstHalf);
// }
// else{
//     document.write(secondHalf);
// }

// // Task 6
// var date = new Date();
// var milli= date.getTime();
// var min = (milli/(1000*60));
// var accuMin = Math.floor(min);
// document.write("Current Date: " + date + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + milli + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + accuMin + "<br>");

// // Task 7
// var date = new Date();
// var hour = date.getHours();
// console.log(hour);
// if(hour >= 12){
//     alert("It's PM");
// }
// else{
//     alert("It's AM");
// }

// // Task 8
// var laterDate = new Date("Dec 31, 2020");
// alert(laterDate);

// // Task 9
// var ramadanDate = new Date("April 24, 2020");
// var ramadanMilli = ramadanDate.getTime();
// var currentDate = new Date();
// var currentMilli = currentDate.getTime();
// var milliDiff = currentMilli - ramadanMilli;
// var ramadanDay = Math.floor(milliDiff/(1000*60*60*24));
// document.write(ramadanDay + " days have passed since 1st Ramadan, 2020" + "<br>");

// var bakraEidDate = new Date("July 31, 2020");
// var bakraEidMilli = bakraEidDate.getTime();
// var currentDate = new Date();
// var currentMilli = currentDate.getTime();
// var milliDiff = bakraEidMilli - currentMilli;
// var bakraEidDay = Math.floor(milliDiff/(1000*60*60*24));
// document.write(bakraEidDay + " days are remaining in Eid Al Adha, 2020" + "<br>");

// var askDate = prompt("Enter a date","mm dd, yy");
// var givenDate = new Date(askDate);
// var givenDateMilli = givenDate.getTime();
// var currentDate = new Date();
// var currentMilli = currentDate.getTime();
// var milliDiff = currentMilli - givenDateMilli;
// var requiredDay = Math.floor(milliDiff/(1000*60*60*24));
// document.write(requiredDay + " days have passed since " + askDate + "<br>");

// // Task 10
// var startDate = new Date("January 01, 2020");
// var startMilli = startDate.getTime();
// var currentDate = new Date();
// var currentMilli = currentDate.getTime();
// var secDiff = currentMilli - startMilli;
// var seconds = Math.floor(secDiff/(1000));
// document.write("On reference date " + currentDate + "<br>" + seconds + " seconds have passed since beginning of 2020");

// // Task 11
// var currentDate = new Date();
// document.write("current date: " + currentDate + "<br>");
// var hourBefore = currentDate.setHours(0);
// document.write("1 hour ago, it was " + currentDate);

// // Task 12
// var age = +prompt("Enter your age");
// var birthYear = 2020 - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);

// // Task 13
// var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var currentMonth = date.getMonth();
// var billingMonth = monthArr[currentMonth - 1];
// var customerName = prompt("Enter your Name");
// var unitUsed = +prompt("Enter number of units used");
// var perUnit = +prompt("Enter per unit rate");
// var netAmount = unitUsed * perUnit;
// document.getElementById("customerName").innerHTML = customerName;
// document.getElementById("month").innerHTML = billingMonth;
// document.getElementById("unitUsed").innerHTML = unitUsed;
// document.getElementById("perUnit").innerHTML = perUnit;
// document.getElementById("totalBill").innerHTML = netAmount;
// var lateCharges = (netAmount*10/100).toFixed(2); 
// document.getElementById("lateCharges").innerHTML = lateCharges;
// var lateBill = Number(netAmount) + Number(lateCharges);
// document.getElementById("lateBill").innerHTML = (lateBill).toFixed(2);
