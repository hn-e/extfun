import AnimatedTitle from "./AnimatedTitle";

const Download = () => {
  return (
    <div id="download" className="w-full h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 flex items-center justify-center">
      <div className="text-center p-8">

        <AnimatedTitle
          title="Believe Honey- its all free.."
          className=" !md:text-[6.2rem] w-full  !text-5xl !font-black !leading-[.9]"
        />

        <div className="flex flex-col mt-8 items-center space-y-8">
          {/* Android Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.pro.nubpack"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-xl font-semibold text-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="Android" className="w-6" />
            <span className="ml-4">Download for Android</span>
          </a>

          {/* iOS Button */}
          <a
            href="https://apps.apple.com/us/app/extrowurts/id6746046462"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-xl font-semibold text-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/5977/5977575.png" alt="iOS" className="w-6" />
            <span className="ml-4">Download for iOS</span>
          </a>
        </div>

        <p className="font-general text-sm uppercase mt-8">
          You will probably see honey on the app...
        </p>
        
      </div>
    </div>
  );
};

export default Download;
