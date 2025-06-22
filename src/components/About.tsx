"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, Mic2 } from "lucide-react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Heart,
      title: "Tutkulu Müzik",
      description: "Her notada yaşanan duyguları, kalbin en derin seslerini dinleyicilerimizle paylaşıyoruz.",
    },
    {
      icon: Users,
      title: "Güçlü Bağ",
      description: "Müzik aracılığıyla insanları birbirine bağlayan, ortak duygular yaratan bir topluluk.",
    },
    {
      icon: Mic2,
      title: "Özgün Ses",
      description: "Kendimize has tarzımızla, müziğin evrensel dilinde özgün hikayeler anlatıyoruz.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-slate-900 relative overflow-hidden">      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Biz Kimiz?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Issızlar olarak, müziğin gücüne inanan ve her bestede bir hikaye anlatan
            bir topluluğuz. Sessizliğin en derininde yankılanan melodilerle,
            dinleyicilerimizin ruhuına dokunmaya çalışıyoruz.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Müziğimizin Hikayesi
            </h3>            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              2023 yılında kurulan Issızlar, üyelerin ortak müzik tutkusu ve yaratıcılık
              arayışından doğdu. Her bir üyemizin farklı müzik geçmişi, grubumuzun
              özgün sesini oluşturuyor.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Rock, alternatif ve indie türlerini harmanlayarak, modern dünyada
              yaşanan yalnızlık, arayış ve umut temalarını işliyoruz. Müziğimiz,
              günümüz insanının iç dünyasını yansıtan bir ayna gibi.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Daha Fazla Öğren
            </motion.button>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                }}
                className="group relative flex items-start gap-4 p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="flex-shrink-0 relative">
                  <motion.div 
                    className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </motion.div>
                  
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative z-10">                  <motion.h4 
                    className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300 font-display"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h4>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >          {[
            { number: "4", label: "Grup Üyesi" },
            { number: "15+", label: "Özgün Şarkı" },
            { number: "50+", label: "Canlı Performans" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ 
                scale: 1.05,
                y: -5,
              }}
              className="group relative text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-300"></div>
              
              <motion.div 
                className="relative z-10 text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300"
                whileHover={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="relative z-10 text-slate-300 text-lg group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-xl bg-blue-500/5 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
