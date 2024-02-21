const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid")
let results = document.querySelector('#result')
let cardChosen = []
let cardChosenID = []
let cardWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipCard)
    gridDisplay.appendChild(card)
  }
}


function checkMatch(){
    const cards = document.querySelectorAll('img')
    let option1 = cardChosenID[0]
    let option2 = cardChosenID[1]

    if(option1 == option2){
        cards[option1].setAttribute('src','images/blank.png')
        cards[option2].setAttribute('src','images/blank.png')

        alert('you clicked same image😤')
    }

    else if(cardChosen[0] == cardChosen[1]){
        alert('you found a match')
        cards[option1].setAttribute('src','images/white.png')
        cards[option2].setAttribute('src','images/white.png')
        cards[option1].removeEventListener('click',flipCard)
        cards[option2].removeEventListener('click',flipCard)
        cardWon.push(cardChosen)
     }else{
        cards[option1].setAttribute('src','images/blank.png')
        cards[option2].setAttribute('src','images/blank.png')
        alert("try again!!!")
     }

    cardChosen = []
    cardChosenID = []

    results.textContent = cardWon.length

    if(cardWon.length == cardArray.length/2){
        results.textContent = 'Congratulations you won!!!🚀😱'
    }
}

function flipCard(){
   const cardId =  this.getAttribute('data-id')
   cardChosen.push(cardArray[cardId].name)
   cardChosenID.push(cardId)
   this.setAttribute('src', cardArray[cardId].img)
   
   if(cardChosen.length === 2){
    setTimeout(checkMatch(),500)
   }
}
createBoard()