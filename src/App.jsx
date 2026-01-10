import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Download from "./components/Download";
import { useEffect, useRef, useState } from "react";
import { TiLeaf } from "react-icons/ti";

function App() {
  const [loading, setLoading] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  // useEffect(() => {
  //   const t = setTimeout(() => setLoading(false), 5000);
  //   return () => clearTimeout(t);
  // }, []);

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
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-900 text-white gap-8">
          {/* SOUND TOGGLE */}
          <button
            onClick={() => {
              setIsAudioPlaying((p) => !p);
              setLoading(false);
            }}
            className={`flex items-center justify-center rounded-full border transition-all duration-200 p-44
              ${isAudioPlaying
                ? "border-white text-white"
                : "border-neutral-500 text-neutral-500"}
              w-32 h-32`}
          >
            {/* icon */}
            <span className="text-5xl">
              {isAudioPlaying ? <TiLeaf /> : <TiLeaf color="#c2c2c2" />}
            </span>
          </button>

          {/* CLOSE */}
          <button
            onClick={() => setLoading(false)}
            className="text-sm opacity-60 hover:opacity-100"
          >
            Continue without sound
          </button>
        </div>
      )}

      {/* APP CONTENT */}
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar
          isAudioPlaying={isAudioPlaying}
          setIsAudioPlaying={setIsAudioPlaying}
          audioRef={audioRef}
        />
        <Hero />
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
