"use client";

// L-Pass Driving School Liverpool
// Single-file Next.js + Tailwind CSS page component
// Drop this into: app/page.jsx (or pages/index.jsx)
// Requires: Barlow Condensed + DM Sans fonts via next/font or Google Fonts

import { useEffect, useRef } from "react";

// ─── COLOUR TOKENS (Tailwind arbitrary values used inline) ────────────────────
// --yellow:      #FFD60A
// --charcoal:    #1C1C1E
// --charcoal-2:  #2C2C2E
// --off-white:   #F5F5F0

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PRICING = [
  {
    type: "Single Lesson",
    amount: "38",
    desc: "Per 1-hour lesson",
    save: null,
    features: ["1-hour lesson", "Manual or automatic", "Fully insured", "Door-to-door pickup"],
    featured: false,
  },
  {
    type: "Block of 10 Lessons",
    amount: "350",
    desc: "10 × 1-hour lessons",
    save: "Save £30 vs singles",
    features: ["10 full hours", "Progress tracking", "Theory tips included", "Flexible scheduling"],
    featured: true,
  },
  {
    type: "Intensive Course",
    amount: "800",
    desc: "Full intensive programme",
    save: null,
    features: ["Multiple lessons/day", "Pass in weeks, not months", "Mock test included", "Test day support"],
    featured: false,
  },
];

const BENEFITS = [
  { icon: "🚗", title: "Manual & Automatic", desc: "Choose the car type that suits you. Same expert instructors either way." },
  { icon: "📍", title: "Local Test Route Experts", desc: "We know every route used by the Liverpool DVSA test centre — inside out." },
  { icon: "👩", title: "Female Instructors Available", desc: "Prefer a female instructor? We have experienced ladies ready to help." },
  { icon: "🛡️", title: "Fully DVSA Approved", desc: "All instructors are fully qualified ADIs registered with the DVSA." },
  { icon: "📱", title: "Easy Online Booking", desc: "Book, reschedule, or cancel from your phone — no phone calls needed." },
  { icon: "🏆", title: "94% Pass Rate", desc: "Significantly above the national UK average, proven across thousands of students." },
];

const THEORY_POINTS = [
  "Hazard perception video walkthroughs",
  "Highway Code revision guides",
  "Practice mock theory tests",
  "Instructor tips on tricky questions",
  "Recommended apps & resources",
  "Included free with any lesson package",
];

const TESTIMONIALS = [
  { initials: "SJ", name: "Sophie J.", meta: "Passed · Norris Green Test Centre", text: "Passed first time after just 22 hours with L-Pass. My instructor was patient, knowledgeable, and knew every bit of the test route. Couldn't recommend more highly!" },
  { initials: "AK", name: "Amira K.", meta: "Passed · Automatic · Wavertree", text: "I was terrified of driving. My instructor made me feel completely safe and confident. Booked the block of 10 and it was worth every penny. Passed with only 2 minors!" },
  { initials: "ML", name: "Marcus L.", meta: "Passed · Aintree Test Centre", text: "Tried two other schools before L-Pass. Night and day difference. The booking app is so easy, and my instructor turned up on time every single time." },
  { initials: "PP", name: "Priya P.", meta: "Passed · Intensive Course", text: "The intensive course was perfect for me. I needed my licence quickly for a new job. Done it in 3 weeks. The theory support pack they sent was brilliant too." },
  { initials: "OW", name: "Olivia W.", meta: "Passed · Female Instructor", text: "Specifically requested a female instructor and was matched within a day. She was absolutely brilliant — calm, encouraging, and incredibly knowledgeable. Clean pass, zero majors!" },
];

// ─── SCROLL HELPER ────────────────────────────────────────────────────────────
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── CALENDLY OPEN (swap URL for your real link) ──────────────────────────────
const CALENDLY_URL = "https://calendly.com/lpass-driving"; // ← Replace this
function openCalendly() {
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank");
  }
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 h-16 bg-[#1C1C1E] border-b-4 border-[#FFD60A]">
      <span className="font-black text-xl tracking-widest uppercase text-[#FFD60A]">
        L-Pass <span className="text-white">Driving</span>
      </span>
      <button
        onClick={openCalendly}
        className="bg-[#FFD60A] text-[#1C1C1E] font-bold text-sm px-5 py-2 rounded-md uppercase tracking-wide hover:bg-[#E6C000] transition-colors"
      >
        Book a Lesson
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#1C1C1E] overflow-hidden min-h-[520px] flex items-center">
      {/* Yellow slash */}
      <div
        className="absolute top-0 right-0 h-full w-[45%] bg-[#FFD60A] hidden md:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      <div className="relative z-10 px-8 py-16 max-w-xl">
        <span className="inline-block bg-[#FFD60A] text-[#1C1C1E] text-xs font-bold px-3 py-1 rounded uppercase tracking-widest mb-5">
          🏆 Liverpool's #1 Rated School
        </span>
        <h1 className="font-black uppercase text-white leading-none tracking-tight text-6xl md:text-7xl mb-5">
          Pass Your<br />Driving Test<br />
          <span className="text-[#FFD60A]">Faster</span> in<br />Liverpool.
        </h1>
        <p className="text-gray-400 text-base mb-8 max-w-md">
          Expert instructors, flexible lessons, and a first-time pass rate that speaks for itself. Manual & automatic available.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("booking")}
            className="bg-[#FFD60A] text-[#1C1C1E] font-bold text-lg px-8 py-4 rounded-lg uppercase tracking-wide shadow-lg shadow-yellow-400/30 hover:bg-[#E6C000] hover:-translate-y-0.5 transition-all"
          >
            📅 Check Availability
          </button>
          <button
            onClick={() => scrollTo("pricing")}
            className="border-2 border-white/30 text-white font-semibold text-lg px-7 py-4 rounded-lg hover:border-[#FFD60A] hover:text-[#FFD60A] transition-colors"
          >
            View Pricing
          </button>
        </div>
        <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
          {[["94%", "First-Time Pass Rate"], ["2,400+", "Pupils Passed"], ["12yr", "Experience"]].map(([num, label]) => (
            <div key={label}>
              <div className="font-black text-3xl text-[#FFD60A]">{num}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="booking" className="bg-[#1C1C1E] py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute top-[-60px] left-[-60px] w-48 h-48 bg-[#FFD60A] rounded-full opacity-[0.06]" />
      <div className="absolute bottom-[-40px] right-[-40px] w-40 h-40 bg-[#FFD60A] rounded-full opacity-[0.06]" />
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#E6C000] mb-3">Step 1 — Get Started</p>
        <h2 className="font-black uppercase text-white text-4xl md:text-5xl mb-4">
          Check Available<br />Lessons Now
        </h2>
        <p className="text-gray-400 text-base max-w-md mx-auto mb-10">
          Pick a time that works for you. Lessons available 7 days a week, mornings through evenings across Liverpool.
        </p>
        <div className="bg-[#2C2C2E] border-2 border-[#FFD60A] rounded-2xl p-10 max-w-lg mx-auto">
          <div className="text-5xl mb-4">📅</div>
          <h3 className="font-black uppercase text-white text-2xl mb-2">Book Your First Lesson</h3>
          <p className="text-gray-400 text-sm mb-7">
            See real-time availability and secure your slot instantly. No phone calls, no waiting.
          </p>
          <button
            onClick={openCalendly}
            className="w-full bg-[#FFD60A] text-[#1C1C1E] font-bold text-xl py-5 rounded-xl uppercase tracking-wide shadow-xl shadow-yellow-400/35 hover:bg-[#E6C000] hover:-translate-y-1 transition-all"
          >
            📅 Check Available Lessons
          </button>
          <p className="text-gray-500 text-xs mt-4">
            ✅ Free cancellation up to 48hrs before · No deposit required
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-[#F5F5F0] py-20 px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[3px] text-[#E6C000] mb-3">Transparent Pricing</p>
      <h2 className="font-black uppercase text-[#1C1C1E] text-4xl md:text-5xl mb-4">Lesson Packages</h2>
      <p className="text-gray-500 text-base max-w-lg mx-auto mb-12">
        No hidden fees. No surprises. Just great value driving tuition across Liverpool.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {PRICING.map((pkg) => (
          <div
            key={pkg.type}
            className={`relative rounded-2xl p-8 text-left transition-all hover:-translate-y-1 hover:shadow-xl ${
              pkg.featured
                ? "bg-[#1C1C1E] border-2 border-[#FFD60A] shadow-lg"
                : "bg-white border-2 border-transparent shadow-md"
            }`}
          >
            {pkg.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD60A] text-[#1C1C1E] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                ⭐ Best Value
              </span>
            )}
            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${pkg.featured ? "text-gray-400" : "text-gray-500"}`}>
              {pkg.type}
            </p>
            <div className={`font-black text-5xl leading-none mb-1 ${pkg.featured ? "text-white" : "text-[#1C1C1E]"}`}>
              <span className="text-2xl align-top mt-2 inline-block">£</span>{pkg.amount}
            </div>
            <p className={`text-sm mt-2 mb-6 ${pkg.featured ? "text-gray-400" : "text-gray-500"}`}>
              {pkg.desc}
              {pkg.save && (
                <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded ${pkg.featured ? "bg-yellow-400/15 text-[#FFD60A]" : "bg-green-100 text-green-700"}`}>
                  {pkg.save}
                </span>
              )}
            </p>
            <ul className="space-y-2 mb-7">
              {pkg.features.map((f) => (
                <li key={f} className={`flex items-center gap-2 text-sm ${pkg.featured ? "text-gray-300" : "text-gray-500"}`}>
                  <span className="text-[#E6C000] font-bold">✓</span> {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo("booking")}
              className="w-full bg-[#FFD60A] text-[#1C1C1E] font-bold text-sm py-3.5 rounded-lg uppercase tracking-wide hover:bg-[#E6C000] hover:-translate-y-0.5 transition-all"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[3px] text-[#E6C000] mb-3">Why Choose Us</p>
      <h2 className="font-black uppercase text-[#1C1C1E] text-4xl md:text-5xl mb-4">
        Everything You Need<br />to Pass First Time
      </h2>
      <p className="text-gray-500 text-base max-w-md mx-auto mb-12">
        We remove every barrier between you and your licence.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {BENEFITS.map((b) => (
          <div key={b.title} className="bg-white border border-gray-100 rounded-xl p-7 text-left hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-[#1C1C1E] rounded-xl flex items-center justify-center text-3xl mb-4">{b.icon}</div>
            <h3 className="font-black uppercase text-[#1C1C1E] text-base mb-2">{b.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Theory() {
  return (
    <section id="theory" className="bg-[#1C1C1E] py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#E6C000] mb-3">Bonus Support</p>
          <h2 className="font-black uppercase text-white text-4xl md:text-5xl mb-5">
            Theory Test<br />Support
          </h2>
          <p className="text-gray-400 text-sm mb-7 leading-relaxed">
            Your licence journey doesn't start at the wheel. We help you ace the theory test too — because it's the foundation of safe driving.
          </p>
          <ul className="space-y-3">
            {THEORY_POINTS.map((pt) => (
              <li key={pt} className="flex items-center gap-3 text-gray-300 text-sm border-b border-white/5 pb-3">
                <span className="w-2 h-2 bg-[#FFD60A] rounded-full flex-shrink-0" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#2C2C2E] border border-yellow-400/20 rounded-2xl p-9 text-center">
          <div className="text-5xl mb-4">📖</div>
          <h3 className="font-black uppercase text-white text-2xl mb-2">Free Theory<br />Resources</h3>
          <p className="text-gray-400 text-sm mb-7">
            Every student gets access to our theory test prep pack — completely free with any lesson booking.
          </p>
          <button
            onClick={() => scrollTo("booking")}
            className="w-full bg-[#FFD60A] text-[#1C1C1E] font-bold text-base py-4 rounded-xl uppercase tracking-wide hover:bg-[#E6C000] hover:-translate-y-0.5 transition-all"
          >
            Book & Get Free Resources
          </button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#F5F5F0] py-20 px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[3px] text-[#E6C000] mb-3">Student Reviews</p>
      <h2 className="font-black uppercase text-[#1C1C1E] text-4xl md:text-5xl mb-4">What Our Students Say</h2>
      <p className="text-gray-500 text-base max-w-sm mx-auto mb-12">Real reviews from real people who passed with L-Pass.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="bg-white rounded-xl p-6 text-left border border-gray-100 shadow-sm">
            <div className="text-[#E6C000] text-lg tracking-wide mb-3">★★★★★</div>
            <p className="text-[#1C1C1E] text-sm leading-relaxed italic mb-4">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1C1C1E] flex items-center justify-center text-[#FFD60A] font-black text-xs flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-sm text-[#1C1C1E]">{t.name}</div>
                <div className="text-xs text-gray-400">{t.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <button
          onClick={() => scrollTo("booking")}
          className="bg-[#FFD60A] text-[#1C1C1E] font-bold text-lg px-10 py-5 rounded-xl uppercase tracking-wide shadow-lg shadow-yellow-400/30 hover:bg-[#E6C000] hover:-translate-y-1 transition-all"
        >
          📅 Join 2,400+ Passed Drivers — Book Now
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111112] py-12 px-6 text-center">
      <div className="font-black text-2xl uppercase tracking-widest text-[#FFD60A] mb-1">
        L-Pass <span className="text-white">Driving School</span>
      </div>
      <div className="font-black text-xl text-white mb-1">📞 0151 XXX XXXX</div>
      <p className="text-gray-500 text-sm mb-5">📍 Serving all of Liverpool & Merseyside</p>
      <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-500 mb-6">
        {["Home", "Pricing", "Book a Lesson", "Theory Support", "Contact", "Privacy Policy"].map((link) => (
          <a key={link} href="#" className="hover:text-[#FFD60A] transition-colors">{link}</a>
        ))}
      </div>
      <p className="text-xs text-gray-600">
        © 2025 L-Pass Driving School Liverpool. All rights reserved. DVSA Approved Instructors.
      </p>
    </footer>
  );
}

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────
export default function LPassDrivingSchool() {
  // Optional: Load Calendly widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <main>
      <Nav />
      <Hero />
      <Booking />
      <Pricing />
      <Benefits />
      <Theory />
      <Testimonials />
      <Footer />
    </main>
  );
}
