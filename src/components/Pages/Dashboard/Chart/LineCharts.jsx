import React from "react";
import "./LineCharts.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", Company: 200, Candidates: 200, Free: 100, Paid: 100 },
  { name: "Feb", Company: 300, Candidates: 400, Free: 200, Paid: 200 },
  { name: "Mar", Company: 700, Candidates: 800, Free: 300, Paid: 500 },
  { name: "Apr", Company: 400, Candidates: 600, Free: 400, Paid: 400 },
  { name: "May", Company: 600, Candidates: 300, Free: 600, Paid: 200 },
  { name: "Jun", Company: 350, Candidates: 700, Free: 550, Paid: 250 },
  { name: "Jul", Company: 900, Candidates: 500, Free: 650, Paid: 150 },
  { name: "Aug", Company: 400, Candidates: 500, Free: 300, Paid: 500 },
  { name: "Sep", Company: 350, Candidates: 350, Free: 200, Paid: 600 },
  { name: "Oct", Company: 500, Candidates: 450, Free: 250, Paid: 250 },
  { name: "Nov", Company: 750, Candidates: 300, Free: 200, Paid: 450 },
  { name: "Dec", Company: 650, Candidates: 900, Free: 400, Paid: 550 },
];

const LineCharts = () => {
  return (
    <>
      <div className="chart-bg p-3">
        <h3 className="card-title">Company Sales Chart</h3>
        <hr />
        <ResponsiveContainer height={350}>
          <LineChart width={100} height={100} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Company"
              stroke="#008000" // Green color for "Company" line
              strokeWidth={2}
            />
            {/* <Line
              type="monotone"
              dataKey="Candidates"
              stroke="#ff9900" // Red color for "Candidates" line
              strokeWidth={2}
            /> */}
            <Line
              dataKey="Free"
              stroke="#4e79a7" // Blue color for "free" line
              stackId="stack"
              strokeWidth={2}
            />
            <Line
              dataKey="Paid"
              stroke="#ff1b1b" // Orange color for "paid" line
              stackId="stack"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default LineCharts;
