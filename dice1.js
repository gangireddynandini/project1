var randomnum1 = Math.floor(Math.random() * 6) + 1;
var ranimage = "dice" + randomnum1 + ".png";
var imgsrc = "images/" + ranimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgsrc)



var randomnum2 = Math.floor(Math.random() * 6) + 1;
var imgsrc = "images/dice" + randomnum2 + '.png';
var image1 = document.querySelectorAll("img")[1].setAttribute("src", imgsrc);

if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "player 1 won";
}
else if (randomnum2 > randomnum1) {
    document.querySelector("h1").innerHTML = "player 2 won";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}




