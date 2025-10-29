import React from "react";

const GuideRegistrationForm = () => {
  return (
    <form className="flex flex-col gap-16 w-full max-w-[900px] mx-auto font-roboto text-black mt-32 pb-4">
      {/* Heading */}
      <h1 className="text-center font-bold text-2xl mb-2">
        Tour Guide Registration
      </h1>
      <p className="text-[12px] text-start ">
        Fields with <span className="text-red-500">*</span> are required
      </p>

      {/* Full Name */}
      <section className="flex flex-col gap-5">
        <h3 className="text-lg font-medium">Full Name</h3>
        <div className="flex  items-start gap-10">
          <div className="flex flex-col item-center gap-2">
            <label className="text-sm">
              First Name<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              type="text"
              placeholder="First name"
              className="border border-black w-[230px] h-[50px] px-4 text-sm text-gray-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm">
              Last Name<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="border border-black w-[250px] h-[50px] px-4 text-sm text-gray-500"
            />
          </div>
        </div>
      </section>

      {/* License Details */}
      <section className="flex flex-col gap-5">
        <h3 className="text-lg font-medium">License Details</h3>

        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-sm">
              License No.<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              type="text"
              placeholder="0123456789"
              className="border border-black w-[230px] h-[50px] px-4 text-sm text-gray-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm">
              Place of Issue<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              type="text"
              placeholder="Delhi"
              className="border border-black w-[250px] h-[50px] px-4 text-sm text-gray-500"
            />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-sm">
              Date of Issue<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              type="text"
              placeholder="00/00/0000"
              className="border border-black w-[230px] h-[50px] px-4 text-sm text-gray-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm">
              Issuing Authority<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              type="text"
              placeholder="Tourism Department - Delhi"
              className="border border-black w-[250px] h-[50px] px-4 text-sm text-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="flex flex-col gap-5">
        <h3 className="text-lg font-medium">Contact Details</h3>

        <div className="flex flex-col gap-1">
          <label className="text-sm">
            Mobile No.<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter mobile no."
            className="border border-black w-[230px] h-[50px] px-4 text-sm text-gray-500"
          />
          <p className="flex items-center gap-2 text-xs text-red-500 mt-1">
            <img src="https://placehold.co/16x16" alt="error" />
            Invalid mobile number
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm">
            Email Address<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-black w-[632px] h-[50px] px-4 text-sm text-gray-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm">
            Postal Address<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="text"
            placeholder="Street 1"
            className="border border-black w-[632px] h-[50px] px-4 text-sm text-gray-500"
          />
          <input
            type="text"
            placeholder="Street 2"
            className="border border-black w-[632px] h-[50px] px-4 text-sm text-gray-500"
          />
        </div>
      </section>

      {/* Profession Details */}
      <section className="flex flex-col gap-5">
        <h3 className="text-lg font-medium">Profession Details</h3>

        <label className="text-base">
          Languages known other than Hindi
          <span className="text-red-500 text-lg">*</span>
        </label>
        <div className="flex flex-wrap gap-2 w-[632px]">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <input
              key={num}
              type="text"
              placeholder={`Language ${num}`}
              className="border border-black w-[204px] h-[50px] px-4 text-sm text-gray-500"
            />
          ))}
        </div>

        <label className="text-sm mt-4">
          Years of Experience<span className="text-red-500 text-lg">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. 2 years"
          className="border border-black w-[632px] h-[50px] px-4 text-sm text-gray-500"
        />

        <label className="text-sm mt-4">
          Expertise<span className="text-red-500 text-lg">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. arts, history"
          className="border border-black w-[632px] h-[50px] px-4 text-sm text-gray-500"
        />

        <label className="text-sm mt-4">
          Introduce Yourself<span className="text-red-500 text-lg">*</span>
        </label>
        <textarea
          rows="6"
          placeholder="e.g. abcdefghi..."
          className="border border-black w-[632px] p-4 text-sm text-gray-500"
        />
        <p className="text-xs text-right w-[632px]">characters: 0/300 words</p>
      </section>

      {/* Documentation */}
      <section className="flex flex-col gap-5">
        <h3 className="text-lg font-medium">Documentation</h3>

        {[
          {
            label: "Profile Photo",
            description:
              "Upload up to 4 high-quality images of activities and field visits for your profile page.",
          },
          { label: "Attach License", description: "No file chosen" },
          { label: "Attach Aadhar Card", description: "No file chosen" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-6 w-[800px]"
          >
            <span className="text-sm w-[120px]">{item.label}</span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="bg-[#E9E9E9] px-4 py-2 text-sm font-normal"
              >
                Choose File
              </button>
              <span className="text-sm">{item.description}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Terms & Submit */}
      <div className="flex items-start gap-3">
        <input type="checkbox" className="w-5 h-5 border border-black" />
        <p className="text-[16px]">
          I am a Government-Registered Tour Guide, fully accountable for all
          provided information. In the event of any discrepancies or
          misinformation, I will bear the responsibility, including any
          applicable penalties. By submitting, I agree to comply with and be
          bound by the{" "}
          <span className="font-bold underline">Terms & Conditions</span> &{" "}
          <span className="font-bold underline">Privacy Policy</span> of
          Together in India.
        </p>
      </div>

      <button
        type="submit"
        className="bg-[#DC3545] text-white font-bold uppercase w-[160px] h-[50px] text-[16px]"
      >
        Submit
      </button>
    </form>
  );
};

export default GuideRegistrationForm;
