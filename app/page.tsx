"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, BookOpen, Settings, Smartphone, Send, HelpCircle, ChevronRight, Star, X } from 'lucide-react';

export default function MasterPage() {
  const [loading, setLoading] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showReadModal, setShowReadModal] = useState(false);
  const [adReady, setAdReady] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => { 
    setTimeout(() => setLoading(false), 1500); 
  }, []);

  useEffect(() => {
    const checkAds = setInterval(() => {
      if (typeof window !== 'undefined' && window.AdstreamStarted) {
        setAdReady(true);
        clearInterval(checkAds);
      }
    }, 500);
    return () => clearInterval(checkAds);
  }, []);

  const handleDownload = () => {
    if (!adReady) {
      setDownloading(true);
      setTimeout(() => {
        setAdReady(true);
        setDownloading(false);
        triggerDownload();
      }, 1500);
      return;
    }
    triggerDownload();
  };

  const triggerDownload = () => {
    const apkUrl = "https://github.com/Lets-Share/ilmhub-releases/releases/download/V1.0/ILM_HUB.apk";
    window.open(apkUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReadNow = () => {
    setShowReadModal(true);
  };

  const handleCloseModal = () => {
    setShowReadModal(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: custom * 0.1 },
    }),
  };

  return (
    <main className="pt-20 overflow-hidden">
      {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 bg-terracotta"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 bg-coffee"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-[90vh] max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 py-20 relative z-10">
        <motion.div className="flex-1 space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-terracotta font-semibold tracking-widest text-sm uppercase flex items-center gap-2">
                <Star size={16} className="text-terracotta" /> Premium Reading Experience
              </span>
            </motion.div>
            
            <motion.h1 
              custom={0}
              variants={textVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-coffee leading-tight"
            >
              ILM HUB
            </motion.h1>
            
            <motion.div 
              custom={1}
              variants={textVariants}
              className="text-2xl md:text-4xl font-serif italic text-terracotta font-medium"
            >
              Digital Library
            </motion.div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg opacity-75 max-w-lg text-coffee leading-relaxed"
          >
            The ultimate mobile library for seekers of knowledge. Access thousands of Islamic texts, books, and resources. Read anywhere, anytime, offline.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(217, 119, 6, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownload}
              disabled={downloading}
              className="bg-terracotta text-white px-10 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-wait"
            >
              {downloading ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  Preparing...
                </>
              ) : (
                <>
                  <Download size={22} /> Download APK
                </>
              )}
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(74, 55, 40, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-coffee text-coffee px-10 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 transition-all duration-300"
            >
              Learn More <ChevronRight size={22} />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {loading ? (
              <div className="skeleton w-64 h-[500px] rounded-[3rem] border-8 border-coffee/5" />
            ) : (
              <>
                {/* Animated glow background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-coffee/20 rounded-[3rem] blur-2xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div 
                  className="w-64 rounded-[3rem] border-8 border-coffee shadow-2xl relative z-10 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02, rotateZ: 2 }}
                >
                  <Image 
                    src="/icon.jpeg" 
                    alt="App Icon"
                    fill
                    sizes="16rem"
                    className="object-cover"
                  />
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </section>

      {/* --- AD SLOT 1: Top Banner (After Hero) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 my-6 sm:my-8"
      >
        <div className="border-2 border-coffee/20 rounded-2xl p-4 sm:p-6 bg-white/50 backdrop-blur-md text-center">
          <p className="text-xs text-coffee/60 mb-4 font-semibold uppercase">Advertisement</p>
          <div id="ad-slot-1" className="w-full max-w-full overflow-hidden min-h-[180px] sm:min-h-[250px] md:min-h-[300px]">
            <div className="w-full flex items-center justify-center bg-terracotta/5 rounded-xl text-coffee/60 text-sm italic" style={{ minHeight: '180px' }}>
              Ad Slot 1 - Replace with your Adsterra code
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- LIBRARY SECTION --- */}
      <section id="library" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-terracotta via-transparent to-coffee"
            animate={{ x: [-1000, 1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-serif font-bold text-coffee mb-4"
            >
              Virtual Library Preview
            </motion.h2>
            <motion.div className="h-1 w-24 bg-gradient-to-r from-terracotta to-coffee mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { title: "Book 1", author: "Author", desc: "Book description", image: "/books/33.png" },
              { title: "Book 2", author: "Author", desc: "Book description", image: "/books/39.png" },
              { title: "Book 3", author: "Author", desc: "Book description", image: "/books/Math.png" },
              { title: "Book 4", author: "Author", desc: "Book description", image: "/books/قصیدہ بردہ شریف سے روحانی علاج.png" }
            ].map((book, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(74, 55, 40, 0.15)" }}
                className="group bg-white/80 backdrop-blur-md border-2 border-coffee/20 p-8 rounded-3xl text-left space-y-6 cursor-pointer transition-all duration-300"
              >
                <motion.div 
                  className="w-full aspect-3/4 bg-gradient-to-br from-terracotta/20 to-coffee/20 rounded-2xl flex items-center justify-center group-hover:from-terracotta/30 group-hover:to-coffee/30 transition-all overflow-hidden relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image 
                    src={book.image} 
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-2xl"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <motion.div
                    className="hidden absolute inset-0 items-center justify-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <BookOpen size={64} className="text-coffee/50 group-hover:text-terracotta/70 transition-colors" />
                  </motion.div>
                </motion.div>
                <div className="space-y-2">
                  <h3 className="font-bold text-coffee text-lg group-hover:text-terracotta transition-colors">{book.title}</h3>
                  <p className="text-xs font-semibold text-terracotta opacity-80">by {book.author}</p>
                  <p className="text-sm opacity-70 text-coffee leading-relaxed">{book.desc}</p>
                </div>
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(217, 119, 6, 0.15)" }}
                  onClick={handleReadNow}
                  className="w-full text-xs font-bold text-terracotta border border-terracotta/30 uppercase tracking-widest py-2 px-4 rounded-lg transition-all hover:border-terracotta/60"
                >
                  Read Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- AD SLOT 2: Vertical Ad (Between Sections) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 my-6 sm:my-8"
      >
        <div className="border-2 border-coffee/20 rounded-2xl p-4 sm:p-6 bg-white/50 backdrop-blur-md text-center">
          <p className="text-xs text-coffee/60 mb-4 font-semibold uppercase">Advertisement</p>
          <div id="ad-slot-2" className="w-full max-w-full overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[250px]">
            <div className="w-full flex items-center justify-center bg-terracotta/5 rounded-xl text-coffee/60 text-sm italic" style={{ minHeight: '180px' }}>
              Ad Slot 2 - Replace with your Adsterra code
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- INSTALLATION SECTION --- */}
      <section id="install" className="py-20 md:py-32 max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-coffee mb-4">3-Step Installation</h2>
          <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto">Get started in just a few minutes</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Download, title: "Download APK", desc: "Download the verified APK", details: "Our APK is 45MB, scanned with VirusTotal (100% clean), and certified safe. Latest version: 2.4.1" },
            { icon: Settings, title: "Enable Installation", desc: "Allow app from unknown sources", details: "Settings > Security > Unknown Sources. Required for apps outside Google Play Store." },
            { icon: Smartphone, title: "Install & Start", desc: "Complete setup and begin reading", details: "Requires Android 7.0+. Installation takes 30 seconds. Zero tracking, zero ads." }
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white/80 border border-coffee/10 rounded-2xl p-6 md:p-8 text-left shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-coffee text-parchment rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-terracotta uppercase tracking-wider">Step {index + 1}</span>
                    <h4 className="font-bold text-lg text-coffee leading-tight">{step.title}</h4>
                  </div>
                </div>
                <p className="text-sm font-medium text-coffee mb-2">{step.desc}</p>
                <p className="text-xs opacity-60 text-coffee leading-relaxed">{step.details}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- AD SLOT 3: Horizontal Ad (Between Installation & FAQ) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 my-6 sm:my-8"
      >
        <div className="border-2 border-coffee/20 rounded-2xl p-4 sm:p-6 bg-white/50 backdrop-blur-md text-center">
          <p className="text-xs text-coffee/60 mb-4 font-semibold uppercase">Advertisement</p>
          <div id="ad-slot-3" className="w-full max-w-full overflow-hidden min-h-[180px] sm:min-h-[220px] md:min-h-[280px]">
            <div className="w-full flex items-center justify-center bg-terracotta/5 rounded-xl text-coffee/60 text-sm italic" style={{ minHeight: '180px' }}>
              Ad Slot 3 - Replace with your Adsterra code
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-32 relative overflow-hidden bg-gradient-to-b from-coffee/90 via-coffee/85 to-coffee/90">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-parchment mb-4 flex items-center justify-center gap-3">
              <motion.div animate={{ rotate: [0, 20, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <HelpCircle className="text-terracotta" size={40} />
              </motion.div>
              Common Questions
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { q: "Is the app really free and safe?", a: "Yes, 100% free forever with no hidden charges. Our APK is scanned daily with VirusTotal and Google Play Security certified. We collect zero personal data - complete privacy guaranteed." },
              { q: "What if I don't have internet?", a: "Download any book to your phone and read offline indefinitely. Works perfectly without WiFi or data. Ideal for travel, commute, or areas with poor connectivity." },
              { q: "How many books are in the library?", a: "Over 5,000 authentic Islamic texts including complete Quran with Tafsir, Hadith collections (Sahih Bukhari, Muslim, etc.), Islamic jurisprudence guides, and Seerah. Library updates every week." },
              { q: "Is my personal data tracked?", a: "Never. We don't collect reading history, browsing data, location, or personal information. No ads, no trackers, no third-party analytics. Your privacy is completely protected." },
              { q: "What Android versions are supported?", a: "Android 7.0 (2016) and newer. Works on 98% of active Android devices. Requires minimum 512MB RAM. Check your Android version in Settings > About." },
              { q: "Can I bookmark and take notes?", a: "Yes. Full annotation tools included - highlight text, add bookmarks, write notes, and search across your library. All features available offline." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full bg-parchment/20 backdrop-blur-md border-2 border-terracotta/40 hover:border-terracotta/80 p-6 rounded-2xl text-left flex items-center justify-between transition-all duration-300 group-hover:bg-parchment/30"
                  whileHover={{ paddingLeft: 24 }}
                >
                  <span className="font-bold text-parchment text-lg">{item.q}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="text-terracotta" size={24} />
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedFaq === index ? 1 : 0, height: expandedFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-terracotta/20 border-l-4 border-terracotta p-6 mt-2 rounded-lg">
                    <p className="text-parchment/90 leading-relaxed">{item.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- AD SLOT 4: Bottom Banner (Before Contact) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 my-6 sm:my-8"
      >
        <div className="border-2 border-coffee/20 rounded-2xl p-4 sm:p-6 bg-white/50 backdrop-blur-md text-center">
          <p className="text-xs text-coffee/60 mb-4 font-semibold uppercase">Advertisement</p>
          <div id="ad-slot-4" className="w-full max-w-full overflow-hidden min-h-[180px] sm:min-h-[250px] md:min-h-[300px]">
            <div className="w-full flex items-center justify-center bg-terracotta/5 rounded-xl text-coffee/60 text-sm italic" style={{ minHeight: '180px' }}>
              Ad Slot 4 - Replace with your Adsterra code
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md p-12 md:p-16 border-2 border-coffee/20 rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6 flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-5xl md:text-5xl font-serif font-bold text-coffee"
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-lg opacity-70 leading-relaxed text-coffee"
              >
                Have questions or feedback? Our team is here to help you expand your digital library and enhance your reading experience.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-terracotta to-coffee rounded-full flex items-center justify-center text-white"
                  >
                    <Send size={20} />
                  </motion.div>
                  <div>
                    <p className="font-bold text-coffee">Email Support</p>
                    <p className="text-sm opacity-60">support@ilmhub.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-coffee to-terracotta rounded-full flex items-center justify-center text-white"
                  >
                    <HelpCircle size={20} />
                  </motion.div>
                  <div>
                    <p className="font-bold text-coffee">Help Center</p>
                    <p className="text-sm opacity-60">Visit our documentation</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.input 
                variants={itemVariants}
                type="text" 
                placeholder="Your Name"
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(217, 119, 6, 0.2)" }}
                className="w-full p-4 rounded-xl border-2 border-coffee/20 focus:border-terracotta/50 bg-white/50 text-coffee placeholder-coffee/40 focus:outline-none transition-all"
              />
              <motion.input 
                variants={itemVariants}
                type="email" 
                placeholder="Your Email"
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(217, 119, 6, 0.2)" }}
                className="w-full p-4 rounded-xl border-2 border-coffee/20 focus:border-terracotta/50 bg-white/50 text-coffee placeholder-coffee/40 focus:outline-none transition-all"
              />
              <motion.textarea 
                variants={itemVariants}
                placeholder="Your Message"
                rows={4}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(217, 119, 6, 0.2)" }}
                className="w-full p-4 rounded-xl border-2 border-coffee/20 focus:border-terracotta/50 bg-white/50 text-coffee placeholder-coffee/40 focus:outline-none transition-all resize-none"
              />
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(217, 119, 6, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = `mailto:support@ilmhub.com?subject=Contact%20from%20ILM%20HUB&body=Name:%20%0AEmail:%20%0AMessage:%20`}
                className="w-full bg-gradient-to-r from-terracotta to-coffee text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Send size={20} /> Send Message
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {showReadModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl border-2 border-coffee/10 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-coffee/10 flex items-center justify-center text-coffee hover:bg-coffee/20 transition-colors"
            >
              <X size={20} />
            </motion.button>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-br from-terracotta to-coffee rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <Download size={40} className="text-white" />
            </motion.div>

            <h3 className="text-3xl font-serif font-bold text-coffee mb-4">Download the App</h3>
            <p className="text-coffee/70 mb-8 leading-relaxed">
              To read this book and access our complete library of Islamic texts, please download the ILM HUB app. Available for Android 7.0 and above.
            </p>

            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(217, 119, 6, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  handleCloseModal();
                  triggerDownload();
                }}
                className="w-full bg-terracotta text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg"
              >
                <Download size={22} /> Download APK Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCloseModal}
                className="w-full border-2 border-coffee/20 text-coffee py-3 rounded-2xl font-bold hover:bg-coffee/5 transition-colors"
              >
                Maybe Later
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* --- FOOTER --- */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 border-t border-coffee/10 mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <motion.p 
            className="text-coffee/60 font-serif text-lg"
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2024 ILM HUB. All rights reserved. | Built with ❤️
          </motion.p>
          <div className="flex justify-center gap-6 pt-4">
            {["Privacy", "Terms", "Sitemap"].map((link, i) => (
              <motion.a
                key={i}
                href={`/${link.toLowerCase()}`}
                whileHover={{ color: "#D97706", scale: 1.1 }}
                className="text-coffee/50 text-sm font-medium transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </main>
  );
}