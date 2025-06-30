"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Twitter, Music, Users } from "lucide-react";

interface Member {
  id: number;
  name: string;
  role: string;
  instrument: string;
  bio: string;
  image: string;
  social: {
    instagram?: string;
    twitter?: string;
    spotify?: string;
  };
  joinDate: string;
}

export function Members() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const members: Member[] = [
    {
      id: 1,
      name: "Hasan Metecan Güzey",
      role: "Solist",
      instrument: "Vokal",
      bio: "Issızlar'ın kurucu solisti. Güçlü sesi ve sahne enerjisiyle grubun öncüsü. Türk alternatif müziğinde kendine özgü bir tarzı var.",
      image: "/team/metecan.jpg",
      social: {
        instagram: "https://instagram.com/metecang.v"
      },
      joinDate: "2025"
    },
    {
      id: 2,
      name: "Lara Bostancı",
      role: "Backvocal",
      instrument: "Vokal & Perkusyon",
      bio: "Güçlü vokal desteği ve çeşitli perkusyon aletleri ile grubun ses zenginliğini artırıyor.",
      image: "/team/lara.jpg",
      social: {
      },
      joinDate: "2025"
    },
    {
      id: 3,
      name: "Ada Yüzerçetin",
      role: "Backvocal",
      instrument: "Vokal & Perkusyon",
      bio: "Güçlü vokal desteği ve çeşitli perkusyon aletleri ile grubun ses zenginliğini artırıyor.",
      image: "/team/ada.jpg",
      social: {
        instagram: "https://instagram.com/ada_yuzerctn",
      },
      joinDate: "2025"
    },
    {
      id: 4,
      name: "Fevziye Nur Atalay",
      role: "Ukulele",
      instrument: "Ukulele",
      bio: "Ukulele virtüözü. Grubun melodik dokusuna farklı bir tat katıyor. Akustik ve elektronik müzikteki yetkinliği ile dikkat çekiyor.",
      image: "/team/karim.jpg",
      social: {
      },
      joinDate: "2025"
    },
    {
      id: 5,
      name: "Ali Üçüz",
      role: "Lead Guitar",
      instrument: "Elektro Gitar & Solo",
      bio: "Grubun gitaristi ve solo performanslarıyla dikkat çekiyor. Modern rock tınılarını geleneksel Türk melodileriyle harmanlıyor.",
      image: "/team/aliucuz.jpg",
      social: {

      },
      joinDate: "2025"
    },
    {
      id: 6,
      name: "Alperen Acar",
      role: "OE",
      instrument: "BOŞ ELEMAN (OE)",
      bio: "Grubun boş elemanı, sahne arkasında bizi eğlendirir.",
      image: "/team/alperenoc.jpg",
      social: {

      },
      joinDate: "2025"
    },
    {
      id: 7,
      name: "Mehmet Aşıksoy",
      role: "Bateri",
      instrument: "Bateri & Perküsyon",
      bio: "Grubun ritim kalbi. Dinamik bateri performanslarıyla sahnede enerjiyi yükseltiyor. Rock ve alternatif müzikteki deneyimiyle dikkat çekiyor.",
      image: "/team/mehmet.jpg",
      social: {

      },
      joinDate: "2025"
    },
    {
      id: 8,
      name: "Poyraz Ceylan",
      role: "Ritim Gitar",
      instrument: "Ritim Gitar",
      bio: "Grubun ritim gitaristi. Akustik ve elektrik gitar performanslarıyla grubun melodik yapısını güçlendiriyor. Türk rock müziğine yeni bir soluk getiriyor.",
      image: "/team/poyraz.jpg",
      social: {

      },
      joinDate: "2025"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };
  return (
    <section id="members" ref={ref} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
              Grup Üyeleri
            </h2>
          </div>          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Müziğimizin arkasındaki 8 yetenekli sanatçıyla tanışın. Her biri kendi alanında 
            uzman olan ekip üyelerimiz, Issızlar&apos;ın eşsiz sesini yaratıyor.
          </p>
        </motion.div>        {/* Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                rotateY: 5
              }}
              className="group relative"
            >
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500 h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10">                  {/* Member Image */}
                  <div className="aspect-[3/4] sm:aspect-[3/4] bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                    <img
  src={member.image}
  alt={member.name}
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.style.display = 'none';
    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
    if (fallback) fallback.classList.remove('hidden');
  }}
/>
<div className="absolute inset-0 flex items-center justify-center hidden">
  <div className="text-4xl sm:text-6xl lg:text-8xl text-white/20">👤</div>
</div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                      {/* Role Badge */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                      <div className="bg-blue-600/90 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                        {member.role}
                      </div>
                    </div>
                    
                    {/* Join Date */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                      <div className="bg-slate-800/90 backdrop-blur-sm text-slate-300 px-1 py-0.5 sm:px-2 sm:py-1 rounded-lg text-xs">
                        {member.joinDate}&apos;den beri
                      </div>
                    </div>
                  </div>                  {/* Member Info */}
                  <div className="p-3 sm:p-4 lg:p-6">
                    {/* Name */}
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 font-display">
                      {member.name}
                    </h3>
                    
                    {/* Instrument */}
                    <div className="flex items-center text-blue-400 mb-2 sm:mb-3">
                      <Music className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm font-medium">{member.instrument}</span>
                    </div>
                    
                    {/* Bio */}
                    <p className="text-slate-300 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                      {member.bio}
                    </p>
                      {/* Social Links */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      {member.social.instagram && (                        <motion.a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-600/50 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer"
                        >
                          <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-slate-300 hover:text-pink-400 transition-colors" />
                        </motion.a>
                      )}
                      
                      {member.social.twitter && (                        <motion.a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-600/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer"
                        >
                          <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-slate-300 hover:text-blue-400 transition-colors" />
                        </motion.a>
                      )}
                      
                      {member.social.spotify && (                        <motion.a
                          href={member.social.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-600/50 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer"
                        >
                          <Music className="w-3 h-3 sm:w-4 sm:h-4 text-slate-300 hover:text-green-400 transition-colors" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>        {/* Band Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">8</div>
            <div className="text-slate-300 text-xs sm:text-sm">Grup Üyesi</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">6+</div>
            <div className="text-slate-300 text-xs sm:text-sm">Yıllık Deneyim</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">100+</div>
            <div className="text-slate-300 text-xs sm:text-sm">Canlı Performans</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">5</div>
            <div className="text-slate-300 text-xs sm:text-sm">Albüm</div>
          </div>
        </motion.div>        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-display">
            Bizimle Çalışmak İster misiniz?
          </h3>
          <p className="text-slate-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Profesyonel müzik projeleri için işbirliği fırsatları ve etkinlik rezervasyonları.
          </p>          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base cursor-pointer"
          >
            İletişime Geçin
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
