export class Circle {
  constructor(
    private c: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public radius: number,
    public color: string,
  ) {}

  updateFill() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.closePath();
  }

  updateStroke() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.strokeStyle = this.color;
    this.c.stroke();
    this.c.closePath();
  }
}
