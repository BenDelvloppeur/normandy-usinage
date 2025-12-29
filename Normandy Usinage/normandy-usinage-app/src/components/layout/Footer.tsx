import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Mail, MapPin, Phone, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-oswald font-bold text-2xl uppercase tracking-wider text-slate-100 leading-none">
                Normandy
              </span>
              <span className="font-oswald font-medium text-lg uppercase tracking-[0.2em] text-orange-600 leading-none">
                Usinage
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Expert en usinage industriel et mécanique de précision à Granville. 
              Tournage, fraisage et réfection moteur pour professionnels et particuliers.
            </p>
            <div className="flex gap-4">
              <a 
                href={siteConfig.contact.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-sm bg-slate-900 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:bg-slate-800 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-oswald font-bold text-lg text-slate-100 uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-orange-600 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-oswald font-bold text-lg text-slate-100 uppercase tracking-wide">
              Coordonnées
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <a href={siteConfig.address.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-orange-600 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <h3 className="font-oswald font-bold text-lg text-slate-100 uppercase tracking-wide">
              Nous trouver
            </h3>
            <div className="w-full h-40 bg-slate-900 rounded-sm overflow-hidden border border-slate-800 grayscale hover:grayscale-0 transition-all duration-500">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.684157147366!2d-1.5714739234863385!3d48.83584997132924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480b953880555555%3A0x1234567890abcdef!2s440%20Rue%20du%20Conillot%2C%2050400%20Granville!5e0!3m2!1sfr!2sfr!4v1703600000000!5m2!1sfr!2sfr" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
             <Link href="/mentions-legales" className="hover:text-orange-500 transition-colors">Mentions légales</Link>
             <Link href="/confidentialite" className="hover:text-orange-500 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

