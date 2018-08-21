function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function getRandomColor() {
//   const colors = ["red", "blue", "green", "yellow", "purple", "black"];
//   let color = colors[Math.floor(Math.random() * 6)];
//   return color;
// }

const checkColors = function (func) {
  let counter = 0;
  for (let i = 1; i < 6; i++) {
    if (func(i) === func(i + 1)) {
      counter++;
    }
  }
  if (counter == 5) {
    document.getElementById("goodJob").innerHTML = "good job!"
  }
  else {
    document.getElementById("goodJob").innerHTML = ""
  }
}

const getBoxColor = function (i) {
  const boxColor = document.getElementById(i).style.backgroundColor
  return boxColor;
}

function createABox(id) {
  const box = document.createElement("div");
  box.style.backgroundColor = getRandomColor();
  box.setAttribute("class", "innerbox");
  box.setAttribute("id", id);
  box.setAttribute("onmouseover", "this.style.backgroundColor = getRandomColor()")
  document.getElementById("container").appendChild(box);
  const container = document.getElementById("container")
  container.setAttribute("onmouseover", "checkColors(getBoxColor)");
}

for (let i = 1; i < 7; i++) {
  createABox(i)
}