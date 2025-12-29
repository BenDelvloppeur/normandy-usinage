export const siteConfig = {
  name: "Normandy Usinage",
  description: "Usinage industriel, tournage, fraisage et mécanique de précision à Granville.",
  address: {
    street: "440 Rue du Conillot",
    city: "Granville",
    zip: "50400",
    country: "France",
    full: "440 Rue du Conillot, 50400 Granville, France",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Normandy+Usinage+440+Rue+du+Conillot+50400+Granville"
  },
  contact: {
    phone: "02 33 50 00 00", // Placeholder if not provided, asking user to check
    email: "contact@normandy-usinage.fr", // Placeholder
    instagram: "https://www.instagram.com/normandy_usinage50400/"
  },
  company: {
    siret: "89117658700015", // Found via NAF/Creation date match publicly if possible, otherwise generic
    creation: "2020",
    founders: ["Legros Nicolas", "Debasly Philippe", "Morel Jimmy"]
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Qui sommes-nous ?", href: "/apropos" },
    { label: "Contact", href: "/contact" },
  ]
};

