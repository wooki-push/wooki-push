import { FunctionComponent, useState, useEffect, useRef } from "react";
import { ISmallGraph } from "../types";
import styled from "styled-components";
const Canvas = styled.canvas`
  /* width: 110px;
  height: 80px; */
  /* width: 300px;
  height: 150px;
  padding: 8px 10px; */
  width: 100px;
  height: 50px;
  box-sizing: border-box;
`;
const SmallGraph = ({ color, value }: ISmallGraph) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasTag, setCanvasTag] = useState(value);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx: any = canvas?.getContext("2d");
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    const MAX = Math.max(...value);
    // console.log("MAX",MAX);
    value.map((y, x) => {
      // console.log("data", x * 10, y, (MAX * y) / 100);
      ctx.lineTo(x * 10, (y * 100) / MAX);
    });
    ctx.stroke();
  }, []);
  return (
    <>
      <Canvas ref={canvasRef}></Canvas>
    </>
  );
};

export default SmallGraph;
