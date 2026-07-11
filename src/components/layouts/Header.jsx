import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Header({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-400 border-b ${
        scrolled
          ? "bg-[#F9F4EE]/90 backdrop-blur-md border-black/[0.07]"
          : "bg-transparent border-transparent"
      }`}
    >
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Celeste" className="h-9 w-auto" />
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/rooms"
          className={`text-sm font-light transition-colors ${
            scrolled ? "text-[#0E1A2B]/60 hover:text-[#0E1A2B]" : "text-white/80 hover:text-white"
          }`}
        >
          Suites
        </Link>
        <Link
          to="/amenities"
          className={`text-sm font-light transition-colors ${
            scrolled ? "text-[#0E1A2B]/60 hover:text-[#0E1A2B]" : "text-white/80 hover:text-white"
          }`}
        >
          Amenities
        </Link>
        <Link
          to="/contact"
          className={`text-sm font-light transition-colors ${
            scrolled ? "text-[#0E1A2B]/60 hover:text-[#0E1A2B]" : "text-white/80 hover:text-white"
          }`}
        >
          Contact
        </Link>
      </nav>

      <Link
        to="/rooms"
        className={`hidden md:inline-block px-[22px] py-2 text-sm font-normal border transition-all duration-300 ${
          scrolled
            ? "border-[#0E1A2B] text-[#0E1A2B] hover:bg-[#0E1A2B] hover:text-white"
            : "border-white/45 text-white hover:bg-white hover:text-[#0E1A2B]"
        }`}
        style={{ letterSpacing: "0.02em" }}
      >
        View Rooms
      </Link>

      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        className={`md:hidden flex items-center justify-center w-10 h-10 border transition-colors ${
          scrolled
            ? "border-[#0E1A2B]/30 text-[#0E1A2B] hover:bg-[#0E1A2B] hover:text-white"
            : "border-white/40 text-white hover:bg-white hover:text-[#0E1A2B]"
        }`}
      >
        <Menu className="w-5 h-5" />
      </button>
    </header>
  );
}