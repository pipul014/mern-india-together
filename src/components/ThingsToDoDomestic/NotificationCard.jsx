import React, { useState } from "react";

const NotificationCard = () => {
  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <div className="bg-[#DC3545] text-center text-white py-6 px-3.5 border-4 border-yellow-400 mx-auto shadow-lg">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mt-3">Are You Travelling</h2>
      <h1 className="text-[38px] font-bold text-yellow-300">MADURAI</h1>
      <h2 className="text-2xl font-semibold">Next</h2>

      {/* Description */}
      <p className="text-md text-gray-100 mt-6 px-5 leading-relaxed">
        Unlock early access to top hotel, holiday, and entertainment offers –
        all straight to your inbox.
      </p>

      {/* Push Notification Toggle */}
      <div className="flex items-center justify-center mt-5 space-x-2 bg-[#c32737e6] rounded-full mx-11">
        <button
          onClick={() => setPushEnabled(!pushEnabled)}
          className={`w-10 h-5 flex items-center rounded-full p-1 transition-all duration-300 ${
            pushEnabled ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              pushEnabled ? "translate-x-4" : "translate-x-0"
            }`}
          ></div>
        </button>
        <span className="text-sm font-semibold pl-2 py-1 ">
          Push Notifications
        </span>
      </div>

      {/* Email Input */}
      <div className="mt-6 text-start">
        <p>Email Address</p>
        <div className="flex gap-1.5">
          <input
            type="email"
            placeholder="Enter email address"
            className="px-3 w-[60%] py-2 mt-2 text-[14px] bg-white text-black placeholder-gray-400 focus:outline-none "
          />
          <button className="w-[50%] bg-[#FEE233] text-[15px] mt-2 text-black font-semibold py-2 rounded-r hover:bg-yellow-500 transition-colors">
            START SAVING
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
