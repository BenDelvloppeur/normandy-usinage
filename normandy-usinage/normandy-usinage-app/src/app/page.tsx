import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, Cog, Factory, PenTool, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-[600px] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 md:pb-20">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
          
          <div className="container relative z-10 px-4 flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 text-sm font-medium uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Basé à Granville, Manche
            </div>
            
            <h1 className="font-oswald font-bold text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-tight tracking-tight">
              Usinage <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Industriel</span> & <br className="hidden md:block" />
              Mécanique de <span className="text-slate-400">Précision</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Expertise en tournage, fraisage et réfection de moteurs. 
              Solutions sur-mesure pour professionnels et particuliers en Normandie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-8 pb-8">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg h-auto py-4 px-8 shadow-lg shadow-orange-900/20 w-full sm:w-auto">
                <Link href="/devis">Demander un devis gratuit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white h-auto py-4 px-8 backdrop-blur-sm w-full sm:w-auto">
                <Link href="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="py-12 md:py-24 bg-slate-950 relative">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
              <div className="space-y-4 max-w-2xl">
                <h2 className="font-oswald font-bold text-3xl md:text-5xl text-white uppercase tracking-wide">
                  Nos Domaines <span className="text-orange-600">d'Expertise</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Des équipements modernes et un savoir-faire artisanal pour répondre à tous vos besoins d'usinage, de la pièce unique à la petite série.
                </p>
              </div>
              <Button asChild variant="link" className="text-orange-500 hover:text-orange-400 p-0 hidden md:inline-flex group">
                <Link href="/services" className="flex items-center gap-2">
                  <span>Voir tous les services</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group relative p-8 bg-slate-900 border border-slate-800 hover:border-orange-600/50 transition-all hover:bg-slate-800/50 rounded-sm">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cog className="w-24 h-24 text-slate-100" />
                </div>
                <div className="w-12 h-12 bg-orange-600/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <Cog className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-oswald font-bold text-2xl text-white mb-4 uppercase">Tournage & Fraisage</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Usinage de pièces complexes sur tous types de métaux (acier, alu, inox, bronze). Capacité de production unitaire ou série.
                </p>
                <Link href="/services" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-400">
                  En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="group relative p-8 bg-slate-900 border border-slate-800 hover:border-orange-600/50 transition-all hover:bg-slate-800/50 rounded-sm">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Wrench className="w-24 h-24 text-slate-100" />
                </div>
                <div className="w-12 h-12 bg-orange-600/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <Wrench className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-oswald font-bold text-2xl text-white mb-4 uppercase">Réfection Moteurs</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Remise à neuf de moteurs thermiques. Rectification culasse, bloc moteur, vilebrequin pour auto, moto et industrie.
                </p>
                <Link href="/services" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-400">
                  En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="group relative p-8 bg-slate-900 border border-slate-800 hover:border-orange-600/50 transition-all hover:bg-slate-800/50 rounded-sm">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Factory className="w-24 h-24 text-slate-100" />
                </div>
                <div className="w-12 h-12 bg-orange-600/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <PenTool className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-oswald font-bold text-2xl text-white mb-4 uppercase">Fabrication Sur-Mesure</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Conception et réalisation de pièces spécifiques, réparation de pièces cassées ou introuvables.
                </p>
                <Link href="/services" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-400">
                  En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Button asChild variant="outline" className="w-full">
                <Link href="/services">Voir tous les services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ABOUT / STATS */}
        <section className="py-16 md:py-24 bg-slate-900 border-y border-slate-800">
          <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-oswald font-bold text-3xl md:text-5xl text-white uppercase tracking-wide">
                Normandy Usinage <br/>
                <span className="text-slate-500 text-2xl md:text-4xl">Depuis 2020</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Fondée par Nicolas Legros, Philippe Debasly et Jimmy Morel, Normandy Usinage est née de la passion pour la mécanique de précision. Installés à Granville, nous mettons notre expertise au service des industriels et des particuliers de la Manche.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Atelier équipé de machines conventionnelles et numériques",
                  "Réactivité et respect des délais",
                  "Expertise multi-matériaux (Acier, Inox, Alu, Plastiques)",
                  "Service de proximité à Granville"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-white text-slate-900 hover:bg-slate-200">
                <Link href="/apropos">Découvrir l'entreprise</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square md:aspect-video lg:aspect-square bg-slate-800 rounded-sm overflow-hidden border border-slate-700 relative group">
                {/* Image Placeholder - In production use real workshop photo */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-oswald text-xl uppercase">Atelier de Granville</p>
                  <p className="text-orange-500 text-sm">440 Rue du Conillot</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-orange-600" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-multiply" />
          
          <div className="container px-4 mx-auto relative z-10 text-center space-y-8">
            <h2 className="font-oswald font-bold text-4xl md:text-6xl text-white uppercase tracking-wide max-w-4xl mx-auto">
              Un projet ? Une pièce à usiner ?
            </h2>
            <p className="text-orange-100 text-xl max-w-2xl mx-auto">
              Contactez-nous pour une étude de faisabilité et un devis rapide. Nous répondons sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Button asChild size="lg" className="bg-slate-950 text-white hover:bg-slate-900 h-16 px-10 text-lg border-2 border-slate-950">
                <Link href="/devis">Demander un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent h-16 px-10 text-lg">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
