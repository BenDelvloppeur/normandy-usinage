"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-slate-900 py-12 md:py-16 border-b border-slate-800">
          <div className="container px-4 mx-auto text-center">
            <h1 className="font-oswald font-bold text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
              Contactez <span className="text-orange-600">Nous</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Nous sommes à votre écoute pour toute demande d'information ou de rendez-vous.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="font-oswald font-bold text-3xl text-white uppercase">Coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center border border-slate-800 shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold uppercase mb-1">Adresse</h3>
                      <p className="text-slate-400">
                        {siteConfig.address.street}<br/>
                        {siteConfig.address.zip} {siteConfig.address.city}, France
                      </p>
                      <a href={siteConfig.address.googleMapsUrl} target="_blank" className="text-orange-500 text-sm hover:underline mt-2 inline-block">
                        Voir sur Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center border border-slate-800 shrink-0">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold uppercase mb-1">Téléphone</h3>
                      <p className="text-slate-400 mb-2">Du Lundi au Vendredi, 8h-18h</p>
                      <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="text-xl text-white font-oswald hover:text-orange-500 transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center border border-slate-800 shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold uppercase mb-1">Email</h3>
                      <p className="text-slate-400 mb-2">Réponse sous 24h ouvrées</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-orange-500 transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 border border-slate-800 rounded-sm">
                <h3 className="font-oswald font-bold text-xl text-white uppercase mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" /> Horaires d'ouverture
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Lundi - Jeudi</span>
                    <span>08:00 - 12:00 / 13:30 - 17:30</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Vendredi</span>
                    <span>08:00 - 12:00 / 13:30 - 16:30</span>
                  </li>
                  <li className="flex justify-between text-slate-500">
                    <span>Samedi - Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-sm border border-slate-800 h-fit">
              <h2 className="font-oswald font-bold text-3xl text-white uppercase mb-6">Envoyer un message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 uppercase tracking-wide">Nom complet</label>
                  <input 
                    id="name" 
                    type="text" 
                    className="w-full h-12 px-4 bg-slate-950 border border-slate-800 rounded-sm text-white focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 uppercase tracking-wide">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    className="w-full h-12 px-4 bg-slate-950 border border-slate-800 rounded-sm text-white focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300 uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full p-4 bg-slate-950 border border-slate-800 rounded-sm text-white focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
                <Button size="lg" className="w-full bg-white text-slate-900 hover:bg-slate-200">
                  Envoyer le message
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

