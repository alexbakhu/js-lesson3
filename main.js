let num1 = 100
 
let num2  =  200

console.log(num1)

console.log(num2)

let num3 = 100 + 200

let num4 = 100 * 200

let num5 = 200 - 100

let num6 = 200 / 100

console.log(num3)

console.log(num4)

console.log(num5)

console.log(num6)

let name1 = 'bakhu'

let name2 = 'Demetre'

let lastname = 'bochorishvili'


let color1 = 'blue'

let color2 = 'black'


console.log(color1)

console.log(color2)

console.log(name1)

console.log(name2)

console.log(name2 + lastname)

let str1 = 'abc'

let str2 = 'defg'

let str3 = str1 + str2

console.log(str3)

let str4 = 'hello:)' + 'georgia' + 'abc'

console.log(str4)

let x = "hi:).  4512316"

console.log(x)

let myName = "bakhu"

console.log(myName)

str1.length

console.log(str4.length)

myName.length

console.log(myName.length)

document.querySelector

// daseleqteba

let elem1 = document.querySelector('.hi-js')

console.log(elem1)

let elem2 = document.querySelector('.btn1')

console.log(elem2)

let elem3 = document.querySelector('.img1')

console.log(elem3)


elem1.style.color = "white"

elem1.style.backgroundColor = "black"

elem1.style.border = "blue 10px solid"

elem1.style.borderRadius = "10px"

elem1.style.padding = "5px"



elem1.style.color = "blue"

elem2.style.backgroundColor = "gray"

elem2.style.border = "darkGreen 5px solid"

elem2.style.borderRadius = "10%"

elem2.style.padding = "7px"

//  teqstis shecvla

elem1.textContent = "hello"

elem2.textContent = 'dont click me now'

// eventebi

elem2.addEventListener("click", ()=> {

    console.log("successfully clicked button")
})

elem1.addEventListener("click", ()=> {

    console.log("successfully clicked the text.")
})


let elem4 = document.querySelector('.hi')

console.log(elem4)


elem4.addEventListener("click", ()=> {

    elem4.style.backgroundColor = 'red'
    elem4.style.borderRadius = '50%'
    elem4.style.width = '50px'
})


console.log(elem4)
let elem5 = document.querySelector('.btn2')

console.log(elem5)

elem5.addEventListener("click", ()=> {

    elem5.remove()

})

