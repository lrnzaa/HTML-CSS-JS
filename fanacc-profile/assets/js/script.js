//onclick function show boxes

function show() {
    let hidden = document.getElementById("hide");

    if(hidden.style.display == "none") {
        hidden.style.display = "block";
    }
    else {
        hidden.style.display = "none";
    }
}