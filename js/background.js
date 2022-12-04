const background = document.querySelector("#background");

const NUM_OF_BACKGROUND_IMAGES = 5;
const bgIdx = 1 + Math.floor(NUM_OF_BACKGROUND_IMAGES*Math.random());

background.style.backgroundImage = `url("img/background${bgIdx}.jpg")`;