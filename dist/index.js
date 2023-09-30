"use strict";
// My name is Abdul Basit
//Date : 29/07/2023
//Question no 1 ;
//Install Node.js, TypeScript and VS Code on your computer.
Object.defineProperty(exports, "__esModule", { value: true });
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
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase());
//Question no 4 ;
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
let quote = "Failure is a word unknown to me.";
let author = "Quaid-e-Azam Muhammad Ali Jinnah.";
console.log(`${quote} - ${author}`);
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Question no 5 ;
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson = "Allama Iqbal";
let quote1 = "khod ko kar buland itna ka har taqdeer se pehle khuda bande se khud pooche bata teri raza kya hai .";
console.log(`"${famousPerson}" : ${quote1}`);
//Question no 6 ;
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let nameWithWhitespace = "tab\n Abdul Basit \n\tab";
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
let favNumber = 7;
console.log("My favorite number is" + favNumber + ".");
//Question no 10 ;
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Answer Question No 10 ;
//This program converts temperature values between Celsius and Fahrenheit;
//Question no 11 ;
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Questions no 12 ;
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names1 = ["Abdul Basit", "Abdul Dayyan", "Ahmad", "Qasim"];
let greeting = "Hello, ";
for (let i = 0; i < names1.length; i++) {
    console.log(greeting + names[i] + "!");
}
//Questions no 13 ;
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// List of favorite modes of transportation
let transportationModes = ["car", "motorcycle", "bicycle", "helicopter", "skateboard"];
// Loop through the array and print statements
for (let i = 0; i < transportationModes.length; i++) {
    let mode = transportationModes[i];
    let article = mode === "motorcycle" ? "a" : "an"; // Use "a" or "an" depending on the mode
    console.log(`I would like to own ${article} ${mode}.`);
}
//Question no 14 ;
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests = ["Abdul Basit ", "Abdul Dayyan ", "Qasim", "Ahmad", "Abbas",];
for (let i = 0; i < guests.length; i++) {
    console.log(`you are invited ,${guests[i]}!`);
}
//Question no 15 ;
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guests1 = ["Abdul Basit ", "Abdul Dayyan ", "Qasim", "Ahmad", "Abbas",];
guests1.push("Ali");
for (let i = 0; i < guests1.length; i++) {
    console.log(`you are invited ,${guests1[i]}!`);
}
//Question no 15 pate 1 ;
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guest2 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Abbas", "Ali"];
const guestCannotAttend = "Abbas";
if (guest2.includes(guestCannotAttend)) {
    console.log(`${guestCannotAttend} can't make it.`);
}
else {
    console.log(`${guestCannotAttend} is not in the guest list.`);
}
for (let i = 0; i < guest2.length; i++) {
    console.log(`you are invited, ${guest2[i]}!`);
}
//Question no 15 pate 2 ;
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let guest3 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Abbas", "Ali"];
const guestCannotAttend1 = "Abbas";
const newGuest = "New Person"; // Replace with the name of the new person you are inviting
if (guest3.includes(guestCannotAttend1)) {
    const index = guest3.indexOf(guestCannotAttend1);
    if (index !== -1) {
        guest3[index] = newGuest;
        console.log(`${guestCannotAttend1} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend1} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend1} is not in the guest list.`);
}
for (let i = 0; i < guest3.length; i++) {
    console.log(`you are invited, ${guest3[i]}!`);
}
//Question no 15 pate 3 ;
//• Print a second set of invitation messages, one for each person who is still in your list.
let guest4 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend2 = "Abbas";
const newGuest1 = "New Person"; // Replace with the name of the new person you are inviting
if (guest4.includes(guestCannotAttend2)) {
    const index = guest4.indexOf(guestCannotAttend2);
    if (index !== -1) {
        guest4[index] = newGuest1;
        console.log(`${guestCannotAttend2} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend2} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend2} is not in the guest list.`);
}
// First set of invitation messages
for (let i = 0; i < guest4.length; i++) {
    console.log(`First set of invitations: you are invited, ${guest4[i]}!`);
}
// Second set of invitation messages
for (let i = 0; i < guest2.length; i++) {
    console.log(`Second set of invitations: you are still invited, ${guest4[i]}!`);
}
;
//Questions no 16 ;
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guest5 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend4 = "Abbas";
const newGuest2 = "New Person"; // Replace with the name of the new person you are inviting
if (guest5.includes(guestCannotAttend4)) {
    const index = guest5.indexOf(guestCannotAttend4);
    if (index !== -1) {
        guest5[index] = newGuest2;
        console.log(`${guestCannotAttend4} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend4} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend4} is not in the guest list.`);
}
// First set of invitation messages
for (let i = 0; i < guest5.length; i++) {
    console.log(`First set of invitations: you are invited, ${guest5[i]}!`);
}
// Add three more guests
const additionalGuests = ["Guest 1", "Guest 2", "Guest 3"];
guest5.push(...additionalGuests);
// Second set of invitation messages, including the three new guests
for (let i = 0; i < guest5.length; i++) {
    console.log(`Second set of invitations: you are still invited, ${guest5[i]}!`);
}
//Question no 16 pate 1 ;
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guest6 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend3 = "Abbas";
const newGuest3 = "New Person"; // Replace with the name of the new person you are inviting
if (guest6.includes(guestCannotAttend3)) {
    const index = guest6.indexOf(guestCannotAttend3);
    if (index !== -1) {
        guest6[index] = newGuest3;
        console.log(`${guestCannotAttend3} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend3} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend3} is not in the guest list.`);
}
// First set of invitation messages
for (let i = 0; i < guest6.length; i++) {
    console.log(`First set of invitations: you are invited, ${guest6[i]}!`);
}
// Add three more guests
const additionalGuests2 = ["Guest 1", "Guest 2", "Guest 3"];
guest6.push(...additionalGuests2);
// Second set of invitation messages, including the three new guests
for (let i = 0; i < guest6.length; i++) {
    console.log(`Second set of invitations: you are still invited, ${guest6[i]}!`);
}
// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table!");
//Question no 16 pate 2 ;
//• Add one new guest to the beginning of your array.
let guest7 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend5 = "Abbas";
const newGuest5 = "New Person"; // Replace with the name of the new person you are inviting
if (guest7.includes(guestCannotAttend5)) {
    const index = guest2.indexOf(guestCannotAttend5);
    if (index !== -1) {
        guest7[index] = newGuest5;
        console.log(`${guestCannotAttend5} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend5} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend5} is not in the guest list.`);
}
// Add one new guest to the beginning of the array
const newGuestAtBeginning = "New Guest at the Beginning";
guest7.unshift(newGuestAtBeginning);
// First set of invitation messages, including the new guest at the beginning
for (let i = 0; i < guest7.length; i++) {
    console.log(`First set of invitations: you are invited, ${guest7[i]}!`);
}
// Add three more guests
const additionalGuests1 = ["Guest 1", "Guest 2", "Guest 3"];
guest7.push(...additionalGuests1);
// Second set of invitation messages, including the three new guests
for (let i = 0; i < guest7.length; i++) {
    console.log(`Second set of invitations: you are still invited, ${guest7[i]}!`);
}
// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table!");
//Question no 16 pate 3 ;
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest8 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend6 = "Abbas";
const newGuest6 = "New Person"; // Replace with the name of the new person you are inviting
if (guest8.includes(guestCannotAttend6)) {
    const index = guest8.indexOf(guestCannotAttend6);
    if (index !== -1) {
        guest8[index] = newGuest6;
        console.log(`${guestCannotAttend6} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend6} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend6} is not in the guest list.`);
}
// Add one new guest to the beginning of the array
const newGuestAtBeginning2 = "New Guest at the Beginning";
guest8.unshift(newGuestAtBeginning2);
// Add one new guest to the middle of the array
const newGuestInMiddle = "New Guest in Middle";
const middleIndex = Math.floor(guest8.length / 2);
guest8.splice(middleIndex, 0, newGuestInMiddle);
// Use push() to add one new guest to the end of your list
const newGuestAtEnd = "New Guest at the End";
guest8.push(newGuestAtEnd);
// New set of invitation messages, including the new guests
for (let i = 0; i < guest8.length; i++) {
    console.log(`New set of invitations: you are invited, ${guest8[i]}!`);
}
// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table!");
//Question no 17 ;
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let guest9 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend7 = "Abbas";
const newGuest7 = "New Person"; // Replace with the name of the new person you are inviting
if (guest9.includes(guestCannotAttend7)) {
    const index = guest9.indexOf(guestCannotAttend7);
    if (index !== -1) {
        guest9[index] = newGuest7;
        console.log(`${guestCannotAttend7} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend7} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend7} is not in the guest list.`);
}
// Add one new guest to the beginning of the array
const newGuestAtBeginning3 = "New Guest at the Beginning";
guest9.unshift(newGuestAtBeginning3);
// Add one new guest to the middle of the array
const newGuestInMiddle1 = "New Guest in Middle";
const middleIndex1 = Math.floor(guest9.length / 2);
guest9.splice(middleIndex1, 0, newGuestInMiddle1);
// Use push() to add one new guest to the end of your list
const newGuestAtEnd1 = "New Guest at the End";
guest9.push(newGuestAtEnd);
// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table.");
// Shrinking the guest list to accommodate only two guests
const guestsToRemove = guest9.splice(2); // Remove guests starting from the third position
console.log("Sorry, we can only accommodate two guests.");
// New set of invitation messages, including the remaining two guests
for (let i = 0; i < guest9.length; i++) {
    console.log(`New set of invitations: you are invited, ${guest9[i]}!`);
}
//Question no pate 1 ;
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let guest10 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend8 = "Abbas";
const newGuest8 = "New Person"; // Replace with the name of the new person you are inviting
if (guest10.includes(guestCannotAttend8)) {
    const index = guest10.indexOf(guestCannotAttend8);
    if (index !== -1) {
        guest10[index] = newGuest8;
        console.log(`${guestCannotAttend8} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend8} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend8} is not in the guest list.`);
}
// Add one new guest to the beginning of the array
const newGuestAtBeginning4 = "New Guest at the Beginning";
guest10.unshift(newGuestAtBeginning4);
// Add one new guest to the middle of the array
const newGuestInMiddle2 = "New Guest in Middle";
const middleIndex2 = Math.floor(guest10.length / 2);
guest10.splice(middleIndex, 0, newGuestInMiddle);
// Use push() to add one new guest to the end of your list
const newGuestAtEnd2 = "New Guest at the End";
guest10.push(newGuestAtEnd2);
// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table.");
// Shrinking the guest list to accommodate only two guests
const guestsToRemove1 = guest10.splice(2); // Remove guests starting from the third position
// New set of invitation messages, including the remaining two guests
for (let i = 0; i < guest2.length; i++) {
    console.log(`New set of invitations: you are invited, ${guest10[i]}!`);
}
// Message indicating that you can only invite two people for dinner
console.log("Sorry, we can only invite two people for dinner.");
//Question no 17 pate 2 ;
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let guest11 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend9 = "Abbas";
const newGuest9 = "New Person"; // Replace with the name of the new person you are inviting
if (guest11.includes(guestCannotAttend9)) {
    const index = guest11.indexOf(guestCannotAttend9);
    if (index !== -1) {
        guest11[index] = newGuest9;
        console.log(`${guestCannotAttend9} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend9} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend9} is not in the guest list.`);
}
// Add one new guest to the beginning of the array
const newGuestAtBeginning5 = "New Guest at the Beginning";
guest11.unshift(newGuestAtBeginning5);
// Add one new guest to the middle of the array
const newGuestInMiddle3 = "New Guest in Middle";
const middleIndex3 = Math.floor(guest11.length / 2);
guest11.splice(middleIndex3, 0, newGuestInMiddle3);
// Use push() to add one new guest to the end of your list
const newGuestAtEnd3 = "New Guest at the End";
guest11.push(newGuestAtEnd3);
// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table.");
// Remove guests one at a time until only two names remain
while (guest11.length > 2) {
    const removedGuest = guest11.pop();
    console.log(`Sorry, ${removedGuest}! We can't invite you to dinner.`);
}
// New set of invitation messages, including the remaining two guests
for (let i = 0; i < guest11.length; i++) {
    console.log(`New set of invitations: you are invited, ${guest11[i]}!`);
}
// Message indicating that you can only invite two people for dinner
console.log("Sorry, we can only invite two people for dinner.");
//Question no 17 pate 3 ;
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
let guest12 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend10 = "Abbas";
const newGuest10 = "New Person"; // Replace with the name of the new person you are inviting
if (guest12.includes(guestCannotAttend10)) {
    const index = guest12.indexOf(guestCannotAttend10);
    if (index !== -1) {
        guest12[index] = newGuest;
        console.log(`${guestCannotAttend10} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend10} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend10} is not in the guest list.`);
}
// Add one new guest to the beginning of the array
const newGuestAtBeginning6 = "New Guest at the Beginning";
guest12.unshift(newGuestAtBeginning6);
// Add one new guest to the middle of the array
const newGuestInMiddle4 = "New Guest in Middle";
const middleIndex4 = Math.floor(guest12.length / 2);
guest12.splice(middleIndex4, 0, newGuestInMiddle4);
// Use push() to add one new guest to the end of your list
const newGuestAtEnd4 = "New Guest at the End";
guest12.push(newGuestAtEnd4);
// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table.");
// Remove guests one at a time until only two names remain
while (guest12.length > 2) {
    const removedGuest = guest12.pop();
    console.log(`Sorry, ${removedGuest}! We can't invite you to dinner.`);
}
// Message indicating that you can only invite two people for dinner
console.log("Sorry, we can only invite two people for dinner.");
// Print an invitation message to each of the two people still on your list
for (let i = 0; i < guest12.length; i++) {
    console.log(`You are invited, ${guest12[i]}!`);
}
//Question no pate 4 ;
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest13 = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend11 = "Abbas";
const newGuest11 = "New Person"; // Replace with the name of the new person you are inviting
if (guest13.includes(guestCannotAttend)) {
    const index = guest2.indexOf(guestCannotAttend);
    if (index !== -1) {
        guest13[index] = newGuest11;
        console.log(`${guestCannotAttend11} can't make it.`);
    }
    else {
        console.log(`${guestCannotAttend11} is not in the guest list.`);
    }
}
else {
    console.log(`${guestCannotAttend11} is not in the guest list.`);
}
// Add one new guest to the beginning of the array
const newGuestAtBeginning7 = "New Guest at the Beginning";
guest13.unshift(newGuestAtBeginning7);
// Add one new guest to the middle of the array
const newGuestInMiddle5 = "New Guest in Middle";
const middleIndex5 = Math.floor(guest13.length / 2);
guest13.splice(middleIndex5, 0, newGuestInMiddle5);
// Use push() to add one new guest to the end of your list
const newGuestAtEnd5 = "New Guest at the End";
guest13.push(newGuestAtEnd5);
// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table.");
// Remove guests one at a time until only two names remain
while (guest13.length > 2) {
    const removedGuest = guest13.pop();
    console.log(`Sorry, ${removedGuest}! We can't invite you to dinner.`);
}
// Message indicating that you can only invite two people for dinner
console.log("Sorry, we can only invite two people for dinner.");
// Remove the last two names from your list
guest13.pop();
guest13.pop();
// Print the list to confirm it's empty
console.log("Final guest list:", guest13);
//Question no 18 ;
//Seeing the World: Think of at least five places in the world you’d like to visit.
let placesToVisit = [
    "1. Paris, France",
    "2. Kyoto, Japan",
    "3. Makkah , Saudi Arabia",
    "4. New York City, USA",
    "5. Abu Dhabi, UAE"
];
console.log("Places I'd like to visit:");
for (let place of placesToVisit) {
    console.log(place);
}
;
//Questions no 18 pate 1 ;
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let placesToVisit1 = [
    "Kyoto, Japan",
    "Makkah, Saudi Arabia",
    "New York City, USA",
    "Paris, France",
    "Abu Dhabi, UAE"
];
console.log("Places I'd like to visit:");
for (let place of placesToVisit1) {
    console.log(place);
}
;
//Question no 18 pate 2;
//• Print your array in its original order.
let placesToVisit2 = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];
console.log("Places I'd like to visit in their original order:");
for (let place of placesToVisit2) {
    console.log(place);
}
