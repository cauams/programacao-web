

const tryButton = document.getElementById("submit-btn");
const resetButton = document.getElementById("reset-btn");
const tryCharacters = document.getElementsByClassName("game-input");



tryButton.onclick = () => {
    try {

        if (document.getElementById("word-sent")) {
            document.body.removeChild(document.getElementById("word-sent"))
        } 
        let tryWord = `${(tryCharacters[0].value + tryCharacters[1].value + tryCharacters[2].value + tryCharacters[3].value + tryCharacters[4].value).toLowerCase()}`
        validateInput(tryWord);

        createAwnserAttempt();
        dyeWords(tryCharacters)
        for (i = 0; i < tryCharacters.length; i++) {
            tryCharacters[i].value = '';
        }

        
    } catch (e) {
        window.alert(e.message)
    }
    tryWord = '';
}

resetButton.onclick = () => {

    if (document.getElementById("word-sent")) {
        document.body.removeChild(document.getElementById("word-sent"))
    } 

    for (i = 0; i < tryCharacters.length; i++) {
        tryCharacters[i].value = '';
    }
}

function validateInput(word) {
    if (/\d/.test(word)) {
        throw new Error("Numbers are not a validy input ");
    }

    if (!word || word.length === 0) {
        throw new Error("You can't pass an empty string")
    }
}

function createAwnserAttempt() {

        let awnserContainer = document.createElement('div')
    awnserContainer.className = 'word-sent';
    awnserContainer.id = 'word-sent'
    document.body.appendChild(awnserContainer);

    createAwnserAttemptLetters(awnserContainer);

}

function createAwnserAttemptLetters(awnserContainer) {
    for (i = 0; i < tryCharacters.length; i++) {
        let awnserLetter = document.createElement('p')
        awnserLetter.className = 'try-text ';
        awnserLetter.innerText = tryCharacters[i].value.toUpperCase();
        awnserContainer.appendChild(awnserLetter);
    }
}

function dyeWords(tryCharacters) {



    let awnserLetter = document.getElementsByClassName('try-text');
    let tryWord = `${tryCharacters[0].value + tryCharacters[1].value + tryCharacters[2].value + tryCharacters[3].value + tryCharacters[4].value}`
    
    const correctWord = "hello";

    for(i = 0; i < awnserLetter.length; i++) {
        if(tryWord[i] != correctWord[i]) {
            awnserLetter[i].style.backgroundColor = 'red';
        }
    }

    for (i = 0; i < awnserLetter.length; i++) {

        if (tryWord[i] == 'h' || awnserLetter[i] == 'e' || awnserLetter[i] == 'l' || awnserLetter[i] == 'o') {
            awnserLetter[i].style.backgroundColor = 'yellow';
        }
    }
    
    for(i = 0; i < awnserLetter.length; i++) {
        if(tryWord[i] == correctWord[i]) {
            awnserLetter[i].style.backgroundColor = 'green';
        }
    }

    if (tryWord.toLowerCase() == correctWord) {
        for (i = 0; i < awnserLetter.length; i++) {
            awnserLetter[i].style.backgroundColor = 'green';
        }
        window.alert('You found the word!');
    }
}