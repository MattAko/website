const parallax = document.getElementById("banner");

window.addEventListener("scroll", function(){
	console.log("backgroundPositionY: " + parallax.style.backgroundPositionY);
	let offset = window.pageYOffset;
	if(document.documentElement.clientWidth>600){
		parallax.style.backgroundPositionY = offset * 0.7 + "px";
	}
	else{
		parallax.style.backgroundPositionY = 0 + "px";
	}
})

