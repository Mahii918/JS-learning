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