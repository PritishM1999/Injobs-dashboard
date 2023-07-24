import React from "react";
import "./LineCharts.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
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
  { name: "May", Company: 600, Candidates: 300, Free: 300, Paid: 200 },
  { name: "Jun", Company: 350, Candidates: 700, Free: 550, Paid: 250 },
  { name: "Jul", Company: 900, Candidates: 500, Free: 400, Paid: 500 },
  { name: "Aug", Company: 400, Candidates: 500, Free: 300, Paid: 500 },
  { name: "Sep", Company: 350, Candidates: 350, Free: 200, Paid: 600 },
  { name: "Oct", Company: 500, Candidates: 450, Free: 250, Paid: 250 },
  { name: "Nov", Company: 750, Candidates: 300, Free: 200, Paid: 450 },
  { name: "Dec", Company: 650, Candidates: 900, Free: 400, Paid: 550 },
];

const SubscribersBarChart = () => {
  return (
    <>
      <div className="chart-bg p-3">
        <h3 className="card-title">Subscription Details Chart</h3>
        <hr />
        <ResponsiveContainer height={350}>
          <BarChart width={100} height={100} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Company" fill="#008000" />
            <Bar dataKey="Candidates" fill="#ff1b1b" />
            <Bar dataKey="Free" fill="#4e79a7" stackId="stack" />
            <Bar dataKey="Paid" fill="#f28e2c" stackId="stack" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SubscribersBarChart;
