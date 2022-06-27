"use strict"

//number of inputs
let numberOfQuestions = 28; 

//question that gonna be prompted
let questionArray = [
    `Enter a Year`,
    `Enter a full name`,
    `Enter a computer model`,
    'Enter a school name',
    'Enter a word about your friend',
    'Enter a name of bug',
    'Enter a computer part',
    'Enter a proffesion',
    'Enter a type off letter',
    `Enter a verb`,
    `Enter another verb`,
    `Enter an adjective`,
    `Enter a pronoun`,
    `Enter a noun`,
    `Enter a verb`,
    `Enter a date`,
    `Enter a number`,
    `Enter a noun`,
    `Enter a museum name`,
    `Enter a city, state`,
    `Enter an adjective`,
    `Enter a physics noun`,
    `Enter a full name`,
    `Enter a number`,
    `Enter a type of document`,
    `Enter something bad`,
    `Enter an old machine`,
    `Enter a hunting tool`,
    `Enter a verb`,
];

let questionCounter = 0;

let userInputs = [];
for(let i = numberOfQuestions; i >= 0; i--) {
    //console.log(`i = ${i}`);

    //generate prompt for user input
    userInputs.push(
        prompt (
            questionArray[questionCounter] + `  | ${numberOfQuestions} questions left`
        )
    );

    //to check user inputs
    console.log(userInputs);

    questionCounter++;

    numberOfQuestions--;
    //console.log(questionCounter);
}

let originalStory = `In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]} at ${userInputs[3]}. It was at this time that ${userInputs[4]} discovered a ${userInputs[5]} had gotten trapped in one of the ${userInputs[6]} and was causing an error. The ${userInputs[7]} removed the ${userInputs[5]} and taped it in their ${userInputs[8]}, identifying it as the "first actual case of bug being ${userInputs[9]}."
Word got out that the team had "${userInputs[10]}" the ${userInputs[2]}, hence leading to the phrase’s use in computing and ${userInputs[11]} culture. ${userInputs[1]} readily admitted that ${userInputs[12]} was not there when the incident occurred, but that didn’t stop it from becoming one of ${userInputs[1]}'s favorite ${userInputs[13]}s. ${userInputs[1]} ${userInputs[14]} of natural causes on January 1, ${userInputs[15]}, at the age of ${userInputs[16]}. For those interested, the offending ${userInputs[5]}'s ${userInputs[17]}, along with the original ${userInputs[8]}, can be seen at the ${userInputs[18]} in ${userInputs[19]}.
And while this is the "${userInputs[20]}" use case of finding a ${userInputs[2]} ${userInputs[5]}, the original use of the word dates further back in ${userInputs[21]} to ${userInputs[22]}, who in an ${userInputs[23]} ${userInputs[24]} used the term "${userInputs[5]}" to refer to a technological ${userInputs[25]}. While he worked on the quadruplex ${userInputs[26]}, he said it needed a "${userInputs[5]} ${userInputs[27]} to ${userInputs[28]} properly."`;

console.log(originalStory);