export type WeightEntry = {
  date: string;
  weight: number;
  fat: number;
  lean: number;
};

export type MetricSummary = {
  label: string;
  value: string;
  unit: string;
  trend: number; // positive = up, negative = down
  sparkline: number[];
};

const today = new Date();
const daysAgo = (n: number) => {
  const d = new Date(today);
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
};

export const weightHistory: WeightEntry[] = [
  { date: daysAgo(90), weight: 85.4, fat: 22.1, lean: 63.3 },
  { date: daysAgo(83), weight: 84.9, fat: 21.8, lean: 63.1 },
  { date: daysAgo(76), weight: 84.2, fat: 21.3, lean: 62.9 },
  { date: daysAgo(69), weight: 83.8, fat: 20.9, lean: 62.9 },
  { date: daysAgo(62), weight: 83.5, fat: 20.7, lean: 62.8 },
  { date: daysAgo(55), weight: 82.9, fat: 20.2, lean: 62.7 },
  { date: daysAgo(48), weight: 82.4, fat: 19.8, lean: 62.6 },
  { date: daysAgo(41), weight: 82.1, fat: 19.5, lean: 62.6 },
  { date: daysAgo(34), weight: 81.7, fat: 19.1, lean: 62.6 },
  { date: daysAgo(27), weight: 81.3, fat: 18.8, lean: 62.5 },
  { date: daysAgo(20), weight: 80.9, fat: 18.4, lean: 62.5 },
  { date: daysAgo(14), weight: 80.6, fat: 18.1, lean: 62.5 },
  { date: daysAgo(7), weight: 80.2, fat: 17.8, lean: 62.4 },
  { date: daysAgo(3), weight: 79.9, fat: 17.5, lean: 62.4 },
  { date: daysAgo(1), weight: 79.6, fat: 17.3, lean: 62.3 },
  { date: daysAgo(0), weight: 79.4, fat: 17.1, lean: 62.3 },
];

export const recentEntries = weightHistory.slice(-7).reverse();

export const metrics: MetricSummary[] = [
  {
    label: "Weight",
    value: "79.4",
    unit: "kg",
    trend: -6.0,
    sparkline: weightHistory.slice(-10).map((e) => e.weight),
  },
  {
    label: "Body fat",
    value: "17.1",
    unit: "%",
    trend: -5.0,
    sparkline: weightHistory.slice(-10).map((e) => e.fat),
  },
  {
    label: "VO2max",
    value: "48.2",
    unit: "ml/kg/min",
    trend: 3.1,
    sparkline: [44, 44.5, 45, 45.8, 46.2, 46.9, 47.1, 47.6, 48.0, 48.2],
  },
];

export const filterByRange = (
  entries: WeightEntry[],
  range: "1W" | "1M" | "3M" | "1Y"
): WeightEntry[] => {
  const days = { "1W": 7, "1M": 30, "3M": 90, "1Y": 365 };
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days[range]);
  return entries.filter((e) => new Date(e.date) >= cutoff);
};
