"use client";

import React, { useEffect, useRef } from "react";

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: string;
  width: number;
  height: number;
  color?: string;
  stroke?: string;
}

const replaceColor = (svgString: string, newColor: string) => {
  const regex = /fill="#[A-Fa-f0-9]{6}"/g;
  const replacement = `fill="var(${newColor})"`;
  return svgString.replace(regex, replacement);
};

const replaceStroke = (svgString: string, newColor: string) => {
  const regex = /stroke="#[A-Fa-f0-9]{6}"/g;
  const replacement = `stroke="var(${newColor})"`;
  return svgString.replace(regex, replacement);
};

export const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  color = "--bg-primary",
  stroke = "--bg-primary",
  ...props
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const svgModule = await import(`/public/icons/${name}.svg`);
        const svgContent = svgModule.default;
        svgRef.current!.innerHTML = replaceColor(svgContent, color);
        svgRef.current!.innerHTML = replaceStroke(
          svgRef.current!.innerHTML,
          stroke
        );
      } catch (error) {
        console.error(`Error loading SVG '${name}':`, error);
      }
    };

    loadSvg();
  }, [name, color, stroke]);

  return <svg width={width} height={height} ref={svgRef} {...props}></svg>;
};
