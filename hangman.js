
const word = prompt("Skriv ett ord")
let guess = prompt("Gissa en bokstav")
let guesses = 11
let answer = ""
let tried = []

while (guesses > 0) {
  if (word.includes(guess)) {
    alert("Rätt")
    answer += guess
  } else {
    guesses--
    alert(tried += guess)
  }
}


