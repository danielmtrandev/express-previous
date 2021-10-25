let headsBtn = document.querySelector('#heads').addEventListener('click', heads)
let tailsBtn = document.querySelector('#tails').addEventListener('click', tails)
let result = document.querySelector('#result')
let checkWin = document.querySelector('#checkWin')
let coinFace = document.querySelector('#coinFace')
let choiceMessage = document.querySelector('#choiceMessage')

// let target = event.target

function heads(){
    flipCoin('heads')
    choiceMessage.innerHTML = 'YOU PICK HEADS'

}

function tails(){
    flipCoin('tails')
    choiceMessage.innerHTML = 'YOU PICK TAILS'
}

let winCounter = 0
let loseCounter = 0

function flipCoin(yourChoice){
    fetch('/api')
    .then(response => response.json())
    .then((data) => {
        if(data.face === 'heads'){
            // coinFace.innerHTML = 'COIN FACE: HEADS'
            result.innerHTML = `<img src="https://cdn5.vectorstock.com/i/thumb-large/39/19/american-buffalo-gold-coin-vector-34883919.jpg">`
            console.log('COIN FACE: HEADS')

        }
        else{
            // coinFace.innerHTML = 'COIN FACE: TAILS'
            result.innerHTML = `<img src="https://sdbullion.com/media/catalog/product/cache/84187b6bf9989b50c3b9f106a6bdc2ac/U/S/US-Gold-Buffalo-Reverse_0.jpg">`
            console.log('COIN FACE: TAILS')
        }
        checkWin.innerHTML = ""
        yourChoice === data.face ? checkWin.innerHTML = "YOU WON" : checkWin.innerHTML = "YOU LOSE"
        
        
        // checkWin === "YOU WON" ? console.log("YOU WON") : console.log("YOU LOSE")
        
        
    })
}

