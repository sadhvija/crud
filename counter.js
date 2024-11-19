let counterValue = document.getElementById("count")
let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let reset = document.getElementById("reset")
let count = 0

increment.addEventListener("click", function () {
    count++
    display()
})

decrement.addEventListener("click", function () {
    count--
    display()
})

reset.addEventListener("click", function () {
    count = 0
    display()
})

function display() {
    counterValue.textContent = count;
}