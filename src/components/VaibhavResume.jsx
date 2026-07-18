import { Link } from "react-router-dom";
import vaibhavImg from "../assets/vaibhav.png";
import SEO from "./SEO";

const stats = [
  { value: "Top 0.64%", label: "Out of 3 lakh CAT test-takers" },
  { value: "40%", label: "Data latency reduction" },
  { value: "20%", label: "Compute cost savings" },
  { value: "22", label: "Months at Veersa Technologies" },
];

const achievements = [
  "Scored in the top 0.64 percentile in CAT among 300,000+ test-takers. That's 99.36th percentile. Math is just something he does to relax.",
  "Spearheaded migration of 70 Subject Area Marts, cutting data retrieval latency by ~40%. Seventy. He moved more data than your company has.",
  "Built an NL query interface that cut analytics turnaround from days to 4 hours. Your Friday report? Ready by Monday afternoon.",
  "Self-initiated Databricks cost optimization, cutting compute costs by ~20%. Management didn't ask. He just did it.",
  "Co-designed an ETL alert framework cutting Mean Time to Detection from 6 hours to under 30 minutes. Problems caught before lunch.",
];

const VaibhavResume = () => {
  return (
    <>
      <SEO
        title="Vaibhav Mishra — Extroverts"
        description="Vaibhav Mishra, Co-founder & COO of Extroverts. Data Engineer. CAT 99.64th percentiler. Cross-functional leader."
        path="/resume/vaibhav"
      />
      <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden">
        <img
          src={vaibhavImg}
          alt="Vaibhav Mishra"
          className="h-[60vh] w-full object-cover opacity-40 grayscale md:h-[70vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 sm:px-12 md:px-24 lg:px-40">
          <Link
            to="/team"
            className="mb-6 inline-block text-sm text-white/40 transition-colors hover:text-white/80"
          >
            &larr; Back to team
          </Link>
          <h1 className="font-general text-5xl font-black uppercase tracking-wider sm:text-6xl md:text-7xl">
            Vaibhav Mishra
          </h1>
          <p className="mt-3 max-w-xl font-robert-regular text-lg leading-relaxed text-white/60">
            The guy who makes the data make sense. Data engineer. CAT 99.64th
            percentiler. Cross-functional leader. Reads the Bhagavad Gita and
            Atomic Habits in the same sitting. Balance.
          </p>
        </div>
      </div>

      <div className="px-6 py-12 sm:px-12 md:px-24 lg:px-40">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm"
            >
              <p className="font-general text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-robert-regular text-xs text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-general text-xs uppercase tracking-[0.3em] text-white/30">
              Education
            </h2>
            <div className="mt-4 space-y-3">
              <p className="font-robert-regular leading-relaxed text-white/60">
                <span className="font-semibold text-white/80">
                  J.C. Bose University, YMCA Faridabad
                </span>{" "}
                — B.Tech in Electronics, CGPA 8.46. Good at circuits. Better at
                data.
              </p>
              <p className="font-robert-regular leading-relaxed text-white/60">
                <span className="font-semibold text-white/80">PGDM '26</span>{" "}
                — Currently pursuing. Because one degree simply wasn't enough.
              </p>
              <p className="font-robert-regular leading-relaxed text-white/50">
                Class XII: 90.4%. Class X: 92.4%. Consistently excellent.
                Annoyingly so.
              </p>
            </div>

            <h2 className="mt-10 font-general text-xs uppercase tracking-[0.3em] text-white/30">
              Leadership
            </h2>
            <p className="mt-4 font-robert-regular leading-relaxed text-white/50">
              General Secretary of the Literary & Debating Society. Organized 6+
              debate competitions. Core committee at Manan Coding Club — organized
              8 hackathons, led 9 placement-prep sessions on DSA and interview
              strategy. The guy who helps everyone else get jobs too.
            </p>
          </div>

          <div>
            <h2 className="font-general text-xs uppercase tracking-[0.3em] text-white/30">
              Things he won't stop talking about
            </h2>
            <ul className="mt-4 space-y-4">
              {achievements.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex-shrink-0 text-pink-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-robert-regular text-sm leading-relaxed text-white/50">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="font-robert-regular text-sm text-white/30">
            Also lists &ldquo;Yoga&rdquo; and &ldquo;Reading the Bhagavad Gita&rdquo;
            under Interests. Runner-up in a college debate championship. Runner-up in
            a college hackathon. The guy consistently almost wins everything. That
            takes its own kind of talent.
          </p>
          <p className="mt-3 font-robert-regular text-sm text-white/50">
            <a
              href="mailto:vaibhav.kumar.mishra@extroverts.app"
              className="underline transition-colors hover:text-white"
            >
              vaibhav.kumar.mishra@extroverts.app
            </a>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default VaibhavResume;
