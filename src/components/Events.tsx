"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Calendar, MapPin, Clock, Ticket, Search, Filter, SortAsc, Star, Grid3x3, List } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  venue: string;
  location: string;
  status: "available" | "soon" | "upcoming" | "planning";
  statusText: string;
  description: string;
  ticketPrice: string;
  category: string;
  featured: boolean;
}

export function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const events: Event[] = useMemo(() => [
    {
      id: 1,
      title: "Kış Konseri 2025",
      date: "2025-12-15",
      displayDate: "15 Aralık 2025",
      time: "20:00",
      venue: "Zorlu PSM Ana Tiyatro",
      location: "İstanbul",
      status: "available",
      statusText: "Biletler Satışta",
      description: "Yılın son konseri olarak, en sevilen şarkılarımızı canlı performansla sunuyoruz.",
      ticketPrice: "₺150 - ₺300",
      category: "konser",
      featured: true
    },
    {
      id: 2,
      title: "Bahar Akustik Seri",
      date: "2026-03-22",
      displayDate: "22 Mart 2026",
      time: "19:30",
      venue: "Babylon Bomonti",
      location: "İstanbul",
      status: "soon",
      statusText: "Yakında",
      description: "İntim bir atmosferde akustik düzenlemelerle şarkılarımızı yeniden yorumluyoruz.",
      ticketPrice: "₺120 - ₺200",
      category: "akustik",
      featured: false
    },
    {
      id: 3,
      title: "Yaz Festivali",
      date: "2026-06-15",
      displayDate: "15 Haziran 2026",
      time: "21:00",
      venue: "Rock'n Coke Sahne",
      location: "İstanbul",
      status: "upcoming",
      statusText: "Çok Yakında",
      description: "Büyük festival sahnesinde, enerji dolu bir performansla sizlerle buluşuyoruz.",
      ticketPrice: "Festival Bileti",
      category: "festival",
      featured: true
    },
    {
      id: 4,
      title: "Sonbahar Turne - Ankara",
      date: "2026-09-10",
      displayDate: "10 Eylül 2026",
      time: "20:30",
      venue: "Congresium Ankara",
      location: "Ankara",
      status: "planning",
      statusText: "Planlanıyor",
      description: "Ankara'daki hayranlarımızla buluşma zamanı. Unutulmaz bir gece için hazırlanıyoruz.",
      ticketPrice: "₺100 - ₺250",
      category: "konser",
      featured: false
    },
    {
      id: 5,
      title: "İzmir Akustik Gecesi",
      date: "2026-11-05",
      displayDate: "5 Kasım 2026",
      time: "19:00",
      venue: "Ahmed Adnan Saygun Sanat Merkezi",
      location: "İzmir",
      status: "planning",
      statusText: "Planlanıyor",
      description: "İzmir'de akustik bir gece. Şehrin huzurlu atmosferinde müziğimizle buluşalım.",
      ticketPrice: "₺90 - ₺180",
      category: "akustik",
      featured: false
    }
  ], []);

  // Filter and sort events
  const filteredAndSortedEvents = useMemo(() => {
    let filtered = [...events];
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(event => event.status === statusFilter);
    }
    
    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "name":
          return a.title.localeCompare(b.title);
        case "location":
          return a.location.localeCompare(b.location);
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [searchTerm, statusFilter, sortBy, events]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "soon":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "upcoming":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "planning":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const statusOptions = [
    { value: "all", label: "Tümü" },
    { value: "available", label: "Biletler Satışta" },
    { value: "soon", label: "Yakında" },
    { value: "upcoming", label: "Çok Yakında" },
    { value: "planning", label: "Planlanıyor" }
  ];

  const sortOptions = [
    { value: "date", label: "Tarihe Göre" },
    { value: "name", label: "İsme Göre" },
    { value: "location", label: "Şehre Göre" }
  ];

  return (
    <section id="events" ref={ref} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Yaklaşan Etkinlikler
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Canlı performanslarımızla buluşmak için yaklaşan konser ve etkinliklerimizi
            takip edin. Unutulmaz müzik deneyimleri sizi bekliyor.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Etkinlik, şehir veya mekan ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 appearance-none"
                >
                  {statusOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-slate-800">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 appearance-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-slate-800">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-600/50"
                  }`}
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-600/50"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-slate-400">
            {filteredAndSortedEvents.length} etkinlik bulundu
          </p>
        </motion.div>        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <div className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              : "grid-cols-1"
          }`}>
            {filteredAndSortedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                scale: viewMode === "grid" ? 1.03 : 1.01,
                y: -5,
              }}
              className="group relative"
            >
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Öne Çıkan
                  </div>
                </div>
              )}

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>

                {viewMode === "grid" ? (
                  // Grid Card Layout
                  <div className="relative z-10">
                    {/* Event Image */}
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                      <div className="text-6xl text-white/20">🎵</div>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title and Status */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 font-display line-clamp-2">
                          {event.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                          {event.statusText}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-slate-300">
                          <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                          <span className="text-sm">{event.displayDate}</span>
                        </div>
                        <div className="flex items-center text-slate-300">
                          <Clock className="w-4 h-4 mr-2 text-blue-400" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-slate-300">
                          <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                          <span className="text-sm">{event.venue}, {event.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      {/* Price and Action */}
                      <div className="flex items-center justify-between">
                        <div className="text-blue-400 font-bold">
                          {event.ticketPrice}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                        >
                          <Ticket className="w-4 h-4" />
                          Detay
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // List Layout
                  <div className="relative z-10 p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Event Image */}
                      <div className="w-full md:w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-4xl text-white/20">🎵</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 font-display">
                              {event.title}
                            </h3>
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(event.status)}`}>
                              {event.statusText}
                            </span>
                          </div>
                          <div className="mt-4 md:mt-0 text-right">
                            <div className="text-xl font-bold text-blue-400">{event.ticketPrice}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center text-slate-300">
                            <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                            <span>{event.displayDate}</span>
                          </div>
                          <div className="flex items-center text-slate-300">
                            <Clock className="w-4 h-4 mr-2 text-blue-400" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-slate-300">
                            <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                            <span>{event.venue}, {event.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                          <p className="text-slate-400 mb-4 md:mb-0 md:mr-4 flex-1">
                            {event.description}
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 md:flex-shrink-0"
                          >
                            <Ticket className="w-4 h-4" />
                            Detayları Gör
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>            </motion.div>
          ))}
          </div>
        </AnimatePresence>

        {/* No Results */}
        {filteredAndSortedEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-12"
          >
            <div className="text-6xl text-slate-600 mb-4">🎭</div>
            <h3 className="text-xl font-semibold text-white mb-2">Etkinlik Bulunamadı</h3>
            <p className="text-slate-400">Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-display">
            Etkinliklerden Haberdar Olun
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Yeni konser ve etkinlik duyurularını kaçırmamak için bültenimize abone olun.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Bültene Abone Ol
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}