var css = document.querySelector("h5");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bg = document.getElementById("gradient");

function changeBackground() {
	bg.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent = bg.style.background;
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);