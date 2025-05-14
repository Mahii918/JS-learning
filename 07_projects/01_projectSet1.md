# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript

const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')


buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
      console.log(e);
      console.log(e.target)

      if(e.target.id==='grey'){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id==='white'){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id==='yellow'){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id
      }
  })
})

```

## Project 2

```javascript

const form=document.querySelector('form')

//the below operation will give you empty value, as as the value
//has to be taken after submission
// const height=parseInt(document.querySelector('height').value)

form.addEventListener('submit',function(e){
  e.preventDefault(); //generally, when submitted, it takes the values to the backend, which is actually not possible here. so we stop it in the start itself.

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)

  const results=document.querySelector('#results')

  if(height===' ' || height<0 || isNaN(height)){
    results.innerHTML="Please give a valid height";
  }
  // isNaN(x) -> tells whether x is Not a Number (True) 
  // or a Number (False) 

  else if(weight===' ' || weight<0 || isNaN(weight)){
    results.innerHTML="Please give a valid weight";
  } 

  else{
    const bmi=(weight / ((height*height)/10000)).toFixed(2);  
    // .toFixed(2) means for 2 decimal places

    results.innerHTML=`<span>${bmi}</span>`;
  }
})

```


## Project 3

```javascript

const clock=document.getElementById('clock') 
//or const clock=document.querySelector('#clock')


setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleTimeString()) // In console
  clock.innerHTML=date.toLocaleTimeString();
}, 1000); 
// 1000ms=1sec  i.e. after every second it gets 
// refreshed, to show exact running time

```


## Project 4

```javascript


let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')


let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)

    validateGuess(guess)
  })
}

function validateGuess(guess){
  if( isNaN(guess)){
    alert('Please enter a valid number.')
  }
  else if(guess<1){
    alert('Please enter a valid number,greater than 1.')
  }
  else if(guess>100){
    alert('Please enter a valid number, less than 100.')
  }
  else{
    prevGuess.push(guess)

    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over. the number was ${randomNumber}`)
      endGame
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if(guess<randomNumber){
    displayMessage(`Number is low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is high`)
  }
}

function displayGuess(guess){
  userInput.value=' '
  guessSlot.innerHTML+=`${guess} `
  numGuess++
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)

  playGame=false
  newGame()

}

function newGame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    
    playGame=true
  })
}


```