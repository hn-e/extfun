import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import DownloadButtons from "./DownloadButtons";

const questions = [
  {
    id: 1,
    emoji: "📅",
    q: "A free Saturday. What's the move?",
    layout: "split",
    left: { label: "Call everyone I know", sub: "Let's make plans!", emoji: "📞", trait: 2, color: "from-rose-500 to-pink-600" },
    right: { label: "Cancel on everyone", sub: "Peace at last.", emoji: "🛋️", trait: -2, color: "from-blue-500 to-indigo-600" },
  },
  {
    id: 2,
    emoji: "🔋",
    q: "After 4 hours at a loud party, you feel...",
    layout: "grid",
    options: [
      { label: "Let's go AGAIN", emoji: "⚡", trait: 2, color: "from-amber-400 to-orange-500" },
      { label: "Happy but fading", emoji: "😊", trait: 1, color: "from-violet-400 to-purple-500" },
      { label: "Drained, worth it", emoji: "😮‍💨", trait: -1, color: "from-teal-400 to-cyan-500" },
      { label: "Need a week off", emoji: "🫠", trait: -2, color: "from-blue-400 to-indigo-500" },
    ],
  },
  {
    id: 3,
    emoji: "🎉",
    q: "You walk into a room full of strangers...",
    layout: "grid",
    options: [
      { label: "3 new friends already", emoji: "🤝", trait: 2, color: "from-fuchsia-400 to-pink-500" },
      { label: "Introduce to a few", emoji: "👋", trait: 1, color: "from-emerald-400 to-green-500" },
      { label: "Find a familiar face", emoji: "🔍", trait: -1, color: "from-sky-400 to-blue-500" },
      { label: "Locate the nearest exit", emoji: "🚪", trait: -2, color: "from-slate-400 to-gray-600" },
    ],
  },
  {
    id: 4,
    emoji: "📱",
    q: "Someone cancels plans last minute. Your honest reaction...",
    layout: "split",
    left: { label: "Genuinely crushed", sub: "I was so ready!", emoji: "💔", trait: 2, color: "from-rose-400 to-pink-500" },
    right: { label: "Secretly thrilled", sub: "More me-time.", emoji: "😌", trait: -2, color: "from-teal-500 to-emerald-600" },
  },
  {
    id: 5,
    emoji: "💼",
    q: "Your ideal work environment...",
    layout: "grid",
    options: [
      { label: "Buzzing open office", emoji: "🏢", trait: 2, color: "from-amber-400 to-yellow-500" },
      { label: "Small tight-knit team", emoji: "🤗", trait: 0, color: "from-violet-400 to-purple-500" },
      { label: "Hybrid, mostly remote", emoji: "🏠", trait: -1, color: "from-emerald-400 to-teal-500" },
      { label: "Solo, headphones on", emoji: "🎧", trait: -2, color: "from-blue-500 to-indigo-600" },
    ],
  },
  {
    id: 6,
    emoji: "💬",
    q: "Small talk is...",
    layout: "grid",
    options: [
      { label: "Fuel for my soul", emoji: "⛽", trait: 2, color: "from-rose-400 to-pink-500" },
      { label: "A warm-up to real talk", emoji: "🏃", trait: 1, color: "from-amber-400 to-orange-500" },
      { label: "A necessary evil", emoji: "😬", trait: -1, color: "from-cyan-400 to-teal-500" },
      { label: "Physically painful", emoji: "💀", trait: -2, color: "from-indigo-400 to-blue-600" },
    ],
  },
  {
    id: 7,
    emoji: "⚡",
    q: "You meet someone new. Your instinct...",
    layout: "split",
    left: { label: "Talk first, filter later", sub: "Stories incoming!", emoji: "🗣️", trait: 2, color: "from-fuchsia-500 to-purple-600" },
    right: { label: "Observe quietly first", sub: "Read the room.", emoji: "👀", trait: -2, color: "from-slate-500 to-gray-700" },
  },
  {
    id: 8,
    emoji: "🎂",
    q: "Your ideal birthday celebration...",
    layout: "grid",
    options: [
      { label: "Surprise party, 50+", emoji: "🎊", trait: 2, color: "from-pink-400 to-rose-500" },
      { label: "Dinner with close crew", emoji: "🍽️", trait: 0, color: "from-emerald-400 to-green-500" },
      { label: "Trip with 2-3 people", emoji: "🏔️", trait: -1, color: "from-sky-400 to-blue-500" },
      { label: "Let's skip it honestly", emoji: "🕯️", trait: -2, color: "from-gray-400 to-slate-600" },
    ],
  },
  {
    id: 9,
    emoji: "🪫",
    q: "Your phone battery dies in a crowd. You...",
    layout: "split",
    left: { label: "Mild panic", sub: "How do I find anyone?", emoji: "😰", trait: 2, color: "from-amber-400 to-orange-500" },
    right: { label: "Peace at last", sub: "Finally, real life.", emoji: "🧘", trait: -2, color: "from-emerald-400 to-teal-600" },
  },
  {
    id: 10,
    emoji: "🧠",
    q: "Facing a big life decision, you...",
    layout: "grid",
    options: [
      { label: "Talk it out with everyone", emoji: "📢", trait: 2, color: "from-violet-400 to-purple-500" },
      { label: "Ask 2-3 trusted people", emoji: "🤔", trait: 1, color: "from-rose-400 to-pink-500" },
      { label: "Think alone, then share", emoji: "📝", trait: -1, color: "from-teal-400 to-cyan-500" },
      { label: "Decide solo, inform later", emoji: "🧭", trait: -2, color: "from-slate-400 to-gray-600" },
    ],
  },
  {
    id: 11,
    emoji: "🎤",
    q: "Public speaking or deep solo research?",
    layout: "split",
    left: { label: "Give me the mic", sub: "Crowd? Bring it!", emoji: "🎙️", trait: 2, color: "from-amber-500 to-yellow-600" },
    right: { label: "Give me the data", sub: "In my lane, thriving.", emoji: "📊", trait: -2, color: "from-blue-500 to-indigo-700" },
  },
  {
    id: 12,
    emoji: "🌙",
    q: "Sunday evening. Where are you?",
    layout: "grid",
    options: [
      { label: "Planning next weekend", emoji: "🗓️", trait: 2, color: "from-fuchsia-400 to-pink-500" },
      { label: "Chill with close ones", emoji: "🍵", trait: 1, color: "from-emerald-400 to-green-500" },
      { label: "Solo hobby, deep focus", emoji: "🎨", trait: -1, color: "from-violet-400 to-purple-500" },
      { label: "Already in bed", emoji: "😴", trait: -2, color: "from-blue-400 to-indigo-500" },
    ],
  },
  {
    id: 13,
    emoji: "💭",
    q: "When life gets stressful, you...",
    layout: "grid",
    options: [
      { label: "Call a friend to vent", emoji: "📲", trait: 2, color: "from-rose-400 to-pink-500" },
      { label: "Distract with activity", emoji: "🏃‍♂️", trait: 0, color: "from-amber-400 to-orange-500" },
      { label: "Go quiet, self-reflect", emoji: "🌿", trait: -2, color: "from-teal-400 to-emerald-500" },
    ],
  },
  {
    id: 14,
    emoji: "🫂",
    q: "In your friend group, you're the...",
    layout: "grid",
    options: [
      { label: "Organiser-in-chief", emoji: "📋", trait: 2, color: "from-violet-400 to-purple-500" },
      { label: "The glue that connects", emoji: "🫶", trait: 1, color: "from-pink-400 to-rose-500" },
      { label: "The quiet listener", emoji: "👂", trait: -1, color: "from-sky-400 to-blue-500" },
      { label: "The one who leaves early", emoji: "👻", trait: -2, color: "from-slate-400 to-gray-600" },
    ],
  },
  {
    id: 15,
    emoji: "🏠",
    q: "After a draining week, you recharge by...",
    layout: "split",
    left: { label: "Going out", sub: "Let the night fix me.", emoji: "🌃", trait: 2, color: "from-pink-500 to-fuchsia-600" },
    right: { label: "Staying in", sub: "Silence is healing.", emoji: "📖", trait: -2, color: "from-indigo-500 to-blue-700" },
  },
];

const personas = {
  classic: {
    emoji: "🦁",
    title: "Classic Extrovert",
    tagline: "You don't just attend the party — you ARE the party.",
    description:
      "People energise you. You thrive in crowds, start conversations with strangers like it's nothing, and your calendar looks like a festival lineup. Silence makes you uncomfortable in the best way — because life is meant to be lived out loud. You're the reason group chats exist, and honestly? The world needs more of you.",
    strengths: ["Natural connector", "Thrives under attention", "Radiates infectious energy"],
    color: "from-rose-500 via-pink-500 to-fuchsia-600",
    bg: "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
  },
  outgoing: {
    emoji: "🦊",
    title: "Outgoing Ambivert",
    tagline: "You work a room like a pro — but you know when to leave.",
    description:
      "You're socially fluent. You can charm a crowd, lead a meeting, and dance till 2 AM — but you've also mastered the art of the graceful exit. People think you're an extrovert, but you know the truth: you just pick your moments. You're adaptable, emotionally intelligent, and honestly? The most dangerous type. You can do both.",
    strengths: ["Socially adaptable", "Reads the room instinctively", "Knows when to recharge"],
    color: "from-violet-400 via-purple-400 to-indigo-500",
    bg: "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
  },
  trueAmbivert: {
    emoji: "🦉",
    title: "True Ambivert",
    tagline: "Perfectly balanced, as all things should be.",
    description:
      "You're the rarest breed. You genuinely enjoy both a loud night out AND a quiet night in — and neither feels like a compromise. You adjust to the room, match energies effortlessly, and people feel comfortable around you no matter the setting. You're not confused. You're complete. The full spectrum of human connection is yours to explore.",
    strengths: ["Perfectly adaptable", "Deeply relatable", "Comfortable in any setting"],
    color: "from-emerald-400 via-teal-400 to-cyan-500",
    bg: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  thoughtful: {
    emoji: "🐺",
    title: "Thoughtful Introvert",
    tagline: "You speak less, but when you do — everyone listens.",
    description:
      "You're not shy. You're selective. You prefer depth over breadth, a real conversation over a room full of acquaintances. Small talk drains you, but meaningful connection fuels you. You have a rich inner world and you let people in slowly — but once they're in, they never want to leave. Quality over quantity, always.",
    strengths: ["Deep thinker", "Loyal and genuine", "Calm under social pressure"],
    color: "from-sky-400 via-blue-500 to-indigo-600",
    bg: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
  },
  reserved: {
    emoji: "🐱",
    title: "Reserved Introvert",
    tagline: "You built a world inside your head. It's beautiful in there.",
    description:
      "Solitude isn't lonely for you — it's freedom. You observe more than you speak, feel more than you show, and think more than anyone realises. Crowds drain you fast, but one-on-one time with the right person can light you up for days. You're not antisocial. You're anti-boring. And anyone who gets to know you knows they've found gold.",
    strengths: ["Deeply observant", "Self-sufficient", "Creatively rich inner life"],
    color: "from-slate-500 via-gray-600 to-zinc-700",
    bg: "from-slate-500/20 via-gray-500/10 to-zinc-500/20",
  },
};

const personaOrder = ["reserved", "thoughtful", "trueAmbivert", "outgoing", "classic"];

const calcEmojis = ["🧠", "📊", "🔍", "🤔", "💡", "🪄", "✨", "🎯"];

const containerVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const IntrovertExtrovertTest = () => {
  const [step, setStep] = useState("start");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [persona, setPersona] = useState(null);
  const [score, setScore] = useState(null);
  const [calcIdx, setCalcIdx] = useState(0);

  useEffect(() => {
    if (step !== "calculating") return;
    const t = setInterval(() => setCalcIdx((p) => (p + 1) % calcEmojis.length), 200);
    return () => clearInterval(t);
  }, [step]);

  const startQuiz = useCallback(() => {
    setStep("quiz");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setPersona(null);
    setScore(null);
  }, []);

  const answer = useCallback((trait) => {
    setSelected(trait);
    setTimeout(() => {
      const next = [...answers, trait];
      setAnswers(next);
      setSelected(null);
      if (currentQ + 1 >= questions.length) {
        setStep("calculating");
        setTimeout(() => {
          const total = next.reduce((a, b) => a + b, 0);
          setScore(total);
          let key;
          if (total >= 20) key = "classic";
          else if (total >= 8) key = "outgoing";
          else if (total >= -7) key = "trueAmbivert";
          else if (total >= -20) key = "thoughtful";
          else key = "reserved";
          setPersona(key);
          setStep("result");
        }, 2000);
      } else {
        setCurrentQ((p) => p + 1);
      }
    }, 300);
  }, [answers, currentQ]);

  const result = personas[persona];
  const totalQuestions = questions.length;
  const progress = (currentQ / totalQuestions) * 100;

  const pTitle = result
    ? `${result.title} — Introvert or Extrovert? | Extroverts`
    : "Introvert or Extrovert Test — Extroverts";
  const pDesc = result
    ? `${result.tagline} Take the 15-question test and discover where you fall on the introvert-extrovert spectrum.`
    : "Not sure if you're an introvert or extrovert? Take this 15-question personality test and find out where you truly fall on the spectrum.";

  return (
    <>
      <SEO title={pTitle} description={pDesc} path="/introvert-extrovert-test" />
      <div className="relative min-h-dvh w-full overflow-hidden bg-black text-white">
        {/* ambient background */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-15">
          <div className="absolute -top-1/3 left-1/4 h-80 w-80 animate-[spin_22s_linear_infinite] rounded-full bg-violet-500 blur-[100px]" />
          <div className="absolute -bottom-1/4 right-1/4 h-72 w-72 animate-[spin_18s_linear_infinite_reverse] rounded-full bg-pink-500 blur-[90px]" />
        </div>

        <AnimatePresence mode="wait">
          {/* ────────── START ────────── */}
          {step === "start" && (
            <motion.div
              key="start"
              variants={containerVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 text-center"
            >
              <Link to="/" className="absolute left-4 top-4 text-sm text-white/30 transition-colors hover:text-white/60">
                &larr; Back
              </Link>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl sm:text-8xl"
              >
                🎭
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mt-6 max-w-2xl bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-5xl font-black uppercase leading-[0.9] text-transparent sm:text-7xl md:text-8xl"
              >
                Introvert or Extrovert?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-5 max-w-lg text-lg text-white/40 sm:text-xl"
              >
                15 questions. No wrong answers.
                <br />
                Discover where you truly fall on the spectrum.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={startQuiz}
                className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-10 py-4 text-lg font-general uppercase tracking-[0.15em] text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/50 active:scale-95 sm:text-xl"
              >
                Start test
                <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  →
                </motion.span>
              </motion.button>

              <p className="mt-16 text-sm text-white/20">
                powered by <span className="text-white/40">Extroverts</span>
              </p>
            </motion.div>
          )}

          {/* ────────── QUIZ ────────── */}
          {step === "quiz" && (
            <motion.div
              key={`q-${currentQ}`}
              variants={containerVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 flex min-h-dvh flex-col"
            >
              {/* progress */}
              <div className="absolute left-0 top-0 z-20 h-0.5 w-full bg-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="absolute left-4 top-3 z-20 text-xs text-white/20">
                {currentQ + 1}/{totalQuestions}
              </div>

              {/* question header */}
              <div className="absolute inset-x-0 top-6 z-20 text-center">
                <motion.span
                  key={questions[currentQ].emoji}
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="text-4xl sm:text-5xl"
                >
                  {questions[currentQ].emoji}
                </motion.span>
              </div>

              <div className="absolute inset-x-0 top-20 z-20 px-4 text-center sm:top-24">
                <motion.h2
                  key={`t-${currentQ}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-black uppercase leading-tight text-white/90 sm:text-3xl"
                >
                  {questions[currentQ].q}
                </motion.h2>
              </div>

              {/* ── SPLIT layout ── */}
              {questions[currentQ].layout === "split" && (
                <div className="grid min-h-dvh grid-cols-2">
                  {(["left", "right"]).map((side, si) => {
                    const opt = questions[currentQ][side];
                    return (
                      <motion.button
                        key={side}
                        initial={{ x: side === "left" ? -300 : 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: si * 0.08 }}
                        onClick={() => !selected && answer(opt.trait)}
                        disabled={selected !== null}
                        className={`relative flex flex-col items-center justify-center gap-4 overflow-hidden p-4 transition-all duration-200 bg-gradient-to-br ${opt.color} ${
                          selected !== null && selected !== opt.trait
                            ? "opacity-30 scale-[0.98]"
                            : selected === opt.trait
                              ? "scale-[0.97]"
                              : "hover:brightness-110 active:scale-[0.97]"
                        }`}
                      >
                        <motion.span
                          animate={{ scale: selected === opt.trait ? [1, 1.2, 1] : 1 }}
                          className="text-6xl sm:text-7xl"
                        >
                          {opt.emoji}
                        </motion.span>
                        <span className="text-xl font-black uppercase sm:text-2xl">{opt.label}</span>
                        <span className="text-sm text-white/60">{opt.sub}</span>
                        {selected === opt.trait && (
                          <motion.div
                            layoutId="sel"
                            className="absolute inset-0 border-[3px] border-white/30"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* ── GRID layout ── */}
              {questions[currentQ].layout === "grid" && (
                <div className={`grid min-h-dvh ${questions[currentQ].options.length <= 3 ? "grid-rows-[1fr_1fr_1fr]" : "grid-cols-2 grid-rows-2"}`}>
                  {questions[currentQ].options.map((opt, i) => {
                    const cols = questions[currentQ].options.length;
                    const is3 = cols === 3;
                    const spanClass = is3 && i === 2 ? "col-span-2" : "";
                    return (
                      <motion.button
                        key={i}
                        initial={{ scale: 0, rotate: -6 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
                        onClick={() => !selected && answer(opt.trait)}
                        disabled={selected !== null}
                        className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden p-6 transition-all duration-200 bg-gradient-to-br ${opt.color} ${spanClass} ${
                          selected !== null && selected !== opt.trait
                            ? "opacity-30 scale-[0.98]"
                            : selected === opt.trait
                              ? "scale-[0.97]"
                              : "hover:brightness-110 active:scale-[0.97]"
                        }`}
                      >
                        <motion.span
                          animate={{ scale: selected === opt.trait ? [1, 1.25, 1] : 1 }}
                          className="text-5xl sm:text-6xl"
                        >
                          {opt.emoji}
                        </motion.span>
                        <span className="text-lg font-black uppercase text-center leading-tight sm:text-xl">
                          {opt.label}
                        </span>
                        {selected === opt.trait && (
                          <motion.div
                            layoutId="sel"
                            className="absolute inset-0 border-[3px] border-white/30"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}

          {/* ────────── CALCULATING ────────── */}
          {step === "calculating" && (
            <motion.div
              key="calc"
              variants={containerVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="text-7xl"
              >
                {calcEmojis[calcIdx]}
              </motion.div>
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="mt-8 text-3xl font-black uppercase text-white/60 sm:text-4xl"
              >
                Analysing your personality
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  ...
                </motion.span>
              </motion.p>
              <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{ width: "60%" }}
                />
              </div>
            </motion.div>
          )}

          {/* ────────── RESULT ────────── */}
          {step === "result" && result && (
            <motion.div
              key="result"
              variants={containerVar}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 py-20 sm:px-6"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`w-full max-w-md rounded-3xl border border-white/10 p-8 backdrop-blur-sm sm:p-10 ${result.bg}`}
              >
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center text-7xl sm:text-8xl"
                >
                  {result.emoji}
                </motion.div>

                <p className="mt-4 text-center font-general text-xs uppercase tracking-[0.3em] text-white/50">
                  You are a
                </p>

                <h2 className={`mt-2 bg-gradient-to-r ${result.color} bg-clip-text text-center text-4xl font-black uppercase leading-[1] text-transparent sm:text-5xl`}>
                  {result.title}
                </h2>

                <p className="mt-4 text-center font-robert-regular text-lg italic leading-relaxed text-white/70">
                  &ldquo;{result.tagline}&rdquo;
                </p>

                <p className="mt-5 text-center font-robert-regular text-sm leading-relaxed text-white/50 sm:text-base">
                  {result.description}
                </p>

                {/* strengths */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {result.strengths.map((s) => (
                    <span
                      key={s}
                      className={`rounded-full bg-gradient-to-r ${result.color} px-3 py-1 text-xs font-general uppercase tracking-wider text-white/90`}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* spectrum bar */}
                <div className="mt-10">
                  <div className="flex items-end justify-between text-[9px] uppercase tracking-widest text-white/30">
                    <span>Introvert</span>
                    <span>Ambivert</span>
                    <span>Extrovert</span>
                  </div>
                  <div className="mt-2 flex h-3 overflow-hidden rounded-full bg-white/10">
                    {personaOrder.map((key) => (
                      <div
                        key={key}
                        className={`h-full flex-1 transition-all duration-700 ${key === persona ? "bg-white/80" : "bg-white/5"}`}
                      />
                    ))}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[9px] tracking-widest text-white/15">
                    {personaOrder.map((key) => (
                      <span key={key} className={key === persona ? "text-white/60" : ""}>
                        {personas[key].emoji}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-center text-xs text-white/30">
                  Score: {score}/30
                </p>
              </motion.div>

              {/* share */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  const text = `I'm a "${result.title}" on the Extroverts personality test! "${result.tagline}" 🎭 Take the test: https://extroverts.app/introvert-extrovert-test`;
                  if (navigator.share) {
                    navigator.share({ title: "My Personality Type", text });
                  } else {
                    navigator.clipboard.writeText(text).then(() => alert("Result copied! Share anywhere."));
                  }
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-white/60 transition-all duration-200 hover:border-white/40 hover:text-white/90 active:scale-95"
              >
                📤 Share my result
              </motion.button>

              <button
                onClick={startQuiz}
                className="mt-4 text-sm text-white/30 underline transition-colors hover:text-white/50"
              >
                Retake test
              </button>

              {/* download CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-16 w-full max-w-md"
              >
                <DownloadButtons />
              </motion.div>

              <p className="mt-8 text-sm text-white/20">
                Whatever your type &mdash; find your people on{" "}
                <span className="text-white/40">Extroverts</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default IntrovertExtrovertTest;
