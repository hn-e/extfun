import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Download from "./components/Download";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useParty } from "./context/PartyContext";
import PartyDrawer from "./components/PartyDrawer";

function App() {
  const [loading, setLoading] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [closing, setClosing] = useState(false);
  const audioRef = useRef(null);

  const { party, setParty } = useParty();

  const closeOverlay = () => {
    setClosing(true);
    setTimeout(() => setLoading(false), 300); // match duration
  };

  useEffect(() => {
    if (!audioRef.current) return;
    isAudioPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isAudioPlaying]);

  return (
    <>
      {/* AUDIO MUST LIVE FOREVER */}
      <audio ref={audioRef} src="/audio/loop.mp3" loop />

      {/* LOADING OVERLAY */}
      {loading && (
        <div
            onClick={() => {
              setIsAudioPlaying((p) => !p);
              // closeOverlay();
            }}
          className={`fixed inset-0 z-30 flex flex-col items-center justify-center
            bg-neutral-900 text-white gap-8 transition-opacity duration-300
            ${closing ? "opacity-0" : "opacity-100"}`}
        >
          {/* SOUND TOGGLE */}
          <p className="font-general text-xl text-white uppercase">
            Loading...
          </p>
          <button
            className={`flex items-center justify-center rounded-full border transition-all duration-200 p-40
              ${isAudioPlaying
                ? "border-white text-white"
                : "border-neutral-500 text-neutral-500"}
              w-32 h-32`}
          >
            {/* icon */}
            <div className="flex items-end space-x-1 h-10">
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isAudioPlaying,
                  })}
                  style={{ animationDelay: `${bar * 0.1}s`, '--h': `${Math.random() * 20 + 2}px` }}
                />
              ))}
            </div>
          </button>
          <p className="font-general text-white uppercase">
            Enable sound for full experience
          </p>
        </div>
      )}

      {/* PARTY DRAWER */}
      {party && (
        <PartyDrawer
          party={party}
          onClose={() => setParty(null)}
        />
      )}

      {/* APP CONTENT */}
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar
          isAudioPlaying={isAudioPlaying}
          setIsAudioPlaying={setIsAudioPlaying}
          audioRef={audioRef}
        />
        <Hero closeLoader={()=>setLoading(false)} />
        <Download />
        <About />
        <Features />
        <Story />
        <Contact />
      </main>
    </>
  );
}


export default App;
