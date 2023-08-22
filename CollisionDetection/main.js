import { Circle } from "./circle.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

document.onresize = () => {
  canvas.width = innerWidth;
  canvas.height = innerheight;
};

document.onmousemove = (evt) => {
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
};

const animate = () => {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = "blue";
  c.fillText(`Cursor\r\nx:${mouse.x}\r\ny:${mouse.y}`, mouse.x, mouse.y);

  main();
};

const main = () => {
  const circle = new Circle(c, 300, 300, 100, "green");
  circle.draw();
  circle.update();

  const c2 = new Circle(c, 100, 100, 100, "red");
  c2.draw();
  c2.update();
};

main();
animate();
