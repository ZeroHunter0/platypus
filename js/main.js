function createDomElement() {
  return document.createElement("div");
}

function getDomElementById(id) {
  return document.getElementById(id);
}

var mainElement = getDomElementById("main");
console.log(mainElement);
console.log("hahah");
let newElement = createDomElement();
newElement.innerText = "Another World!";
mainElement.appendChild(newElement);
let flag = true;
mainElement.onmousedown = function name() {
  console.log("muhahaha)))");
  if (this.zub) {
    console.log("flag is true");
  } else {
    console.log("flag is false");
  }
};
var f = mainElement.onmousedown;
mainElement.onmousedown = 0;
f.zub = true;
let anotherElement = createDomElement();
anotherElement.innerText = "22";
anotherElement.onmousedown = function() {
  if (f.zub) {
    f();
  } else {
    console.log("1");
  }
};
mainElement.appendChild(anotherElement);
