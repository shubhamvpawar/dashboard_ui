import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Feedback from "./Feedback";
import RecentOrders from "./RecentOrders";
import Options from "./Options";
import Activity from "./Activity";
import NetProfit from "./NetProfit";
import OrderSummary from "./OrderSummary";

const Dashboard = () => {
  //   const data = {
  //     labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  //     datasets: [
  //       {
  //         label: "Activity",
  //         data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30, 35],
  //         backgroundColor: "rgba(75, 192, 192, 0.2)",
  //         borderColor: "rgba(75, 192, 192, 1)",
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  return (
    <div className="bg-black text-white pl-20 pr-2 pt-16 md:pl-20 md:pt-16 md:pr-2">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <div className="col-span-1 md:col-span-2 flex flex-wrap items-center justify-center">
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
        </div> */}
        <OrderSummary />

        {/*  */}

        {/* <div className="flex bg-gray-800 px-4 rounded-lg shadow-md col-span-1">
          <div className="w-3/5 flex flex-col justify-between py-4">
            <h2 className="text-xs mb-4">Net Profit</h2>
            <span className="text-2xl font-bold">$6759.25</span>
            <span className="text-green-600 font-semibold">^ 3%</span>
          </div>
          <div className="relative w-2/5 flex items-center justify-center">
            <svg className="h-56 w-56 max-w-xs max-h-xs" viewBox="0 0 256 256">
              <circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="25"
              />
              <circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke="#367588"
                strokeWidth="25"
                strokeDasharray="628"
                strokeDashoffset="188"
                transform="rotate(-110 128 128)"
              />
            </svg>

            <div className="absolute flex flex-col items-center justify-center">
              <span className="font-bold text-sm">70%</span>
              <span className="text-xs">Goal</span>
              <span className="text-xs">Completed</span>
            </div>
          </div>
        </div> */}
        <NetProfit />

        {/*  */}

        {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1 md:col-span-2">
          <h2 className="text-xl mb-4">Activity</h2>
          <Bar data={data} />
        </div> */}
        <Activity />

        {/*  */}

        {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col col-span-1">
          <div className="flex flex-1 items-center justify-between my-2">
            <div className="flex">
              <img
                className="w-8 rounded-full"
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KMNatDTacw0rBV4H2vRdrQ1iTxCTlsWO3w&s"
              ></img>
              Goals
            </div>
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-1 items-center justify-between my-2">
            <div className="flex">
              <img
                className="w-8 rounded-full"
                alt=""
                src="https://as2.ftcdn.net/v2/jpg/03/17/42/51/1000_F_317425157_AXItcDxqfqoXIPjqm21c8kPyKtMPWKrW.jpg"
              ></img>
              Popular Dishes
            </div>
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-1 items-center justify-between my-2">
            <div className="flex">
              <img
                className="w-8 rounded-full"
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTek9n1E-CQrVRSHuHphBC3qrh13ShDEGDUQA&s"
              ></img>
              Menus
            </div>
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
        </div> */}
        <Options />

        {/*  */}

        {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1 md:col-span-2 overflow-x-auto">
          <h2 className="text-xl mb-4">Recent Orders</h2>
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="p-2 border-b">Customer</th>
                <th className="p-2 border-b">Order No.</th>
                <th className="p-2 border-b">Amount</th>
                <th className="p-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b flex">
                  <img
                    className="w-6 rounded-2xl mx-1"
                    alt="user profile"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
                  ></img>
                  Wade Warren
                </td>
                <td className="p-2 border-b">15478256</td>
                <td className="p-2 border-b">$124.00</td>
                <td className="p-2 border-b text-green-400">
                  <span className="border rounded-2xl bg-green-500 bg-opacity-30 p-1 font-semibold">
                    Delivered
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b flex">
                  <img
                    className="w-6 rounded-2xl mx-1"
                    alt="user profile"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
                  ></img>
                  Jade Cooper
                </td>
                <td className="p-2 border-b">48965786</td>
                <td className="p-2 border-b">$365.02</td>
                <td className="p-2 border-b text-green-400">
                  <span className="border rounded-2xl bg-green-500 bg-opacity-30 p-1 font-semibold">
                    Delivered
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b flex">
                  <img
                    className="w-6 rounded-2xl mx-1"
                    alt="user profile"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
                  ></img>
                  Guy Hawkins
                </td>
                <td className="p-2 border-b">78958215</td>
                <td className="p-2 border-b">$45.88</td>
                <td className="p-2 border-b text-red-400">
                  <span className="border rounded-2xl bg-red-500 bg-opacity-30 p-1 font-semibold">
                    Cancelled
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b flex">
                  <img
                    className="w-6 rounded-2xl mx-1"
                    alt="user profile"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
                  ></img>
                  Kristin Watson
                </td>
                <td className="p-2 border-b">20965732</td>
                <td className="p-2 border-b">$65.00</td>
                <td className="p-2 border-b text-red-400">
                  <span className="border rounded-2xl bg-red-500 bg-opacity-30 p-1 font-semibold">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b flex">
                  <img
                    className="w-6 rounded-2xl mx-1"
                    alt="user profile"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
                  ></img>
                  Cody Fisher
                </td>
                <td className="p-2 border-b">95715620</td>
                <td className="p-2 border-b">$545.00</td>
                <td className="p-2 border-b text-green-400">
                  <span className="border rounded-2xl bg-green-500 bg-opacity-30 p-1 font-semibold">
                    Delivered
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b flex">
                  <img
                    className="w-6 rounded-2xl mx-1"
                    alt="user profile"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
                  ></img>
                  Savannah Nguyen
                </td>
                <td className="p-2 border-b">78514568</td>
                <td className="p-2 border-b">$128.20</td>
                <td className="p-2 border-b text-green-400">
                  <span className="border rounded-2xl bg-green-500 bg-opacity-30 p-1 font-semibold">
                    Delivered
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
        <RecentOrders />

        {/*  */}

        {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1">
          <h2 className="text-xl mb-4">Customer's Feedback</h2>
          <div className="border-b-2 border-gray-400">
            <h3 className="font-bold">Jenny Wilson</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text-sm">
              The food was excellent and so was the service. I has the mushroom
              risotto with scallops which was awesome. I had a burger over
              greens (glutten-free) which was also very good. They were very
              conscientious about gluten allergies.
            </p>
          </div>
          <br></br>
          <div className="border-b-2 border-gray-400">
            <h3 className="font-bold">Dianne Russel</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text-sm">
              We enjoyed the Eggs Benedict served on homemade focaccia bread and
              hot coffee. Perfect service.
            </p>
          </div>
          <br></br>

          <div className="">
            <h3 className="font-bold">Devon Lane</h3>
            <p>⭐⭐⭐⭐</p>
            <p className="text-sm">
              Normally wings are wings but theirs are lean meaty and tender and
              ...
            </p>
          </div>
        </div> */}
        <Feedback />
      </div>
    </div>
  );
};

export default Dashboard;
