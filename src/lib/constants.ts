export const COMPANY = {
  name: "DM AutoSPA",
  fullName: "DM AutoSPA – Auto Detailing Premium",
  owner: "David Matuszewski",
  address: {
    street: "Bereżnica Wyżna 36",
    postalCode: "38-610",
    city: "Polańczyk",
    region: "Bieszczady",
    country: "PL",
    full: "Bereżnica Wyżna 36, 38-610 Polańczyk",
  },
  contact: {
    phone: "733028686",
    phoneDisplay: "733 028 686",
    email: "matuszewski.david95@gmail.com",
  },
  geo: {
    lat: 49.351667,
    lng: 22.359167,
  },
  hours: {
    weekdays: "08:00–18:00",
    weekend: "Zamknięte",
    schema: [
      { days: "Mo,Tu,We,Th,Fr", opens: "08:00", closes: "18:00" },
    ],
  },
  social: {
    facebook: "https://facebook.com/dmautospa",
    instagram: "https://instagram.com/dmautospa",
  },
  siteUrl: "https://dm-autospa.pl",
};

export const SERVICES = [
  {
    slug: "powloki-ceramiczne",
    name: "Powłoki Ceramiczne",
    shortName: "Ceramika",
    tagline: "Ochrona na lata. Połysk jak diament.",
    description:
      "Profesjonalna aplikacja powłoki ceramicznej to najtrwalsza forma ochrony lakieru. Tworzy twardą powłokę SiO₂, która odpycha brud, wodę i promieniowanie UV przez wiele lat.",
    longDescription:
      "Powłoka ceramiczna to rewolucja w ochronie lakieru samochodowego. Nanoceramiczne cząsteczki krzemionki tworzą trwałą matrycę wiązaną chemicznie z lakierem, która zapewnia hydrofobowość, odporność na zarysowania i intensywny połysk przez 3–5 lat. Każda realizacja poprzedzona jest precyzyjną dekontaminacją i korektą lakieru.",
    features: [
      "Trwałość 3–5 lat",
      "Hydrofobowość 9H",
      "Ochrona UV",
      "Efekt self-cleaning",
      "Głęboki połysk",
    ],
    icon: "💎",
    priceFrom: 1500,
    duration: "1–2 dni",
    metaTitle: "Powłoka Ceramiczna Polańczyk – DM AutoSPA | Bieszczady",
    metaDescription:
      "Profesjonalna aplikacja powłoki ceramicznej w Polańczyku i Bieszczadach. Ochrona lakieru na 3–5 lat, efekt głębokiego połysku. Dojazd do klienta. Tel: 733 028 686.",
  },
  {
    slug: "folia-ppf",
    name: "Folia PPF",
    shortName: "PPF",
    tagline: "Niewidzialna tarcza dla Twojego lakieru.",
    description:
      "Paint Protection Film to transparentna folia poliuretanowa, która fizycznie chroni lakier przed odpryskami kamieni, zarysowaniami i uszkodzeniami mechanicznymi.",
    longDescription:
      "PPF (Paint Protection Film) to najlepsza mechaniczna ochrona lakieru dostępna na rynku. Folia o grubości 150–200 µm pochłania uderzenia, odpryski kamieni i zarysowania, a dzięki właściwościom self-healing (samoleczenia) drobne rysy znikają samoistnie pod wpływem ciepła. Aplikowana precyzyjnie, jest praktycznie niewidoczna.",
    features: [
      "Self-healing (samoleczenie)",
      "Ochrona przed odpryskami",
      "Transparentna lub satynowa",
      "Trwałość 7–10 lat",
      "Gwarancja producenta",
    ],
    icon: "🛡️",
    priceFrom: 2500,
    duration: "2–3 dni",
    metaTitle: "Folia PPF Polańczyk – DM AutoSPA | Bieszczady",
    metaDescription:
      "Montaż folii PPF w Polańczyku i Bieszczadach. Ochrona lakieru przed odpryskami i zarysowaniami. Folia self-healing. Dojazd door-to-door. Tel: 733 028 686.",
  },
  {
    slug: "korekta-lakieru",
    name: "Korekta Lakieru",
    shortName: "Polerowanie",
    tagline: "Przywróć lakierowi pierwotny blask.",
    description:
      "Profesjonalna korekta lakieru eliminuje hologramy, rysy, swirlmarki i inne defekty. Jeden i dwuetapowy poler maszynowy z użyciem past polerskich premium.",
    longDescription:
      "Korekta lakieru to proces mechanicznego usuwania wierzchniej warstwy lakieru w celu eliminacji defektów – zarysowań, hologramów, swirl marków i oxidacji. Wykonujemy poler jednoetapowy (redukcja defektów) oraz dwuetapowy (pełna korekcja) z użyciem polerek DA i rotacyjnych oraz past o różnej gradacji ścierności.",
    features: [
      "Eliminacja swirlmarków",
      "Usunięcie hologramów",
      "Poler 1- i 2-etapowy",
      "Pomiar grubości lakieru",
      "Kontrola pod lampą inspekcyjną",
    ],
    icon: "✨",
    priceFrom: 800,
    duration: "4–8 godzin",
    metaTitle: "Korekta Lakieru Polańczyk – DM AutoSPA | Bieszczady",
    metaDescription:
      "Korekta i polerowanie lakieru w Polańczyku i Bieszczadach. Eliminacja swirlmarków, hologramów i zarysowań. Dojazd do klienta. Tel: 733 028 686.",
  },
];

export const PRICING = [
  {
    category: "Korekta Lakieru",
    items: [
      { name: "Korekta 1-etapowa (redukcja defektów)", price: "od 800 zł", duration: "4–6h" },
      { name: "Korekta 2-etapowa (pełna korekcja)", price: "od 1 200 zł", duration: "6–8h" },
      { name: "Korekta + powłoka ceramiczna", price: "od 2 000 zł", duration: "2 dni" },
    ],
  },
  {
    category: "Powłoki Ceramiczne",
    items: [
      { name: "Powłoka ceramiczna 1 rok", price: "od 800 zł", duration: "1 dzień" },
      { name: "Powłoka ceramiczna 3 lata", price: "od 1 500 zł", duration: "1–2 dni" },
      { name: "Powłoka ceramiczna 5 lat (Premium)", price: "od 2 500 zł", duration: "2 dni" },
      { name: "Powłoka na felgi (4 szt.)", price: "od 400 zł", duration: "3–4h" },
      { name: "Powłoka na szyby", price: "od 300 zł", duration: "2–3h" },
    ],
  },
  {
    category: "Folia PPF",
    items: [
      { name: "PPF maska + zderzak przód", price: "od 2 500 zł", duration: "2 dni" },
      { name: "PPF przód pojazdu (full front)", price: "od 4 000 zł", duration: "3 dni" },
      { name: "PPF całego pojazdu", price: "od 8 000 zł", duration: "5–7 dni" },
      { name: "PPF progi + łuki kół", price: "od 1 200 zł", duration: "1 dzień" },
    ],
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Strona główna" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/cennik", label: "Cennik" },
  { href: "/galeria", label: "Galeria" },
  { href: "/kontakt", label: "Kontakt" },
];
