import { useRef, useEffect } from "react";
import { getNumberInRange } from "../../assets/utils/utils";
import { Circle } from "../../assets/utils/circleMakerUtil";
import "./Canvas.scss";

const Canvas = () => {
  const canvas = useRef();

  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  useEffect(() => {
    const context = canvas.current.getContext("2d");

    const circle = new Circle(
      Math.random() * width,
      Math.random() * height,
      getNumberInRange(width / 2, width / 4),
      context
    );
    circle.drawCircle(context);
  });

  return (
    <canvas ref={canvas} height={height} width={width} className="canvas" />
  );
};

export default Canvas;
