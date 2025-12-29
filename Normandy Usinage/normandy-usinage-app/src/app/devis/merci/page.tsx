import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";

export default function MerciDevisPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container px-4 mx-auto max-w-2xl text-center">
          <div className="bg-slate-900 border border-slate-800 rounded-sm p-8 md:p-12 space-y-8 shadow-2xl shadow-black/50">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto ring-1 ring-green-500/20">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            
            <div className="space-y-4">
              <h1 className="font-oswald font-bold text-3xl md:text-4xl text-white uppercase tracking-wide">
                Demande envoyée avec <span className="text-green-500">succès</span> !
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                Merci de nous avoir contactés. Votre demande de devis a bien été transmise à notre équipe technique.
              </p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-sm text-left space-y-4">
              <h3 className="font-oswald text-slate-100 uppercase text-lg border-l-2 border-orange-600 pl-3">
                Prochaines étapes :
              </h3>
              <ul className="space-y-3 text-slate-400 text-sm md:text-base">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-orange-500 shrink-0">1</span>
                  Analyse de votre demande et des documents joints sous 24h.
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-orange-500 shrink-0">2</span>
                  Prise de contact si des précisions techniques sont nécessaires.
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-orange-500 shrink-0">3</span>
                  Envoi de votre devis détaillé par email.
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto h-auto py-3">
                <Link href="/" className="flex items-center justify-center gap-2">
                  <Home className="w-4 h-4 shrink-0" /> <span className="whitespace-nowrap">Retour à l'accueil</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 w-full sm:w-auto h-auto py-3">
                <Link href="/realisations" className="flex items-center justify-center gap-2">
                  <span className="whitespace-nowrap">Voir nos réalisations</span> <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

