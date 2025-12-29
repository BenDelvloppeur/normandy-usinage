import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";
import { Calendar, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous ? | Normandy Usinage Granville",
  description: "Découvrez l'équipe de Normandy Usinage (Nicolas Legros, Philippe Debasly, Jimmy Morel) et notre atelier de mécanique de précision à Granville.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-slate-900 py-12 md:py-16 border-b border-slate-800">
          <div className="container px-4 mx-auto text-center">
            <h1 className="font-oswald font-bold text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
              L'Entreprise <span className="text-orange-600">Normandy Usinage</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Savoir-faire, précision et proximité au service de vos projets mécaniques.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-20">
          <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="font-oswald font-bold text-3xl text-white uppercase mb-6 flex items-center gap-3">
                  <Calendar className="text-orange-600 w-8 h-8" />
                  Notre Histoire
                </h2>
                <div className="prose prose-invert prose-lg text-slate-300">
                  <p>
                    L'aventure <strong>Normandy Usinage</strong> débute officiellement le <strong>15 novembre 2020</strong>. Née de la volonté de proposer un service de proximité de haute qualité dans le bassin Granvillais, l'entreprise s'est rapidement imposée comme un acteur clé de la mécanique de précision dans la Manche.
                  </p>
                  <p>
                    Installés au <strong>440 Rue du Conillot à Granville</strong>, nous avons équipé notre atelier de machines performantes (tours, fraiseuses) permettant de répondre aussi bien aux besoins de l'industrie qu'aux demandes spécifiques des particuliers (restauration de véhicules anciens, pièces nautiques, etc.).
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-oswald font-bold text-3xl text-white uppercase mb-6 flex items-center gap-3">
                  <Users className="text-orange-600 w-8 h-8" />
                  Les Dirigeants
                </h2>
                <p className="text-slate-300 mb-6">
                  Normandy Usinage est une SARL dirigée par trois associés passionnés, alliant leurs compétences complémentaires pour offrir un service complet :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {siteConfig.company.founders.map((founder) => (
                    <div key={founder} className="bg-slate-900 border border-slate-800 p-4 rounded-sm text-center hover:border-orange-600/50 transition-colors">
                      <div className="w-16 h-16 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center text-slate-500 font-oswald font-bold text-xl border border-slate-700">
                        {founder.split(" ")[1][0]}{founder.split(" ")[0][0]}
                      </div>
                      <p className="font-oswald font-bold text-white uppercase text-sm">{founder}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="space-y-8">
              <div className="relative aspect-[4/3] bg-slate-900 rounded-sm overflow-hidden border border-slate-800 group">
                 {/* Placeholder for Workshop Image */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                 <div className="absolute bottom-6 left-6">
                   <p className="text-white font-oswald text-2xl uppercase">Notre Atelier</p>
                   <p className="text-orange-500 flex items-center gap-2">
                     <MapPin className="w-4 h-4" /> Granville, Manche
                   </p>
                 </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm">
                <h3 className="font-oswald font-bold text-xl text-white uppercase mb-4">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-slate-300">
                    <span className="font-bold text-orange-600">01.</span>
                    <span>Expertise technique et conseil personnalisé pour chaque projet.</span>
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <span className="font-bold text-orange-600">02.</span>
                    <span>Parc machine polyvalent pour l'unitaire et la petite série.</span>
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <span className="font-bold text-orange-600">03.</span>
                    <span>Ancrage local fort et réactivité pour les entreprises normandes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] w-full bg-slate-800 relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.684157147366!2d-1.5714739234863385!3d48.83584997132924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480b953880555555%3A0x1234567890abcdef!2s440%20Rue%20du%20Conillot%2C%2050400%20Granville!5e0!3m2!1sfr!2sfr!4v1703600000000!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

