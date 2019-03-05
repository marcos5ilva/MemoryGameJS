 //Card deck array
 let memoryDeck = [];

 let hiddenCards = [];
 let revealedCards = [];

 let clickCounter =0;

 //Card's symbols
 memoryDeck[0]= '<i class="fab fa-js"></i>'; //JavaScript logo
 memoryDeck[1]= '<i class="fab fa-js"></i>'; //JavaScript logo
 memoryDeck[2]= '<i class="fab fa-html5"></i>';//HTML5 logo
 memoryDeck[3]= '<i class="fab fa-html5"></i>';//HTML5 logo
 memoryDeck[4]= '<i class="fab fa-css3-alt"></i>'; //CSS3 logo
 memoryDeck[5]= '<i class="fab fa-css3-alt"></i>'; //CSS3 logo
 memoryDeck[6]= '<i class="fab fa-react"></i>'; //ReactJS logo
 memoryDeck[7]= '<i class="fab fa-react"></i>'; //ReactJS logo
 memoryDeck[8]= '<i class="fab fa-angular"></i>'; //Angular logo
 memoryDeck[9]= '<i class="fab fa-angular"></i>'; //Angular logo
 memoryDeck[10]= '<i class="fab fa-vuejs"></i>'; //Vue logo
 memoryDeck[11]= '<i class="fab fa-vuejs"></i>'; //Vue logo
 memoryDeck[12]= '<i class="fab fa-github"></i>'; //Github logo
 memoryDeck[13]= '<i class="fab fa-github"></i>'; //Github logo
 memoryDeck[14]= '<i class="fab fa-python"></i>'; //Python logo
 memoryDeck[15]= '<i class="fab fa-vuejs"></i>'; //Python logo
 memoryDeck[16]= '<i class="fab fa-slack-hash"></i>'; //Slack logo
 memoryDeck[17]= '<i class="fab fa-slack-hash"></i>'; //Slack logo
 memoryDeck[18]= '<i class="fab fa-stack-overflow"></i>'; //Stack overflow logo
 memoryDeck[19]= '<i class="fab fa-stack-overflow"></i>'; //Stack overflow logo

 
 let shuffleHiddenCards = function(deck){
     console.log("shuffleCars working");
     console.log(deck);
    let random = 0; 
    let shuffleCards = [];

    for (let i= deck.length; i>=0; i--){
        random = Math.floor(Math.random() * (i));
        console.log("i"+ i);
        shuffleCards[i] = deck[random];
        deck.splice(random, 1);
    }
    
    return shuffleCards;
 };

 let drawCard = function(){
     console.log("drawCard called");
    let random = Math.floor(Math.random() * (memoryDeck.length)); 

    if(random> memoryDeck.length){
        random = Math.floor(Math.random() * (memoryDeck.length)); 
    }

    let card = memoryDeck[random];
    console.log("card :"+random);
    //removing the card from the deck
    
    if(memoryDeck.length > 1){
    memoryDeck.splice(random, 1);
    console.log("memoryDeck size "+memoryDeck.length);
    console.log("memoDeck :"+memoryDeck);
    
    return card;
    }
};

let clickCard = function(id){
        
        clickCounter++;

        let card = drawCard();
        revealedCards.push(card);
        document.getElementById(id).innerHTML= card;
        console.log("revealedCards " +revealedCards);
    if(clickCounter==2){
        clickCounter =0;
        if(revealedCards[0] == revealedCards[1]){
            console.log("match");
            revealedCards.length =0;
        }else{
           
            console.log("doesnt match");
            revealedCards.length =0;
        }
    }

};

playGame = function(){

    let finished = false;
    console.log("playGame works!");
    let questionMark = '<i class="fas fa-question-circle"></i>'; //Question mark symbol
    
    console.log(memoryDeck);

    hiddenCards = shuffleHiddenCards(memoryDeck); //shuffle cards and store result in a new array hiddenCards
    console.log(hiddenCards);
    //Placing hidden cards in the browser
    for(let i=1; i<= hiddenCards.length; i++){
        document.getElementById("card"+i).innerHTML= hiddenCards[i];
        console.log(document.getElementById("card"+i));
    }
    

    //Game loop
    while(!finished){ 
        console.log("Game Loop start!");
        finished = true; 
    }
    console.log("Game Loop ended!");
}