import { FC } from "react";

type Props = {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
};

export const Sparkline: FC<Props> = ({
  data,
  color = "#3B82F6",
  width = 80,
  height = 28,
}) => {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const pad = 2;
  const w = width - pad * 2;
  const h = height - pad * 2;

  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * w;
    const y = pad + h - ((v - min) / range) * h;
    return `${x},${y}`;
  });

  const polyline = points.join(" ");
  const first = points[0].split(",");
  const last = points[points.length - 1].split(",");

  const fillPath =
    `M${first[0]},${height} ` +
    `L${points.join(" L")} ` +
    `L${last[0]},${height} Z`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={{ display: "block" }}
    >
      <path d={fillPath} fill={color} fillOpacity={0.12} />
      <polyline points={polyline} stroke={color} strokeWidth={1.5} fill="none" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
};
