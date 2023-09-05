export type Velocity = {
  xVel: number;
  yVel: number;
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

  update(particles: Particle[]) {
    this.draw();

    for (const p of particles) {
      if (this === p) continue;
    }

    this.x += this.velocity.xVel;
    this.y += this.velocity.yVel;
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.strokeStyle = this.color;
    this.c.stroke();
    this.c.closePath();
  }

  updateVelocity() {
    this.velocity.xVel += 5;
    this.velocity.yVel += 5;
    this.draw();
  }
}
