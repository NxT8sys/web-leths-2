"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ───────────────────────────────────────────────
   Animation variants
   ─────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut", delay },
  }),
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

/* ───────────────────────────────────────────────
   HERO SECTION
   ─────────────────────────────────────────────── */
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.85]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: "url('/hero-gym.jpg')",
          y: imageY,
        }}
      />
      {/* Dynamic overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content — left-aligned */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
        style={{ opacity: contentOpacity }}
      >
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#A0A0A0] text-sm tracking-[0.3em] uppercase mb-4 font-light"
        >
          Amsterdam
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          className="text-white leading-[0.9] uppercase tracking-wide"
        >
          <motion.span
            custom={0.15}
            variants={fadeUp}
            className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
          >
            Real
          </motion.span>
          <motion.span
            custom={0.3}
            variants={fadeUp}
            className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
          >
            Muay Thai
          </motion.span>
        </motion.h1>

        <motion.p
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#A0A0A0] text-base sm:text-lg mt-6 max-w-md font-light leading-relaxed"
        >
          The art of 8 limbs. From beginners to fighters.
        </motion.p>

        <motion.div
          custom={0.7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center border border-white text-white text-sm tracking-[0.15em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Book Trial Session
          </a>
          <a
            href="#training"
            className="inline-flex items-center gap-2 text-white text-sm tracking-[0.15em] uppercase px-4 py-4 hover:opacity-70 transition-opacity duration-300 group"
          >
            View Schedule
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#A0A0A0] text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-[#A0A0A0]/40"
        />
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────────────
   KRU ROBERT SECTION
   ─────────────────────────────────────────────── */
function KruRobertSection() {
  return (
    <section
      id="about"
      className="relative h-screen w-full flex"
    >
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Photo — left half */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
            style={{ backgroundImage: "url('/kru-robert.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Text — right half */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-black flex items-center px-8 sm:px-12 lg:px-20">
          <div className="max-w-lg">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[#A0A0A0] text-sm tracking-[0.3em] uppercase mb-6 font-light"
            >
              About
            </motion.p>
            <motion.h2
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide leading-tight"
            >
              Kru Robert
            </motion.h2>
            <motion.div
              variants={lineReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-12 h-px bg-[#A0A0A0] mt-8 mb-8 origin-left"
            />
            <motion.p
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[#A0A0A0] text-base sm:text-lg leading-relaxed font-light"
            >
              Authentic Muay Thai discipline. No shortcuts. Whether you are
              stepping into the ring for the first time or preparing for a fight,
              this is your evolution.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────
   CLASSES SECTION
   ─────────────────────────────────────────────── */
const CLASSES = [
  {
    name: "Fundamentals",
    level: "All levels",
    detail: "Punches, Kicks, Knees, Elbows",
  },
  { name: "Drills & Heavy Bag", level: "All levels", detail: "" },
  {
    name: "Sparring & Clinching",
    level: "Intermediate / Advanced",
    detail: "",
  },
  { name: "Strength & Conditioning", level: "All levels", detail: "" },
  { name: "Youth Muay Thai", level: "10–16 yrs", detail: "" },
];

function ClassesSection() {
  return (
    <section
      id="training"
      className="h-screen w-full bg-black flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-0">
        {/* Title — left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          className="lg:w-2/5 flex items-start lg:items-center"
        >
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide leading-none">
            Training
          </h2>
        </motion.div>

        {/* List — right */}
        <div className="lg:w-3/5 flex flex-col">
          {CLASSES.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.08,
              }}
              className={`group py-5 sm:py-6 border-t border-[#A0A0A0]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 cursor-default hover:border-[#A0A0A0]/40 transition-colors duration-300 ${
                i === CLASSES.length - 1
                  ? "border-b border-[#A0A0A0]/20 hover:border-b-[#A0A0A0]/40"
                  : ""
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-white text-lg sm:text-xl tracking-[0.1em] uppercase font-light group-hover:tracking-[0.15em] transition-all duration-300">
                  {cls.name}
                </span>
                {cls.detail && (
                  <span className="hidden md:inline text-[#A0A0A0]/50 text-sm font-light">
                    — {cls.detail}
                  </span>
                )}
              </div>
              <span className="text-[#A0A0A0] text-sm tracking-[0.1em] uppercase font-light whitespace-nowrap">
                {cls.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────
   PRICING SECTION
   ─────────────────────────────────────────────── */
const PLANS = [
  {
    name: "2x A Week",
    price: "€75",
    period: "/ month",
    featured: false,
    sub: "",
  },
  {
    name: "Unlimited",
    price: "€95",
    period: "/ month",
    featured: true,
    sub: "12mo: €90/mo",
  },
  {
    name: "3x A Week",
    price: "€85",
    period: "/ month",
    featured: false,
    sub: "",
  },
];

function PricingSection() {
  return (
    <section
      id="pricing"
      className="h-screen w-full bg-black flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide mb-16 sm:mb-20"
        >
          Pricing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: i * 0.12,
              }}
              className={`group flex flex-col items-center text-center py-10 sm:py-12 px-6 transition-colors duration-300 ${
                plan.featured
                  ? "border-b-2 border-white"
                  : "border-b border-[#A0A0A0]/20"
              }`}
            >
              <p className="text-[#A0A0A0] text-sm tracking-[0.2em] uppercase mb-6 font-light">
                {plan.name}
              </p>
              <p className="text-white text-6xl sm:text-7xl font-bold tracking-tight">
                {plan.price}
              </p>
              <p className="text-[#A0A0A0] text-sm mt-2 font-light">
                {plan.period}
              </p>
              {plan.sub && (
                <p className="text-[#A0A0A0]/60 text-xs mt-1 font-light">
                  {plan.sub}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[#A0A0A0] text-sm font-light mt-10 text-center md:text-left"
        >
          Youth Subscription: €30 / month
        </motion.p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────
   FOOTER
   ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#A0A0A0] text-sm font-light text-center sm:text-left">
          Ms. van Riemsdijkeweg 59, 1033 RC Amsterdam
        </p>
        <a
          href="https://maps.google.com/?q=Ms.+van+Riemsdijkeweg+59+1033+RC+Amsterdam"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white text-sm tracking-[0.15em] uppercase font-light hover:opacity-70 transition-opacity duration-300 group"
        >
          Get Directions
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </footer>
  );
}

/* ───────────────────────────────────────────────
   PAGE
   ─────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <HeroSection />
      <KruRobertSection />
      <ClassesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
