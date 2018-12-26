var r;
var g;
var b;
var color;


function getRandomColor(){


		r = Math.floor((Math.random() * 255) + 1);
		g = Math.floor((Math.random() * 255) + 1);
		b = Math.floor((Math.random() * 255) + 1);

		color = "rgb(" +r+"," + g +"," + b +")";

		return color;
}

function setRandomColor() {
	const colors = document.getElementById('body');
	colors.style.background = getRandomColor();
}
