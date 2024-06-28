const Image = document.getElementById("image"); 
var clicks = 0
const audio1 = new Audio('boowomp.mp3');
const audio2 = new Audio('mweheh.mp3');
const audio3 = new Audio('bigexp.wav');
Image.addEventListener("click", () => { 
if (clicks < 99) {
    if (Image.src.indexOf("sphinkleton.png")!=-1) {
        audio1.play();
        Image.src = "sadington.png";
    }
    else {
        audio2.play();
        Image.src = "sphinkleton.png";
    }
}
if (clicks < 100) {
    clicks++;
    if (clicks >= 100) {
    audio3.play();
    Image.src = "explode.gif";
    }
}
});

function disc(){
    window.location.href = "https://discord.gg/Ndx8ejzQCx"
}

function flash(){
    document.documentElement.requestFullscreen()
    document.querySelector("html").style.backgroundColor = "white"
    document.getElementById("buttons").remove()
    document.getElementById("image").remove()
}

function leav(){
    window.location.replace("http://google.com");
}