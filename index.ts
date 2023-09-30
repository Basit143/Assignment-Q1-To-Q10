// My name is Abdul Basit
//Date : 30/09/2023
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
let quote1 ="khod ko kar buland itna ka har taqdeer se pehle khuda bande se khud pooche bata teri raza kya hai .";

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
//This program converts temperature values between Celsius and Fahrenheit;

//Question no 11 ;
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Questions no 12 ;
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names1: string[] = ["Abdul Basit", "Abdul Dayyan", "Ahmad", "Qasim"];
let greeting = "Hello, ";

for (let i = 0; i < names1.length; i++) {
    console.log(greeting + names[i] + "!");
}
//Questions no 13 ;
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// List of favorite modes of transportation
let transportationModes: string[] = ["car", "motorcycle", "bicycle", "helicopter", "skateboard"];

// Loop through the array and print statements
for (let i = 0; i < transportationModes.length; i++) {
    let mode = transportationModes[i];
    let article = mode === "motorcycle" ? "a" : "an"; // Use "a" or "an" depending on the mode
    
    console.log(`I would like to own ${article} ${mode}.`);
}
//Question no 14 ;
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests:string[]=["Abdul Basit ","Abdul Dayyan ","Qasim","Ahmad","Abbas",]
for(let i = 0 ; i < guests.length; i++){
    console.log(`you are invited ,${guests[i]}!`)
}
//Question no 15 ;
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guests1:string[]=["Abdul Basit ","Abdul Dayyan ","Qasim","Ahmad","Abbas",]
guests1.push("Ali");
for(let i = 0 ; i < guests1.length; i++){
    console.log(`you are invited ,${guests1[i]}!`)

}
//Question no 15 pate 1 ;
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let guest2: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Abbas", "Ali"];
const guestCannotAttend: string = "Abbas";

if (guest2.includes(guestCannotAttend)) {
    console.log(`${guestCannotAttend} can't make it.`);
} else {
    console.log(`${guestCannotAttend} is not in the guest list.`);
}

for (let i = 0; i < guest2.length; i++) {
    console.log(`you are invited, ${guest2[i]}!`);
}


//Question no 15 pate 2 ;
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let guest3: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Abbas", "Ali"];
const guestCannotAttend1: string = "Abbas";
const newGuest: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest3.includes(guestCannotAttend1)) {
    const index = guest3.indexOf(guestCannotAttend1);
    if (index !== -1) {
        guest3[index] = newGuest;
        console.log(`${guestCannotAttend1} can't make it.`);
    } else {
        console.log(`${guestCannotAttend1} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend1} is not in the guest list.`);
}

for (let i = 0; i < guest3.length; i++) {
    console.log(`you are invited, ${guest3[i]}!`);
}



//Question no 15 pate 3 ;
//• Print a second set of invitation messages, one for each person who is still in your list.

let guest4: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend2: string = "Abbas";
const newGuest1: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest4.includes(guestCannotAttend2)) {
    const index = guest4.indexOf(guestCannotAttend2);
    if (index !== -1) {
        guest4[index] = newGuest1;
        console.log(`${guestCannotAttend2} can't make it.`);
    } else {
        console.log(`${guestCannotAttend2} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend2} is not in the guest list.`);
}

// First set of invitation messages
for (let i = 0; i < guest4.length; i++) {
    console.log(`First set of invitations: you are invited, ${guest4[i]}!`);
}

// Second set of invitation messages
for (let i = 0; i < guest2.length; i++) {
    console.log(`Second set of invitations: you are still invited, ${guest4[i]}!`);
};
//Questions no 16 ;
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guest5: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend4: string = "Abbas";
const newGuest2: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest5.includes(guestCannotAttend4)) {
    const index = guest5.indexOf(guestCannotAttend4);
    if (index !== -1) {
        guest5[index] = newGuest2;
        console.log(`${guestCannotAttend4} can't make it.`);
    } else {
        console.log(`${guestCannotAttend4} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend4} is not in the guest list.`);
}

// First set of invitation messages
for (let i = 0; i < guest5.length; i++) {
    console.log(`First set of invitations: you are invited, ${guest5[i]}!`);
}

// Add three more guests
const additionalGuests: string[] = ["Guest 1", "Guest 2", "Guest 3"];
guest5.push(...additionalGuests);

// Second set of invitation messages, including the three new guests
for (let i = 0; i < guest5.length; i++) {
    console.log(`Second set of invitations: you are still invited, ${guest5[i]}!`);
}

//Question no 16 pate 1 ;
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let guest6: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend3: string = "Abbas";
const newGuest3: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest6.includes(guestCannotAttend3)) {
    const index = guest6.indexOf(guestCannotAttend3);
    if (index !== -1) {
        guest6[index] = newGuest3;
        console.log(`${guestCannotAttend3} can't make it.`);
    } else {
        console.log(`${guestCannotAttend3} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend3} is not in the guest list.`);
}

// First set of invitation messages
for (let i = 0; i < guest6.length; i++) {
    console.log(`First set of invitations: you are invited, ${guest6[i]}!`);
}

// Add three more guests
const additionalGuests2: string[] = ["Guest 1", "Guest 2", "Guest 3"];
guest6.push(...additionalGuests2);

// Second set of invitation messages, including the three new guests
for (let i = 0; i < guest6.length; i++) {
    console.log(`Second set of invitations: you are still invited, ${guest6[i]}!`);
}

// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table!");
//Question no 16 pate 2 ;
//• Add one new guest to the beginning of your array.

let guest7: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend5: string = "Abbas";
const newGuest5: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest7.includes(guestCannotAttend5)) {
    const index = guest2.indexOf(guestCannotAttend5);
    if (index !== -1) {
        guest7[index] = newGuest5;
        console.log(`${guestCannotAttend5} can't make it.`);
    } else {
        console.log(`${guestCannotAttend5} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend5} is not in the guest list.`);
}

// Add one new guest to the beginning of the array
const newGuestAtBeginning: string = "New Guest at the Beginning";
guest7.unshift(newGuestAtBeginning);

// First set of invitation messages, including the new guest at the beginning
for (let i = 0; i < guest7.length; i++) {
    console.log(`First set of invitations: you are invited, ${guest7[i]}!`);
}

// Add three more guests
const additionalGuests1: string[] = ["Guest 1", "Guest 2", "Guest 3"];
guest7.push(...additionalGuests1);

// Second set of invitation messages, including the three new guests
for (let i = 0; i < guest7.length; i++) {
    console.log(`Second set of invitations: you are still invited, ${guest7[i]}!`);
}

// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table!");

//Question no 16 pate 3 ;
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest8: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend6: string = "Abbas";
const newGuest6: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest8.includes(guestCannotAttend6)) {
    const index = guest8.indexOf(guestCannotAttend6);
    if (index !== -1) {
        guest8[index] = newGuest6;
        console.log(`${guestCannotAttend6} can't make it.`);
    } else {
        console.log(`${guestCannotAttend6} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend6} is not in the guest list.`);
}

// Add one new guest to the beginning of the array
const newGuestAtBeginning2: string = "New Guest at the Beginning";
guest8.unshift(newGuestAtBeginning2);

// Add one new guest to the middle of the array
const newGuestInMiddle: string = "New Guest in Middle";
const middleIndex: number = Math.floor(guest8.length / 2);
guest8.splice(middleIndex, 0, newGuestInMiddle);

// Use push() to add one new guest to the end of your list
const newGuestAtEnd: string = "New Guest at the End";
guest8.push(newGuestAtEnd);

// New set of invitation messages, including the new guests
for (let i = 0; i < guest8.length; i++) {
    console.log(`New set of invitations: you are invited, ${guest8[i]}!`);
}

// Informing people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table!");
//Question no 17 ;
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guest9: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend7: string = "Abbas";
const newGuest7: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest9.includes(guestCannotAttend7)) {
    const index = guest9.indexOf(guestCannotAttend7);
    if (index !== -1) {
        guest9[index] = newGuest7;
        console.log(`${guestCannotAttend7} can't make it.`);
    } else {
        console.log(`${guestCannotAttend7} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend7} is not in the guest list.`);
}

// Add one new guest to the beginning of the array
const newGuestAtBeginning3: string = "New Guest at the Beginning";
guest9.unshift(newGuestAtBeginning3);

// Add one new guest to the middle of the array
const newGuestInMiddle1: string = "New Guest in Middle";
const middleIndex1: number = Math.floor(guest9.length / 2);
guest9.splice(middleIndex1, 0, newGuestInMiddle1);

// Use push() to add one new guest to the end of your list
const newGuestAtEnd1: string = "New Guest at the End";
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

let guest10: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend8: string = "Abbas";
const newGuest8: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest10.includes(guestCannotAttend8)) {
    const index = guest10.indexOf(guestCannotAttend8);
    if (index !== -1) {
        guest10[index] = newGuest8;
        console.log(`${guestCannotAttend8} can't make it.`);
    } else {
        console.log(`${guestCannotAttend8} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend8} is not in the guest list.`);
}

// Add one new guest to the beginning of the array
const newGuestAtBeginning4: string = "New Guest at the Beginning";
guest10.unshift(newGuestAtBeginning4);

// Add one new guest to the middle of the array
const newGuestInMiddle2: string = "New Guest in Middle";
const middleIndex2: number = Math.floor(guest10.length / 2);
guest10.splice(middleIndex, 0, newGuestInMiddle);

// Use push() to add one new guest to the end of your list
const newGuestAtEnd2: string = "New Guest at the End";
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

let guest11: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend9: string = "Abbas";
const newGuest9: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest11.includes(guestCannotAttend9)) {
    const index = guest11.indexOf(guestCannotAttend9);
    if (index !== -1) {
        guest11[index] = newGuest9;
        console.log(`${guestCannotAttend9} can't make it.`);
    } else {
        console.log(`${guestCannotAttend9} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend9} is not in the guest list.`);
}

// Add one new guest to the beginning of the array
const newGuestAtBeginning5: string = "New Guest at the Beginning";
guest11.unshift(newGuestAtBeginning5);

// Add one new guest to the middle of the array
const newGuestInMiddle3: string = "New Guest in Middle";
const middleIndex3: number = Math.floor(guest11.length / 2);
guest11.splice(middleIndex3, 0, newGuestInMiddle3);

// Use push() to add one new guest to the end of your list
const newGuestAtEnd3: string = "New Guest at the End";
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

let guest12: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend10: string = "Abbas";
const newGuest10: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest12.includes(guestCannotAttend10)) {
    const index = guest12.indexOf(guestCannotAttend10);
    if (index !== -1) {
        guest12[index] = newGuest;
        console.log(`${guestCannotAttend10} can't make it.`);
    } else {
        console.log(`${guestCannotAttend10} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend10} is not in the guest list.`);
}

// Add one new guest to the beginning of the array
const newGuestAtBeginning6: string = "New Guest at the Beginning";
guest12.unshift(newGuestAtBeginning6);

// Add one new guest to the middle of the array
const newGuestInMiddle4: string = "New Guest in Middle";
const middleIndex4: number = Math.floor(guest12.length / 2);
guest12.splice(middleIndex4, 0, newGuestInMiddle4);

// Use push() to add one new guest to the end of your list
const newGuestAtEnd4: string = "New Guest at the End";
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

let guest13: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Ali"];
const guestCannotAttend11: string = "Abbas";
const newGuest11: string = "New Person"; // Replace with the name of the new person you are inviting

if (guest13.includes(guestCannotAttend)) {
    const index = guest2.indexOf(guestCannotAttend);
    if (index !== -1) {
        guest13[index] = newGuest11;
        console.log(`${guestCannotAttend11} can't make it.`);
    } else {
        console.log(`${guestCannotAttend11} is not in the guest list.`);
    }
} else {
    console.log(`${guestCannotAttend11} is not in the guest list.`);
}

// Add one new guest to the beginning of the array
const newGuestAtBeginning7: string = "New Guest at the Beginning";
guest13.unshift(newGuestAtBeginning7);

// Add one new guest to the middle of the array
const newGuestInMiddle5: string = "New Guest in Middle";
const middleIndex5: number = Math.floor(guest13.length / 2);
guest13.splice(middleIndex5, 0, newGuestInMiddle5);

// Use push() to add one new guest to the end of your list
const newGuestAtEnd5: string = "New Guest at the End";
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

let placesToVisit: string[] = [
    "1. Paris, France",
    "2. Kyoto, Japan",
    "3. Makkah , Saudi Arabia",
    "4. New York City, USA",
    "5. Abu Dhabi, UAE"
];

console.log("Places I'd like to visit:");
for (let place of placesToVisit) {
    console.log(place);
};
//Questions no 18 pate 1 ;
//• Store the locations in a array. Make sure the array is not in alphabetical order.

let placesToVisit1: string[] = [
    "Kyoto, Japan",
    "Makkah, Saudi Arabia",
    "New York City, USA",
    "Paris, France",
    "Abu Dhabi, UAE"
];

console.log("Places I'd like to visit:");
for (let place of placesToVisit1) {
    console.log(place);
};
//Question no 18 pate 2;
//• Print your array in its original order.

let placesToVisit2: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];

console.log("Places I'd like to visit in their original order:");
for (let place of placesToVisit2) {
    console.log(place);
};
//Question no 18 pate 3 ;
//• Print your array in alphabetical order without modifying the actual list.

let placesToVisit3: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];

// Create a sorted copy of the array without modifying the original list
let sortedPlaces: string[] = [...placesToVisit3].sort();

console.log("Places I'd like to visit in alphabetical order:");
for (let place of sortedPlaces) {
    console.log(place);
}

// Original array remains unchanged
console.log("Original placesToVisit array:");
for (let place of placesToVisit3) {
    console.log(place);
};
//Question no 18 pate 4;
//• Show that your array is still in its original order by printing it.

let placesToVisit4: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];

// Create a sorted copy of the array without modifying the original list
let sortedPlaces1: string[] = [...placesToVisit4].sort();

console.log("Places I'd like to visit in alphabetical order:");
for (let place of sortedPlaces1) {
    console.log(place);
}

console.log("Original placesToVisit array (still in its original order):");
for (let place of placesToVisit4) {
    console.log(place);
};
//Question n 18 pate 5 ;
//• Print your array in reverse alphabetical order without changing the order of the original list.

let placesToVisit5: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];

// Create a sorted copy of the array in reverse alphabetical order
let reverseSortedPlaces: string[] = [...placesToVisit5].sort((a, b) => b.localeCompare(a));

console.log("Places I'd like to visit in reverse alphabetical order:");
for (let place of reverseSortedPlaces) {
    console.log(place);
}

// Original array remains unchanged
console.log("Original placesToVisit array:");
for (let place of placesToVisit5) {
    console.log(place);
};
//Question no 18 pate 6 ;
//• Show that your array is still in its original order by printing it again.

let placesToVisit6: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];

// Create a sorted copy of the array in reverse alphabetical order
let reverseSortedPlaces1: string[] = [...placesToVisit6].sort((a, b) => b.localeCompare(a));

console.log("Places I'd like to visit in reverse alphabetical order:");
for (let place of reverseSortedPlaces1) {
    console.log(place);
}

// Original array remains unchanged
console.log("Original placesToVisit array:");
for (let place of placesToVisit6) {
    console.log(place);
};
//Question no 18 pate 7 ;
//• Reverse the order of your list. Print the array to show that its order has changed.

let placesToVisit7: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];

// Reverse the order of the original array
placesToVisit7.reverse();

console.log("Reversed placesToVisit array:");
for (let place of placesToVisit7) {
    console.log(place);
};
//Question no 18 pate 8 ;
//• Reverse the order of your list again. Print the list to show it’s back to its original order.

let placesToVisit8: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];

// Reverse the order of the original array to change it
placesToVisit8.reverse();

console.log("Reversed placesToVisit array:");
for (let place of placesToVisit8) {
    console.log(place);
}

// Reverse the order again to restore it to the original order
placesToVisit8.reverse();

console.log("Restored placesToVisit array (back to its original order):");
for (let place of placesToVisit8) {
    console.log(place);
};
//Question no 18 pate  9 ;
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

let placesToVisit9: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];

// Sort the array in alphabetical order
placesToVisit9.sort();

console.log("Sorted placesToVisit array (in alphabetical order):");
for (let place of placesToVisit9) {
    console.log(place);
};
//Question no 18 pate 10 ;
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placesToVisit10: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "New York City, USA",
    "Paris, France",
    "Machu Picchu, Peru"
];

// Sort the array in reverse alphabetical order
placesToVisit10.sort((a, b) => b.localeCompare(a));

console.log("Sorted placesToVisit array (in reverse alphabetical order):");
for (let place of placesToVisit10) {
    console.log(place);
};
//Question no 19 ;
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guests14: string[] = ["Abdul Basit", "Abdul Dayyan", "Qasim", "Ahmad", "Abbas", "Ali"];

// Message indicating the number of people you are inviting to dinner
console.log(`You are inviting ${guests14.length} people to dinner.`);

// Print invitation messages
for (let guest of guests14) {
    console.log(`You are invited, ${guests14}!`);
};
//Question no 20 ;
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let mountains: string[] = [
    "Mount Everest",
    "K2",
    "Multan",
    "Lhotse",
    "Makalu"
];

console.log("List of Mountains:");
for (let mountain of mountains) {
    console.log(mountain);
};
//Question no 21 ;
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Create an array of country objects
let countriesInfo: { name: string, capital: string, population: number }[] = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331002651
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 1380004385
    },
    {
        name: "United Kingdom",
        capital: "London",
        population: 67886011
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 212559417
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1444216107
    }
];

// Iterate through the array of country objects and print their information
console.log("Countries Information:");
for (let country of countriesInfo) {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population} people`);
    console.log("----------------------------");
};
//Question no 22 ;
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let myArray: number[] = [1, 2, 3, 4, 5];

// Intentional index error - attempting to access an index that doesn't exist
let indexError = myArray[10]; // Accessing index 10 which is out of bounds

// This line will not execute if an error occurs
console.log("This line should not execute if there was an index error.");

// Corrected code
if (indexError !== undefined) {
    console.log(`Value at index 10: ${indexError}`);
} else {
    console.log("Index 10 is out of bounds.");
};
//Question no 23 ;
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("\nIs car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("\nIs car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("\nIs car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("\nIs car === 'Subaru'? I predict False (case-sensitive).");
console.log(car === 'Subaru');

console.log("\nIs car !== 'Subaru'? I predict True (case-sensitive).");
console.log(car !== 'Subaru');
//Question no 23 pate 1 ;
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

let car1: string = 'subaru';

// Test 1: Loose equality (value comparison)
console.log("Is car == 'subaru'? I predict True.");
console.log(car1 == 'subaru'); // True (same values)

// Test 2: Loose equality (value comparison)
console.log("\nIs car == 'honda'? I predict False.");
console.log(car1 == 'honda'); // False (different values)

// Test 3: Loose inequality (value comparison)
console.log("\nIs car != 'toyota'? I predict True.");
console.log(car1 != 'toyota'); // True (different values)

// Test 4: Strict equality (value and type comparison)
console.log("\nIs car === 'subaru'? I predict True.");
console.log(car1 === 'subaru'); // True (same values and types)

// Test 5: Strict equality (value and type comparison)
console.log("\nIs car === 'Subaru'? I predict False (case-sensitive).");
console.log(car1 === 'Subaru'); // False (different cases)

// Test 6: Strict inequality (value and type comparison)
console.log("\nIs car !== 'Subaru'? I predict True (case-sensitive).");
console.log(car1 !== 'Subaru'); // True (different cases)
//Question no 23 pate 2 ;
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let num1: number = 5;
let num2: number = 10;
let str1: string = "Hello";
let str2: string = "World";

// Test 1: Numerical equality
console.log("Test 1: Numerical equality (True)");
console.log(num1 == 5); // True (5 is equal to 5)

// Test 2: Numerical inequality
console.log("\nTest 2: Numerical inequality (True)");
console.log(num1 != num2); // True (5 is not equal to 10)

// Test 3: String equality
console.log("\nTest 3: String equality (True)");
console.log(str1 === "Hello"); // True ("Hello" is strictly equal to "Hello")

// Test 4: String inequality
console.log("\nTest 4: String inequality (True)");
console.log(str1 !== str2); // True ("Hello" is not strictly equal to "World")

// Test 5: Logical OR
console.log("\nTest 5: Logical OR (True)");
console.log(num1 === 5 || num2 === 10); // True (num1 is 5)

// Test 6: Logical AND
console.log("\nTest 6: Logical AND (False)");
console.log(num1 === 5 && num2 === 5); // False (num2 is 10)

// Test 7: String case-sensitivity
console.log("\nTest 7: String case-sensitivity (False)");
console.log(str1 === "hello"); // False ("Hello" is not strictly equal to "hello")

// Test 8: Numerical comparison
console.log("\nTest 8: Numerical comparison (True)");
console.log(num1 < num2); // True (5 is less than 10)

// Test 9: String length comparison
console.log("\nTest 9: String length comparison (False)");
console.log(str1.length > str2.length); // False ("Hello" is not longer than "World")

// Test 10: Negation
console.log("\nTest 10: Negation (False)");
console.log(!(num1 === 5)); // False (5 is equal to 5, but negated)
//Question no 24 ;

let str3: string = "apple";
let str4: string = "banana";
let str5: string = "apple";
let num7: number = 5;
let num8: number = 10;
let arr: number[] = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
console.log(str3 === str4); // False (Different strings)
console.log(str3 !== str5); // True (Same strings)

// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log(str3.toLowerCase() === "apple"); // True (case-insensitive comparison)

// Numerical tests involving equality and inequality
console.log("\nNumerical tests involving equality and inequality:");
console.log(num7 < num8); // True (5 is less than 10)
console.log(num7 > num8); // False (5 is not greater than 10)
console.log(num7 <= num8); // True (5 is less than or equal to 10)
console.log(num7 >= num8); // False (5 is not greater than or equal to 10)

// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log((num7 === 5) && (num8 === 10)); // True (Both conditions are true)
console.log((num7 === 5) || (num8 === 10)); // True (At least one condition is true)

// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
console.log(arr.includes(3)); // True (3 is in the array)
console.log(arr.includes(6)); // False (6 is not in the array)

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!arr.includes(6)); // True (6 is not in the array)
console.log(!arr.includes(2)); // False (2 is in the array)

//Question no 25 ;

//Version 1 ;
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points!");
}
//Version 2 ;
let alien_color1: string = 'red';

if (alien_color1 === 'green') {
    console.log("Player just earned 5 points!");
};

//Question no 26 ;

//Version 1 (Runs the if block - green alien):
let alien_color2: string = 'green';

if (alien_color2 === 'green') {
    console.log("Player just earned 5 points for shooting the green alien!");
} else {
    console.log("Player just earned 10 points for shooting an alien of a different color!");
};
//Version 2 (Runs the else block - red alien):
let alien_color3: string = 'red';

if (alien_color3 === 'green') {
    console.log("Player just earned 5 points for shooting the green alien!");
} else {
    console.log("Player just earned 10 points for shooting an alien of a different color!");
};

//Question no 27 ;


//Version 1 ;
let alien_color_1: string = 'green';

if (alien_color_1 === 'green') {
    console.log("Player earned 5 points for shooting the green alien!");
} else if (alien_color_1 === 'yellow') {
    console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_color_1 === 'red') {
    console.log("Player earned 15 points for shooting the red alien!");
} else {
    console.log("Unknown alien color. No points earned.");
}
//version 2 ;
let alien_color_2: string = 'yellow';

if (alien_color_2 === 'green') {
    console.log("Player earned 5 points for shooting the green alien!");
} else if (alien_color_2 === 'yellow') {
    console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_color_2 === 'red') {
    console.log("Player earned 15 points for shooting the red alien!");
} else {
    console.log("Unknown alien color. No points earned.");
}
//version 3 ;
let alien_color_3: string = 'red';

if (alien_color_3 === 'green') {
    console.log("Player earned 5 points for shooting the green alien!");
} else if (alien_color_3 === 'yellow') {
    console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_color_3 === 'red') {
    console.log("Player earned 15 points for shooting the red alien!");
} else {
    console.log("Unknown alien color. No points earned.");
}

//Question no 28 ;


let age: number = 30; // Change the age as needed

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
//Question no 29 ;

let favorite_fruits: string[] = ["bananas", "strawberries", "mangoes"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberries")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("mangoes")) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
} else {
    console.log("Apples are not in your list of favorite fruits.");
}

if (favorite_fruits.includes("cherries")) {
    console.log("You really like cherries!");
} else {
    console.log("Cherries are not in your list of favorite fruits.");
}
//Question no 30 ;

let usernames: string[] = ["admin", "Eric", "Alice", "Bob", "Jane"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
};

//Question no 31 ;

let usernames1: string[] = ["admin", "Eric", "Alice", "Bob", "Jane"];

if (usernames1.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username1 of usernames1) {
        if (username1 === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username1}, thank you for logging in again.`);
        }
    }
}

// Remove all usernames from the array
usernames1 = [];

if (usernames1.length === 0) {
    console.log("We need to find some users!");
};

//Question no 32 ;

// List of current usernames
let current_users: string[] = ["John", "Alice", "Bob", "Eve", "Molly"];

// List of new usernames
let new_users: string[] = ["Eric", "ALICE", "Mike", "John", "Sarah"];

// Loop through new_users to check uniqueness (case-insensitive)
for (let new_user of new_users) {
    let isUnique = true;

    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            isUnique = false;
            break; // No need to continue checking if already found a match
        }
    }

    if (isUnique) {
        console.log(`Username '${new_user}' is available.`);
    } else {
        console.log(`Username '${new_user}' is already taken. Please enter a new username.`);
    }
};

//Question no 33 ;

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal: string; // To store the ordinal ending

    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    console.log(`${number}${ordinal}`);
};

//Question no 34 ;

let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

console.log("My favorite pizzas are:");

// Print pizza names using a for loop
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

console.log("\nHere's what I think about each pizza:");

// Print sentences about each pizza using a for loop
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Statement about how much you like pizza
console.log("\nI really love pizza!");

//Question no 35 ;

let animals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("These animals have a common characteristic:");

// Print animal names using a for loop
for (let animal of animals) {
    console.log(animal);
}

console.log("\nHere's what I think about each animal:");

// Print statements about each animal using a for loop
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");

//Question no 36 ;

function make_shirt(size: string, message: string): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Call the function
make_shirt("Medium", "Hello, World!");

//Question no 37 ;

function make_shirt1(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Make a large shirt with the default message
make_shirt1();

// Make a medium shirt with the default message
make_shirt1("Medium");

// Make a custom-sized shirt with a different message
make_shirt1("Small", "TypeScript is awesome!");

//Question no 38 ;

function describe_city(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Paris"); // Uses the default country

//Question no 39 ;

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the returned values
let location1 = city_country("Lahore", "Pakistan");
let location2 = city_country("New York", "USA");
let location3 = city_country("Paris", "France");

console.log(location1);
console.log(location2);
console.log(location3);

//Question no 40 ;

function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three albums with different information
const album1 = make_album("Artist 1", "Album 1", 10);
const album2 = make_album("Artist 2", "Album 2");
const album3 = make_album("Artist 3", "Album 3", 15);

// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);

//Question no 41 ;

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the function to show the magician's names
show_magicians(magician_names);

//Question no 42 ;

function show_magicians1(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];

    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }

    return great_magicians;
}

// Array of magician's names
let magician_names1: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call make_great() to modify the magician names
let great_magicians1 = make_great(magician_names1);

// Show the modified list of great magicians
show_magicians1(great_magicians1);

//Question no 43 ;

function show_magicians2(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great2(magicians: string[]): string[] {
    let great_magicians: string[] = [];

    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }

    return great_magicians;
}

// Array of magician's names
let magician_names2: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call make_great() with a copy of the magician names and store the modified names in a new array
let great_magicians2 = make_great([...magician_names2]);

// Show the original list of magician names
console.log("Original Magicians:");
show_magicians2(magician_names2);

// Show the modified list of great magicians
console.log("\nGreat Magicians:");
show_magicians2(great_magicians2);

//Question no 44 ;

function make_sandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss Cheese");
make_sandwich("PB&J");

//Question no 45 ;

function create_car(manufacturer: string, model: string, ...kwargs: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model,
    };

    // Process the keyword arguments
    for (const kwarg of kwargs) {
        const key = Object.keys(kwarg)[0];
        const value = kwarg[key];
        car[key] = value;
    }

    return car;
}

// Call the function with required and optional information
const myCar = create_car("Toyota", "Camry", { color: "Blue", year: 2022 });

// Print the car object
console.log(myCar);



































