import React, { useEffect, useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./DashBoard.css";

const DashBoard = () => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, [chartData]);

  return (
    <div className="chartContainer">
      {/* Line Chart */}
      <div className="lineChart">
        <LineChart
          width={750}
          height={400}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#8884d8" />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
        <p>Investment VS Revenue</p>
      </div>
      {/* Line Bar Chart */}
      <div className="lineBarChart">
        <ComposedChart width={750} height={400} data={chartData}>
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="sell"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="investment" stroke="#ff7300" />
        </ComposedChart>
        <p>Investment VS Revenue VS SELL</p>
      </div>
    </div>
  );
};

export default DashBoard;
