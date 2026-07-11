import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-12 py-16" style={{ background: "#0E1A2B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div>
            <p className="font-display text-3xl text-white mb-3" style={{ fontWeight: 400, letterSpacing: "0.05em" }}>
              Aurélia Suites
            </p>
            <p className="text-sm text-white/40 leading-relaxed font-light">
              A boutique hotel experience rooted in Lagos, designed for those who travel with purpose.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#B89C6E] mb-4" style={{ letterSpacing: "0.2em" }}>
              Location
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-3 font-light">
              14 Admiralty Way<br />Victoria Island, Lagos<br />Nigeria
            </p>
            <p className="text-xs text-white/30 font-light">
              5 mins from Eko Atlantic<br />15 mins from MMIA
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#B89C6E] mb-4" style={{ letterSpacing: "0.2em" }}>
              Reservations
            </p>
            <p className="text-sm text-white/60 mb-1 font-light">+234 812 345 6789</p>
            <p className="text-sm text-white/60 mb-4 font-light">reservations@aurelia.ng</p>
            <a
              href="mailto:reservations@aurelia.ng"
              className="text-xs uppercase tracking-wider text-[#B89C6E] border-b border-[#B89C6E] pb-0.5 hover:text-white hover:border-white transition-colors"
              style={{ letterSpacing: "0.12em" }}
            >
              Send Enquiry
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#B89C6E] mb-4" style={{ letterSpacing: "0.2em" }}>
              Policies
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-white/25 uppercase tracking-wider mb-0.5" style={{ letterSpacing: "0.12em" }}>
                  Check-in / out
                </p>
                <p className="text-sm text-white/55 font-light">3:00 PM &nbsp;/&nbsp; 12:00 PM</p>
              </div>
              <div>
                <p className="text-xs text-white/25 uppercase tracking-wider mb-0.5" style={{ letterSpacing: "0.12em" }}>
                  Cancellation
                </p>
                <p className="text-sm text-white/55 font-light">Free up to 48 hrs before arrival</p>
              </div>
              <div>
                <p className="text-xs text-white/25 uppercase tracking-wider mb-0.5" style={{ letterSpacing: "0.12em" }}>
                  Payment
                </p>
                <p className="text-sm text-white/55 font-light">Card, bank transfer, or crypto</p>
              </div>
              <div>
                <p className="text-xs text-white/25 uppercase tracking-wider mb-0.5" style={{ letterSpacing: "0.12em" }}>
                  Pets
                </p>
                <p className="text-sm text-white/55 font-light">On request, small pets welcome</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-white/20 font-light">&copy; 2026 Aurélia Suites. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/20 hover:text-white/50 transition-colors font-light"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/20 hover:text-white/50 transition-colors font-light"
            >
              Facebook
            </a>
            <Link to="/privacy" className="text-xs text-white/20 hover:text-white/50 transition-colors font-light">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}