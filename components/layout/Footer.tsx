import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/site-config";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="gold-divider" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/logo-mark.png" alt="VYRONIX LAB" width={88} height={88} className="h-20 w-20" />
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl tracking-[0.25em] text-offwhite">VYRONIX</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold">Lab</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-grey">
              Premium online body transformation coaching personalized, science-based, and built around you.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#25D366] transition-colors hover:border-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Explore</p>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-grey transition-colors hover:text-offwhite">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-grey">
              <li>
                <a href={siteConfig.whatsappHref} className="transition-colors hover:text-offwhite">
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li className="text-grey/70">Online Coaching Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-grey/60 sm:flex-row">
          <p>© {year} VYRONIX LAB. All rights reserved.</p>
          <p>Results vary by individual. Coaching does not guarantee specific outcomes.</p>
        </div>
      </div>
    </footer>
  );
}
