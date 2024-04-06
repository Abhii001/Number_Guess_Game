const randomNumber = Math.floor(Math.random() * 20) + 1
console.log(randomNumber)

let inputNumber = document.querySelector('#inputNumber')
let button = document.querySelector('#check-Btn')
let message = document.querySelector('.message')
let body = document.querySelector('body')
let number = document.querySelector('.number')
let highscore = document.querySelector('.highscore')
let score = document.querySelector('.score')
let buttonagain = document.querySelector('.again')

button.addEventListener('click', checkValue)

let scores = 20

function checkValue () {
  let inputValue = inputNumber.value
  if (inputValue == randomNumber) {
    message.innerHTML = 'Congratulations! Right guess.'
    body.style.backgroundColor = 'green'
    number.innerHTML = randomNumber
    if (scores > highscore.innerHTML) {
      highscore.innerHTML = scores
    }
  } else if (inputValue !== randomNumber) {
    scores--
    score.innerHTML = scores
    inputValue < randomNumber ? message.innerHTML = 'Too LOW!!' : message.innerHTML = 'Too HIGH!!'
  }
}

buttonagain.addEventListener('click', resetGame)

function resetGame () {
  location.reload()
}
