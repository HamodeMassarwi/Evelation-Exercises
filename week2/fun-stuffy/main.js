const box = document.getElementById("box")
box.onclick = function () {
    box.innerHTML = "clicked"
}
box.onmouseenter = function(){
    box.innerHTML = "joo"
}
box.onmouseleave = function(){
    box.innerHTML = "moo"
}

const sox = document.createElement("div") // dynamically creating an element

sox.setAttribute("class", "box")
sox.onclick = function(){       // adding an event to the new element
    sox.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(box) // now the box will be on the page, and will react to a click!