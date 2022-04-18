const x = function(){
    const newItem = document.createElement("li")
    newItem.innerHTML = "A new item!"
    list.appendChild(newItem)
}
const list = document.getElementById("list");