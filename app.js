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
 memoryDeck[15]= '<i class="fab fa-python"></i>'; //Python logo
 memoryDeck[16]= '<i class="fab fa-slack-hash"></i>'; //Slack logo
 memoryDeck[17]= '<i class="fab fa-slack-hash"></i>'; //Slack logo
 memoryDeck[18]= '<i class="fab fa-stack-overflow"></i>'; //Stack overflow logo
 memoryDeck[19]= '<i class="fab fa-stack-overflow"></i>'; //Stack overflow logo

 
 let shuffleDeck = function(deck){
     console.log("shuffleCars working");
     console.log("deck :"+deck);
     console.log("deckLenght :"+deck.length);
    let random = 0; 
   
    let shuffledCards = [];

    for (let i= deck.length-1; i>=0; i--){
        random = Math.floor(Math.random() * (i));
        
        console.log("i"+ i +" :"+ random);
        shuffledCards[i] = deck[random];
        deck.splice(random, 1);
    }
    
    console.log("shuffledCards :"+shuffledCards);
    
    console.log("shuffledCardsLenght :"+shuffledCards.length);
    return shuffledCards;
 };

/* let drawCard = function(){
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
};*/

let clickCard = function(id){
        
        clickCounter++;
       
        //Removing the card position from the div id
        let cardPos = parseInt(id.slice(4));
        console.log("cardPos: "+ cardPos);
        console.log("Hidden card: "+ hiddenCards[cardPos]);
        
        //Revealing clicked card 
        revealedCards.push(hiddenCards[cardPos]);
        document.getElementById(id).innerHTML= hiddenCards[cardPos];
        console.log("revealedCards :" +revealedCards);
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

    setTimeout(function() {
        document.getElementById(id).innerHTML= "<i  class='fas fa-question-circle' ></i>";
    }, 2000);

};

playGame = function(){

    let finished = false;
    console.log("playGame works!");
    let questionMark = '<i class="fas fa-question-circle"></i>'; //Question mark symbol
    
    console.log(memoryDeck);

    //Hidden the play button
    document.getElementById('playBtn').style.visibility = 'hidden';

    //Shuffling and Placing hidden cards in the hiddenCards Array
    hiddenCards = shuffleDeck(memoryDeck); 
    console.log("hiddenCards : "+hiddenCards);
  
    

    //Game loop
    while(!finished){ 
        console.log("Game Loop start!");
        finished = true; 
    }
    console.log("Game Loop ended!");
}