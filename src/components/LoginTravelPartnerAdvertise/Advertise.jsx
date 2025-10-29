import AdvertiseBrand from "./AdvertiseBrand";
import AdvertiseBreadcrumbs from "./AdvertiseBreadcrumbs";
import AdvertiseTab from "./AdvertiseTab";

const Advertise = () => {
  return (
    <>
      <div className="mb-30">
        <div>
          <h1 className="text-4xl font-bold my-10">
            Tour operators, Hoteliers & Travel Partners
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Looking to grow your market share, connect with genuine travelers
            and increase your brand visibility. 
          </p>
          <button className="bg-[#DC3545] text-xl uppercase text-white font-semibold px-8 py-3 cursor-pointer">
            Get Started
          </button>
        </div>
        <AdvertiseBrand />
        <div>
          <h1 className="text-3xl font-bold my-5">How we help you</h1>
          <p className="text-lg text-gray-700 mb-14">
            Together in India is a curated open marketplace that connects a
            diverse range of travel partners—including multiday tour operators,
            airlines, hotels, restaurants, retail outlets, fashion boutiques,
            and entertainment establishments—with travelers seeking authentic
            Indian experiences. Serving as a dedicated destination guide and
            search engine, the platform focuses exclusively on multiday tours,
            iconic restaurants, and genuine local shopping. By listing your
            business, you gain access to a high-intent audience actively
            planning their travel, along with the opportunity to grow brand
            visibility, attract new customers, and connect directly with
            corporate clients across India. With rich, authentic
            content—featuring over 450 Indian destinations through compelling
            images and videos—Together in India helps you drive qualified leads,
            elevate brand perception, and showcase your offerings through
            high-visibility listings and promotional features. 
          </p>
          <h1 className="text-3xl font-bold my-5">We work with</h1>
          <p className="text-lg text-gray-700 mb-36">
            Together in India collaborates with companies that promote travel
            both within and outside of India, offering same-day and multiday
            tours, airline services, iconic restaurants, shopping outlets, and a
            wide range of boutiques featuring artisan-made Indian products. We
            also partner with ticketing agents and licensed travel guides to
            deliver authentic and enriching travel experiences. 
          </p>
        </div>
        <AdvertiseTab />
        <div className="w-[50%]">
          <h1 className="text-4xl font-semibold my-10">Let’s Work Together</h1>
          <p className="text-xl text-gray-700 mb-10">
            Connect with Together In India Sales team using the link below & top
            into a world of travellers through flexible options. 
          </p>
          <div className="flex items-center gap-16">
            <div>
              <p className="mb-2">New Business</p>
              <button className="bg-[#DC3545] text-lg uppercase text-white px-8 py-3.5 cursor-pointer">
                SEND ENQUIRY
              </button>
            </div>
            <div>
              <p className="mb-2">Existing Business</p>
              <button className="bg-[#DC3545] text-lg uppercase text-white px-8 py-3.5 cursor-pointer">
                SEND ENQUIRY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertise;
