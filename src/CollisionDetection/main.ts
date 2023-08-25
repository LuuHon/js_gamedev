import { Circle, getDist, isCircleCollided } from "../lib";

const cv = document.querySelector("canvas");
if (cv === null) throw new Error("canvas is null");

const ctx = cv.getContext("2d");
ctx.font = cv.style.font;

cv.width = 1280;
cv.height = 720;

//set initial mouse x/y coords to center of canvas
const mouse = {
  x: Math.round(cv.width / 2),
  y: Math.round(cv.height / 2),
};

//update mouse x/y coords relative to the centerd canvas and view port
document.onmousemove = (evt) => {
  const rect = cv.getBoundingClientRect();
  mouse.x = Math.round(evt.clientX - rect.left);
  mouse.y = Math.round(evt.clientY - rect.top);
};

let moving: Circle;
let stationary: Circle;

const movingInitialColor = "green";
const stationaryInitialColor = "blue";
const collidedColor = "red";
const main = () => {
  moving = new Circle(ctx, undefined, undefined, 100, movingInitialColor);
  const centerX = cv.width / 2;
  const centerY = cv.height / 2;
  stationary = new Circle(ctx, centerX, centerY, 100, stationaryInitialColor);
};

const animate = () => {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = "blue";
  ctx.font = "24px Arial";

  stationary.updateFill();

  moving.x = mouse.x;
  moving.y = mouse.y;
  moving.updateFill();

  const distance = getDist(moving.x, moving.y, stationary.x, stationary.y);
  const fillTextLeftMargin = 16 * 7;

  //Moving
  ctx.fillStyle = "black";
  ctx.fillText(`dist:${distance}`, mouse.x + fillTextLeftMargin, mouse.y);
  ctx.fillText(`x:${mouse.x}`, mouse.x + fillTextLeftMargin, mouse.y + 30);
  ctx.fillText(
    `y:${Number(mouse.y.toFixed(2))}`,
    mouse.x + fillTextLeftMargin,
    mouse.y + 60,
  );

  //Stationary
  ctx.fillText(
    `dist:${distance}`,
    stationary.x + fillTextLeftMargin,
    stationary.y,
  );
  ctx.fillText(
    `x:${stationary.x}`,
    stationary.x + fillTextLeftMargin,
    stationary.y + 30,
  );
  ctx.fillText(
    `y:${stationary.y}`,
    stationary.x + fillTextLeftMargin,
    stationary.y + 60,
  );

  if (isCircleCollided(distance, moving.radius, stationary.radius)) {
    moving.color = collidedColor;
    stationary.color = collidedColor;
    return;
  }

  // reset circle back to center(setting mouse coords) if circle touches canvas's vertical boundaries
  const leftBoundaryCollision = moving.x <= moving.radius;
  const rightBoundaryCollision = moving.radius + moving.x >= cv.width;
  if (leftBoundaryCollision || rightBoundaryCollision) {
    mouse.x = cv.width / 2;
    mouse.y = cv.height / 2;

    alert("canvas's x boundary hit, moving mouse back to center");
    return;
  }

  // reset circle back to center if circle touches canvas's horizontal boundaries
  const topBoundaryCollision = moving.y <= moving.radius;
  const bottomBoundaryCollision = moving.radius + moving.y >= cv.height;
  if (topBoundaryCollision || bottomBoundaryCollision) {
    mouse.x = cv.width / 2;
    mouse.y = cv.height / 2;

    alert("canvas's y boundary hit, moving mouse to center");
    return;
  }

  moving.color = movingInitialColor;
  stationary.color = stationaryInitialColor;
};

main();
animate();
