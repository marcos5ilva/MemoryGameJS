 //Card deck array
 let memoryDeck = [];

 let hiddenCards = [];
 let revealedCards = [];
 let revealedCardsId=[];

 let clickCounter =0;
 let leftCardCounter =0;
 let play = false;
 var timer;

 let seconds = document.getElementById("seconds");
 let minutes = document.getElementById("minutes");

 //Card's symbols array
 //Coded by Michael
 let createMemoryDeck = function(){
    let Deck =[];

    Deck[0]= '<i class="fab fa-js"></i>'; //JavaScript logo
    Deck[1]= '<i class="fab fa-js"></i>'; //JavaScript logo
    Deck[2]= '<i class="fab fa-html5"></i>';//HTML5 logo
    Deck[3]= '<i class="fab fa-html5"></i>';//HTML5 logo
    Deck[4]= '<i class="fab fa-css3-alt"></i>'; //CSS3 logo
    Deck[5]= '<i class="fab fa-css3-alt"></i>'; //CSS3 logo
    Deck[6]= '<i class="fab fa-react"></i>'; //ReactJS logo
    Deck[7]= '<i class="fab fa-react"></i>'; //ReactJS logo
    Deck[8]= '<i class="fab fa-angular"></i>'; //Angular logo
    Deck[9]= '<i class="fab fa-angular"></i>'; //Angular logo
    Deck[10]= '<i class="fab fa-vuejs"></i>'; //Vue logo
    Deck[11]= '<i class="fab fa-vuejs"></i>'; //Vue logo
    Deck[12]= '<i class="fab fa-github"></i>'; //Github logo
    Deck[13]= '<i class="fab fa-github"></i>'; //Github logo
    Deck[14]= '<i class="fab fa-python"></i>'; //Python logo
    Deck[15]= '<i class="fab fa-python"></i>'; //Python logo
    Deck[16]= '<i class="fab fa-slack-hash"></i>'; //Slack logo
    Deck[17]= '<i class="fab fa-slack-hash"></i>'; //Slack logo
    Deck[18]= '<i class="fab fa-stack-overflow"></i>'; //Stack overflow logo
    Deck[19]= '<i class="fab fa-stack-overflow"></i>'; //Stack overflow logo

    return Deck;
 };


 //Timer
 //Coded by Marcos
 var countUpTimer = function(){
    let currentSeconds = parseFloat(seconds.textContent);
    seconds.textContent = currentSeconds +1;
    if(currentSeconds ===60){
        let currentMinutes = parseFloat(minutes.textContent);
        minutes.textContent = currentMinutes+1;
        seconds.textContent = "0";
    }
 };

 

 

 //Shuffle deck function
 //Coded by Marcos
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

 


 //Click Card Functions
 //Coded by Marcos
let clickCard = function(id){
    if(play){
        clickCounter++;
        console.log(" clickcounter: " +clickCounter);
        if(clickCounter<=2){
            console.log(" clickcounter: " +clickCounter);
            

            //storing div card id
            revealedCardsId.push(id);

            //Removing the card position from the div id
            let cardPos = parseInt(id.slice(4));
            console.log("cardPos: "+ cardPos);
            console.log("Hidden card: "+ hiddenCards[cardPos]);
            
            //Revealing clicked card 
            revealedCards.push(hiddenCards[cardPos]);
            document.getElementById(id).innerHTML= hiddenCards[cardPos];
            console.log("revealedCards :" +revealedCards);
            if(clickCounter==2){
                console.log(" clickcounter: " +clickCounter);
                if(revealedCards[0] == revealedCards[1]){
                    console.log("match");
                    
                    
                    document.getElementById(revealedCardsId[0]).style.backgroundColor= "gray";
                    document.getElementById(revealedCardsId[1]).style.backgroundColor= "gray";
                    document.getElementById(revealedCardsId[0]).className+="moveLeftAnim";
                    document.getElementById(revealedCardsId[1]).className+="moveLeftAnim";
                    setTimeout(function() {
                        console.log("leftCardCounter :"+ leftCardCounter);
                    document.getElementById(revealedCardsId[0]).style.visibility= "hidden";
                        document.getElementById(revealedCardsId[1]).style.visibility= "hidden";
                        document.getElementById("leftCard"+leftCardCounter).innerHTML= hiddenCards[cardPos];
                        
                        
                    }, 750);
                    
                    revealedCards.length =0;
                    leftCardCounter++;
                    console.log("leftCardCounter added :"+ leftCardCounter);
                    

                }else{
                
                    console.log("doesnt match");
                    revealedCards.length =0;
                }

                 //Coded by Michael
                setTimeout(function() {
                    
                    document.getElementById(revealedCardsId[0]).innerHTML= "<i  class='fas fa-question-circle' ></i>";
                    document.getElementById(revealedCardsId[1]).innerHTML= "<i  class='fas fa-question-circle' ></i>";
                    revealedCardsId.length = 0;
                    clickCounter =0;
                }, 750);
            }
            console.log(" clickcounter: " +clickCounter);
            if(leftCardCounter >=10){
                //Show the play button
                document.getElementById('playBtn').style.visibility = 'visible';
                //Set play variable to false
                play = false;
                window.clearInterval(timer);
                
              
                leftCardCounter =0;
            }
        } 
    }

    

};


//Starting the game
 //Coded by Michael
playGame = function(){

    //Setting play variable to true
    play = true;
    seconds.textContent = "0";
    minutes.textContent ="0";
    
    console.log("playGame works!");
    let questionMark = '<i class="fas fa-question-circle"></i>'; //Question mark symbol
    
    //Create memoryDeck
    memoryDeck = createMemoryDeck();
    console.log(memoryDeck);

    //Hidden the play button
    document.getElementById('playBtn').style.visibility = 'hidden';
    

    //Shuffling and Placing hidden cards in the hiddenCards Array
    hiddenCards = shuffleDeck(memoryDeck); 

    //Placing hidden cards in the browser
    for(let i=0; i<hiddenCards.length; i++){
        document.getElementById("card"+i).innerHTML= "<i  class='fas fa-question-circle' ></i>";
        document.getElementById("card"+i).style.visibility= "visible";
        document.getElementById("card"+i).style.backgroundColor= "#181340";

    }
    console.log("hiddenCards : "+hiddenCards);  

    //Placing hidden left columns result cards in the browser
    for(let i=1; i<=10; i++){
        document.getElementById("leftCard"+i).innerHTML= "<i  class='fas fa-question-circle' ></i>"; 
                        
    }

    //Starting timer
    countUpTimer();
     timer= window.setInterval(countUpTimer, 1000);
    
};