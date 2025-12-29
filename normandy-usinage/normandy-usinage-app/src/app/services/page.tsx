import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Cog, Disc, Hammer, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services d'Usinage & Mécanique | Normandy Usinage Granville",
  description: "Tournage, fraisage, réfection de moteurs, soudure. Découvrez nos services d'usinage de précision pour l'industrie et les particuliers dans la Manche.",
};

const services = [
  {
    title: "Tournage & Fraisage",
    description: "Notre cœur de métier. Nous réalisons des opérations de tournage et fraisage de précision sur commandes numériques et conventionnelles.",
    details: [
      "Usinage de pièces unitaires ou petites séries",
      "Tous métaux : Acier, Inox, Aluminium, Bronze, Laiton",
      "Plastiques techniques (Delrin, Nylon, PTFE)",
      "Reprise de pièces existantes"
    ],
    icon: Cog
  },
  {
    title: "Réfection Moteurs",
    description: "Service spécialisé dans la remise à neuf de moteurs thermiques pour l'automobile (collection & moderne), la moto, et l'agricole.",
    details: [
      "Rectification de culasse",
      "Réalésage de blocs moteurs",
      "Rectification de vilebrequins",
      "Remplacement de guides et sièges de soupapes"
    ],
    icon: Wrench
  },
  {
    title: "Mécanique Générale & Réparation",
    description: "Nous intervenons pour réparer vos pièces mécaniques usées ou cassées, prolongeant ainsi la durée de vie de vos équipements.",
    details: [
      "Rechargement par soudure et ré-usinage",
      "Extraction de goujons cassés",
      "Réparation de filetages (Hélicoil)",
      "Ajustage et montage de roulements"
    ],
    icon: Hammer
  },
  {
    title: "Fabrication de Pièces Métalliques",
    description: "Conception et réalisation de pièces sur-mesure d'après modèle ou plan pour répondre à vos besoins spécifiques.",
    details: [
      "Fabrication d'axes, bagues, entretoises",
      "Pièces de décoration industrielle",
      "Adaptation de pièces pour projets custom",
      "Conseil technique sur le choix des matériaux"
    ],
    icon: Disc
  }
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-slate-900 py-12 md:py-16 border-b border-slate-800">
          <div className="container px-4 mx-auto text-center">
            <h1 className="font-oswald font-bold text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
              Nos Services <span className="text-orange-600">d'Usinage</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Une expertise complète en mécanique de précision pour répondre aux exigences des industriels et des passionnés de mécanique.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-sm p-8 hover:border-orange-600/30 transition-colors group">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-slate-800 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-colors">
                      <service.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-oswald font-bold text-2xl text-white uppercase">{service.title}</h3>
                      <p className="text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-600 py-16">
          <div className="container px-4 mx-auto text-center space-y-8">
            <h2 className="font-oswald font-bold text-3xl text-white uppercase">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-orange-100 max-w-2xl mx-auto text-lg">
              Chaque projet est unique. Contactez-nous pour discuter de votre besoin spécifique, nous trouvons souvent des solutions là où d'autres s'arrêtent.
            </p>
            <Button asChild size="lg" className="bg-slate-950 text-white hover:bg-slate-900 border-2 border-slate-950 h-14 px-8 text-lg">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

