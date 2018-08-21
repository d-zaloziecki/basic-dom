const ball = document.getElementById("block");
let measurment = ball.getBoundingClientRect();

const header = document.createElement("h1");
header.innerHTML= "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const  subHeader = document.createElement("h2");
subHeader.innerHTML= "play";
subHeader.setAttribute("class", "sub");
document.body.appendChild(subHeader);
 

const move = function (direction1, where){
    go = document.getElementById(direction1);
    go.onclick = function(){
        let r = parseInt(document.getElementById("block").style.left) || 0;
        r = r + where;
        r += "px";
        document.getElementById("block").style.left = r;
        measurment = ball.getBoundingClientRect();
    }
}
move("right", 15);
move("left", (-15));

const move1 = function (direction1, where){
    go = document.getElementById(direction1);
    go.onclick = function(){
        let r = parseInt(document.getElementById("block").style.top) || 0;
        r = r + where;
        r += "px";
        document.getElementById("block").style.top = r;
        measurment = ball.getBoundingClientRect();
    }
}
move1("down", 15);
move1("up", (-15));



console.log(measurment)

