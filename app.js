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

 
 let drawCard = function(){
     console.log("drawCard called");
    let random = Math.floor(Math.random() * (memoryDeck.length)); 

    if(random> memoryDeck.length){
        random = Math.floor(Math.random() * (memoryDeck.length)); 
    }
    
    let card = memoryDeck[random];
    console.log("card :"+random);
    //removing the card from the deck
    
    if(memoryDeck.length > 3){
    memoryDeck.splice(random, 1);
    console.log("memoryDeck size "+memoryDeck.length);
    console.log("memoDeck :"+memoryDeck);
    
    return card;
    }
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