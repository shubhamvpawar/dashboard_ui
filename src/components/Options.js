import React from "react";

const Options = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col col-span-1">
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
    </div>
  );
};

export default Options;
