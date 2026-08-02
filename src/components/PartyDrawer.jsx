import { motion, useAnimation } from "framer-motion";
import { TiCalendar, TiTime } from "react-icons/ti";
import scrt from '../assets/scrt.png';
import { useCallback } from "react";

const PartyDrawer = ({ party, onClose }) => {
  const controls = useAnimation();
  const prefs = JSON.parse(party.preferences || "{}");
  const label = prefs.girl ? "Girls Exclusive Event" : prefs.scrt ? "Confidential" : "Location available on app";
  
  const today = new Date();
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  const [year, month, day] = party.date.split("-");
  let partyDate = new Date(year, month - 1, day);
  
  if (partyDate < todayOnly) {
    partyDate = new Date(todayOnly);
    partyDate.setDate(partyDate.getDate() + 4);
  }
  var showDate = new Date(partyDate).toLocaleDateString("en-GB", {day: "2-digit",month: "2-digit",year: "2-digit",});
  var showTime = new Date(party.time).toLocaleTimeString("en-US", {hour: "2-digit",minute: "2-digit",hour12: true, });

  const appStoreLink = "https://apps.apple.com/us/app/extroverts-party-hangout-vibe/id6746046462";
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.pro.nubpack";
  const deeplink = `extrowurts://flyer/${party.id}`;

  const handleClick = useCallback(() => {
    const userAgent = navigator.userAgent;
    const isAppleDevice = /iPhone|iPad|iPod|Macintosh/.test(userAgent);
    const storeLink = isAppleDevice ? appStoreLink : playStoreLink;
    window.location.href = deeplink;
    setTimeout(() => {
      window.location.href = storeLink;
    }, 2000);
  }, []);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-20 flex items-end justify-center bg-black/30 backdrop-blur"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        drag="y"
        dragConstraints={{ top: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.y > 120) onClose();
          else controls.start({ y: 0 });
        }}
        // initial={{ y: "100%" }}
        // animate={{ y: 0 }}
        // exit={{ y: "100%" }}
        // transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full sm:w-[420px] max-h-[90vh] rounded-t-3xl bg-black/75 backdrop-blur-xl shadow-2xl p-8 text-white overflow-hidden">
        {/* HANDLE */}
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-400/50" />

        <h3 className="text-lg font-semibold text-center text-white mb-4">
          {party.creatorname} shared a party flyer!
        </h3>
        
        {/* THUMBNAIL */}
        <img
          src={party.thumbnail}
          alt={party.title}
          className="w-full h-56 object-cover rounded-xl mb-3"
        />

        {/* TITLE */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="text-lg font-semibold mb-4">
            {party.title}
          </h2>
          <img
            src={'https://cdn-icons-png.flaticon.com/64/147/147318.png' }
            alt={party.title}
            className="h-6 object-cover rounded-xl mb-3"
          />
        </div>

        <h3 className="text-xs text-white/60 mb-4">
          {party.description.slice(0,100)}
        </h3>

        {/* DATE + TYPE */}
        <div className="flex gap-2 mb-3">
          <div className="w-1/2">
          <div><span className="text-xs font-robert-regular">DATE</span></div>
          <div className="flex-1 flex items-center justify-between bg-white/10 rounded-lg px-3 py-2 text-sm">
            <span>{showDate}</span>
            <TiCalendar />
          </div>
          </div>

          <div className="w-1/2">
          <div><span className="text-xs font-robert-regular">TIME</span></div>
          <div className="flex-1 flex items-center justify-between bg-white/10 rounded-lg px-3 py-2 text-sm capitalize">
            <span>{showTime}</span>
            <TiTime />
          </div>
          </div>
        </div>

        { (prefs.girl || prefs.scrt) && <div className="bg-white/30 -mx-44 -my-4 -rotate-12" >
          <span className="text-center font-semibold text-3xl p-1.5">{prefs.girl ? 'GIRLS EXCUSIVE GIRLS EXCUSIVE GIRLS' : 'CONFIDENTIAL CONFIDENTIAL CONFIDEN' }</span>
        </div> }

        {/* LOCATION */}
        <div><span className="text-xs font-robert-regular">LOCATION</span></div>
        <img
          src={scrt}
          alt={'location'}
          className="h-6 w-full object-cover rounded"
        />
        <span className="text-xs text-white/60 mb-3 uppercase font-robert-regular">{label}</span>

        <div onClick={handleClick} className="w-full bg-white text-black h-8 rounded pt-1 mt-6 text-center cursor-pointer">
          <span className="text-sm font-bold">JOIN</span>
        </div>
        <div onClick={onClose} className="w-full text-white h-8 rounded pt-1 mt-6 text-center border border-white cursor-pointer">
          <span className="text-sm font-bold">CLOSE</span>
        </div>
        
        
      </motion.div>
    </div>
  );
};

export default PartyDrawer;
