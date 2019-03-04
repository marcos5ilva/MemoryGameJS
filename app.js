 //Card deck array
 let memoryDeck = [];
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

 
 let drawCard = function(){
     console.log("drawCard called");
    let random = Math.floor(Math.random() * (memoryDeck.length)); 
    let card = memoryDeck[random];

    //removing the card from the deck
    memoryDeck.splice(random, 1);
    console.log(memoryDeck);
    return card;
    
};

let clickCard = function(){
    
    
    document.getElementById("card1").innerHTML= drawCard();
};

playGame = function(){

    let finished = false;
    console.log("playGame works!");
    let questionMark = '<i class="fas fa-question-circle"></i>'; //Question mark symbol

   
    
    

    //Game loop
    while(!finished){ 
        console.log("Game Loop start!");
        finished = true; 
    }
    console.log("Game Loop ended!");
}