const parallax = document.getElementById("banner");

window.addEventListener("scroll", function(){
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

