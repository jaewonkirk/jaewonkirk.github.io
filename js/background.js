const background = document.querySelector("#background img")

const NUM_OF_BACKGROUND_IMAGES = 5;
const bgIdx = 1 + Math.floor(NUM_OF_BACKGROUND_IMAGES*Math.random());

background.src = `img/background${bgIdx}.jpg`;