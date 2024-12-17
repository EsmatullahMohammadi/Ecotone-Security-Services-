import bg from "../../assets/images/security 1.jpg";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full flex items-center justify-center relative h-screen bg-cover bg-center"
    >
      <div className="flex flex-col lg:items-start items-center lg:px-0 px-12">
        <div className="text-center">
          <h1 className="text-white font-semibold font-arial lg:text-[100px] text-[45px] lg:leading-[140px] tracking-wide">
            Ecotone Security Services
          </h1>
          <p className="text-white font-light font-arial text-lg lg:text-xl mt-4 lg:px-32 px-8 py-2  text-center ">
            With reliable and trusted security solutions, we prioritize the protection of your home, business, and assets. Our experienced and dedicated team is available 24/7 to safeguard what matters most to you, ensuring peace of mind and security at all times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

