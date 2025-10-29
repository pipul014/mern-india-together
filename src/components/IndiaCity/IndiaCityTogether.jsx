import React from "react";

const IndiaCountryTogether = () => {
  return (
    <>
      <div className="bg-[#60A763] p-24 text-white flex justify-between gap-20 my-24">
        <div className="w-[35%]">
          <h1 className="text-[70px] font-extrabold">Together</h1>
          <p className="text-[20px]">Membership. It’s Free!</p>
          <p>
            Unlock exclusive hotel, holiday, airline & entertainment
            deals-delivered straight to your inbox.
          </p>
        </div>
        <div className="w-[65%]">
          <p className="text-[16px]">Email Address*</p>
          <input
            type="text"
            placeholder="Enter email address"
            className="p-4 block bg-white text-black mt-2 w-[60%]"
          />
          <button className="bg-black px-16 py-4 mt-10">JOIN US</button>
        </div>
      </div>
    </>
  );
};

export default IndiaCountryTogether;
