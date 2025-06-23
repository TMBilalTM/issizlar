"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube, Music } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      value: "info@issizlar.com",
      link: "mailto:info@issizlar.com"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 (212) 555-0123",
      link: "tel:+902125550123"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "İstanbul, Türkiye",
      link: "#"
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/grup.issizlar/",
      color: "hover:text-pink-400"
    },
    {
      icon: Twitter,
      name: "Twitter",
      link: "https://twitter.com/issizlar",
      color: "hover:text-blue-400"
    },
    {
      icon: Youtube,
      name: "YouTube",
      link: "https://youtube.com/issizlar",
      color: "hover:text-red-400"
    },
    {
      icon: Music,
      name: "Spotify",
      link: "https://spotify.com/artist/issizlar",
      color: "hover:text-green-400"
    }
  ];
  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Sorularınız, işbirliği teklifleriniz veya sadece merhaba demek için
            bize ulaşabilirsiniz. Size en kısa sürede geri döneceğiz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Mesaj Gönderin</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-slate-300 mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    placeholder="Mesajınızın konusu"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>                  <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 font-medium group overflow-hidden cursor-pointer"
                >
                  {/* Button background effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <Send size={20} />
                  </motion.div>
                  <span className="relative z-10">Mesajı Gönder</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-200">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{item.title}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Sosyal Medya</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((platform, index) => (                  <motion.a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-200 text-slate-300 ${platform.color} overflow-hidden`}
                  >
                    {/* Platform-specific glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-current to-transparent"></div>
                    
                    {/* Icon animation */}
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10"
                    >
                      <platform.icon size={24} />
                    </motion.div>
                    
                    <span className="font-medium relative z-10">{platform.name}</span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Hızlı Bağlantılar</h3>
              
              <div className="space-y-3">
                {[
                  { name: "Konser Biletleri", href: "#events" },
                  { name: "Müzik Kataloğu", href: "#music" },
                  { name: "Band Hakkında", href: "#about" },
                  { name: "Basın Kiti", href: "#" }
                ].map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    className="block text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform"
                  >
                    → {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-slate-400">
            © 2025 Issızlar. Tüm hakları saklıdır. Made with ♪ in Cyprus.
          </p>
          <p className="text-slate-400 mt-2">
            Developed By{" "}
            <motion.a
              href="https://bilaltm.live"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              BilalTM
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
