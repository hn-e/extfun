import AnimatedTitle from "./AnimatedTitle";
import DownloadButtons from "./DownloadButtons";

const Download = () => {
  return (
    <div id="download" className="w-full h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 flex items-center justify-center">
      <div className="text-center p-8">

        <AnimatedTitle
          title="Believe Honey- its all free.."
          className=" !md:text-[6.2rem] w-full  !text-5xl !font-black !leading-[.9]"
        />

        <div className="flex flex-col mt-8 items-center">
          <DownloadButtons />
        </div>

        <p className="font-general text-sm uppercase mt-8">
          You will probably see honey on the app...
        </p>
        
      </div>
    </div>
  );
};

export default Download;
