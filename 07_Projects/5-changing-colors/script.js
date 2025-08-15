const generateRandomColor = function () {
  const hex = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;

const startChangingColor = function () {
  if(!interval){
       interval = setInterval(changbgColor, 1000);
  }
  function changbgColor() {
    document.body.style.backgroundColor = generateRandomColor();
  }
};

const stopChangingColor = function()
{
  clearInterval(interval)
  interval = null;
}

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
