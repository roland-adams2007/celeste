import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const links = [
    { label: "Home", to: "/" },
    { label: "Suites", to: "/rooms" },
    { label: "Amenities", to: "/amenities" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <div
        onClick={onClose}
        className={`md:hidden fixed inset-0 bg-[#0E1A2B]/70 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-[300px] max-w-[80vw] bg-[#F9F4EE] z-50 flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#0E1A2B]/10">
          <span className="font-display text-2xl text-[#0E1A2B] tracking-wide">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 text-[#0E1A2B] hover:text-[#B89C6E] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col px-8 py-10 gap-7">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={onClose}
              className="font-display text-2xl text-[#0E1A2B]/80 hover:text-[#B89C6E] transition-colors"
              style={{ fontWeight: 400 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-8 py-8 border-t border-[#0E1A2B]/10">
          <p className="text-xs uppercase tracking-widest text-[#B89C6E] mb-2" style={{ letterSpacing: "0.18em" }}>
            Reservations
          </p>
          <p className="text-sm text-[#0E1A2B]/60 font-light">+234 812 345 6789</p>
          <p className="text-sm text-[#0E1A2B]/60 font-light">reservations@aurelia.ng</p>
        </div>
      </aside>
    </>
  );
}