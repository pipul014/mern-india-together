// import React, { useState } from "react";

// const AdvertiseForm = () => {
// const [emailPopup, setEmailPopup] = useState(false);
//   const [businessPopup, setBusinessPopup] = useState(false);
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [businessType, setBusinessType] = useState("");
//   const [mobileError, setMobileError] = useState("");

//   const handleEmailVerify = () => {
//     if (email.includes("@")) {
//       setEmailPopup(true);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (value.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//     }
//   };

//   const handleBusinessSelect = (type) => {
//     setBusinessType(type);
//     setBusinessPopup(false);
//   };

//   const handleMobileChange = (e) => {
//     const value = e.target.value;
//     if (!/^[0-9]*$/.test(value)) {
//       setMobileError("Invalid mobile number");
//     } else {
//       setMobileError("");
//     }
//   };

//   return (
//     <>
//         <div className="max-w-[60%] mx-auto p-6  mt-10">
//       <h2 className="text-lg font-semibold mb-2 text-gray-800">
//         Your Account Details:
//       </h2>
//       <p className="text-sm text-gray-600 mb-6">
//         Fields with an asterisk (<span className="text-[#DC3545]">*</span>) are
//         required
//       </p>

//       {/* First Name & Last Name */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
//         <div className="flex items-center justify-between">
//           <label className= text-gray-700">
//             First Name<span className="text-[#DC3545]">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="First name"
//             className="mt-1 w-[60%] border-2 border-gray-500 px-5 py-3"
//           />
//         </div>
//         <div className="flex items-center justify-end gap-5">
//           <label className= text-gray-700">
//             Last Name<span className="text-[#DC3545]">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Last name"
//             className="w-[60%] border-2 border-gray-500 px-5 py-3 mt-1"
//           />
//         </div>
//       </div>

//       {/* Mobile Number */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//         <div className="flex items-center">
//           <label className= text-gray-700">
//             Mobile No<span className="text-[#DC3545]">*</span>
//           </label>
//           <div className="flex items-center gap-2">
//             <select className="border border-gray-300 px-3 py-2 w-24 mt-1">
//               <option>+91</option>
//               <option>+1</option>
//               <option>+44</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Enter your mobile no."
//               className="flex-1 border border-gray-300 px-3 py-2 mt-1"
//               onChange={handleMobileChange}
//             />
//           </div>
//           {mobileError && (
//             <p className="text-[#DC3545] text-sm mt-1">{mobileError}</p>
//           )}
//         </div>
//       </div>

//       {/* Email Address */}
//       <div className="mb-6">
//         <label className= text-gray-700">
//           Email Address<span className="text-[#DC3545]">*</span>
//         </label>
//         <div className="flex mt-1">
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="flex-1 border border-gray-300 px-3 py-2"
//           />
//           <button
//             type="button"
//             onClick={handleEmailVerify}
//             className="bg-red-600 text-white px-4 py-2 font-medium"
//           >
//             VERIFY EMAIL
//           </button>
//         </div>
//         <p className="text-gray-500 text-sm mt-1">
//           Kindly provide your official business email address for OTP
//           verification and to ensure seamless correspondence.
//         </p>
//       </div>

//       {/* Business Type */}
//       <div className="mb-6">
//         <label className= text-gray-700">
//           Business Type<span className="text-[#DC3545]">*</span>
//         </label>
//         <div
//           className="border border-gray-300 px-3 py-2 mt-1 flex justify-between items-center cursor-pointer"
//           onClick={() => setBusinessPopup(true)}
//         >
//           {businessType || "Select your business type"}
//           <span>▼</span>
//         </div>
//       </div>

//       {/* Company Name */}
//       <div className="mb-6">
//         <label className= text-gray-700">
//           Company Name<span className="text-[#DC3545]">*</span>
//         </label>
//         <input
//           type="text"
//           placeholder="e.g. Abc Travels Pvt. Ltd."
//           className="w-full border border-gray-300 px-3 py-2 mt-1"
//         />
//       </div>

//       {/* Country / State */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div>
//           <label className= text-gray-700">
//             Choose Country<span className="text-[#DC3545]">*</span>
//           </label>
//           <div className="border border-gray-300 px-3 py-2 mt-1 flex items-center gap-2">
//             🇮🇳 <span>India</span>
//           </div>
//         </div>
//         <div>
//           <label className= text-gray-700">
//             Enter State<span className="text-[#DC3545]">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your state"
//             className="w-full border border-gray-300 px-3 py-2 mt-1"
//           />
//         </div>
//       </div>

//       {/* City */}
//       <div className="mb-6">
//         <label className= text-gray-700">City / Village</label>
//         <input
//           type="text"
//           placeholder="Enter your city/village"
//           className="w-full border border-gray-300 px-3 py-2 mt-1"
//         />
//       </div>

//       {/* Website */}
//       <div className="mb-6">
//         <label className= text-gray-700">Website URL</label>
//         <input
//           type="text"
//           placeholder="e.g. www.abctravel.com"
//           className="w-full border border-gray-300 px-3 py-2 mt-1"
//         />
//       </div>

//       {/* Submit Button */}
//       <button className="bg-red-600 text-white font-semibold px-10 py-2 mt-4">
//         SUBMIT
//       </button>

//       {/* Email Verification Popup */}
//       {emailPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-gray-100 p-6 w-[400px]">
//             <p className="mb-3 text-gray-700">{email}</p>
//             <p className="text-sm text-gray-600 mb-4">
//               Kindly provide your official business email address for OTP
//               verification and to ensure seamless correspondence.
//             </p>
//             <div className="flex justify-between gap-2 mb-4">
//               {otp.map((num, index) => (
//                 <input
//                   key={index}
//                   maxLength={1}
//                   className="border w-10 text-center py-2 text-lg"
//                   value={num}
//                   onChange={(e) =>
//                     handleOtpChange(e.target.value, index)
//                   }
//                 />
//               ))}
//             </div>
//             <p className="text-sm text-gray-600 mb-2">
//               Enter the OTP we sent to <b>{email}</b>. <br />
//               Check junk mail if it’s not in your inbox.
//             </p>
//             <div className="flex justify-between items-center mt-4">
//               <button className="bg-red-600 text-white px-4 py-2">
//                 VERIFY OTP
//               </button>
//               <button
//                 onClick={() => setEmailPopup(false)}
//                 className="text-black font-semibold"
//               >
//                 CLOSE
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Business Type Popup */}
//       {businessPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <div className="bg-white border border-gray-600 w-[350px]">
//             <div className="border-b border-gray-300 px-4 py-3 font-medium">
//               Select your business type
//             </div>
//             {["Tour Operator", "Airlines", "Hotels", "Restaurants", "Retail Stores"].map(
//               (type) => (
//                 <div
//                   key={type}
//                   onClick={() => handleBusinessSelect(type)}
//                   className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
//                 >
//                   {type}
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//     </>
//   )
// }

// export default AdvertiseForm

import { TriangleAlert } from "lucide-react";
import React, { useState } from "react";

const AdvertiseForm = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [emailPopup, setEmailPopup] = useState(false);
  const [businessPopup, setBusinessPopup] = useState(false);
  const [businessType, setBusinessType] = useState("");
  const [mobileError, setMobileError] = useState("");

  const handleEmailVerify = () => {
    if (email.trim() !== "" && email.includes("@")) setEmailPopup(true);
  };

  const handleOtpChange = (value, index) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (!/^[0-9]*$/.test(value)) {
      setMobileError("Invalid mobile number");
    } else {
      setMobileError("");
    }
  };

  const handleBusinessSelect = (type) => {
    setBusinessType(type);
    setBusinessPopup(false);
  };

  return (
    <div className="max-w-[60%] mx-auto mt-10 ">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">
        Your Account Details:
      </h2>
      <p className="text-sm text-gray-600 mb-10">
        Fields with an asterisk (<span className="text-[#DC3545]">*</span>) are
        required
      </p>

      {/* Form */}
      <form className="space-y-5">
        {/* First + Last Name */}
        <div className="grid grid-cols-[160px_1fr_1fr] gap-4 items-center">
          <label className="text-sm text-gray-700 ">
            First Name<span className="text-[#DC3545]">*</span>
          </label>
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-600 px-3 py-3 mb-2"
          />
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700 ">
              Last Name<span className="text-[#DC3545]">*</span>
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-600 px-3 py-3 flex-1 mb-2"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-[160px_1fr] items-center gap-4 mb-16">
          <label className="text-sm text-gray-700 ">
            Mobile No<span className="text-[#DC3545]">*</span>
          </label>
          <div className="relative">
            <div className="flex items-center gap-2 ">
              <select className="border border-gray-600 px-3 py-3 w-24">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="text"
                placeholder="Enter your mobile no."
                onChange={handleMobileChange}
                className="border border-gray-600 px-3 py-3 flex-1"
              />
            </div>
            {mobileError && (
              <p className="text-[#DC3545] text-sm mt-1 flex items-center gap-2 right-0 -bottom-7 justify-end absolute">
                <TriangleAlert />
                {mobileError}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="grid grid-cols-[160px_1fr] items-start gap-4">
          <label className="text-sm  text-gray-700 mt-4">
            Email Address<span className="text-[#DC3545]">*</span>
          </label>
          <div className="w-full">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-gray-600 px-3 py-3"
              />
              <button
                type="button"
                onClick={handleEmailVerify}
                className="bg-[#DC3545] text-white px-6 py-3 cursor-pointer"
              >
                VERIFY EMAIL
              </button>
            </div>
            <p className="text-gray-800 text-sm mt-2 mb-5">
              Kindly provide your official business email address for OTP
              verification and <br /> to ensure seamless correspondence.
            </p>
          </div>
        </div>

        {/* Business Type */}
        <div className="grid grid-cols-[160px_1fr] items-center gap-4">
          <label className="text-sm text-gray-700 ">
            Business Type<span className="text-[#DC3545]">*</span>
          </label>
          <div
            className="border border-gray-600 px-3 py-3 mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => setBusinessPopup(true)}
          >
            {businessType || "Select your business type"}
            <span>▼</span>
          </div>
        </div>

        {/* Company Name */}
        <div className="grid grid-cols-[160px_1fr] items-center gap-4">
          <label className="text-sm text-gray-700 ">
            Company Name<span className="text-[#DC3545]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Abc Travels Pvt. Ltd."
            className="border border-gray-600 px-3 py-3 w-full mb-2"
          />
        </div>

        {/* Country + State */}
        {/* <div className="grid grid-cols-[160px_1fr] items-center gap-4">
          <label className="text-sm text-gray-700 ">
            Choose Country<span className="text-[#DC3545]">*</span>
          </label>
          <div className="flex gap-4">
            <div className=" flex items-center border border-gray-600 px-3 py-2 w-[60%]">
              🇮🇳 <span className="ml-2">India</span>
            </div>
            <div className="flex items-center gap-2 w-full">
              <label className="text-sm text-gray-700 block ">
                Enter State<span className="text-[#DC3545]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your state"
                className="border border-gray-600 px-3 py-2 mt-1 flex-1"
              />
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-[160px_1fr_1fr] items-center gap-4">
          <label className="text-sm text-gray-700 ">
            Choose Country<span className="text-[#DC3545]">*</span>
          </label>
          {/* <input
            type=""
            placeholder="First name"
            className="border border-gray-600 px-3 py-2"
          /> */}
          <div
            className="border border-gray-600 px-3 py-3 mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => setBusinessPopup(true)}
          >
            {businessType || "India"}
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700 ">
              Enter State<span className="text-[#DC3545]">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your state"
              className="border border-gray-600 px-3 py-3 mb-2 flex-1"
            />
          </div>
        </div>

        {/* City */}
        <div className="grid grid-cols-[160px_1fr] items-center gap-4">
          <label className="text-sm text-gray-700 ">
            City / Village<span className="text-[#DC3545]">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your city/village"
            className="border border-gray-600 px-3 py-3 w-full mb-2"
          />
        </div>

        {/* Website */}
        <div className="grid grid-cols-[160px_1fr] items-center gap-4">
          <label className="text-sm text-gray-700 ">Website URL</label>
          <input
            type="text"
            placeholder="e.g. www.abctravel.com"
            className="border border-gray-600 px-3 py-3 mb-2 w-full"
          />
        </div>
        {/* Submit
        <div className="flex ml- mt-16 ">
          <button className="bg-[#DC3545] text-white font-semibold px-14 py-3">
            SUBMIT
          </button>
        </div> */}

        {/* Submit Button aligned with inputs */}
        <div className="grid grid-cols-[160px_1fr] items-center gap-4 mt-10">
          {/* Empty label space to align the button */}
          <div></div>
          <button className="bg-[#DC3545] cursor-pointer text-white font-semibold px-14 py-3 w-fit">
            SUBMIT
          </button>
        </div>
      </form>

      {/* Email Popup */}
      {emailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-100 p-6 w-[400px]">
            <p className="mb-3 text-gray-700">{email}</p>
            <p className="text-sm text-gray-600 mb-4">
              Kindly provide your official business email address for OTP
              verification and to ensure seamless correspondence.
            </p>
            <div className="flex justify-between gap-2 mb-4">
              {otp.map((num, index) => (
                <input
                  key={index}
                  maxLength={1}
                  value={num}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  className="border w-10 text-center py-2 text-lg"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Enter the OTP we sent to <b>{email}</b>. Check junk mail if it’s
              not in your inbox.
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-red-600 text-white px-4 py-2">
                VERIFY OTP
              </button>
              <button
                onClick={() => setEmailPopup(false)}
                className="text-black font-semibold"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Business Type Popup */}
      {/* {businessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white border border-gray-600 w-[350px]">
            <div className="border-b border-gray-300 px-4 py-3 font-medium">
              Select your business type
            </div>
            {["Tour Operator", "Airlines", "Hotels", "Restaurants", "Retail Stores"].map(
              (type) => (
                <div
                  key={type}
                  onClick={() => handleBusinessSelect(type)}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  {type}
                </div>
              )
            )}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AdvertiseForm;
