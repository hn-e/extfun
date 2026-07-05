import { HiOutlineCalendarDays, HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2";

const Card = ({ image, title, description, date, time, location, style }) => {
  return (
    <div
      className="w-96 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
      style={style}
    >
      <div className="flex h-56 items-center justify-center bg-white/[0.03]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500/20 via-pink-500/15 to-amber-500/10">
            <span className="text-8xl text-white/5">{title?.[0]}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-general text-xl font-semibold leading-snug text-white">
          {title}
        </h3>
        <p className="mt-2 font-robert-regular text-base leading-relaxed text-white/45">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-base text-white/50">
          <span className="inline-flex items-center gap-1.5">
            <HiOutlineCalendarDays className="text-lg text-white/30" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <HiOutlineClock className="text-lg text-white/30" />
            {time}
          </span>
        </div>

        <div className="mt-2.5 flex items-center gap-1.5 text-base text-white/50">
          <HiOutlineMapPin className="text-lg text-white/30" />
          {location}
        </div>

        <button className="mt-6 w-full rounded-full bg-white py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/10">
          Join
        </button>
      </div>
    </div>
  );
};

export default Card;
