function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
var cards =[
    {value:'cat', image:'./images/cat.png',matched:false},
    {value:'chicken', image:'./images/chicken.png',matched:false},
    {value:'cow', image:'./images/cow.png',matched:false},
    {value:'dog', image:'./images/dog.png',matched:false},
    {value:'donkey', image:'./images/donkey.png',matched:false},
    {value:'horse', image:'./images/horse.png',matched:false},
    {value:'roostert', image:'./images/rooster.png',matched:false},
    {value:'sheep', image:'./images/sheep.png',matched:false},
    {value:'cat', image:'./images/cat.png',matched:false},
    {value:'chicken', image:'./images/chicken.png',matched:false},
    {value:'cow', image:'./images/cow.png',matched:false},
    {value:'dog', image:'./images/dog.png',matched:false},
    {value:'donkey', image:'./images/donkey.png',matched:false},
    {value:'horse', image:'./images/horse.png',matched:false},
    {value:'roostert', image:'./images/rooster.png',matched:false},
    {value:'sheep', image:'./images/sheep.png',matched:false}
    
   
]

var cardEls= document.querySelectorAll('.card');
var firstGuess=null;
var canGuess=true;
var flippedCards=0;
var guesses=0;

shuffle(cards);

cardEls.forEach(function(el, index){
el.addEventListener('click',function(){
    if(index=== firstGuess || cards[index].matched || !canGuess){
        alert('invalid geuss');
        return;
    }
    if(firstGuess=== null){
        firstGuess=index;
       
    }else{
        guesses++;
        document.querySelector('#guesses').textContent=guesses;
        if(cards[firstGuess].value===cards[index].value){
            cards[firstGuess].matched=true;
            cards[index].matched=true;
            firstGuess=null;
            flippedCards+=2;
            //check
if(flippedCards===cards.length){
    resetGame();
}
        }else{
            canGuess=false;

            setTimeout(function(){
                cardEls[firstGuess].setAttribute('src','./images/before.png');
                cardEls[index].setAttribute('src','./images/before.png');
                firstGuess=null;
                canGuess=true;
            },1500);
            
        }
    }
    var clickedCard=cards[index];
el.setAttribute('src',clickedCard.image);
});
});
function resetGame(){
    canGuess=false;

    setTimeout(function(){
        firstGuess=null;
        canGuess=true;
        flippedCards=0;
        guesses=0;

        document.querySelector('#guesses').textContent=guesses;

        cardEls.forEach(function(el,index){
            el.setAttribute('src','./images/before.png');
        });
        cards.forEach(function(card,index){
card.matched=false;
        });
        shuffle(cards);
    },1500);
  
    
}
document.querySelector('#reset').addEventListener('click',function(){
    resetGame();
});