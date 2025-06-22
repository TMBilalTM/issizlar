"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Music } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} id="home" className="relative h-screen overflow-hidden">      {/* Background with parallax effect */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
      >        {/* Background Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: -15 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute left-8 top-1/2 transform -translate-y-1/2"
        >
          <div className="relative w-80 h-80 opacity-8 select-none pointer-events-none">
            <Image
              src="/logos/main_logo.jpg"
              alt="Issızlar Background Logo"
              fill
              className="object-cover rounded-full filter grayscale"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center">        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 font-display"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span className="block">Issızlar</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
          >
            Ruhun derinliklerinden gelen melodiler,
            <br />
            kalbin sessizliğinde yankılanan şarkılar
          </motion.p>          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 overflow-hidden group cursor-pointer"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-pulse"></div>
              
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Play size={20} />
              </motion.div>
              <span className="relative z-10">Müziklerimizi Dinle</span>
            </motion.button>            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="relative border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm group overflow-hidden cursor-pointer"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.div
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 0.5 }}
              >
                <Music size={20} />
              </motion.div>
              <span className="relative z-10">Daha Fazla Keşfet</span>
            </motion.button>
          </motion.div>          {/* Floating music notes animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => {
              // Pre-defined values to avoid hydration mismatch
              const durations = [8.5, 9.2, 7.8, 10.1, 8.9, 9.7, 7.5, 8.3, 9.8, 8.1, 9.5, 7.9];
              const fontSizes = [24, 32, 28, 36, 26, 30, 34, 22, 38, 25, 33, 29];
              const noteTypes = ['♪', '♫', '♬', '🎵', '🎶', '♪', '♫', '♬', '🎵', '🎶', '♪', '♫'];
              
              return (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0, 
                    y: 100,
                    x: 100 + (i * 80),
                    scale: 0,
                    rotate: 0
                  }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [100, -200],
                    x: [
                      100 + (i * 80), 
                      200 + (i * 60)
                    ],
                    scale: [0, 1.2, 1, 0],
                    rotate: [0, 360, 720],
                  }}
                  transition={{
                    duration: durations[i],
                    delay: i * 0.8,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="absolute text-blue-400/20 select-none"
                  style={{
                    fontSize: `${fontSizes[i]}px`,
                    left: `${10 + (i * 8) % 80}%`,
                    top: "90%",
                  }}
                >
                  {noteTypes[i]}
                </motion.div>
              );
            })}            
            {/* Floating geometric shapes */}
            {[...Array(8)].map((_, i) => {
              // Pre-defined durations to avoid hydration mismatch
              const shapeDurations = [18, 22, 16, 25, 19, 21, 17, 24];
              
              return (
                <motion.div
                  key={`shape-${i}`}
                  className="absolute w-2 h-2 bg-blue-500/10 rounded-full"
                  initial={{
                    x: 100 + (i * 100),
                    y: 200 + (i * 50),
                  }}
                  animate={{
                    x: [
                      100 + (i * 100),
                      200 + (i * 80),
                    ],
                    y: [
                      200 + (i * 50),
                      100 + (i * 70),
                    ],
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: shapeDurations[i],
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 2,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
