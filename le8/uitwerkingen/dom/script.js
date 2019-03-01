window.onload = function() {
	var h2s = document.getElementsByTagName("h2");
	var hlength = h2s.length;
	for (var i=0; i < hlength; i++) {
		h2s[i].className = "important";
	}
}