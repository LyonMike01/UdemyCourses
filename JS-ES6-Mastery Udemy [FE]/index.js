
setInterval(function test() {
	let currentDateTime = new Date();
	document.querySelector("#dateTime").innerHTML = currentDateTime;
}, 1000);