// export default function MembershipCTA() {
//   return (
//     <section className="bg-red-600 px-6 sm:px-8 md:px-12 py-10 md:py-12 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-16 w-full">
//       {/* Text Column */}
//       <div className="flex flex-col gap-3 sm:gap-4 lg:w-1/2 text-center lg:text-left">
//         <h3 className="text-white text-base sm:text-lg font-semibold">
//           Become a Member, It’s Free!
//         </h3>
//         <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug sm:leading-tight">
//           Book Directly, Earn Benefits.
//         </h2>
//         <div className="w-6 h-1 bg-white mx-auto lg:mx-0 mt-2"></div>
//         <p className="text-white text-sm sm:text-base font-medium mt-2">
//           As a member also earn & redeem points on selective bookings.
//         </p>
//         <p className="text-white text-sm sm:text-base font-normal">
//           Save Big! With our exclusive hotel, holiday, and entertainment offers
//           — all straight to your inbox.
//         </p>
//       </div>

//       {/* Form Column */}
//       <div className="flex flex-col gap-4 lg:w-1/2 w-full max-w-lg">
//         <p className="text-white text-sm sm:text-base font-medium text-center lg:text-left">
//           Subscribe to become a member.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
//           <input
//             type="email"
//             placeholder="Enter your email address..."
//             className="flex-1 px-4 py-3 sm:py-4 border border-white bg-transparent text-white placeholder-white outline-none text-sm sm:text-base rounded-md sm:rounded-none"
//           />
//           <button className="px-6 py-3 sm:py-4 bg-red-700 border border-white text-white font-bold uppercase text-sm sm:text-base hover:bg-red-800 transition-colors rounded-md sm:rounded-none">
//             Confirm
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { React, useState } from "react";
import plusIcon from "../assets/plusIcon.svg";
import toast from "react-hot-toast";

export default function MembershipCTA() {
  const [email, setEmail] = useState("");

  const handleConfirm = () => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Email cannot be empty!");
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
    } else {
      toast.success("Successfully subscribed!");
      setEmail(""); // Clear input
    }
  };

  return (
    <div className="inline-flex items-end justify-start gap-[70px] p-7 bg-[#DC3545] w-full mt-16">
      {/* Left Column */}
      <div className="inline-flex flex-col items-start justify-start gap-2.5">
        <div className="text-white text-[20px] font-semibold font-['Roboto'] break-words">
          Become a Member, It’s Free!
        </div>
        <div className="text-white text-[36px] font-bold font-['Roboto'] leading-[48px] break-words">
          Book Directly, Earn Benefits.
        </div>
        <img src={plusIcon} alt="decorative" className="w-4 h-4 object-cover" />
        <div className="w-[574px] text-white text-[18px] font-medium font-['Roboto'] leading-[23.4px] break-words">
          As a member also earn & redeem points on selective bookings.
        </div>
        <div className="w-[574px] text-white text-[18px] font-normal font-['Roboto'] leading-[23.4px] break-words">
          Save Big! With our exclusive hotel, holiday, and entertainment <br />
          offers-all straight to your in-box.
        </div>
      </div>

      {/* Right Column */}
      <div className="inline-flex flex-col items-start justify-start gap-2.5 w-[571px]">
        <div className="text-white text-[16px] font-medium font-['Roboto'] leading-[20.8px] break-words">
          Subscribe to become a member.
        </div>

        {/* Input + Button Row */}
        <div className="inline-flex items-center justify-start gap-2.5 w-full">
          {/* Input */}
          {/* <div className="relative w-[450px]">
            <input
              type="email"
              placeholder="Enter your email address...."
              className="w-full h-[51px] px-5 py-4 text-white text-[16px] font-['Roboto'] font-normal bg-transparent outline outline-white outline-offset-[-1px] placeholder-white placeholder-opacity-80"
            />
          </div>

         
          <div className="relative h-[50px] flex items-center justify-center px-5 py-4 gap-2 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),#DC3545] outline outline-white outline-offset-[-1px] cursor-pointer ">
            <div className="absolute left-0 top-0 w-[111px] h-[50px]" />
            <div className="text-white text-[16px] font-bold font-['Roboto'] uppercase text-center break-words ">
              Confirm
            </div>
          </div> */}

          <div className="relative w-[450px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address...."
              className="w-full h-[51px] px-5 py-4 text-white text-[16px] font-['Roboto'] font-normal bg-transparent outline outline-white outline-offset-[-1px] placeholder-white placeholder-opacity-80"
            />
          </div>

          {/* Button */}
          <div
            onClick={handleConfirm}
            className="relative h-[50px] flex items-center justify-center px-5 py-4 gap-2 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),#DC3545] outline outline-white outline-offset-[-1px] cursor-pointer"
          >
            <div className="absolute left-0 top-0 w-[111px] h-[50px]" />
            <div className="text-white text-[16px] font-bold font-['Roboto'] uppercase text-center break-words">
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
