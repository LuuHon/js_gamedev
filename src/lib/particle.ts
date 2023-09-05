export type Velocity = {
  x: number;
  y: number;
};

export class Particle {
  constructor(
    private c: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public radius: number,
    public color: string,
    public velocity: Velocity,
  ) {}

  update(particles: Particle[], xBoundary: number, yBoundary: number) {
    this.draw();

    for (const p of particles) {
      if (this === p) continue;
    }

    if (this.isExceedingXbounds(xBoundary)) {
      console.log("xb");
      this.velocity.x = -this.velocity.x;
    }
    if (this.isExceedingYbounds(yBoundary)) {
      console.log("yb");
      this.velocity.y = -this.velocity.y;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  isExceedingXbounds(xb: number) {
    return this.x - this.radius <= 0 || this.radius >= xb;
  }

  isExceedingYbounds(yb: number) {
    return this.y - this.radius <= 0 || this.radius >= yb;
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.strokeStyle = this.color;
    this.c.stroke();
    this.c.closePath();
  }
}
