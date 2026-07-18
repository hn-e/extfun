import { Link } from "react-router-dom";
import himanshuImg from "../assets/himanshu.png";
import SEO from "./SEO";

const stats = [
  { value: "35K+", label: "Users across products" },
  { value: "100+", label: "5-star ratings on Extroverts" },
  { value: "8.1", label: "CGPA at IIT Madras" },
  { value: "Top 17%", label: "Leetcode worldwide" },
];

const achievements = [
  "Featured in IIT Madras Topper's Interaction on YouTube and LinkedIn. Basically IIT famous.",
  "Built Extroverts from scratch — 8,000+ people across India now have a social life because of this app.",
  "Created Kitinit.com with 27,000+ users. A tool that generates project boilerplates. Recursive genius.",
  "Ranked in the top 100 nationally in E-Commerce Shoppers' Behaviour Understanding. Knows why you bought that thing at 2 AM.",
  "Built a face detection proctoring system for 7,000+ online assessments per month. He knows if you're cheating.",
];

const HimanshuResume = () => {
  return (
    <>
      <SEO
        title="Himanshu Soni — Extroverts"
        description="Himanshu Soni, Co-founder & CEO of Extroverts. IIT Madras. Software Engineer. Built 3 apps with 35K+ combined users."
        path="/resume/himanshu"
      />
      <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden">
        <img
          src={himanshuImg}
          alt="Himanshu Soni"
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
            Himanshu Soni
          </h1>
          <p className="mt-3 max-w-xl font-robert-regular text-lg leading-relaxed text-white/60">
            The guy who built Extroverts so you don't have to sit at home scrolling
            Instagram on a Saturday night. Software Engineer. IIT Madras. Part-time
            overachiever. Full-time &ldquo;I told you so.&rdquo;
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
                <span className="font-semibold text-white/80">IIT Madras</span>{" "}
                — B.S. in Programming and Data Science. Two diplomas. One CGPA of
                8.1. Probably coded through every lecture. Worth it.
              </p>
              <p className="font-robert-regular leading-relaxed text-white/50">
                Class X: CGPA 10.0. Class XII: 76.6%. The former proves he was a
                topper. The latter proves he discovered the internet in 12th grade.
              </p>
            </div>

            <h2 className="mt-10 font-general text-xs uppercase tracking-[0.3em] text-white/30">
              The Stack
            </h2>
            <p className="mt-4 font-robert-regular leading-relaxed text-white/50">
              Python, JavaScript, Django, Flask, Laravel, Node, React, React Native,
              Vue, Next.js, Tailwind, MySQL, PostgreSQL, AWS, Redis, Celery, WebGL...
              basically, if it runs on electricity, he's probably shipped something
              with it.
            </p>
          </div>

          <div>
            <h2 className="font-general text-xs uppercase tracking-[0.3em] text-white/30">
              Things he won't stop talking about
            </h2>
            <ul className="mt-4 space-y-4">
              {achievements.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex-shrink-0 text-violet-400">
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
            Also claims to be skilled at &ldquo;Googling&rdquo; and
            &ldquo;Creativity.&rdquo; Lists them on his resume. Respect the
            honesty.
          </p>
          <p className="mt-3 font-robert-regular text-sm text-white/50">
            <a
              href="mailto:himanshu@extroverts.app"
              className="underline transition-colors hover:text-white"
            >
              himanshu@extroverts.app
            </a>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default HimanshuResume;
