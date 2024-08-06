import React from "react";

const OrderSummary = () => {
  return (
    <div className="col-span-1 md:col-span-2 flex flex-wrap items-center justify-center">
      <div className="flex-1 m-4 md:ml-0 bg-gray-800 p-4 rounded-lg shadow-md">
        <div>
          <img
            className="w-8 h-8 rounded-lg"
            alt=""
            src="https://www.shutterstock.com/shutterstock/videos/1105094815/thumb/7.jpg?ip=x480"
          ></img>
          <span className="text-xs">Total Orders</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">75</span>
          <span className="text-green-600 font-semibold">⬆️3%</span>
        </div>
      </div>
      <div className="flex-1 m-4 bg-gray-800 p-4 rounded-lg shadow-md">
        <div>
          <img
            className="w-8 h-8 rounded-lg"
            alt=""
            src="https://www.shutterstock.com/shutterstock/videos/1105094815/thumb/7.jpg?ip=x480"
          ></img>
          <span className="text-xs">Total Delivered</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">70</span>
          <span className="text-red-600 font-semibold">⬇️3%</span>
        </div>
      </div>
      <div className="flex-1 m-4 bg-gray-800 p-4 rounded-lg shadow-md">
        <div>
          <img
            className="w-8 h-8 rounded-lg"
            alt=""
            src="https://www.shutterstock.com/shutterstock/videos/1105094815/thumb/7.jpg?ip=x480"
          ></img>
          <span className="text-xs">Total Cancelled</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">05</span>
          <span className="text-green-600 font-semibold">⬆️3%</span>
        </div>
      </div>
      <div className="flex-1 m-4 bg-gray-800 p-4 rounded-lg shadow-md">
        <div>
          <img
            className="w-8 h-8 rounded-lg"
            alt=""
            src="https://www.shutterstock.com/shutterstock/videos/1105094815/thumb/7.jpg?ip=x480"
          ></img>
          <span className="text-xs">Total Revenue</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">$12k</span>
          <span className="text-red-600 font-semibold">⬇️3%</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
