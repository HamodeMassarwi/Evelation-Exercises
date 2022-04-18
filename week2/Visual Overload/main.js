function randomally(){
    let colors = [
    '#FFCCFF','#FFCCCC','#FFCC99','#FFCC66','#FFCC33','#FFCC00',
    '#FF9900','#FF6600','#FF33FF','#FF3300','#FF0000','#CC9999',
    '#CC9933','#CC66CC','#CC6699','#CC33FF','#CC3366','#CC3333',
    '#CC00CC','#006600','#0033FF','#0033CC'	,'#003399' ,'#003366',
    '#003333','#003300']
    let rand = Math.floor(Math.random()*colors.length);
    return colors[rand];
}




let con = document.getElementById("container");
for(let i = 0 ; i<100 ; i++){
    let box = document.createElement("div");
    box.setAttribute("class" , "box");
    box.style.backgroundColor = randomally();
    box.onmouseenter = function(){
    box.style.backgroundColor = randomally();
    }
    document.getElementById("container").appendChild(box)
}