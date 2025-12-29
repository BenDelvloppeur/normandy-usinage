"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function DevisPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique d'envoi du formulaire (API call)
    // Pour l'instant, on redirige simplement vers la page de remerciement
    router.push("/devis/merci");
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-slate-900 py-16 border-b border-slate-800">
          <div className="container px-4 mx-auto text-center">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-white uppercase tracking-wide mb-4">
              Demande de <span className="text-orange-600">Devis</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Décrivez votre projet le plus précisément possible. Pour les pièces complexes, n'hésitez pas à joindre un plan ou une photo.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container px-4 mx-auto max-w-3xl">
            <div className="bg-slate-900 p-6 md:p-12 rounded-sm border border-slate-800">
              <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-oswald text-white uppercase border-l-4 border-orange-600 pl-4">1. Vos Coordonnées</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase">Nom *</label>
                      <input type="text" required className="w-full h-12 px-4 bg-slate-950 border border-slate-800 rounded-sm text-white focus:outline-none focus:border-orange-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase">Prénom *</label>
                      <input type="text" required className="w-full h-12 px-4 bg-slate-950 border border-slate-800 rounded-sm text-white focus:outline-none focus:border-orange-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase">Email *</label>
                      <input type="email" required className="w-full h-12 px-4 bg-slate-950 border border-slate-800 rounded-sm text-white focus:outline-none focus:border-orange-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 uppercase">Téléphone *</label>
                      <input type="tel" required className="w-full h-12 px-4 bg-slate-950 border border-slate-800 rounded-sm text-white focus:outline-none focus:border-orange-600" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-300 uppercase">Société (Optionnel)</label>
                      <input type="text" className="w-full h-12 px-4 bg-slate-950 border border-slate-800 rounded-sm text-white focus:outline-none focus:border-orange-600" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-oswald text-white uppercase border-l-4 border-orange-600 pl-4">2. Votre Projet</h3>
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-slate-300 uppercase">Type de prestation *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {["Tournage", "Fraisage", "Réfection Moteur", "Autre"].map((type) => (
                        <label key={type} className="flex items-center gap-3 p-4 border border-slate-800 rounded-sm bg-slate-950 cursor-pointer hover:border-slate-600">
                          <input type="radio" name="type" className="accent-orange-600 w-4 h-4" />
                          <span className="text-slate-300 text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 uppercase">Description détaillée du besoin *</label>
                    <textarea required rows={6} className="w-full p-4 bg-slate-950 border border-slate-800 rounded-sm text-white focus:outline-none focus:border-orange-600 resize-none" placeholder="Matière, quantités, tolérances, délais souhaités..."></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 uppercase">Fichier joint (Plan, Photo, Croquis)</label>
                    <div className="border-2 border-dashed border-slate-800 rounded-sm p-8 text-center hover:border-orange-600/50 transition-colors cursor-pointer bg-slate-950">
                      <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                      <p className="text-slate-400 text-sm">Cliquez pour ajouter un fichier (PDF, JPG, PNG)</p>
                      <p className="text-slate-600 text-xs mt-1">Max 10 Mo</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg">
                  Envoyer la demande de devis
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

