import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Wifi,
  Wind,
  Wine,
  Droplets,
  Utensils,
  Sparkles,
  Car,
  Coffee,
  ShieldCheck,
  Zap,
  Waves,
  UtensilsCrossed,
  Star,
  ArrowRight,
} from "lucide-react";
import { useAppStore } from "../stores/store";

const iconMap = {
  wifi: Wifi,
  wind: Wind,
  wine: Wine,
  droplets: Droplets,
  utensils: Utensils,
  sparkles: Sparkles,
  car: Car,
  coffee: Coffee,
  "shield-check": ShieldCheck,
  zap: Zap,
  waves: Waves,
  "utensils-crossed": UtensilsCrossed,
};

const DELAY_CLASS = ["d1", "d2", "d3", "d4"];

function formatNaira(amount) {
  return `₦${Number(amount).toLocaleString()}`;
}

function useFadeUp(deps) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef;
}

const Home = () => {
  const appData = useAppStore((state) => state.appData);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!appData?.hero_images?.length) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appData.hero_images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [appData]);

  const rootRef = useFadeUp([appData]);

  if (!appData) {
    return null;
  }

  const { hero_images = [], featured_amenities = [], featured_suites = [], featured_gallery = [] } = appData;

  const featuredSuite = featured_suites[0];
  const smallSuites = featured_suites.slice(1, 3);
  const stripSuite = featured_suites[3];

  const suiteHref = (suite) => `/rooms/${suite.slug || suite.id}`;

  const galleryRow1 = featured_gallery.slice(0, 3);
  const galleryRow2 = featured_gallery.slice(3, 5);
  const galleryRow3 = featured_gallery.slice(5, 7);

  return (
    <div ref={rootRef}>
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
        {hero_images.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms]"
            style={{ backgroundImage: `url(${img})`, opacity: i === currentSlide ? 1 : 0 }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,26,43,0.55) 0%, rgba(14,26,43,0.3) 50%, rgba(14,26,43,0.78) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-16 flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <h1
              className="font-display text-6xl md:text-8xl text-white leading-none mb-6"
              style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              Where comfort<br /><em>becomes memory.</em>
            </h1>
            <p className="text-white/60 text-base max-w-sm mb-8 font-light" style={{ lineHeight: 1.9 }}>
              Hand-curated suites designed for those who expect more than a place to sleep.
            </p>
            <Link
              to="/rooms"
              className="inline-block px-9 py-3.5 text-sm text-white border border-white/40 hover:bg-white hover:text-[#0E1A2B] transition-all duration-300"
              style={{ letterSpacing: "0.12em" }}
            >
              EXPLORE SUITES
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {hero_images.map((img, i) => (
              <div
                key={img}
                onClick={() => setCurrentSlide(i)}
                className="hero-dot"
                data-active={i === currentSlide}
                style={{
                  width: i === currentSlide ? 36 : 20,
                  background: i === currentSlide ? "#B89C6E" : "rgba(255,255,255,0.35)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 max-w-5xl mx-auto text-center fade-up">
        <p className="font-display text-3xl md:text-4xl text-[#0E1A2B]" style={{ fontStyle: "italic", lineHeight: 1.6 }}>
          Twelve suites. Each a world of its own.
        </p>
        <div className="w-12 h-px bg-[#B89C6E] mx-auto mt-6 mb-8" />
        <p className="text-sm text-[#0E1A2B]/55 max-w-2xl mx-auto font-light" style={{ lineHeight: 1.9 }}>
          Aurélia Suites sits on Admiralty Way in the heart of Victoria Island, steps from Lagos's best restaurants,
          galleries, and business district. We offer twelve individually designed suites, each with a distinct
          character, from the city-facing Deluxe King to the full-floor Penthouse Royal. Every stay includes daily
          breakfast, 24-hour concierge, and access to the rooftop infinity pool.
        </p>
      </section>

      <section className="py-10 px-6" style={{ background: "#0E1A2B" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="fade-up d1">
            <p className="font-display text-2xl text-white mb-1" style={{ fontWeight: 500 }}>3 PM</p>
            <p className="text-xs text-white/35 uppercase tracking-widest" style={{ letterSpacing: "0.16em" }}>Check-in</p>
          </div>
          <div className="fade-up d2">
            <p className="font-display text-2xl text-white mb-1" style={{ fontWeight: 500 }}>12 PM</p>
            <p className="text-xs text-white/35 uppercase tracking-widest" style={{ letterSpacing: "0.16em" }}>Check-out</p>
          </div>
          <div className="fade-up d3">
            <p className="font-display text-2xl text-white mb-1" style={{ fontWeight: 500 }}>48 hrs</p>
            <p className="text-xs text-white/35 uppercase tracking-widest" style={{ letterSpacing: "0.16em" }}>Free cancellation</p>
          </div>
          <div className="fade-up d4">
            <p className="font-display text-2xl text-white mb-1" style={{ fontWeight: 500 }}>24 / 7</p>
            <p className="text-xs text-white/35 uppercase tracking-widest" style={{ letterSpacing: "0.16em" }}>Concierge</p>
          </div>
        </div>
      </section>

      <section id="rooms" className="pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex items-end justify-between fade-up">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#B89C6E] mb-3" style={{ letterSpacing: "0.22em" }}>
              Available Now
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-[#0E1A2B] leading-none" style={{ fontWeight: 500 }}>
              Our Suites
            </h2>
          </div>
          <Link
            to="/rooms"
            className="hidden md:flex items-center gap-2 text-sm text-[#0E1A2B]/60 hover:text-[#B89C6E] transition-colors pb-1 border-b border-current font-light"
            style={{ letterSpacing: "0.06em" }}
          >
            View all suites <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 fade-up d1">
          <div className="suites-grid">
            {featuredSuite && (
              <Link to={suiteHref(featuredSuite)} className="suite-feature">
                <img src={featuredSuite.images?.[0]} alt={featuredSuite.name} />
                <div className="suite-info">
                  <div>
                    <p className="text-xs text-[#B89C6E] mb-1 tracking-widest" style={{ letterSpacing: "0.18em" }}>
                      {featuredSuite.category?.toUpperCase()}
                    </p>
                    <h3 className="font-display text-3xl text-white mb-1" style={{ fontWeight: 500 }}>
                      {featuredSuite.name}
                    </h3>
                    <p className="text-white/50 text-xs font-light">
                      {featuredSuite.size} sqm &nbsp;&middot;&nbsp; {featuredSuite.view_type} view &nbsp;&middot;&nbsp;{" "}
                      {featuredSuite.capacity} guests
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-display text-2xl text-white mb-1" style={{ fontWeight: 600 }}>
                      {formatNaira(featuredSuite.rate)}
                    </p>
                    <span
                      className="text-xs text-[#B89C6E] border-b border-[#B89C6E] pb-0.5 tracking-wider hover:text-white hover:border-white transition-colors"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      View Suite
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {smallSuites.map((suite) => (
              <Link to={suiteHref(suite)} key={suite.id} className="suite-small">
                <img src={suite.images?.[0]} alt={suite.name} />
                <div className="suite-info">
                  <div>
                    <p className="text-xs text-[#B89C6E] mb-1 tracking-widest" style={{ letterSpacing: "0.18em" }}>
                      {suite.category?.toUpperCase()}
                    </p>
                    <h3 className="font-display text-2xl text-white mb-0.5" style={{ fontWeight: 500 }}>
                      {suite.name}
                    </h3>
                    <p className="text-white/50 text-xs font-light">
                      {suite.size} sqm &nbsp;&middot;&nbsp; {suite.view_type} view
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-display text-xl text-white mb-1" style={{ fontWeight: 600 }}>
                      {formatNaira(suite.rate)}
                    </p>
                    <span
                      className="text-xs text-[#B89C6E] border-b border-[#B89C6E] pb-0.5 tracking-wider hover:text-white hover:border-white transition-colors"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      View
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {stripSuite && (
            <Link to={suiteHref(stripSuite)} className="suite-strip mt-0">
              <img src={stripSuite.images?.[0]} alt={stripSuite.name} />
              <div className="suite-strip-info">
                <p className="text-xs text-[#B89C6E] mb-3 tracking-widest" style={{ letterSpacing: "0.22em" }}>
                  {stripSuite.category?.toUpperCase()} &nbsp;&middot;&nbsp; SIGNATURE
                </p>
                <h3
                  className="font-display text-4xl md:text-5xl text-white mb-3 leading-none"
                  style={{ fontWeight: 500, fontStyle: "italic" }}
                >
                  {stripSuite.name}
                </h3>
                <p className="text-white/40 text-sm mb-6 max-w-xs font-light" style={{ lineHeight: 1.8 }}>
                  {stripSuite.size} sqm of panoramic Lagos views. Our most sought-after address.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-3xl text-white" style={{ fontWeight: 600 }}>
                      {formatNaira(stripSuite.rate)}
                    </p>
                    <p className="text-xs text-white/30 mt-0.5 font-light">per night, taxes inclusive</p>
                  </div>
                  <span
                    className="px-6 py-2.5 border border-[#B89C6E] text-[#B89C6E] text-xs tracking-wider hover:bg-[#B89C6E] hover:text-[#0E1A2B] transition-all duration-300"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    VIEW SUITE
                  </span>
                </div>
              </div>
            </Link>
          )}

          <div className="flex justify-center mt-8 mb-4 md:hidden">
            <Link
              to="/rooms"
              className="text-sm text-[#0E1A2B] border-b border-[#0E1A2B] pb-0.5 tracking-wider"
              style={{ letterSpacing: "0.08em" }}
            >
              View all suites
            </Link>
          </div>
        </div>
      </section>

      <section id="amenities" className="py-24 px-6 md:px-12 mt-16" style={{ background: "#0E1A2B" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center fade-up">
            <p className="text-xs uppercase tracking-widest text-[#B89C6E] mb-3" style={{ letterSpacing: "0.22em" }}>
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white" style={{ fontStyle: "italic" }}>
              Curated for your comfort
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-14 text-center">
            {featured_amenities.map((amenity, i) => {
              const Icon = iconMap[amenity.icon] || Sparkles;
              return (
                <div key={amenity.id} className={`fade-up ${DELAY_CLASS[i % 4]}`}>
                  <div className="flex justify-center mb-4 text-[#B89C6E]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="font-display text-lg text-white mb-1" style={{ fontWeight: 500 }}>
                    {amenity.name}
                  </p>
                  <p className="text-xs text-white/35 font-light">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12" style={{ background: "#F9F4EE" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <p className="text-xs uppercase tracking-widest text-[#B89C6E] mb-3" style={{ letterSpacing: "0.22em" }}>
              Guest Experiences
            </p>
            <p
              className="font-display text-2xl md:text-3xl text-[#0E1A2B] max-w-2xl mx-auto"
              style={{ fontStyle: "italic", lineHeight: 1.8 }}
            >
              "Every detail here is an act of hospitality. You feel it the moment you walk in."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Adaeze O.", city: "Lagos", quote: "The Penthouse Royal is genuinely unlike anything else in Lagos. The butler service was impeccable, and waking up to that Atlantic view made the whole trip." },
              { name: "Emeka T.", city: "Abuja", quote: "I travel for work frequently and Aurélia is the first hotel in Nigeria that genuinely competes with what I experience in Europe. The Executive Studio was perfect for a 10-day stay." },
              { name: "Yemi & Seun A.", city: "London", quote: "We stayed in the Premier Double for our anniversary. Breakfast was beautiful, the rooftop pool at sunset is magical, and the team remembered our names every time we walked past reception." },
            ].map((review, i) => (
              <div key={review.name} className={`fade-up ${DELAY_CLASS[i % 4]} border-t border-[#B89C6E]/30 pt-8`}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 text-[#B89C6E] fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#0E1A2B]/60 mb-6 font-light" style={{ lineHeight: 1.9 }}>
                  "{review.quote}"
                </p>
                <p className="text-xs text-[#0E1A2B]/40 uppercase tracking-wider" style={{ letterSpacing: "0.14em" }}>
                  {review.name} &nbsp;&middot;&nbsp; {review.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 md:px-12" style={{ background: "#F9F4EE" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-end justify-between fade-up">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#B89C6E] mb-3" style={{ letterSpacing: "0.22em" }}>
                Inside Aurélia
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0E1A2B] leading-none" style={{ fontWeight: 500, fontStyle: "italic" }}>
                The spaces
              </h2>
            </div>
            <p className="hidden md:block text-sm text-[#0E1A2B]/40 max-w-xs text-right font-light">
              Every corner is considered. Every material chosen with intention.
            </p>
          </div>

          {galleryRow1.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3 fade-up d1">
              {galleryRow1.map((img) => (
                <div key={img} className="overflow-hidden" style={{ height: 300 }}>
                  <img src={img} alt="Aurélia Suites" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          )}

          {galleryRow2.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3 fade-up d2">
              <div className="md:col-span-3 overflow-hidden" style={{ height: 340 }}>
                <img src={galleryRow2[0]} alt="Aurélia Suites" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              {galleryRow2[1] && (
                <div className="md:col-span-2 overflow-hidden" style={{ height: 340 }}>
                  <img src={galleryRow2[1]} alt="Aurélia Suites" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              )}
            </div>
          )}

          {galleryRow3.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 fade-up d3">
              <div className="md:col-span-2 overflow-hidden" style={{ height: 280 }}>
                <img src={galleryRow3[0]} alt="Aurélia Suites" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              {galleryRow3[1] && (
                <div className="md:col-span-3 overflow-hidden" style={{ height: 280 }}>
                  <img src={galleryRow3[1]} alt="Aurélia Suites" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;