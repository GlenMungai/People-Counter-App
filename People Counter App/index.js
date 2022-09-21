// javascript
let saveEl = document.getElementById("prev-el")
let count = 0

function increment(){
    count ++

    document.getElementById("count-el").innerText = count

}

function save(){
    let entries = count + " - "
    //textContent reads the spaces too
    saveEl.textContent += entries

    //sets count to 0 when save is clicked
    document.getElementById("count-el").textContent = 0
    count = 0
}

let welcomeEl = document.getElementById("welcome-el")

let name = " Glen Mungai"
let greeting = "Welcome"

welcomeEl.innerText = greeting + name