const DownloadButtons = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <a
        href="https://play.google.com/store/apps/details?id=com.pro.nubpack"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-base sm:text-xl font-semibold text-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="Android" className="w-6" />
        <span className="ml-4 whitespace-nowrap">Download for Android</span>
      </a>

      <a
        href="https://apps.apple.com/us/app/extrowurts/id6746046462"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-base sm:text-xl font-semibold text-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/5977/5977575.png" alt="iOS" className="w-6" />
        <span className="ml-4 whitespace-nowrap">Download for iOS</span>
      </a>
    </div>
  );
};

export default DownloadButtons;
