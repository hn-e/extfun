import { Link } from "react-router-dom";
import himanshuImg from "../assets/himanshu.png";
import vaibhavImg from "../assets/vaibhav.png";
import SEO from "./SEO";

const cofounders = [
  {
    slug: "himanshu",
    image: himanshuImg,
    name: "Himanshu Soni",
    role: "Co-founder & CEO",
    line: "Built 3 apps with 35K+ combined users. IIT Madras. Once got a special mention for a GitHub portfolio and never let anyone forget it.",
  },
  {
    slug: "vaibhav",
    image: vaibhavImg,
    name: "Vaibhav Mishra",
    role: "Co-founder & COO",
    line: "Top 0.64 percentile in CAT. Cuts data costs for fun. Yoga practitioner since the 2020 lockdown. Balances code, chakras, and cross-functional teams.",
  },
];

const Team = () => {
  return (
    <>
      <SEO
        title="Our Team — Extroverts"
        description="Meet the co-founders behind Extroverts — Himanshu Soni and Vaibhav Mishra. Two people who believe going out should feel like an adventure."
        path="/team"
      />
      <div className="min-h-screen bg-black text-white">
      <div className="py-16 sm:px-12 md:px-24 lg:px-40">
        <Link
          to="/"
          className="mb-16 inline-block px-6 text-sm text-white/40 transition-colors hover:text-white/80 sm:px-0"
        >
          &larr; Back
        </Link>

        <div className="px-6 sm:px-0">
          <h1 className="font-general text-4xl font-black uppercase tracking-wider sm:text-5xl md:text-6xl">
            We are
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Extroverts
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-robert-regular text-lg leading-relaxed text-white/50">
            Two people who believe going out should feel like an adventure, not a logistics meeting. We built this because the group chat failed us.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {cofounders.map((person, index) => (
          <Link
            key={person.slug}
            to={`/resume/${person.slug}`}
            className="group flex flex-col border-t border-white/5 transition-colors hover:bg-white/[0.02] md:flex-row"
          >
            <div className="overflow-hidden md:w-1/2">
              <img
                src={person.image}
                alt={person.name}
                className="h-[65vh] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 md:h-[100vh]"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-12 md:w-1/2 md:px-16 md:py-0">
              <p className="font-general text-xs uppercase tracking-[0.3em] text-white/30">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-general text-3xl font-bold sm:text-4xl">
                {person.name}
              </h2>
              <p className="mt-2 font-robert-regular text-lg text-white/50">
                {person.role}
              </p>
              <p className="mt-6 max-w-md font-robert-regular leading-relaxed text-white/40">
                {person.line}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 font-general text-xs uppercase tracking-widest text-white/30 transition-colors group-hover:text-white/60">
                View full resume &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
};

export default Team;
