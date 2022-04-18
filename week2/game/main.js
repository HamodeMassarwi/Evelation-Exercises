const subHeader = document.createElement("h2");
subHeader.innerHTML="Bobo";
subHeader.setAttribute("class" , "sub-header");
document.body.appendChild(subHeader)


// console.log(document)
document.getElementById("playing-field").style.backgroundColor = "blue";

document.getElementById("playing-field")
const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
console.log(down)
playingField.style.backgroundColor = "red";

const block =  document.getElementById("block");
block.style.backgroundColor = "yellow";
//Move to The Right

  const moveRight = function(){
    let parsed = parseInt(block.style.left) || 0
    parsed += 15
    block.style.left = parsed + "px"
}
const moveLeft = function(){
  let parsed = parseInt(block.style.left) || 0
  parsed -= 15
  block.style.left = parsed + "px"
}
const moveUp = function(){
  let parsed = parseInt(block.style.top) || 0
  parsed -= 15
  block.style.top = parsed + "px"
}
const moveDown = function(){
  let parsed = parseInt(block.style.top) || 0
  parsed += 15
  block.style.top = parsed + "px"
}
  
// const arrows = document.getElementById("arrows");
// arrows.style.backgroundColor = "yellow";