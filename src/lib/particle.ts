import { getDist, isRoundShapeCollided } from ".";

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
    public mass: number,
    public color: string,
    public velocity: Velocity,
  ) {}

  update(particles: Particle[], xBoundary: number, yBoundary: number) {
    this.draw();

    for (const p of particles) {
      if (this === p) continue;

      const dist = getDist(this.x, this.y, p.x, p.y);

      if (isRoundShapeCollided(dist, this.radius, p.radius)) {
        this.handleCollision(p);
      }
    }

    if (this.isExceedingXbounds(xBoundary)) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.isExceedingYbounds(yBoundary)) {
      this.velocity.y = -this.velocity.y;
    }
    this.updatePositionAndRotation();
  }

  calculateMomentOfInertia(): number {
    return 0.25 * Math.PI * this.radius ** 4 * this.mass;
  }

  handleCollision(otherParticle: Particle) {
    // Calculate relative velocity
    const relativeVelocityX = this.velocity.x - otherParticle.velocity.x;
    const relativeVelocityY = this.velocity.x - otherParticle.velocity.y;
  }

  updatePositionAndRotation() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  isExceedingXbounds(xb: number) {
    return this.x - this.radius <= 0 || this.radius + this.x >= xb;
  }

  isExceedingYbounds(yb: number) {
    return this.y - this.radius <= 0 || this.radius + this.y >= yb;
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.strokeStyle = this.color;
    this.c.stroke();
    this.c.closePath();
  }
}
