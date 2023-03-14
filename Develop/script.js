// Assignment code here
// .querySelector - call on any Selector that in your HTML ex: h2

// Assigning the characters for the User
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // generateBtn = id ="generate"


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //passwordText = id="password
  passwordText.value = password;
}




function generatePassword(){
  var bowl = [];
  var howManyChars = prompt("Select a Number between 9 and 20 for your password"); 
  console.log(howManyChars);
  
  while(howManyChars <= 8 || howManyChars > 20){
    howManyChars = prompt("Must be a number between 9 - 20");
    console.log(howManyChars)
  }
  // var x = confirm("ok or cancel")
  // console.log(x)
  var addUpperCase = confirm("would you like to add Upper Case Letters");
  if(addUpperCase === true){
   bowl = bowl.concat(upperCaseChar); //.concat add array to an array
   console.log(bowl)
  }
  var addLowerCase = confirm("Would like lower case letters")
  if(addLowerCase === true){
  bowl = bowl.concat(lowerCaseChar);
  console.log(bowl)
  }
  var addSpecialChar = confirm("Would like specialChar")
  if(addSpecialChar === true){
  bowl = bowl.concat(specialChar);
  console.log(bowl)
  }

for (var i = 0; i < howManyChars; i++) {
  bowl = bowl.concat(Math.floor(Math.random()* howManyChars.length));
}
  return bowl;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






