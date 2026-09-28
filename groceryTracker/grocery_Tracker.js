let first = document.getElementById("grocery1")
let second = document.getElementById("grocery2")
let third = document.getElementById("grocery3")

function calculateTotal(amount1, amount2, amount3) {
    document.getElementById("totalAmount").innerHTML = `Your total amount is: $${
        Number(amount1.value)+ 
        Number(amount2.value)+
        Number(amount3.value)}`
}

let button = document.getElementById("calculateTotal");
button.addEventListener("click", () => {
    calculateTotal(first,second,third)
})