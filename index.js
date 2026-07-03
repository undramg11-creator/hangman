const hm = document.getElementById('hm')
const rndm = document.getElementById('random')
const alp = document.getElementById('alp')
const ff = document.getElementById('ff')
const img = document.getElementById('img')
const bb = document.getElementById('bb')

const alphabet = [

    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"

];

let clicked = []
let fail = 0
ff.innerHTML = fail


for (let i = 0; i < alphabet.length; i++) {
    const btn = document.createElement('button')
    btn.innerHTML = alphabet[i]
    alp.appendChild(btn)

    btn.addEventListener('click', function(){
         clicked.push(alphabet[i])

         let display = ''

         if(word.includes(clicked)){
            fail = fail

         } else{

            fail = fail + 1
             ff.innerHTML = fail

            img.src = `./hanghmanphoto/${fail}.jpg`

         }


         for (let j = 0; j < word.length; j++){
            
         if (clicked.includes(word[j])){
            
            display = display + word[j]
            rndm.innerHTML = display
        
          } else {
             display = display +' _'
             rndm.innerHTML = display
             
          }

        }

        if ( fail === 7){
         ff.innerHTML = 'YOu Lose'
      } else if ( !display.includes(' _')) {
         ff.innerHTML = 'you win'
      }


    })
}

const randomWords = ['UNDRAM', 'CODING', 'IMAC', 'MOUSE']
const randomNumber = Math.floor(Math.random() * randomWords.length)
const word = randomWords[randomNumber]
let zuraas = ''

for (let i = 0; i < word.length; i++) {
    zuraas = zuraas + ' _'
    rndm.innerHTML = zuraas
}

bb.addEventListener('click', function() {
window.location.reload()
})