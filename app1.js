const hands = document.querySelectorAll(".hi");

function handleHandClick() {
    if(this.style.color === "blue"){
        this.style.color = "tomato";
    } else {
        this.style.color = "blue";
    }

};

function handleMouseEnter() {
    this.innerText = "Mouse On!";
};

function handleMouseLeave() {
    this.innerText = "Mouse Off!";
};

hands.forEach(function(hand) {
    hand.textContent = "Grabbed!";
    hand.style.color = "orange";
});

hands.forEach(function(hand) {
    hand.onclick = handleHandClick;
    hand.addEventListener("mouseenter", handleMouseEnter);
    hand.addEventListener("mouseleave", handleMouseLeave);
});

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
};

window.addEventListener("resize", handleWindowResize);