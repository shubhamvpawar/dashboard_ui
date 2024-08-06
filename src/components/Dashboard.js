import React from "react";
import "chart.js/auto";
import Feedback from "./Feedback";
import RecentOrders from "./RecentOrders";
import Options from "./Options";
import Activity from "./Activity";
import NetProfit from "./NetProfit";
import OrderSummary from "./OrderSummary";

const Dashboard = () => {
  return (
    <div className="bg-black text-white pl-20 pr-2 pt-16 md:pl-20 md:pt-16 md:pr-2">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <OrderSummary />
        <NetProfit />
        <Activity />
        <Options />
        <RecentOrders />
        <Feedback />
      </div>
    </div>
  );
};

export default Dashboard;
