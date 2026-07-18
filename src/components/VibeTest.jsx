import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import DownloadButtons from "./DownloadButtons";

const questions = [
  {
    emoji: "🎵",
    q: "Pick your soundtrack",
    options: [
      { label: "EDM / Techno", emoji: "🪩", trait: "rager" },
      { label: "Bollywood bangers", emoji: "💃", trait: "butterfly" },
      { label: "Lo-fi chill", emoji: "🎧", trait: "chill" },
      { label: "Whatever's playing", emoji: "🎰", trait: "wildcard" },
    ],
  },
  {
    emoji: "🍸",
    q: "Your drink of choice",
    options: [
      { label: "Shots. All of them.", emoji: "🥃", trait: "rager" },
      { label: "Aesthetic cocktail", emoji: "🍹", trait: "butterfly" },
      { label: "Just water / soda", emoji: "🧊", trait: "chill" },
      { label: "Surprise me", emoji: "🎲", trait: "wildcard" },
    ],
  },
  {
    emoji: "👥",
    q: "Ideal party size",
    options: [
      { label: "House FULL", emoji: "🏠", trait: "rager" },
      { label: "20-30 people", emoji: "🎊", trait: "butterfly" },
      { label: "Just the squad", emoji: "🤞", trait: "chill" },
      { label: "Me + a mystery +1", emoji: "🫣", trait: "wildcard" },
    ],
  },
  {
    emoji: "🕺",
    q: "Your dance floor move",
    options: [
      { label: "I AM the floor", emoji: "🔥", trait: "rager" },
      { label: "Smooth head nod", emoji: "😎", trait: "butterfly" },
      { label: "Two left feet", emoji: "🦵", trait: "chill" },
      { label: "I'm the DJ actually", emoji: "🎛️", trait: "wildcard" },
    ],
  },
  {
    emoji: "🌙",
    q: "It's 3 AM. You are...",
    options: [
      { label: "Still going strong", emoji: "⚡", trait: "rager" },
      { label: "Pizza hunting", emoji: "🍕", trait: "butterfly" },
      { label: "Already in bed", emoji: "😴", trait: "chill" },
      { label: "Deep convo mode", emoji: "🌌", trait: "wildcard" },
    ],
  },
];

const personas = {
  rager: {
    emoji: "🔥",
    title: "The Rager",
    tagline: "You're the reason neighbours call the cops.",
    description:
      "You don't attend parties — parties happen around you. Your energy is illegal in 7 countries. You've never seen the end of a party because you ARE the end of the party.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    bg: "bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-red-500/20",
  },
  butterfly: {
    emoji: "🦋",
    title: "The Social Butterfly",
    tagline: "You know everyone by midnight.",
    description:
      "You could make friends with a brick wall. By 11 PM you've exchanged numbers with the bartender, the DJ, and someone's mom. Strangers? Never met one.",
    gradient: "from-violet-400 via-pink-400 to-fuchsia-500",
    bg: "bg-gradient-to-br from-violet-500/20 via-pink-500/10 to-fuchsia-500/20",
  },
  chill: {
    emoji: "🧘",
    title: "The Chill One",
    tagline: "You're here for vibes, not drama.",
    description:
      "Zen in the chaos. You find the best corner, the best snack, and the best person to share it with. Parties need you more than you need them.",
    gradient: "from-emerald-400 via-teal-400 to-cyan-500",
    bg: "bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  wildcard: {
    emoji: "🎭",
    title: "The Wildcard",
    tagline: "Even you don't know what you'll do next.",
    description:
      "You're the plot twist every party needs. One minute you're quietly sipping a drink, the next you're leading a conga line. Unpredictable. Unstoppable. Unforgettable.",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    bg: "bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-indigo-500/20",
  },
};

const fadeVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
};

const scaleVar = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const calculatingEmojis = ["🎉", "🪩", "💃", "🔥", "🍕", "🎵", "🕺", "🍸"];

const VibeTest = () => {
  const [step, setStep] = useState("start"); // start | quiz | calculating | result
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [persona, setPersona] = useState(null);
  const [calcEmoji, setCalcEmoji] = useState(0);

  useEffect(() => {
    if (step !== "calculating") return;
    const interval = setInterval(() => {
      setCalcEmoji((p) => (p + 1) % calculatingEmojis.length);
    }, 200);
    return () => clearInterval(interval);
  }, [step]);

  const startQuiz = () => {
    setStep("quiz");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
  };

  const selectOption = (idx) => {
    setSelected(idx);
    setTimeout(() => {
      const newAnswers = [...answers, questions[currentQ].options[idx].trait];
      setAnswers(newAnswers);
      setSelected(null);

      if (currentQ + 1 >= questions.length) {
        setStep("calculating");
        setTimeout(() => {
          const counts = {};
          newAnswers.forEach((t) => (counts[t] = (counts[t] || 0) + 1));
          const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
          setPersona(top);
          setStep("result");
        }, 1800);
      } else {
        setCurrentQ((p) => p + 1);
      }
    }, 350);
  };

  const result = personas[persona];

  const pageTitle = result
    ? `${result.title} — What's Your Party Vibe? | Extroverts`
    : "What's Your Party Vibe? — Extroverts";
  const pageDesc = result
    ? `${result.tagline} Take the quiz and find your party personality on Extroverts.`
    : "Take this 60-second quiz to discover your party personality. Rager, Social Butterfly, Chill One, or Wildcard? Find out now.";

  return (
    <>
      <SEO title={pageTitle} description={pageDesc} path="/vibe-test" />
      <div className="relative min-h-dvh w-full overflow-hidden bg-black text-white">
        {/* Animated gradient background */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 animate-[spin_20s_linear_infinite] rounded-full bg-violet-500 blur-[120px]" />
          <div className="absolute -bottom-1/3 right-1/4 h-80 w-80 animate-[spin_15s_linear_infinite_reverse] rounded-full bg-pink-500 blur-[100px]" />
          <div className="absolute top-1/3 right-1/3 h-64 w-64 animate-[spin_25s_linear_infinite] rounded-full bg-amber-500 blur-[90px]" />
        </div>

        <AnimatePresence mode="wait">
          {/* ── START SCREEN ── */}
          {step === "start" && (
            <motion.div
              key="start"
              variants={fadeVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 text-center"
            >
              <Link
                to="/"
                className="absolute left-4 top-4 text-sm text-white/30 transition-colors hover:text-white/60"
              >
                &larr; Back
              </Link>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl sm:text-9xl"
              >
                🎉
              </motion.div>

              <motion.h1
                variants={scaleVar}
                className="mt-6 max-w-2xl bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-5xl font-black uppercase leading-[0.9] text-transparent sm:text-7xl md:text-8xl"
              >
                What&rsquo;s Your Party Vibe?
              </motion.h1>

              <motion.p
                variants={fadeVar}
                className="mt-6 max-w-md text-lg text-white/40 sm:text-xl"
              >
                5 questions. 60 seconds. Zero judgments.
              </motion.p>

              <motion.button
                variants={scaleVar}
                onClick={startQuiz}
                className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-10 py-4 text-lg font-general uppercase tracking-[0.15em] text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/50 active:scale-95 sm:text-xl"
              >
                Start the test
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>

              <p className="mt-20 text-sm text-white/20">
                powered by <span className="text-white/40">Extroverts</span>
              </p>
            </motion.div>
          )}

          {/* ── QUIZ SCREEN ── */}
          {step === "quiz" && (
            <motion.div
              key="quiz"
              variants={fadeVar}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 sm:px-6"
            >
              {/* Progress bar */}
              <div className="absolute left-0 top-0 h-1 w-full bg-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentQ) / questions.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="absolute left-4 top-4 text-sm text-white/20">
                {currentQ + 1} / {questions.length}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQ}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.35 }}
                  className="flex w-full max-w-lg flex-col items-center text-center"
                >
                  {/* Emoji */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-4 text-6xl sm:text-7xl"
                  >
                    {questions[currentQ].emoji}
                  </motion.div>

                  {/* Question */}
                  <h2 className="mb-10 text-4xl font-black uppercase leading-[1.1] sm:text-5xl">
                    {questions[currentQ].q}
                    <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                      ?
                    </span>
                  </h2>

                  {/* Options */}
                  <div className="grid w-full gap-3 sm:gap-4">
                    {questions[currentQ].options.map((opt, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        onClick={() => !selected && selectOption(i)}
                        disabled={selected !== null}
                        className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 sm:p-5 ${
                          selected === i
                            ? "scale-[0.97] border-white/5 bg-white/5"
                            : selected !== null
                              ? "border-white/5 opacity-40"
                              : "border-white/10 hover:border-white/20 hover:bg-white/[0.04] active:scale-[0.98]"
                        }`}
                      >
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-2xl transition-transform duration-200 group-hover:scale-110 sm:h-14 sm:w-14 sm:text-3xl">
                          {opt.emoji}
                        </span>
                        <span className="text-lg font-general uppercase tracking-wide sm:text-xl">
                          {opt.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── CALCULATING ── */}
          {step === "calculating" && (
            <motion.div
              key="calculating"
              variants={fadeVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="text-7xl"
              >
                {calculatingEmojis[calcEmoji]}
              </motion.div>

              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="mt-8 text-3xl font-black uppercase text-white/60 sm:text-4xl"
              >
                Analyzing your party soul
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </motion.div>

              {/* Spinner */}
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

          {/* ── RESULT SCREEN ── */}
          {step === "result" && result && (
            <motion.div
              key="result"
              variants={fadeVar}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 py-16 sm:px-6"
            >
              {/* Persona card */}
              <motion.div
                variants={scaleVar}
                className={`w-full max-w-md rounded-3xl border border-white/10 p-8 backdrop-blur-sm sm:p-10 ${result.bg}`}
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center text-7xl sm:text-8xl"
                >
                  {result.emoji}
                </motion.div>

                <h2
                  className={`mt-4 text-center font-general text-sm uppercase tracking-[0.3em] text-white/50`}
                >
                  Your party vibe is
                </h2>

                <h1
                  className={`mt-2 bg-gradient-to-r ${result.gradient} bg-clip-text text-center text-4xl font-black uppercase leading-[1] text-transparent sm:text-5xl`}
                >
                  {result.title}
                </h1>

                <p className="mt-4 text-center font-robert-regular text-lg italic leading-relaxed text-white/70">
                  &ldquo;{result.tagline}&rdquo;
                </p>

                <p className="mt-5 text-center font-robert-regular leading-relaxed text-white/50">
                  {result.description}
                </p>
              </motion.div>

              {/* Share button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  const text = `I'm "${result.title}" on the Extroverts Party Vibe Test! ${result.tagline} 🎉 Take the test: https://extroverts.app/vibe-test`;
                  if (navigator.share) {
                    navigator.share({ title: "My Party Vibe", text });
                  } else {
                    navigator.clipboard.writeText(text).then(() => alert("Result copied! Share it anywhere."));
                  }
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-white/60 transition-all duration-200 hover:border-white/40 hover:text-white/90 active:scale-95"
              >
                📤 Share my result
              </motion.button>

              {/* Retake */}
              <button
                onClick={startQuiz}
                className="mt-4 text-sm text-white/30 underline transition-colors hover:text-white/50"
              >
                Retake test
              </button>

              {/* Download CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 w-full max-w-md"
              >
                <DownloadButtons />
              </motion.div>

              <p className="mt-8 text-sm text-white/20">
                Your people are on <span className="text-white/40">Extroverts</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default VibeTest;
