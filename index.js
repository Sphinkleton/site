const Image = document.getElementById("image"); 
var clicks = 0
const audio1 = new Audio('boowomp.mp3');
const audio2 = new Audio('mweheh.mp3');
const audio3 = new Audio('bigexp.wav');
const audio4 = new Audio('flash.mp3');
Image.addEventListener("click", () => { 
    if (clicks < 99) {
        if (Image.src.indexOf("sphinkleton.png")!=-1) {
            audio1.pause();
            audio1.currentTime = 0;
            audio1.play();
            Image.src = "sadington.png";
        }
        else {
            audio2.pause();
            audio2.currentTime = 0;
            audio2.play();
            Image.src = "sphinkleton.png";
        }
    }
    if (clicks < 100) {
        clicks++;
        if (clicks >= 100) {
            audio1.pause();
            audio1.currentTime = 0;
            audio2.pause();
            audio2.currentTime = 0;
            audio3.play();
            Image.src = "explode.gif";
        }
    }
});

function disc(){
    window.location.href = "https://discord.gg/5fZUWVzA"
}

function flash(){
    document.documentElement.requestFullscreen()
    document.querySelector("html").style.backgroundColor = "white"
    document.getElementById("buttons").remove()
    document.getElementById("image").remove()
    audio4.play();
}

function leav(){
    window.location.replace("http://google.com");
}
