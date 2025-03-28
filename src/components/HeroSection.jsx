import Calculator from "./Calculator";
import vectorHome from "../assets/vector-home.webp"; // Make sure this path is correct

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${vectorHome})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side Content */}
        <div className="max-w-lg  p-6 rounded-lg text-white">
          <p className="font-bold text-sm ">2M+ Users</p>
          <h1 className="text-5xl font-bold leading-tight mt-2">
            Fast <br /> Safe And <br /> Secure
          </h1>
          <p className=" mt-2">
            Send money worldwide and save 4x more on transfers.
          </p>
        </div>

        {/* Right Side - Calculator */}
        <div className="w-full md:w-1/3 mt-10 md:mt-0">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
