// My name is Abdul Basit
//Date : 29/07/2023
//Question no 1 ;
//Install Node.js, TypeScript and VS Code on your computer.

//Question no 2 ;
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let firstName = "Abdul Basit";
let lastName = "Abdul Dayyan";
console.log(`${firstName} ${lastName}`);

//Question no 3 ;
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name1 = "Abdul Basit";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.charAt(0).toUpperCase()+name1.slice(1).toLowerCase());

//Question no 4 ;
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

let quote :string = "Failure is a word unknown to me.";
let author :string ="Quaid-e-Azam Muhammad Ali Jinnah.";
console.log(`${quote} - ${author}`);

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

//Question no 5 ;
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famousPerson = "Allama Iqbal";
let quote1 ="khudi ko kar buland itna ka har taqdeer se pehle khuda bande se khud pooche bata teri raza kya hai .";

console.log(`"${famousPerson}" : ${quote1}`);

//Question no 6 ;
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let nameWithWhitespace ="tab\n Abdul Basit \n\tab";
console.log(`name with whitespace: "${nameWithWhitespace}"`);
let strippedName = nameWithWhitespace.trim();
console.log(`stripped name : "${strippedName}"`);

//Question no 7 ;
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//Addition : 5 + 3 = 8
//subtraction : 10 - 2 =8
//Multiplication : 2 * 4 = 8
//Division : 16 / 2 = 8 

console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);

//Question no 8 ;
// same Question no 7 ;

//Question no 9 ;
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favNumber = 7 ;
console.log("My favorite number is" + favNumber + ".");

//Question no 10 ;
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Answer Question No 10 ;
//This program converts temperature values between Celsius and Fahrenheit.


