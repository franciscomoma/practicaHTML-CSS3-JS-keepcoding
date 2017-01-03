var links = document.getElementsByClassName("menu-element-link");

var lastInterval = null

var SmoothScroll = function(event){
	event.preventDefault();

	if(lastInterval){
		window.clearInterval(lastInterval)
	}

	var nextElement = document.getElementById(event.currentTarget.hash.replace('#',''));
	VERY_FAST = 50
	FAST = 20
	SLOW = 7
	speed = VERY_FAST

	var scroll = function(){
		if(window.scrollY < nextElement.offsetTop){
			window.scrollTo(window.scrollX, window.scrollY+speed)
		}

		if(window.scrollY > nextElement.offsetTop){
			window.scrollTo(window.scrollX, window.scrollY-speed)
		}

		if(window.scrollY == nextElement.offsetTop || Math.abs(window.scrollY - nextElement.offsetTop)<speed){
			window.scrollTo(window.scrollX, nextElement.offsetTop);
			clearInterval(lastInterval);
		}

		if( Math.abs(window.scrollY - nextElement.offsetTop) < 200 && speed == FAST)
		{
			clearInterval(lastInterval);
			speed = SLOW;
			lastInterval = setInterval(scroll,20)
		}

		if( Math.abs(window.scrollY - nextElement.offsetTop) < 750 && speed == VERY_FAST)
		{
			clearInterval(lastInterval);
			speed = FAST;
			lastInterval = setInterval(scroll,20)
		}
	}

	lastInterval = setInterval(scroll,20)
	
}

for(var i = 0; i<links.length; i++){
	links[i].onclick = SmoothScroll;
}