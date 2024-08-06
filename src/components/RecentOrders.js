import React from "react";

const RecentOrders = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1 md:col-span-2 overflow-x-auto">
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
    </div>
  );
};

export default RecentOrders;
