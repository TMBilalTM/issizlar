"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Pause, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Music() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);
  const albums = [
    {
      id: 1,
      title: "Sessizliğin Derinliği",
      year: "2025",
      cover: "/album-1.jpg",
      description: "İlk albümümüz, modern yaşamın yalnızlığını ve iç dünyamızın derinliklerini keşfediyor.",
      tracks: [
        { name: "Kaybolmuş Rüyalar", duration: "4:23" },
        { name: "Gecenin Sessizliği", duration: "3:45" },
        { name: "Uzak Anılar", duration: "5:12" },
        { name: "Yalnızlığın Şarkısı", duration: "4:01" },
      ],
    },
    {
      id: 2,
      title: "Umudun Işığı",
      year: "2025",
      cover: "/album-2.jpg",
      description: "İkinci albümümüzde, karanlığın ardından gelen ışığı ve yeniden doğuşu anlatıyoruz.",
      tracks: [
        { name: "Yeni Başlangıç", duration: "3:58" },
        { name: "Işığın Peşinde", duration: "4:31" },
        { name: "Umudun Gücü", duration: "5:05" },
        { name: "Özgürlük", duration: "4:44" },
      ],
    },
  ];

  const handlePlayPause = (trackIndex: number) => {
    if (playingTrack === trackIndex) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackIndex);
    }
  };

  return (
    <section id="music" ref={ref} className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Müziklerimiz
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ruhun derinliklerinden çıkan melodiler, kalbin en samimi anlarını
            ifade eden şarkılarımızı keşfedin.
          </p>
        </motion.div>

        {/* Albums Grid */}
        <div className="space-y-16">
          {albums.map((album, albumIndex) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: albumIndex * 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Album Cover & Info */}
              <div className={`${albumIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-6xl text-white/20">♪</div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Play size={32} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                <div className="mt-6 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2 font-display">{album.title}</h3>
                  <p className="text-slate-400 text-lg mb-4">{album.year}</p>
                  <p className="text-slate-300 leading-relaxed">{album.description}</p>
                </div>
              </div>

              {/* Track List */}
              <div className={`${albumIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <h4 className="text-xl font-semibold text-white mb-6">Şarkı Listesi</h4>
                  <div className="space-y-3">
                    {album.tracks.map((track, trackIndex) => {
                      const globalTrackIndex = albumIndex * 10 + trackIndex;
                      const isPlaying = playingTrack === globalTrackIndex;
                      
                      return (
                        <motion.div
                          key={trackIndex}
                          whileHover={{ x: 5 }}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group cursor-pointer"
                          onClick={() => handlePlayPause(globalTrackIndex)}
                        >
                          <div className="flex items-center gap-4">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-600/40 transition-all duration-200"
                            >
                              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                            </motion.button>
                            <div>
                              <div className="text-white font-medium">{track.name}</div>
                              <div className="text-slate-400 text-sm">{track.duration}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 text-slate-400 hover:text-white transition-colors duration-200"
                            >
                              <Download size={16} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 text-slate-400 hover:text-white transition-colors duration-200"
                            >
                              <ExternalLink size={16} />
                            </motion.button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>        {/* Streaming Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-display">Müziklerimizi Dinleyin</h3>            {/* Infinite Scrolling Platform Icons */}
          <div className="relative overflow-hidden bg-slate-800/5 backdrop-blur-md rounded-3xl py-20 border border-slate-700/10 shadow-2xl">
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-slate-900/95 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-slate-900/95 to-transparent z-10"></div>            <motion.div
              className="flex items-center gap-24 scrolling-platforms"
              style={{ width: "max-content" }}
            >
              {/* First set of platforms */}
              {[
                { 
                  name: "Spotify", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
                  color: "hover:bg-green-500/20 hover:border-green-500/40",
                  bgColor: "bg-green-500/8",
                  textColor: "text-green-400"
                },
                { 
                  name: "Apple Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg",
                  color: "hover:bg-white/15 hover:border-white/30",
                  bgColor: "bg-white/8",
                  textColor: "text-white"
                },
                { 
                  name: "YouTube Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg",
                  color: "hover:bg-red-500/20 hover:border-red-500/40",
                  bgColor: "bg-red-500/8",
                  textColor: "text-red-400"
                },
                { 
                  name: "SoundCloud", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Antu_soundcloud.svg",
                  color: "hover:bg-orange-500/20 hover:border-orange-500/40",
                  bgColor: "bg-orange-500/8",
                  textColor: "text-orange-400"
                },                { 
                  name: "Deezer", 
                  logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FEAA2D'%3E%3Cpath d='M18.81 10.74h3.44v1.75h-3.44v-1.75zm0 2.69h3.44v1.75h-3.44v-1.75zm-4.62-2.69h3.44v1.75h-3.44v-1.75zm0 2.69h3.44v1.75h-3.44v-1.75zm0-5.37h3.44v1.75h-3.44V8.06zm-4.63 2.68h3.44v1.75H9.56v-1.75zm0 2.69h3.44v1.75H9.56v-1.75zm0-5.37h3.44v1.75H9.56V8.06zm0 8.06h3.44v1.75H9.56v-1.75zm-4.62-5.37h3.44v1.75H4.94v-1.75zm0 2.69h3.44v1.75H4.94v-1.75zm0-5.38h3.44v1.75H4.94V8.06zm0 8.06h3.44v1.75H4.94v-1.75zm0-10.75h3.44v1.75H4.94V5.37z'/%3E%3C/svg%3E",
                  color: "hover:bg-purple-500/20 hover:border-purple-500/40",
                  bgColor: "bg-purple-500/8",
                  textColor: "text-purple-400"
                },
                { 
                  name: "Amazon Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Amazon_Music_%28Logo%29.svg/450px-Amazon_Music_%28Logo%29.svg.png",
                  color: "hover:bg-blue-500/20 hover:border-blue-500/40",
                  bgColor: "bg-blue-500/8",
                  textColor: "text-blue-400"
                },

                { 
                  name: "Pandora",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Pandora_wordmark.svg/500px-Pandora_wordmark.svg.png",
                  color: "hover:bg-indigo-500/20 hover:border-indigo-500/40",
                  bgColor: "bg-indigo-500/8",
                  textColor: "text-indigo-400"
                },
              ].concat([
                // Duplicate set for seamless loop
                { 
                  name: "Spotify", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
                  color: "hover:bg-green-500/20 hover:border-green-500/40",
                  bgColor: "bg-green-500/8",
                  textColor: "text-green-400"
                },
                { 
                  name: "Apple Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg",
                  color: "hover:bg-white/15 hover:border-white/30",
                  bgColor: "bg-white/8",
                  textColor: "text-white"
                },
                { 
                  name: "YouTube Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg",
                  color: "hover:bg-red-500/20 hover:border-red-500/40",                  bgColor: "bg-red-500/8",
                  textColor: "text-red-400"
                },
                { 
                  name: "SoundCloud", 
                  logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff5500'%3E%3Cpath d='M1.175 12.225c-.051 0-.094-.041-.094-.094l-.012-2.384c.012-.051.043-.094.094-.094.053 0 .096.043.096.094l.012 2.384c0 .053-.043.094-.096.094zm1.12-.094c0 .055-.045.094-.098.094-.055 0-.098-.039-.098-.094l-.01-3.15c0-.057.043-.096.098-.096.053 0 .098.039.098.096l.01 3.15zm1.328 0c0 .055-.045.094-.1.094-.053 0-.096-.039-.096-.094l-.012-4.119c0-.055.043-.096.096-.096.055 0 .1.041.1.096l.012 4.119zm1.508 0c0 .055-.043.094-.098.094-.053 0-.094-.039-.094-.094l-.014-4.99c0-.055.041-.098.094-.098.055 0 .098.043.098.098l.014 4.99zm1.62 0c0 .055-.045.094-.1.094-.053 0-.096-.039-.096-.094l-.012-5.457c0-.055.043-.098.096-.098.055 0 .1.043.1.098l.012 5.457zm1.718-.002c0 .057-.043.096-.098.096-.053 0-.094-.039-.094-.096l-.014-6.363c0-.055.041-.096.094-.096.055 0 .098.041.098.096l.014 6.363zm1.8-.094c0 .055-.043.094-.096.094-.055 0-.098-.039-.098-.094l-.012-6.457c0-.055.043-.098.098-.098.053 0 .096.043.096.098l.012 6.457zm2.035.094c0 .055-.045.094-.1.094-.053 0-.096-.039-.096-.094l-.012-7.83c0-.055.043-.098.096-.098.055 0 .1.043.1.098l.012 7.83zm1.2-.094c0 .055-.043.094-.098.094-.053 0-.094-.039-.094-.094l-.014-7.924c0-.055.041-.098.094-.098.055 0 .098.043.098.098l.014 7.924zm1.328 0c0 .055-.045.094-.1.094-.053 0-.096-.039-.096-.094l-.012-7.832c0-.055.043-.098.096-.098.055 0 .1.043.1.098l.012 7.832zm3.434.094c-.408 0-.777-.086-1.115-.258-.338-.172-.604-.406-.799-.703-.195-.297-.293-.627-.293-.99 0-.363.098-.693.293-.99.195-.297.461-.531.799-.703.338-.172.707-.258 1.115-.258.408 0 .777.086 1.115.258.338.172.604.406.799.703.195.297.293.627.293.99 0 .363-.098.693-.293.99-.195.297-.461.531-.799.703-.338.172-.707.258-1.115.258z'/%3E%3C/svg%3E",
                  color: "hover:bg-orange-500/20 hover:border-orange-500/40",
                  bgColor: "bg-orange-500/8",
                  textColor: "text-orange-400"
                },
                { 
                  name: "Deezer", 
                  logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FEAA2D'%3E%3Cpath d='M18.81 10.74h3.44v1.75h-3.44v-1.75zm0 2.69h3.44v1.75h-3.44v-1.75zm-4.62-2.69h3.44v1.75h-3.44v-1.75zm0 2.69h3.44v1.75h-3.44v-1.75zm0-5.37h3.44v1.75h-3.44V8.06zm-4.63 2.68h3.44v1.75H9.56v-1.75zm0 2.69h3.44v1.75H9.56v-1.75zm0-5.37h3.44v1.75H9.56V8.06zm0 8.06h3.44v1.75H9.56v-1.75zm-4.62-5.37h3.44v1.75H4.94v-1.75zm0 2.69h3.44v1.75H4.94v-1.75zm0-5.38h3.44v1.75H4.94V8.06zm0 8.06h3.44v1.75H4.94v-1.75zm0-10.75h3.44v1.75H4.94V5.37z'/%3E%3C/svg%3E",
                  color: "hover:bg-purple-500/20 hover:border-purple-500/40",
                  bgColor: "bg-purple-500/8",
                  textColor: "text-purple-400"
                },
                { 
                  name: "Amazon Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon_Music_logo.svg",
                  color: "hover:bg-blue-500/20 hover:border-blue-500/40",
                  bgColor: "bg-blue-500/8",
                  textColor: "text-blue-400"
                },
                { 
                  name: "Tidal", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Tidal_Logo.svg",
                  color: "hover:bg-cyan-500/20 hover:border-cyan-500/40",
                  bgColor: "bg-cyan-500/8",
                  textColor: "text-cyan-400"
                },
                { 
                  name: "Pandora", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Pandora_logo.svg",
                  color: "hover:bg-indigo-500/20 hover:border-indigo-500/40",
                  bgColor: "bg-indigo-500/8",
                  textColor: "text-indigo-400"
                },
              ]).map((platform, index) => (
                <motion.div
                  key={`${platform.name}-${index}`}
                  className="flex-shrink-0 group/item"
                  whileHover={{ scale: 1.08 }}
                >
                  <div className={`
                    relative w-40 h-36 ${platform.bgColor} ${platform.color}
                    rounded-2xl flex flex-col items-center justify-center 
                    transition-all duration-300 cursor-pointer
                    border border-slate-700/30 hover:border-slate-600/60
                    backdrop-blur-lg shadow-lg hover:shadow-2xl
                    transform-gpu group-hover/item:backdrop-blur-xl
                  `}>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/8 to-transparent"></div>
                      {/* Platform Logo */}
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Image 
                        src={platform.logo} 
                        alt={platform.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain filter brightness-90 group-hover/item:brightness-110 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Platform name */}
                    <div className={`text-sm font-medium ${platform.textColor} group-hover/item:text-white transition-colors duration-300 text-center px-2`}>
                      {platform.name}
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 transform rotate-45"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Tüm Platformlarda Dinle
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
