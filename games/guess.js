const guessInput = document.getElementById('guessInput')
const guessBtn = document.getElementById('guessBtn')

let RAMDOM_NUMBER = 0

guessInput.addEventListener('blur', numberInput)


function numberInput(e) {
  if(e.target.value > 100) {
    guessInput.value = null
    return
  }

  RAMDOM_NUMBER = Math.floor(Math.random() * 100) + 1

  console.log(e.target.value)
  console.log(RAMDOM_NUMBER)
}