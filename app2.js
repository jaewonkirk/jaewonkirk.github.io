const hands = document.querySelectorAll("h1");

function handleHandClick() {
    const currentClasses = this.classList;
    /*
    if(currentClasses.contains("active")) {
        this.classList.remove("active");
    } else {
        this.classList.add("active");
    };
    */
    this.classList.toggle("active")
};

hands.forEach(function(hand) {
    hand.addEventListener("click", handleHandClick);
});