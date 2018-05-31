// ========================== Exercise 1 ==============================
// Prompt the user for 2 numbers, then console.log their difference.
// For example, if the user gives the numbers 2 and 3, the result should
// be 1. If the user gives the numbers 3 and 2, the result should still
// be 1.
//
// Hint: To get the user input and store it in a variable, we can do 
// `var someVar = prompt("Give me a high five");`. Consider asking for 1
// number at a time first.
// ====================================================================
// Write your solution below.
// ====================================================================

// var number1 = prompt("Enter number 1");
// var number2 = prompt("Enter number 2");
// var x = parseFloat(number1);
// var y = parseFloat(number2);
// var result = Math.abs(x - y);
// console.log(result);







// ========================== Exercise 2 ==============================
// Prompt the user for a number, then console.log its ordinal version.
// For example, if the user inputs 1, the result should be '1st'.
// If the user inputs 10, the result should be '10th'.
// If the user inputs 421, the result should be '421st'.
//
// Hint: There is a function that can return the character at a
// specified position in a string. Search Google / MDN for 'javascript
// string methods' if you need to.
// ====================================================================
// Write your solution below
// ====================================================================

// var number3 = prompt("Enter a number");
// var placing = "";
// if (number3.length === 1) {
// 	switch(number3) {
// 		case "1":
// 			placing = number3 + "st";
// 			break;
// 		case "2":
// 			placing = number3 + "nd";
// 			break;
// 		case "3":
// 			placing = number3 + "rd";
// 			break;
// 		default:
// 			placing = number3 + "th";
// 	}
// } else if (number3.length >= 2) {
// 	switch(true) {
// 		case (number3.slice(-2) === "11" || number3.slice(-2) === "12" || number3.slice(-2) === "13"):
// 			placing = number3 + "th";
// 			break;
// 		case (number3.slice(-1) === "1"):
// 			placing = number3 + "st";
// 			break;
// 		case (number3.slice(-1) === "2"):
// 			placing = number3 + "nd";
// 			break;
// 		case (number3.slice(-1) === "3"):
// 			placing = number3 + "rd";
// 			break;
// 	}
// }
// console.log(placing);



// ========================== Exercise 3 =================================
// Generate a random integer (hint: search Google or MDN) between 1 to 10.
// Prompt the user for an integer between 1 to 10, then let the user know
// whether his/her number matched the randomly generated one.
// =======================================================================
// Write your solution below.
// =======================================================================

// var randomInt = Math.floor(Math.random() * 11);
// var userInput = prompt("Please enter an integer from 1 to 10:");
// if (randomInt == userInput) {
// 	console.log("You have gotten the right number!");
// } else {
// 	console.log("Sorry please try again.");
// }












// ========================== Exercise 4 ===============================
// Generate a random string of length 6 alphanumeric characters.
// E.g. a result might be "a5bxt1". Running it again might give "2bhdr3"
// Hint: Pseudocode this first, possibly starting from the end result.
// What information do you need to construct the string? How would you
// get that information? Can you store fixed information in a convenient
// place first?
//
// Bonus: Generate a random alphanumeric string of any specified length.
// =====================================================================
// Write your solution below.
// =====================================================================

// function randomChar() {
// 	var keyboard = "abcdefghijklmnopqrstuvwxyz0123456789";
// 	var x = Math.floor(Math.random() * 36);
// 	return keyboard[x];
// }
// var alphanumericString = "";
// var alphanumericChar;
// for (var i = 0; i < 6; i++) {
// 	alphanumericChar = randomChar();
// 	alphanumericString += alphanumericChar;
// }
// console.log(alphanumericString);














// ========================== Exercise 5 ==============================
// Shuffle the elements of the given array below.
// E.g. running your code might produce [4, 1, 16, 8, 128, 2, 32, 64]
// once, and [128, 1, 2, 64, 16, 4, 8, 32] the next time.
// ====================================================================
// Write your solution below.
// ====================================================================

// var testArray = [1, 2, 4, 8, 16, 32, 64, 128];
// testArray.sort(function(a,b) {
// 	return 0.5 - Math.random()
// });
// console.log(testArray);















// ========================== Exercise 6 ==============================
// Examine the phonebook below.
// 
// 1. Prompt the user for a name, and show
// (in any way, e.g. console.log) the phone number corresponding to 
// the given name. 
//
// 2. Prompt the user for a name and a number. Update the number
// corresponding to the name if the name exists in the phonebook.
//
// 3. Prompt the user for a name and a number. If the name and number
// do not already exist in the phonebook, insert it into the phonebook.
//
// 4. Prompt the user for a name. If the name exists in the phonebook,
// erase its record.
//
// Bonus: Prompt the user for a number. If the number exists in the
// phonebook, show the name corresponding to it.
// Hint: The phonebook is a JS Object. Search Google / MDN for 
// 'Javascript Object methods' to see if there might be something useful.
// ====================================================================
// Write your solution below.
// ====================================================================

// var Phonebook = {
//     "Jason"         :   91216599,
//     "Amelie"        :   64239839,
//     "Sing An"       :   85404834,
//     "Ong Tng Kai"   :   94547788,
//     "Nelson Tan"    :   63396565
// };
// var askName = prompt("Please enter a name:");
// var newNumber = prompt("Please enter the new contact number:");
// var newNumberValue = parseInt(newNumber);
// if (Phonebook[askName] === undefined) {
// 	console.log("This person does not exist in the phonebook."); 
// } else {
// 	console.log(askName + " : " + Phonebook[askName]);
// }
// Phonebook[askName] = newNumberValue;
// console.log(Phonebook);
// var eraseName = prompt("Will you like to erase a contact?");
// if (Phonebook[eraseName] === undefined) {
// 	console.log("This person does not exist in the phonebook.")
// } else {
// 	delete Phonebook[eraseName];
// }
// console.log(Phonebook);
// var traceNumber = prompt("Please enter a contact number:");
// var traceNumberValue = parseInt(traceNumber);
// var noNumber = true;
// for (contact in Phonebook) {
// 	if (Phonebook[contact] === traceNumberValue) {
// 		console.log(contact);
// 		noNumber = false;
// 	}
// }
// if (noNumber) {
// 	console.log("Number does not exist in Phonebook");
// }










// ====================== Bonus Exercise 7 =============================
// JS Array / Object Handling - References vs Values
// =====================================================================
// A common class of bugs that programmers face occurs when they change
// an object that they didn't mean to.
// 
// Examine the array below.
// Prompt the user for 2 integers. Swap the elements in the 2 positions
// of the array corresponding to the user input, and display the result.
// E.g. if the user enters 3 and 1, then display [3, 2, 1, 4, 5].
//
// Bonus: Do the same, but without changing the below array, i.e. if the
// user enters 3 and 1, display [3, 2, 1, 4, 5], but
// console.log(MutateMeNot) should still produce [1, 2, 3, 4, 5].
// =====================================================================
// Write your solution below.
// =====================================================================

// var MutateMeNot = [1, 2, 3, 4, 5];
// var number4 = prompt("Enter integer 1 (1 to 5):");
// var number5 = prompt("Enter integer 2 (1 to 5):");
// var num1 = parseInt(number4);
// var num2 = parseInt(number5);
// var m = MutateMeNot.indexOf(num1);
// var n = MutateMeNot.indexOf(num2);
// MutateMeNot[m] = num2;
// MutateMeNot[n] = num1;




// console.log("The value of MutateMeNot is", MutateMeNot);
