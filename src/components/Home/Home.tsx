import bg from "../../assets/images/security 1.jpg";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full flex items-center justify-center relative h-screen bg-cover bg-center"
    >
      <div className="flex flex-col lg:items-start items-center lg:px-0 px-12">
        <div className="text-white font-semibold font-arial lg:text-[100px] text-[45px] lg:leading-[140px] tracking-wide text-center">
          Ecotone Security Services
        </div>
      </div>
    </div>
  );
};

export default Home;
