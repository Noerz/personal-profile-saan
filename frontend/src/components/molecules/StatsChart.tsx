"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const chartData = [
  { name: "Aspirasi Realisasi", value: 1240, color: "#facc15" },
  { name: "Rumah Layak Huni", value: 450, color: "#60a5fa" },
  { name: "Infrastruktur", value: 85, color: "#a78bfa" },
  { name: "Beasiswa PIP", value: 3200, color: "#4ade80" },
  { name: "Kunjungan/Rapat", value: 520, color: "#f87171" },
];

export function StatsChart() {
  return (
    <div className="w-full h-80 pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis
            dataKey="name"
            stroke="#94a3b8"
            tick={{ fill: "#cbd5e1", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis
            stroke="#94a3b8"
            tick={{ fill: "#cbd5e1", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            dx={-10}
          />
          <Tooltip
            cursor={{ fill: "#1e293b" }}
            contentStyle={{
              backgroundColor: "#0f172a",
              borderColor: "#334155",
              color: "#f8fafc",
              borderRadius: "0.5rem",
            }}
            itemStyle={{ color: "#facc15" }}
            formatter={(value: any) => [`${Number(value).toLocaleString()}+`, "Total"]}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
