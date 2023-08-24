export class Circle {
  constructor(
    private c: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public radius: number,
    public color: string,
  ) {}

  #draw(stroke?: boolean) {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    this.c.fillStyle = this.color;
    this.c.fill();

    if (stroke) {
      this.c.strokeStyle = this.color;
      this.c.stroke();
    }

    this.c.closePath();
  }

  set xCord(newX: number) {
    this.x = newX;
  }

  set yCord(newY: number) {
    this.y = newY;
  }

  update({ stroke }: { stroke: boolean }) {
    this.#draw(stroke);
  }
}
