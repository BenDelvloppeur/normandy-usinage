"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data representing real possible projects
const projects = [
  {
    id: 1,
    title: "Réfection Moteur V8 Collection",
    category: "Moteur",
    description: "Rectification complète culasse et bloc pour un véhicule de collection américain.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2672&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Usinage Axe Inox 316L",
    category: "Tournage",
    description: "Production petite série d'axes pour l'industrie agroalimentaire locale.",
    image: "https://images.unsplash.com/photo-1612690669206-ebc8bd071e67?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Fraisage Support Aluminium",
    category: "Fraisage",
    description: "Usinage complexe 5 axes pour une pièce aéronautique.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Engrenage Bronze sur-mesure",
    category: "Fraisage",
    description: "Reproduction d'un engrenage cassé introuvable pour une machine agricole.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Réparation Vérin Hydraulique",
    category: "Réparation",
    description: "Usinage nouvelle tige et changement joints pour TP.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Surfaçage Culasse Diesel",
    category: "Moteur",
    description: "Mise à l'épreuve et surfaçage pour utilitaire pro.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop"
  }
];

const categories = ["Tous", "Moteur", "Tournage", "Fraisage", "Réparation"];

export default function RealisationsPage() {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects = projects.filter(project => 
    filter === "Tous" ? true : project.category === filter
  );

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-slate-900 py-12 md:py-16 border-b border-slate-800">
          <div className="container px-4 mx-auto text-center">
            <h1 className="font-oswald font-bold text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
              Nos <span className="text-orange-600">Réalisations</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Découvrez la qualité de notre travail à travers une sélection de projets réalisés dans notre atelier de Granville.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 pb-8">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar touch-pan-x snap-x">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-5 py-2 md:px-6 rounded-full border text-sm font-medium transition-all uppercase tracking-wider font-oswald whitespace-nowrap snap-center",
                    filter === cat
                      ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-900/50"
                      : "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8 md:py-12 pb-16 md:pb-24">
          <div className="container px-4 mx-auto">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={project.id}
                    className="group bg-slate-900 rounded-sm border border-slate-800 overflow-hidden hover:border-orange-600/50 transition-colors"
                  >
                    <div className="aspect-video relative overflow-hidden bg-slate-800">
                      <div className="absolute inset-0 bg-slate-800 animate-pulse" /> {/* Loading Placeholder */}
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-oswald font-bold text-xl text-white uppercase mb-2 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-slate-500">
                <p>Aucun projet dans cette catégorie pour le moment.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

