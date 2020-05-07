// Title: productivity app
// Author: John Todd
// Description: drap and drop tile based app allowing you to add, remove, and 
// configure text blobs in useful ways

// ToDo
// make elements draggable
// make elements resizable



// --- Main functions

// returns an element of specified kind with one attribute setActive
function createElementSetAttribute(el, attType, att, text){
	el = document.createElement(el);
	el.setAttribute(attType, att);

	
	return el;
}


// creates a text node secified by text argument and appends it to specified element
function setText(el, text) {
	var textNode = document.createTextNode(text);
	el.appendChild(textNode)
}

function removeElement(el){
	el.parentElement.remove();
	
}

// --- Main Fuctions 




// --- Application main body
function addElement() {
	
	// create elements
	var dropLocation = createElementSetAttribute("div", "class", "dropLocation")
	dropLocation.setAttribute("ondrop","drop(event)")
	dropLocation.setAttribute("ondragover","allowDrop(event)")
	var container = createElementSetAttribute("div", "class", "fieldContainer theme");
		container.setAttribute("draggable", "true")
	container.setAttribute("ondragstart", "drag(event)");
	
	var removeButton = createElementSetAttribute("div", "class", "removeButton");
	removeButton.setAttribute("onclick", "removeElement(this)");
	
	var newEl = createElementSetAttribute("div", "class", "newField");
	newEl.setAttribute("contenteditable", "");
	
	
	
	// add x character to removebutton to make it visible
	setText(removeButton, "X");
	container.appendChild(removeButton);
	container.appendChild(newEl);
	dropLocation.appendChild(container)


	var main = document.getElementById("main");
	main.appendChild(dropLocation);
}

// --- Application main body



addElement()




function allowDrop(ev)
	{
		ev.preventDefault();
	}

function drag(ev)
	{
		ev.dataTransfer.setData("Text",ev.target.id);
	}

function drop(ev)
	{
		var data=ev.dataTransfer.getData("Text");
		ev.target.appendChild(document.getElementById(data));
		ev.preventDefault();
	}
	
