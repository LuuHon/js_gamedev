export class Circle {
  constructor(
    private c: CanvasRenderingContext2D,
    private x: number,
    private y: number,
    private radius: number,
    private color: string,
  ) {}

  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.closePath();
  }

  update() {
    this.draw();
  }
}
