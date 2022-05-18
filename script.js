let completePhrase = '';
let decoration = '';

const messageObj = {
    messageFirstPart: ['Soon', 'In future', 'Next year', 'Next month', 'Some day', 'In other life'],
    messageSecondPart: ['you', 'your friend', 'someone'],
    messageThirdPart: ['meet new friend', 'have a trip', 'make dream true', 'get a new job', 'change lifestyle', 'buy a boat', 'go to the Mars', 'become poppular', 'buy a sport car'],
    phraseConstructor() {                                                       //Complete phrase generator.
        let firstPart = randomSelection(messageObj.messageFirstPart);
        let secondPart = randomSelection(messageObj.messageSecondPart);
        let thirdPart = randomSelection(messageObj.messageThirdPart);
        completePhrase = `${firstPart}, ${secondPart} will ${thirdPart}!`;
    },
}

//Function for random selection of some text from specified array.
const randomSelection = (inputArray) => {
    return inputArray[Math.floor(Math.random() * inputArray.length)];
}

//Add some decoration to our output. Decoration length will be changed to fit generated phrase. Decoration symbol will be selected randomly from provided array.

const decorationLine = () => {
    const decorationList = ['=', '-', '~'];
    let decorationArray = [];
    let decorationSymbol = randomSelection(decorationList);
    let decorationLength = completePhrase.length + 4;
    for (let i = 0; i < completePhrase.length + 4; i++) {
        decorationArray.push(decorationSymbol);
    }
    decoration = decorationArray.join('');
}

messageObj.phraseConstructor()
decorationLine()

console.log(`\nYour prediction:\n${decoration}\n| ${completePhrase} |\n${decoration}`);