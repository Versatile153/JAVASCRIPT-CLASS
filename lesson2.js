// let names=[
//     'Verati',
//     'Alonso',
//     'pPele',
//     'CR7',
//     'MESSI'
// ]
// const myName='versatile'
// document.querySelector('h1').innerHTML=names
// names.unshift("morata")
// names.push("williams")
// console.log(names)
    // let h1=document.querySelector("h1")
    // h1.innerHTML=myName

    
//aray length
// h1.innerHTML=names.length
//sorting array
//   let life=names.sort()
//   h1.innerHTML=life
  //reverse
//   let reverse=names.reverse()
//   h1.innerHTML=reverse

  //arrray operations

//   const numbers=[10,20,11,30,40] 
            
// //   console.log(numbers[1])
//   let number1=numbers[1]
//   let number4=numbers[4]
//   let sum=number1+number2
//   console.log(sum)
  //  OBJECTS

  const person={
      name:'versatile',
      school:'UNN',
      course:'MATHEMATICS',
      hobby:'football'
      
  }
  console.log(person)
  //there are two ways of accessing the properties of an object
//   1;dot notation
//2; bracket notation
console.log(person.school)

console.log(person['course'])
console.log(person.course)

//we  can have object inside object or array inside an object
const footballersAndClub={
    chelsea:'david siver',
    manU:'de gea',
    arsenal:'jesus',
    bacca:'aubamayang',
    likes:[
        'swimming',
        'playing soccer',
        'reading and writing'
    ],

    colors:{
        favouriteColor:'blues for life',
         leastColor:'red',
         middleColor:'yellow'

    }

}
console.log(footballersAndClub)
console.log(footballersAndClub.likes[2])
console.log(footballersAndClub.colors.favouriteColor)

//conditionals and comparison operators;if else statement

const isCool=false
if(isCool){
    console.log('it is a cold weather')
}else{
    console.log('the weather is not cool')
}

const age=19
if(age<=18){
    console.log('oops you are too young to get married')
}
else{
    console.log("let the marital preparation begin")
}
let num1=23
let num2=33
let num3=24
//LOGICAL OPERATORS; OR==||,AND==&&,NOT ==!

// if(num1<num2 && num1>num2){
//     console.log("it is true")

// }else{
//     console.log("it is not true")
// }
if(num1 < !num2){
    console.log("you are right")

}else{
console.log("my friend you are wrong")
}

// if(!num1==23){
//     console.log("you are wrong")

// }else{
//     console.log("my friend you are right")

// // }
// if(num1<num2 && num2<num3){
//     console.log("it is true")

// }else{
//     console.log('it is not true')
// }
//equality double and tripple equality
let myNumber='20'
let myNumber2='20'

if(myNumber===myNumber2){
    console.log("you are correct")

}else{
     console.log("you are wrong")
}
//evil twins
console.log(0=='')
console.log('0'=='')

console.log(false=='false')
console.log(false=='0')


//loops
//entry controlled loop and exit controled loop
//for loop ,while loop ,foreach, do-while, continue ,breakout loop

for(let i=0;i<=10;i++){
    console.log(i)
}

// let num11=20
// num11--
// console.log(num11)

let i=0
while(i<10){
    console.log( 'i love the number' +i)
    i++
}

//foreach loop
let numbers=[1,3,5,6,77,99,99,00,'hello','hello',100]
numbers.forEach(function(number){
    console.log(number)
})

///concatenation
var name='versatile'
var course='mathematics'
var school='UNN'
console.log('hello '+ course )
// my name is versatile and i am a student of UNN and i study mathematics
console.log('my name is '+name + ' nd i am a student of ' + school+ 'and i study '+ course)

//differnce  between single quotes, double quotes and backticks
 console.log(`hello mr  ${course}`)
 console.log("it 's a cold day")
 console.log(`${2+5}`)

















