import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import EnergyWeave from "./EnergyWeave";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const Hero = ({ closeLoader }) => {
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    closeLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: 1 - (e.clientY - rect.top) / rect.height,
    };
  };

  const scrollToDownload = (e) => {
    e.preventDefault();
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative h-dvh w-screen overflow-hidden hero-gradient-bg"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="select-none text-4xl font-black uppercase leading-[0.9] text-white sm:text-5xl md:text-7xl lg:text-[5.5rem]"
        >
          No plans for
          <br />
          the night
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            ?
          </span>
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="mt-3 select-none bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-4xl font-black uppercase leading-[0.9] text-transparent sm:text-5xl md:text-7xl lg:text-[5.5rem]"
        >
          Perfect
          <span className="text-amber-400">!</span>
        </motion.h1>

        <motion.a
          variants={itemVariants}
          href="#download"
          onClick={scrollToDownload}
          className="group relative z-20 mt-14 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-8 py-3.5 text-sm font-general uppercase tracking-[0.2em] text-white shadow-lg shadow-violet-500/25 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-violet-500/40"
        >
          get the app
          <span className="text-lg transition-transform duration-300 group-hover:translate-y-0.5">
            ↓
          </span>
        </motion.a>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <Canvas
          gl={{ alpha: true, antialias: true, depth: false, stencil: false }}
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]}
        >
          <EnergyWeave mouse={mouseRef} />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
