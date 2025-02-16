function setDifficulty(difficulty){
    let maxAttempts;
    let maxNumber;
    switch(difficulty){
        case 'facile':
            maxAttempts = 10;
            maxNumber = 50;
            break;
        case 'intermédiaire':
            maxAttempts = 7;
            maxNumber = 100;
            break;
        case 'difficile':
            maxAttempts = 5;
            maxNumber = 200;
            break;
    }
    return [maxAttempts, maxNumber];
}

function checkAnswer(userGuess, randomNumber){
    if (userGuess === randomNumber) {
        alert("Félicitations! Vous avez deviné le nombre.");
        return true;
    } else if (userGuess < randomNumber) {
        alert("Le nombre est plus grand.");
    } else {
        alert("Le nombre est plus petit.");
    }
    return false;
}

function startGame(){
    let difficulty = prompt("Choisissez un niveau de difficulté: Facile, Intermédiaire, Difficile").toLowerCase();
    let guessed=false;
    let attempts=0;
    let maxAttempts, maxNumber;
    [maxAttempts, maxNumber] = setDifficulty(difficulty);
    let randomNumber=0;
    while(randomNumber<1 || randomNumber>maxNumber){
        randomNumber=Math.floor(Math.random() * maxNumber) + 1;
    }
    while(attempts < maxAttempts && !guessed){
        let userGuess = parseInt(prompt(`Devinez le nombre (entre 1 et ${maxNumber}). Tentative ${attempts + 1} sur ${maxAttempts}:`), maxAttempts);
        attempts++;
        guessed=checkAnswer(userGuess, randomNumber);
    }
    if (!guessed) {
        alert(`Désolé, vous avez épuisé vos tentatives. Le nombre était ${randomNumber}.`);
    }
}

function clickMe(){
    let b= document.getElementsByClassName("button");
    if(b[0].innerText=="Commencer le Jeu"){
        b[0].innerText="Rejouer";
    }
    startGame();
}