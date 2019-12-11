var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var liList = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	// liList.push('li');
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
li.onclick = toggleList(event);
var listLength =  liList.length
function toggleList(event){
	for(var i=0; i<listLength; i++){

		event.target.classList.toggle("done");
		console.log(event.target);
	}
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.addEventListener("click", toggleList);

