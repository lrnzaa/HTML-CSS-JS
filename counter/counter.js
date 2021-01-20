let count = 0;

const value = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", function(e) {
    const actions = e.currentTarget.classList;
    if(actions.contains("decrease")) {
        count--;
    }
    if(count < 0){
        count = 0;
    }
    value.textContent = count;
})

increase.addEventListener("click", function(e) {
    const actions = e.currentTarget.classList;
    if(actions.contains("increase")) {
        count++;
    }
    value.textContent = count;
})

reset.addEventListener("click", function(e) {
    const actions = e.currentTarget.classList;
    if(actions.contains("reset")) {
        count = 0;
    }
    value.textContent = count;
})