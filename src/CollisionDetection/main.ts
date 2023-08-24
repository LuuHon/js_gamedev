import { Circle } from "./circle";

const canvas = document.querySelector("canvas");
if (canvas === null) throw new Error("canvas is null");
const c = canvas.getContext("2d");

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const desiredAspectRatio = 32 / 9;
function updateCanvasSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Calculate the actual aspect ratio of the canvas
  const currentAspectRatio = width / height;

  // Determine the scaling factor to maintain the desired aspect ratio
  let scale = 1;
  if (currentAspectRatio > desiredAspectRatio) {
    scale = height / canvas.height;
  } else {
    scale = width / canvas.width;
  }

  // Update the canvas dimensions and scale its content
  canvas.width = width;
  canvas.height = height;
  c.scale(scale, scale);
}

window.addEventListener("resize", updateCanvasSize);

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
  const circle = new Circle(c, 1000, 500, 100, "green");
  circle.draw();
  circle.update();

  const c2 = new Circle(c, 1200, 500, 100, "red");
  c2.draw();
  c2.update();
};

main();
animate();
