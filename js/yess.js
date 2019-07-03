if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 260);
}
var x = 0;
var titleText = ["|", "x|", "xe|", "xeo|", "xeos|", "xeost|" ,"xeosta|", "xeostar|" ,"xeosta|", "xeost|", "xeos|", "xeo|", "xe|", "x|", "|"];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
