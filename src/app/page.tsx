"use client";

import { useState } from "react";

// --- TRADUCCIONES ---
const content = {
  nl: {
    nav: { classes: "Lessen", process: "Proces", about: "Over Ons", pricing: "Tarieven", faq: "FAQ" },
    hero: {
      subtitle: "Amsterdam",
      title: "DE Muay Thai Gym",
      desc: "Van geoefend vechters tot beginners. Groot, klein, fors, minder fors, oud, jong: het is de ideale manier om fit te worden en te blijven.",
      cta: "Boek een proefles"
    },
    classes: {
      title: "Onze Lessen",
      desc: "Leth’s Muay Thai gym biedt verschillende lessen per dag zodat er altijd een mogelijkheid is om te werken aan jouw doelstellingen.",
      fundamentals: { title: "Muay Thai Fundamentals", desc: "Deze les is speciaal ontwikkeld voor beginners en nieuwe sporters in de gym. Elke week staat er een andere fundamentele Muay Thai-techniek centraal. Binnen 4 weken komen alle 8 wapens (de “8 Limbs”) aan bod. Je leert daarnaast werken met ritme, afstand en timing. Conditietraining maakt deel uit van de les en word gedaan op de heavy bag maar de nadruk ligt vooral op herhaling en het beheersen van de basis." },
      pads: { title: "Fundamental Pads", desc: "This class is designed to teach the essential skills of holding pads correctly and safely. Students will learn proper stance, timing, and technique to ensure both training partners get the most out of pad work. *Verplicht: scheenbeschermers, handschoenen en Muay Thai shorts." },
      kids: { title: "Kinderen (10-16 jaar)", desc: "Tijdens deze lessen leren we de jeugd de basis en technieken van het Muay Thai. De trainingen bevorderen niet alleen het fysieke maar ook zelfvertrouwen, discipline en respect. *Benodigdheden: Bokshandschoenen, scheenbeschermers en Muay Thai shorts." },
      bag: { title: "Zaktraining", desc: "Tijdens deze les worden technieken uit het Muay Thai beoefend op de heavy bag. Een conditioneel zware les met veel aandacht voor de basis alsmede gevorderde technieken. Je dient voor deze les zelf bokshandschoenen mee te nemen. Bandages zijn niet verplicht maar wel aan te raden." },
      all: { title: "Muay Thai 4 All", desc: "In deze les train je samen met een partner en ligt de nadruk op het correct uitvoeren van basistechnieken. Onder begeleiding van de Kru worden realistische gevechtssituaties nagebootst. Om deel te nemen is het verplicht dat je de voorgaande lessen hebt gevolgd. *Benodigdheden: eigen bokshandschoenen, scheenbeschermers en Muay Thai shorts." },
      advanced: { title: "Muay Thai Advanced", desc: "In deze les werk je samen met een partner aan geavanceerde Muay Thai-technieken. Deelname is alleen mogelijk nadat je de lessen Muay Thai 4 All hebt gevolgd en de Kru je akkoord heeft gegeven. *Benodigdheden: eigen bokshandschoenen, scheenbeschermers en Muay Thai shorts." },
      sparring: { title: "Sparren & Clinchen", desc: "Tijdens deze les worden technieken geoefend samen met een partner. Je wordt gevraagd op ongeveer 60% van je maximale intensiteit te trainen, de focus ligt hier volledig op techniek. *Aan deze lessen kun je alleen deelnemen met toestemming van de kru. Benodigdheden: handschoenen, bitje, toque, ellenboog en scheenbescherming." },
      open: { title: "Open Gym", desc: "Tijdens deze les is het mogelijk om aan je kracht/conditie te werken op eigen tempo. Je werkt puur voor jezelf en natuurlijk is er iemand aanwezig mocht je vragen hebben. Inschrijven via de Eversport app." },
      pt: { title: "Personal & Corporate Training", desc: "Eén op één training of samen met je collega’s. Samen bepalen we jouw doelstellingen en creëren we een plan. Interesse? Maak een afspraak via het contactformulier of bel ons." }
    },
    process: {
      title: "Trust The Process",
      desc: "Iedereen die nieuw binnenkomt start bij stap 1!",
      step1: { title: "1. Fundamentals", desc: "Leer hoe je de 8 ledematen correct gebruikt met de juiste techniek, afstand en timing." },
      step2: { title: "2. Fundamental Pads", desc: "Voordat je verder gaat met pads, leren we je hoe je pads correct vasthoudt." },
      step3: { title: "3. Muay Thai 4 All", desc: "Train met partners van verschillende niveaus. Nadruk op de juiste basistechnieken." },
      step4: { title: "4. Kicking Sparren", desc: "Je komt dichter bij het echte gevecht, maar hoeft je nog geen zorgen te maken over alle wapens." },
      step5: { title: "5. Advanced", desc: "Ga dieper in op geavanceerde technieken, conditioneel sterker worden en combinaties op hoger niveau." },
      step6: { title: "6. Sparren & Clinchen", desc: "Tijd om alles samen te voegen. Zelfbeheersing en geen ego zijn belangrijk." }
    },
    about: {
      title: "Over Kru Robert",
      p1: "Robert de Leth was achttien toen hij koos voor de vechtsport. Na jarenlang trainen in Amsterdam, bracht het hem naar Thailand waar hij jaren woonde en trainde bij Sityodtong, Pattaya.",
      p2: "In 2015 keerde Robert terug naar Thailand en hervond hij niet alleen zijn liefde voor Muay Thai, maar ook zijn vrouw Wanida. Omdat de nadruk bij Nederlandse gyms vaak op kickboksen ligt, begon het idee voor een eigen authentieke Muay Thai gym.",
      p3: "Na een succesvolle zomer aan de Amstel, was het tijd voor de volgende stap: een eigen gym aan het water op het NDSM. De droom kwam uit. Muay Thai is voor iedereen."
    },
    facilities: {
      title: "Faciliteiten",
      size: "335m2 Gym",
      sizeDesc: "Officiele wedstrijd ring plus 18 Fairtex bokszakken.",
      strength: "Strength & Conditioning",
      strengthDesc: "Squat rack, dumbells, GHD en verschillende apparaten.",
      bar: "Bar & Keuken",
      barDesc: "Dranken, koffie, energy repen en Wanida’s huisgemaakte bananencake. Meerdere keren per week authentieke Thaise maaltijden."
    },
    pricing: {
      title: "Tarieven",
      trial: "Proefpakket",
      trialDesc: "3 trainingen (alleen voor Fundamentals)",
      trialPrice: "€25",
      unlimited: "Unlimited",
      unlimitedPt: "Unlimited + 1 PT/maand",
      week2: "2x per week",
      week3: "3x per week",
      month: "Maandelijks opzegbaar",
      months6: "6 maanden",
      months12: "12 maanden"
    },
    faq: {
      title: "FAQ",
      q1: { q: "Wat is Muay Thai?", a: "Muay Thai is een traditionele Thaise vechtsport, ook wel bekend als “The Art of Eight Limbs”. Er wordt gebruikgemaakt van stoten, trappen, knieën en ellebogen." },
      q2: { q: "Is Muay Thai geschikt voor beginners?", a: "Ja, absoluut. Beginners starten met de fundamentals en bouwen stap voor stap techniek, conditie en zelfvertrouwen op." },
      q3: { q: "Heb ik eigen spullen nodig voor een proefles?", a: "Nee. Tijdens een proefles kun je spullen lenen van de gym. Word je lid? Dan heb je eigen handschoenen, scheenbeschermers en shorts nodig." },
      q4: { q: "Moet ik in goede conditie zijn om te starten?", a: "Nee. Je bouwt conditie vanzelf op tijdens de trainingen. Iedereen traint op zijn of haar eigen tempo." }
    },
    footer: {
      hours: "Openingstijden",
      hoursDesc: "Ma - Za: 07:30 - 20:00 | Zondag: GESLOTEN",
      location: "Locatie",
      address: "Ms. van Riemsdijkweg 59, 1033 RC Amsterdam",
      parking: "Parkeertarief: €1,60 per uur. Ruime parkeergelegenheid voor de deur."
    }
  },
  en: {
    nav: { classes: "Classes", process: "Process", about: "About Us", pricing: "Pricing", faq: "FAQ" },
    hero: {
      subtitle: "Amsterdam",
      title: "DE Muay Thai Gym",
      desc: "From experienced fighters to beginners. Big, small, heavy, light, old, young: it is the ideal way to get and stay fit.",
      cta: "Book a Trial"
    },
    classes: {
      title: "Our Classes",
      desc: "Leth’s offers different classes every day so there is always an option to work on your goals.",
      fundamentals: { title: "Muay Thai Fundamentals", desc: "Specially developed for beginners. Each week focuses on a different fundamental technique. Within 4 weeks, all 8 weapons (the '8 Limbs') are covered. You also learn rhythm, distance, and timing." },
      pads: { title: "Fundamental Pads", desc: "Designed to teach the essential skills of holding pads correctly and safely. *Mandatory: shinguards, gloves, and Muay Thai shorts." },
      kids: { title: "Youth (10-16 yrs)", desc: "Teaching the youth the basics and techniques of Muay Thai. Promoting physical fitness, self-confidence, discipline, and respect. *Required: Gloves, shinguards, and shorts." },
      bag: { title: "Bag Training", desc: "Techniques practiced on the heavy bag. A physically demanding class with attention to both basic and advanced techniques. Bring your own gloves. Hand wraps recommended." },
      all: { title: "Muay Thai 4 All", desc: "Partner training focusing on correct basic techniques. Realistic fight situations simulated under Kru's guidance. Previous classes are mandatory to participate. *Required: own gloves, shinguards, shorts." },
      advanced: { title: "Muay Thai Advanced", desc: "Advanced techniques with a partner. Participation only after completing Muay Thai 4 All and with Kru's approval. *Required: own gloves, shinguards, shorts." },
      sparring: { title: "Sparring & Clinching", desc: "Practicing techniques with a partner at ~60% intensity. Focus is entirely on technique, not causing damage. *Requires Kru's permission. Required: gloves, mouthguard, headgear, elbow pads, shinguards." },
      open: { title: "Open Gym", desc: "Work on your strength/conditioning at your own pace. A trainer is present for questions. Reserve via the Eversports app." },
      pt: { title: "Personal & Corporate Training", desc: "1-on-1 or with colleagues. We determine your goals and create a plan. Interested? Make an appointment via the contact form or call us." }
    },
    process: {
      title: "Trust The Process",
      desc: "Everyone new starts at step 1!",
      step1: { title: "1. Fundamentals", desc: "Learn how to use the 8 limbs correctly with proper technique, distance, and timing." },
      step2: { title: "2. Fundamental Pads", desc: "Before moving on to pads, we teach you how to hold pads correctly for all techniques." },
      step3: { title: "3. Muay Thai 4 All", desc: "Train with partners of different levels. Emphasis on correct basic techniques." },
      step4: { title: "4. Kicking Sparring", desc: "Closer to a real fight, but no need to worry about all weapons yet." },
      step5: { title: "5. Advanced", desc: "Go deeper into advanced techniques, get stronger, and apply combinations at a higher level." },
      step6: { title: "6. Sparring & Clinching", desc: "Time to put it all together. Self-control and no ego are key." }
    },
    about: {
      title: "About Kru Robert",
      p1: "Robert de Leth chose combat sports at eighteen. After training in Amsterdam for years, he traveled to Thailand where he lived and trained at Sityodtong, Pattaya.",
      p2: "In 2015, Robert returned to Thailand and rediscovered not only his love for Muay Thai, but also his wife Wanida. Because Dutch gyms often focus on kickboxing, the idea for an authentic Muay Thai gym began to form.",
      p3: "After a successful summer by the Amstel river, it was time for the next step: his own gym on the water at NDSM. The dream came true. Muay Thai is for everyone."
    },
    facilities: {
      title: "Facilities",
      size: "335m2 Gym",
      sizeDesc: "Official competition ring plus 18 Fairtex heavy bags.",
      strength: "Strength & Conditioning",
      strengthDesc: "Squat rack, dumbbells, GHD, and various conditioning equipment.",
      bar: "Bar & Kitchen",
      barDesc: "Drinks, coffee, energy bars, and Wanida’s homemade banana cake. Authentic Thai meals available several evenings a week."
    },
    pricing: {
      title: "Pricing",
      trial: "Trial Package",
      trialDesc: "3 sessions (Fundamentals only)",
      trialPrice: "€25",
      unlimited: "Unlimited",
      unlimitedPt: "Unlimited + 1 PT/month",
      week2: "2x per week",
      week3: "3x per week",
      month: "Monthly cancelable",
      months6: "6 months",
      months12: "12 months"
    },
    faq: {
      title: "FAQ",
      q1: { q: "What is Muay Thai?", a: "Muay Thai is a traditional Thai martial art, also known as 'The Art of Eight Limbs'. It uses punches, kicks, knees, and elbows." },
      q2: { q: "Is Muay Thai suitable for beginners?", a: "Yes, absolutely. Beginners start with the fundamentals and build technique, conditioning, and confidence step by step." },
      q3: { q: "Do I need my own gear for a trial class?", a: "No. You can borrow gear for a trial class. Becoming a member? Then you need your own gloves, shinguards, and shorts." },
      q4: { q: "Do I need to be in good shape to start?", a: "No. You build conditioning automatically during training. Everyone trains at their own pace." }
    },
    footer: {
      hours: "Opening Hours",
      hoursDesc: "Mon - Sat: 07:30 - 20:00 | Sunday: CLOSED",
      location: "Location",
      address: "Ms. van Riemsdijkweg 59, 1033 RC Amsterdam",
      parking: "Parking: €1.60/hour. Ample parking space in front of the door."
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<"nl" | "en">("nl");
  const [openClass, setOpenClass] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = content[lang];

  const toggleClass = (cls: string) => setOpenClass(openClass === cls ? null : cls);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  const classKeys = ["fundamentals", "pads", "kids", "bag", "all", "advanced", "sparring", "open", "pt"] as const;

  return (
    <main className="bg-black text-white font-sans overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black uppercase tracking-widest text-lg">Leth's Train</div>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-400">
            <a href="#lessen" className="hover:text-white transition">{t.nav.classes}</a>
            <a href="#proces" className="hover:text-white transition">{t.nav.process}</a>
            <a href="#over" className="hover:text-white transition">{t.nav.about}</a>
            <a href="#tarieven" className="hover:text-white transition">{t.nav.pricing}</a>
            <a href="#faq" className="hover:text-white transition">{t.nav.faq}</a>
          </div>
          <button onClick={() => setLang(lang === "nl" ? "en" : "nl")} className="border border-gray-600 px-3 py-1 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition">
            {lang === "nl" ? "EN" : "NL"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center pt-20">
        <div className="absolute inset-0 bg-cover bg-top bg-no-repeat grayscale opacity-40" style={{ backgroundImage: "url('/gym.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">{t.hero.subtitle}</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-none mb-6">{t.hero.title}</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">{t.hero.desc}</p>
          <a href="#tarieven" className="inline-block bg-white text-black font-bold py-4 px-8 text-lg uppercase tracking-widest hover:bg-gray-200 transition">
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* CLASES (ACORDEÓN) */}
      <section id="lessen" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none mb-4">{t.classes.title}</h2>
          <p className="text-gray-400 text-lg mb-12">{t.classes.desc}</p>
          
          <div className="space-y-4">
            {classKeys.map((key) => (
              <div key={key} className="border-b border-gray-800">
                <button onClick={() => toggleClass(key)} className="w-full flex justify-between items-center py-6 text-left hover:pl-2 transition-all">
                  <h3 className="text-2xl font-bold uppercase">{t.classes[key].title}</h3>
                  <span className="text-2xl text-gray-500">{openClass === key ? '−' : '+'}</span>
                </button>
                {openClass === key && (
                  <div className="pb-6 text-gray-400 leading-relaxed whitespace-pre-line">
                    {t.classes[key].desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST THE PROCESS */}
      <section id="proces" className="py-24 px-6 bg-zinc-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none mb-4">{t.process.title}</h2>
          <p className="text-gray-400 text-lg mb-16">{t.process.desc}</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {Array.from({length: 6}).map((_, i) => (
              <div key={i} className="border border-gray-800 p-6 hover:border-gray-500 transition">
                <h3 className="text-xl font-bold uppercase mb-3">{t.process[`step${i+1}` as keyof typeof t.process].title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t.process[`step${i+1}` as keyof typeof t.process].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVER ONS */}
      <section id="over" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-top bg-no-repeat grayscale" style={{ backgroundImage: "url('/kru.png')" }} />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div>
            <h2 className="text-5xl font-black uppercase mb-6">{t.about.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">{t.about.p2}</p>
            <p className="text-gray-400 text-lg leading-relaxed">{t.about.p3}</p>
          </div>
        </div>
      </section>

      {/* FACILITEITEN */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-12">{t.facilities.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-2xl font-bold uppercase mb-3">{t.facilities.size}</h3>
              <p className="text-gray-400 leading-relaxed">{t.facilities.sizeDesc}</p>
            </div>
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-2xl font-bold uppercase mb-3">{t.facilities.strength}</h3>
              <p className="text-gray-400 leading-relaxed">{t.facilities.strengthDesc}</p>
            </div>
            <div className="border-b border-gray-800 pb-6">
              <h3 className="text-2xl font-bold uppercase mb-3">{t.facilities.bar}</h3>
              <p className="text-gray-400 leading-relaxed">{t.facilities.barDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TARIEVEN */}
      <section id="tarieven" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none mb-16">{t.pricing.title}</h2>
          
          {/* Proefles */}
          <div className="border border-gray-800 inline-block px-12 py-8 mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">{t.pricing.trial}</p>
            <p className="text-5xl font-black mb-2">{t.pricing.trialPrice}</p>
            <p className="text-gray-400 text-sm">{t.pricing.trialDesc}</p>
          </div>

          {/* Abonnementen */}
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="p-4 border-b border-gray-800 font-bold uppercase text-gray-500 tracking-widest">{t.pricing.month}</div>
            <div className="p-4 border-b border-gray-800 font-bold uppercase text-gray-500 tracking-widest">{t.pricing.months6}</div>
            <div className="p-4 border-b border-gray-800 font-bold uppercase text-gray-500 tracking-widest">{t.pricing.months12}</div>
            <div className="p-4 border-b border-gray-800 font-bold uppercase text-gray-500 tracking-widest">&nbsp;</div>

            <div className="p-4 text-2xl font-black">€75</div>
            <div className="p-4 text-2xl font-black">€72,50</div>
            <div className="p-4 text-2xl font-black">€70</div>
            <div className="p-4 text-gray-400 text-xs uppercase flex items-center justify-end">{t.pricing.week2}</div>

            <div className="p-4 text-2xl font-black">€85</div>
            <div className="p-4 text-2xl font-black">€82,50</div>
            <div className="p-4 text-2xl font-black">€80</div>
            <div className="p-4 text-gray-400 text-xs uppercase flex items-center justify-end">{t.pricing.week3}</div>

            <div className="p-4 text-2xl font-black bg-white/5">€95</div>
            <div className="p-4 text-2xl font-black bg-white/5">€92,50</div>
            <div className="p-4 text-2xl font-black bg-white/5">€90</div>
            <div className="p-4 text-white text-xs uppercase flex items-center justify-end font-bold">{t.pricing.unlimited}</div>

            <div className="p-4 text-2xl font-black">€192,50</div>
            <div className="p-4 text-2xl font-black text-gray-600">-</div>
            <div className="p-4 text-2xl font-black text-gray-600">-</div>
            <div className="p-4 text-gray-400 text-xs uppercase flex items-center justify-end">{t.pricing.unlimitedPt}</div>
          </div>

        </div>
      </section>

      {/* FAQ (ACORDEÓN) */}
      <section id="faq" className="py-24 px-6 bg-zinc-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black uppercase leading-none mb-12">{t.faq.title}</h2>
          {Array.from({length: 4}).map((_, i) => (
            <div key={i} className="border-b border-gray-800">
              <button onClick={() => toggleFaq(i)} className="w-full flex justify-between items-center py-6 text-left hover:pl-2 transition-all">
                <h3 className="text-xl font-bold">{t.faq[`q${i+1}` as keyof typeof t.faq].q}</h3>
                <span className="text-2xl text-gray-500">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="pb-6 text-gray-400 leading-relaxed">
                  {t.faq[`q${i+1}` as keyof typeof t.faq].a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-4 text-sm">{t.footer.location}</h4>
            <p className="text-gray-400 text-sm mb-2">{t.footer.address}</p>
            <p className="text-gray-400 text-sm">{t.footer.parking}</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-4 text-sm">{t.footer.hours}</h4>
            <p className="text-gray-400 text-sm">{t.footer.hoursDesc}</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-600 text-xs uppercase tracking-widest">
          &copy; 2024 Leth's Muay Thai Gym. All Rights Reserved.
        </div>
      </footer>

    </main>
  );
}
