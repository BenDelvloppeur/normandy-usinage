import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

export default function MentionsLegalesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-4xl">
            <h1 className="font-oswald font-bold text-3xl md:text-4xl text-white uppercase mb-8">Mentions Légales</h1>
            
            <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">1. Édition du site</h2>
                <p>
                  En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>{siteConfig.name}</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Propriétaire du site :</strong> {siteConfig.name} SARL</li>
                  <li><strong>Adresse :</strong> {siteConfig.address.full}</li>
                  <li><strong>Dirigeants :</strong> {siteConfig.company.founders.join(", ")}</li>
                  <li><strong>SIRET :</strong> {siteConfig.company.siret}</li>
                  <li><strong>Contact :</strong> {siteConfig.contact.email} / {siteConfig.contact.phone}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">2. Propriété intellectuelle et contrefaçons</h2>
                <p>
                  <strong>{siteConfig.name}</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong>{siteConfig.name}</strong>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">3. Limitations de responsabilité</h2>
                <p>
                  <strong>{siteConfig.name}</strong> ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site.
                </p>
                <p>
                  <strong>{siteConfig.name}</strong> décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur ce site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-4">4. CNIL et gestion des données personnelles</h2>
                <p>
                  Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre DPO via le formulaire de contact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

