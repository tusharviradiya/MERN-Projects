const randomColor = function () {
  // const hex = "0123456789ABCDEF";
  // let color = "#";
  // for (let i = 0; i < 6; i++) {
  //   color += hex[Math.floor[Math.random() * 16]];
  // }
  // return color;
  var c = "";
  while (c.length < 6) {
    c += Math.random().toString(16).substr(-6).substr(-1);
  }
  return "#" + c;
};

let id; //coz scope concept we need to declare global.

const startChangingColor = function () {
  if (!id) {
    //here id agar old wali he means null nahi he to hum setinterval nahi karenge but agar null hogi to hum setinterval karenge
    id = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(id);
    id = null;
  });
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
