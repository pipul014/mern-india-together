import React from "react";
import AdvertiseForm from "./AdvertiseForm";
import AdvertiseJoin from "./AdvertiseJoin";

const AdvertiseWithUsFormMain = () => {
  return (
    <>
      <div className="mt-30">
        <div className="text-center">
          <h1 className="text-5xl font-semibold my-10">Advertise With Us</h1>
          <p className="text-xl text-gray-700 mb-6">
            Let’s connect your brand with travellers. <br />
            Wherever they are. We’d love to help you get there.
          </p>
        </div>
        <AdvertiseForm />
        <AdvertiseJoin />
      </div>
    </>
  );
};

export default AdvertiseWithUsFormMain;
