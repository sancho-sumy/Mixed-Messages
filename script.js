let completePhrase = '';
let decoration = '';

const messageObj = {
    pronoun: ['I', 'You', 'He', 'She', 'We', 'They'],
    adjective: ['my', 'your', 'his', 'her', 'our', 'their'],
        cleaned: ['teeth', 'room', 'wardrobe', 'garden'],
        made: ['homework', 'project', 'prediction', 'forecast'],
        played: ['guitar', 'role', 'music', 'game'],
    phraseConstructor() {                                                       //Complete phrase generator.
        let pronounSelection = randomSelection(messageObj.pronoun);
        let adjectiveSelection = messageObj.adjective[messageObj.pronoun.indexOf(pronounSelection)];  //Selecting of correct adjective for previously selected pronoun.
        let actionArray = Object.keys(messageObj).slice(2, -1); //Extract a list of actions from object.
        let actionSelection = randomSelection(actionArray);  //Random selection of action.
        let actionObjectSelection = () => {
            switch (actionSelection) {                  
                case 'cleaned':
                    return randomSelection(messageObj.cleaned);
                    break;
                case 'made':
                    return randomSelection(messageObj.made);
                    break;          
                case 'played':
                    return randomSelection(messageObj.played);
                    break;
                      }
        }
        completePhrase = `${pronounSelection.toUpperCase()} ${actionSelection} ${adjectiveSelection.toUpperCase()} ${actionObjectSelection()}.`;
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

console.log(`\nPossessive Adjectives example generator:\n
${decoration}\n| ${completePhrase} |\n${decoration}`);