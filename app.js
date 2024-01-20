
// // ========================Start Chapter 31 -34========================

// // ************Task-1************
// var dObj = new Date();

// // ************Task-2************
// var dStr = new Date().toString();

// // ************Task-3************
// var d = new Date().getDay();
// var day = d;

// // ************Task-4************
// var daysName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'fridady', 'saturday'];
// alert(daysName[day]);

// // ************Task-5************
// var datePartYear = dObj.getFullYear();
// var datePartMonth = dObj.getMonth();
// var datePartDay = dObj.getDay();
// var datePartDate = dObj.getDate();
// var datePartTime = dObj.getTime();
// var datePartHours = dObj.getHours();
// var datePartMinutes = dObj.getMinutes();
// var datePartSeconds = dObj.getSeconds();
// var datePartMilliSeconds = dObj.getMilliseconds();

// // ************Task-6************
// var lastDayOf2020 = new Date('December, 31, 2020');

// // ************Task-7************
// var secondDaySecondMonthOf1992 = new Date('February, 2, 1992');

// // ************Task-8************
// var milliSecondsEllapsed1980 = (new Date(1980, 0, 1).getTime());

// // ************Task-9************
// var changeYear = new Date().setFullYear(2001);

// // ************Task-10************
// function changeMonth(date) {
//     return date.setMonth(0);
// }
// changeMonth(secondDaySecondMonthOf1992);

// // ************Task-11************
// var changeDate = dObj.setDate(25);

// // ************Task-12************
// function changeMinutes(date) {
//     var getTime = prompt('Enter Time');
//     return date.setMinutes(getTime);
// }
// changeMinutes(dObj);

// // ************Task-13************
// function changeHours(date) {
//     return date.setHours(5);
// }
// changeHours(dObj);

// // ************Task-14************
// var ageCalculator = dObj.getFullYear() - new Date('December, 13, 2000').getFullYear();

// // ========================End Chapter 31 -34========================
// // ========================Start Chapter 35 -37========================


// // ************Task-1************
// // function displayAlert(){

// // ************Task-2************
// function askName() {
//     return prompt("Enter user Name");
// }
// var userName = askName();

// // ************Task-3************
// function showUserInfo(userInfo) {
//     alert(userInfo);
// }

// function callingFunction() {
//     var callFirstFunction = askName();
//     var callSecondFunction = showUserInfo(callFirstFunction);
// }



// // ************Task-4************
// function usersName() {
//     var x = prompt("Enter your father Name");
//     alert(x);

// }
// usersName();

// // ************Task-5************
// function concat(a, b, c) {
//     return a + b + c;
// }
// var string = "abcd";

// var concatinate = concat(something, "lorem Ipsum", 24);

// // ************Task-6************
// function fullName(a, b) {
//     return a + b;
// }
// var myFullName = newFunction("test", "fsdafasdf");

// // ************Task-7************
// function multiplication(a, b, c) {
//     return a * b * c;
// }
// var multiply = multiplication(2, 2, 2);

// // ************Task-8************
// var arr = [1, 2, 3, 4, 5, 6];

// function averageFunction(data) {
//     var total = 0;
//     for (var i = 0; i < data.length; i++) {
//         total += data[i];
//     }
//     return total / data.length;
// }

// var Average = averageFunction(arr);


// // ************Task-9************
// function sum(x, y) {
//     return x + y;
// }
// var callSum = sum(10, 40);

// // ************Task-10************
// var arr1 = [1, 2, 3, 4, 5, 6];

// function newAverageFunction(data) {
//     var total = 0;
//     for (var i = 0; i < data.length; i++) {
//         total += data[i];
//     }
//     return total / data.length;
// }

// var Average = newAverageFunction(arr1);

// // ************Task-11************
// function getVal() {
//     return "dsaffasfasdfsadf";
// }
// var xw = getVal();

// // ************Task-12************
// function letterCount(words) {
//     return words;
// }
// var count = letterCount('fsdafasdfasdf'.length);

// // ************Task-13************
// function setYear() {
//     var date = new Date();
//     date.setFullYear(2022);
//     return date;
// }

// // ************Task-14************
// function ageCalc(dob) {

//     return new Date().getFullYear() - dob.getFullYear()

// }

// // ************Task-15************
// function foundPresense(x) {
//     var array = ["Altaf", "Nawaz", "Imran", "abubakar", "Ali", "hussain", "kamran"];
//     for (var i = 0; i <= array.length; i++) {
//         if (userName === array[i]) {
//             return true;
//         }
       
//     }
//     return false;

// }
// var presenseName =  foundPresense('kamran');

// // ************Task-16************
// function words(str) {
//     return str.repeat(10);
// }
// var b = words("x");

// // ************Task-17************
// function reverse() {
//     var b = ['a', 'b', 'c', 'd', 'e'];
//     b.reverse();
// }
// reverse();

// // ************Task-18************
// function reverse(number) {
//     var reversedString = number.toString().split('').reverse().join('');
//     var reverseNumber = parseInt(reversedString);
//     return reverse;
// }
// var reversedNumber = reversedNumber(1234);

// // ************Task-19************
// function palindrome(b) {
//     var result = b.split('').reverse().join('');
//     return result;
// }
// var checkPalindrome = palindrome('madam');

// // ************Task-20************
// function textCapitalize(inputString) {
//     var words = inputString.split(' ');
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }
// var inputString = 'the quick brown fox';
// var result = textCapitalize(inputString);


// // ************Task-21************
// function checkMinMax(x) {
//     var min = Math.min(...x);
//     var max = Math.max(...x);

//     return [min, max];
// }
// var numbers = [10, 20, 23, 5, 40, 54, 80];

// checkMinMax(numbers);


// // ========================End Chapter 35 -37========================
// // ========================Start Chapter 35 -38========================

// // ************Task-1************
// var example = "my name is yasir Ali";

// function test1() {
//     console.log(example);
// }
// test1();

// // ************Task-2************
// function fasdf() {
//     var example = 'my name is yasir Ali';
//     console.log(example);
// }
// fasdf();