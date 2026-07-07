// Server Component
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-24 pb-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/15">
          <div className="md:col-span-2">
            <div className="font-display text-4xl">
              <Image
                src="/Jalashay_Logo.webp"
                alt="Jalashay Resort"
                width={150}
                height={54}
                style={{width:"auto"}}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-6 max-w-md text-primary-foreground/70 font-light">
              A serene lakeside escape on the eastern shore of Lake Suvarna. Two hours from the
              city. A world away from it.
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              Find Us
            </p>
            <div className="mt-4 font-light leading-relaxed text-primary-foreground/80">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jalashay+Resort,+Near+Panshet,+Maharashtra+412107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:text-white transition-colors group"
                title="Open in Google Maps"
              >
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[color:var(--gold)]" />
                <span>
                  Jalashay Resort,
                  <br />
                  Near Panshet,<br /> Maharashtra 412107
                </span>
              </a>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              Reservations
            </p>
            <p className="mt-4 font-light leading-relaxed text-primary-foreground/80">
              info@jalashayresort.com
              <br />
              <a href="tel:+917378818818" className="hover:text-white transition-colors">+91 737 881 8818</a>
            </p>
          </div>
        </div>
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50 gap-4">
          <span>© {new Date().getFullYear()} Jalashay Resort. All rights reserved.</span>
          <div className="flex gap-8 uppercase tracking-[0.2em]">
            <a href="https://www.instagram.com/jalashayexperiences?igsh=Y2t5ZmF3azJ6Nmpx" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--gold)]">
              Instagram
            </a>
            <a href="https://www.facebook.com/people/Jalashay-Resort/61578448988796/?rdid=oNaznBWEbRkVib8H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F196Yxy8Zqd%2F" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--gold)]">
              Facebook
            </a>
            <Link href="/privacy" className="hover:text-[color:var(--gold)]">
              Privacy & Policy
            </Link>
            <Link href="/faq" className="hover:text-[color:var(--gold)]">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
