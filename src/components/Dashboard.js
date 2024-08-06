import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Activity",
        data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30, 35],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Net Profit</h2>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Activity</h2>
        <Bar data={data} />
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col">
        <div className="flex flex-1 items-center justify-between my-2">
          <div className="flex">
            <img
              className="w-8 rounded-full"
              alt=""
              src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
            ></img>
            Goals
          </div>
          <div></div> <span> -- </span>
        </div>
        <div className="flex flex-1 items-center justify-between my-2">
          <div className="flex">
            <img
              className="w-8 rounded-full"
              alt=""
              src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
            ></img>
            Popular Dishes
          </div>
          <div></div> <span> -- </span>
        </div>
        <div className="flex flex-1 items-center justify-between my-2">
          <div className="flex">
            <img
              className="w-8 rounded-full"
              alt=""
              src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
            ></img>
            Menus
          </div>
          <div></div> <span> -- </span>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Recent Orders</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2 border-b">Customer</th>
              <th className="p-2 border-b">Order No.</th>
              <th className="p-2 border-b">Amount</th>
              <th className="p-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your order rows here */}
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
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Customer's Feedback</h2>
        {/* Add feedback content here */}
        <div>
          <h3 className="font-bold">Jenny Wilson</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            The food was excellent and so was the service. I has the mushroom
            risotto with scallops which was awesome. I had a burger over greens
            (glutten-free) which was also very good. They were very
            conscientious about gluten allergies.
          </p>
        </div>
        <br></br>
        <div>
          <h3 className="font-bold">Dianne Russel</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            We enjoyed the Eggs Benedict served on homemade focaccia bread and
            hot coffee. Perfect service.
          </p>
        </div>
        <br></br>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Devon Lane</h3>
            <p>⭐⭐⭐⭐</p>
            <p>
              Normally wings are wings but theirs are lean meaty and tender and
              ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
