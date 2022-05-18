const messageObj = {
    messageFirstPart: ['Soon', 'In future', 'Next year', 'Next month', 'Some day', 'In other life'],
    messageSecondPart: ['you', 'your friend', 'someone'],
    messageThirdPart: ['meet new friend', 'have a trip', 'make dream true', 'get a new job', 'change lifestyle', 'buy a boat', 'go to the Mars', 'become poppular', 'buy a sport car'],
}

let completePhrase = '';

//Function for random selection of some text from specified array.
const randomTextSelection = (inputArray) => {
    return inputArray[Math.floor(Math.random() * (inputArray.length - 1))];
}

//Complete phrase generator.

const phraseConstructor = () => {
    let firstPart = randomTextSelection(messageObj.messageFirstPart);
    let secondPart = randomTextSelection(messageObj.messageSecondPart);
    let thirdPart = randomTextSelection(messageObj.messageThirdPart);
    completePhrase = `${firstPart}, ${secondPart} will ${thirdPart}!`;
}

//Add some decoration to our output. Decoration length will be changed to fit generated phrase. 

const decorationLine = (char) => {
    let decorationArray = [];
    let decorationLength = completePhrase.length + 4;
    for (let i = 0; i < completePhrase.length + 4; i++) {
        decorationArray.push(char);
    }
    return decorationArray.join('');
}

phraseConstructor();

console.log(`\nYour prediction:\n${decorationLine('~')}\n| ${completePhrase} |\n${decorationLine('=')}`);
