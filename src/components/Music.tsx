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

  return (    <section id="music" ref={ref} className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display text-white">
            Müziklerimiz
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ruhun derinliklerinden çıkan melodiler, kalbin en samimi anlarını
            ifade eden şarkılarımızı keşfedin.
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-8 gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-700"></div>
          </div>
        </motion.div>        {/* Albums Grid */}
        <div className="space-y-24">
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
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="relative group perspective-1000"
                >                  <div className="aspect-square bg-slate-800/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    {/* Album cover background */}
                    <div className="w-full h-full bg-slate-700/40 flex items-center justify-center relative overflow-hidden">
                      {/* Animated background particles */}
                      <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + i * 10}%`,
                            }}
                            animate={{
                              y: [-10, 10, -10],
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 3 + i * 0.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Main music icon */}
                      <motion.div 
                        className="text-8xl text-white/40 group-hover:text-white/60 transition-all duration-500"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        ♪
                      </motion.div>
                      
                      {/* Vinyl record effect */}
                      <motion.div
                        className="absolute inset-8 border-4 border-white/10 rounded-full"
                        animate={{ rotate: playingTrack !== null ? 360 : 0 }}
                        transition={{ duration: 4, repeat: playingTrack !== null ? Infinity : 0, ease: "linear" }}
                      />
                    </div>
                      {/* Hover overlay with enhanced effects */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-6 text-white hover:bg-white/30 transition-all duration-300 shadow-2xl cursor-pointer"
                      >
                        <Play size={40} className="ml-1" />
                      </motion.button>
                    </div>
                      {/* Glowing edge effect */}
                    <div className="absolute inset-0 rounded-3xl bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>
                </motion.div>

                <motion.div 
                  className="mt-8 text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: albumIndex * 0.3 + 0.3 }}
                >                  <h3 className="text-4xl font-bold mb-3 font-display text-white">
                    {album.title}
                  </h3>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <span className="text-blue-400 text-lg font-medium">{album.year}</span>
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-400 text-lg">{album.tracks.length} Şarkı</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg">{album.description}</p>
                  
                  {/* Album stats */}
                  <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">15.2K</div>
                      <div className="text-slate-400 text-sm">Dinlenme</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">892</div>
                      <div className="text-slate-400 text-sm">Beğeni</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">4.8</div>
                      <div className="text-slate-400 text-sm">Puan</div>
                    </div>
                  </div>
                </motion.div>
              </div>              {/* Track List */}
              <div className={`${albumIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div 
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-2xl font-bold text-white font-display">Şarkı Listesi</h4>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-sm">{album.tracks.length} şarkı</span>
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      <span className="text-sm">19 dk</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {album.tracks.map((track, trackIndex) => {
                      const globalTrackIndex = albumIndex * 10 + trackIndex;
                      const isPlaying = playingTrack === globalTrackIndex;
                      
                      return (
                        <motion.div
                          key={trackIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: albumIndex * 0.3 + trackIndex * 0.1 }}
                          whileHover={{ x: 8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                          className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer border border-transparent hover:border-white/10"
                          onClick={() => handlePlayPause(globalTrackIndex)}
                        >
                          <div className="flex items-center gap-4 flex-1">
                            {/* Track number / Play button */}
                            <div className="w-12 h-12 flex items-center justify-center">
                              <motion.div
                                className={`
                                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
                                  ${isPlaying 
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                                    : 'bg-white/10 text-slate-300 group-hover:bg-blue-600/20 group-hover:text-blue-400'
                                  }
                                `}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {isPlaying ? (
                                  <Pause size={16} />
                                ) : (
                                  <span className="text-sm font-medium group-hover:hidden">
                                    {trackIndex + 1}
                                  </span>
                                )}
                                {!isPlaying && (
                                  <Play size={16} className="hidden group-hover:block ml-0.5" />
                                )}
                              </motion.div>
                            </div>
                            
                            {/* Track info */}
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-medium text-lg group-hover:text-blue-100 transition-colors duration-200 truncate">
                                {track.name}
                              </div>
                              <div className="text-slate-400 text-sm mt-1">Issızlar</div>
                            </div>
                            
                            {/* Duration */}
                            <div className="text-slate-400 text-sm font-mono">
                              {track.duration}
                            </div>
                          </div>
                          
                          {/* Action buttons */}
                          <div className="flex items-center gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 cursor-pointer"
                            >
                              <Download size={16} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 cursor-pointer"
                            >
                              <ExternalLink size={16} />
                            </motion.button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Album actions */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                    >
                      Tüm Albümü Çal
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 border border-white/20 cursor-pointer"
                    >
                      Favorilere Ekle
                    </motion.button>
                  </div>                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>        {/* Streaming Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4 font-display">Müziklerimizi Dinleyin</h3>
            <p className="text-slate-300 text-lg">Favori müzik platformunuzdan şarkılarımıza ulaşabilirsiniz</p>
          </div>          {/* Enhanced Platform Grid */}
          <div className="relative overflow-hidden bg-slate-800/30 backdrop-blur-2xl rounded-3xl py-16 border border-white/10 shadow-2xl">
            {/* Simple overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-slate-900/90 z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-slate-900/90 z-10 pointer-events-none"></div>

            <motion.div
              className="flex items-center gap-8 scrolling-platforms-enhanced"
              style={{ width: "max-content" }}
            >              {[
                { 
                  name: "Spotify", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
                  color: "hover:shadow-green-500/30",
                  bgColor: "bg-green-500/15",
                  textColor: "text-green-400",
                  users: "2.1M+"
                },
                { 
                  name: "Apple Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg",
                  color: "hover:shadow-white/30",
                  bgColor: "bg-white/15",
                  textColor: "text-white",
                  users: "1.8M+"
                },
                { 
                  name: "YouTube Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg",
                  color: "hover:shadow-red-500/30",
                  bgColor: "bg-red-500/15",
                  textColor: "text-red-400",
                  users: "3.2M+"
                },
                { 
                  name: "SoundCloud", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Antu_soundcloud.svg",
                  color: "hover:shadow-orange-500/30",
                  bgColor: "bg-orange-500/15",
                  textColor: "text-orange-400",
                  users: "890K+"
                },
                { 
                  name: "Deezer", 
                  logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FEAA2D'%3E%3Cpath d='M18.81 10.74h3.44v1.75h-3.44v-1.75zm0 2.69h3.44v1.75h-3.44v-1.75zm-4.62-2.69h3.44v1.75h-3.44v-1.75zm0 2.69h3.44v1.75h-3.44v-1.75zm0-5.37h3.44v1.75h-3.44V8.06zm-4.63 2.68h3.44v1.75H9.56v-1.75zm0 2.69h3.44v1.75H9.56v-1.75zm0-5.37h3.44v1.75H9.56V8.06zm0 8.06h3.44v1.75H9.56v-1.75zm-4.62-5.37h3.44v1.75H4.94v-1.75zm0 2.69h3.44v1.75H4.94v-1.75zm0-5.38h3.44v1.75H4.94V8.06zm0 8.06h3.44v1.75H4.94v-1.75zm0-10.75h3.44v1.75H4.94V5.37z'/%3E%3C/svg%3E",
                  color: "hover:shadow-yellow-500/30",
                  bgColor: "bg-yellow-500/15",
                  textColor: "text-yellow-400",
                  users: "654K+"
                },
                { 
                  name: "Amazon Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Amazon_Music_%28Logo%29.svg/450px-Amazon_Music_%28Logo%29.svg.png",
                  color: "hover:shadow-blue-500/30",
                  bgColor: "bg-blue-500/15",
                  textColor: "text-blue-400",
                  users: "1.2M+"
                },
              ].concat([
                // Duplicate for seamless scroll
                { 
                  name: "Spotify", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
                  color: "hover:shadow-green-500/30",
                  bgColor: "bg-green-500/15",
                  textColor: "text-green-400",
                  users: "2.1M+"
                },
                { 
                  name: "Apple Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg",
                  color: "hover:shadow-white/30",
                  bgColor: "bg-white/15",
                  textColor: "text-white",
                  users: "1.8M+"
                },
                { 
                  name: "YouTube Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg",
                  color: "hover:shadow-red-500/30",
                  bgColor: "bg-red-500/15",
                  textColor: "text-red-400",
                  users: "3.2M+"
                },
                { 
                  name: "SoundCloud", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Antu_soundcloud.svg",
                  color: "hover:shadow-orange-500/30",
                  bgColor: "bg-orange-500/15",
                  textColor: "text-orange-400",
                  users: "890K+"
                },
                { 
                  name: "Deezer", 
                  logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FEAA2D'%3E%3Cpath d='M18.81 10.74h3.44v1.75h-3.44v-1.75zm0 2.69h3.44v1.75h-3.44v-1.75zm-4.62-2.69h3.44v1.75h-3.44v-1.75zm0 2.69h3.44v1.75h-3.44v-1.75zm0-5.37h3.44v1.75h-3.44V8.06zm-4.63 2.68h3.44v1.75H9.56v-1.75zm0 2.69h3.44v1.75H9.56v-1.75zm0-5.37h3.44v1.75H9.56V8.06zm0 8.06h3.44v1.75H9.56v-1.75zm-4.62-5.37h3.44v1.75H4.94v-1.75zm0 2.69h3.44v1.75H4.94v-1.75zm0-5.38h3.44v1.75H4.94V8.06zm0 8.06h3.44v1.75H4.94v-1.75zm0-10.75h3.44v1.75H4.94V5.37z'/%3E%3C/svg%3E",
                  color: "hover:shadow-yellow-500/30",
                  bgColor: "bg-yellow-500/15",
                  textColor: "text-yellow-400",
                  users: "654K+"
                },
                { 
                  name: "Amazon Music", 
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Amazon_Music_%28Logo%29.svg/450px-Amazon_Music_%28Logo%29.svg.png",
                  color: "hover:shadow-blue-500/30",
                  bgColor: "bg-blue-500/15",
                  textColor: "text-blue-400",
                  users: "1.2M+"
                },
              ]).map((platform, index) => (
                <motion.div
                  key={`${platform.name}-${index}`}
                  className="flex-shrink-0 group/platform"
                  whileHover={{ scale: 1.05, y: -5 }}
                >                  <div className={`
                    relative w-48 h-40 ${platform.bgColor}
                    rounded-2xl flex flex-col items-center justify-center 
                    transition-all duration-500 cursor-pointer
                    border border-white/20 hover:border-white/40
                    backdrop-blur-xl shadow-xl ${platform.color}
                    group-hover/platform:shadow-2xl
                  `}>                    {/* Animated background */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover/platform:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Platform Logo */}
                    <motion.div 
                      className="w-12 h-12 mb-3 flex items-center justify-center group-hover/platform:scale-110 transition-transform duration-300 z-10"
                      whileHover={{ rotate: 5 }}
                    >
                      <Image 
                        src={platform.logo} 
                        alt={platform.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain filter brightness-90 group-hover/platform:brightness-110 transition-all duration-300"
                      />
                    </motion.div>
                    
                    {/* Platform name */}
                    <div className={`text-sm font-bold ${platform.textColor} group-hover/platform:text-white transition-colors duration-300 text-center px-2 z-10`}>
                      {platform.name}
                    </div>
                    
                    {/* User count */}
                    <div className="text-xs text-slate-400 mt-1 z-10">
                      {platform.users} kullanıcı
                    </div>
                      {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover/platform:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Enhanced Call to action */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
              >
                🎵 Tüm Platformlarda Dinle
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer"
              >
                📱 Mobil Uygulamalar
              </motion.button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-slate-400">
              <div className="text-center">
                <div className="text-white font-bold text-lg">8.5M+</div>
                <div>Toplam Dinlenme</div>
              </div>
              <div className="w-px h-8 bg-slate-600"></div>
              <div className="text-center">
                <div className="text-white font-bold text-lg">25K+</div>
                <div>Aylık Dinleyici</div>
              </div>
              <div className="w-px h-8 bg-slate-600"></div>
              <div className="text-center">
                <div className="text-white font-bold text-lg">12</div>
                <div>Platform</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
