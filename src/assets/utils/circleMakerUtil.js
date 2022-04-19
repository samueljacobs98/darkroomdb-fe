const getGradient = (radius, context) => {
  const gradient = context.createRadialGradient(0, 0, 0, 0, 0, radius);
  gradient.addColorStop(0, "rgba(255, 81, 81, 1)");
  gradient.addColorStop(0.5, "rgba(245, 118, 118, 0.52)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  return gradient;
};

class Circle {
  constructor(x, y, radius, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.gradient = getGradient(this.radius, context);
  }

  drawCircle(context) {
    context.save();
    context.translate(this.x, this.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.gradient;
    context.fill();
    context.restore();
  }
}

export default Circle;
