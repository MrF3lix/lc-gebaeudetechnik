// One-off script: populates a freshly-migrated PocketBase instance with the
// content that used to be hardcoded in app/page.tsx, so switching over
// doesn't mean retyping everything by hand.
//
// Usage:
//   POCKETBASE_URL=https://pb.example.com \
//   POCKETBASE_SUPERUSER_EMAIL=you@example.com \
//   POCKETBASE_SUPERUSER_PASSWORD=your-password \
//   node pocketbase/seed.mjs
//
// Safe to re-run: it skips any collection that already has records.

import PocketBase from "pocketbase";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "assets", "images");

const { POCKETBASE_URL, POCKETBASE_SUPERUSER_EMAIL, POCKETBASE_SUPERUSER_PASSWORD } = process.env;

if (!POCKETBASE_URL || !POCKETBASE_SUPERUSER_EMAIL || !POCKETBASE_SUPERUSER_PASSWORD) {
  console.error(
    "Set POCKETBASE_URL, POCKETBASE_SUPERUSER_EMAIL and POCKETBASE_SUPERUSER_PASSWORD env vars first."
  );
  process.exit(1);
}

const pb = new PocketBase(POCKETBASE_URL);
await pb.collection("_superusers").authWithPassword(
  POCKETBASE_SUPERUSER_EMAIL,
  POCKETBASE_SUPERUSER_PASSWORD
);

function fileBlob(filename) {
  const buffer = fs.readFileSync(path.join(imagesDir, filename));
  return new Blob([buffer]);
}

async function seedOnce(collection, label, seedFn) {
  const existing = await pb.collection(collection).getList(1, 1);
  if (existing.totalItems > 0) {
    console.log(`${label}: already has records, skipping`);
    return;
  }
  await seedFn();
  console.log(`${label}: seeded`);
}

await seedOnce("settings", "settings", async () => {
  const data = new FormData();
  data.append("hero_title", "Wärme, Präzision, Exzellenz");
  data.append("hero_subtitle", "L&C Gebäudetechnik");
  data.append(
    "hero_text",
    "Langjährige Erfahrung und fundiertes Know-how.<br />Mit unseren Dienstleistungen erhalten Sie innovative und nachhaltige Lösungen für Ihre Heizungsanlage, Ihr Badezimmer, Ihre Lüftungs- und Klimaanlage sowie Ihre Solaranlage."
  );
  data.append("hero_cta_email", "info@lc-gebaeudetechnik.ch");
  data.append("hero_image", fileBlob("elco_sept20_092.jpg"), "elco_sept20_092.jpg");
  data.append("services_heading", "Unsere Dienstleistungen");
  data.append(
    "services_text",
    "Unser umfassendes Angebot an professionellen Dienstleistungen richtet sich an eine vielfältige Klientel, die vom Eigenheimbesitzer bis zum gewerblichen Bauträger reicht."
  );
  data.append("projects_heading", "Unsere Projekte");
  data.append(
    "projects_text",
    "Ein Überblick über einige unserer erfolgreich abgeschlossenen Projekte in den Bereichen Heizung, Sanitär, Kälte- und Klimatechnik sowie Solarinstallationen. Jedes Projekt spiegelt unser Engagement für Qualität und Innovation wider, von Heizungssarnierung bis hin zur Installation von Sonnenkollektoren."
  );
  data.append("team_heading", "Über uns");
  data.append(
    "team_text",
    "Wir sind ein kleines Team mit grossem Know-how und bringen zusammen 50 Jahre Erfahrung in der Gebäudetechnikbranche mit. Unser Fachwissen und unsere Leidenschaft für Technik ermöglichen es uns, massgeschneiderte Lösungen für jeden Kunden zu entwickeln."
  );
  data.append("contact_company", "L&C Gebäudetechnik");
  data.append("contact_address_line1", "Industriestrasse 15");
  data.append("contact_address_line2", "9015 St. Gallen");
  data.append("contact_phone", "+41 71 252 55 45");
  data.append("contact_email", "info@lc-gebaeudetechnik.ch");
  await pb.collection("settings").create(data);
});

await seedOnce("features", "features", async () => {
  const items = [
    {
      title: "Heizung",
      description:
        "Energieberatungen, digitale Heizungsplanung und Ausführung sämtlicher Installationsarbeiten im Bereich Heizung. Spezialist für Heizungssanierungen mit erneuerbarer Energie.",
      icon: "fire",
    },
    {
      title: "Sanitär",
      description:
        "Ausführung sämtlicher Installationsarbeiten im Bereich Wasser, Abfluss, Gas und Druckluft sowie Service- und Unterhaltsarbeiten.",
      icon: "wrench",
    },
    {
      title: "Kälte & Klima",
      description:
        "Planung und Installation von Klimaanlagen im Wohnbereich, in Büroräumen und bei kleinen Serveranlagen. Neuanlagen, Reparaturen und Ersatz bestehender Anlagen.",
      icon: "home-modern",
    },
    {
      title: "Solar",
      description:
        "Planung und Ausführung von thermischen Solaranlagen und Photovoltaikanlagen. Optimale Integration von Eigenverbrauchsoptimierungen bei Photovoltaikanlagen und Wärmepumpen.",
      icon: "sun",
    },
  ];
  for (const [index, item] of items.entries()) {
    await pb.collection("features").create({ ...item, order: index });
  }
});

await seedOnce("projects", "projects", async () => {
  const items = [
    {
      title: "Ziegelei Quartier, Berg TG",
      description:
        "Die erste Etappe der Überbauung Ziegelei-Quartier wurde erfolgreich abgeschlossen und übergeben. Nun starten wir mit der nächsten Etappe - den Häusern C bis F.",
      image: "project_ziegelei_quartier.jpg",
    },
    {
      title: "Friedauweg 2+4, Aadorf",
      description: "Installation Sonnenkollektoren für die Warmwasser gewinnung.",
      image: "project_aadorf_friedauweg.png",
    },
    {
      title: "Bergstrasse 29, Degersheim",
      description: "Heizungssarnierung",
      image: "project_degersheim_bergstrasse_29.png",
    },
    {
      title: "Kähbachstrasse 11, Degersheim",
      description: "Waschtisch Umbau",
      image: "project_degersheim_kähbachstrasse_11.png",
    },
    {
      title: "Kornhausstrasse 25, St. Gallen",
      description: "Energieagentur St. Gallen",
      image: "project_kornhausstrasse_25.png",
    },
    {
      title: "Windeggstrasse 12, Degersheim",
      description: "Heizungssarnierung Gas zu Gas",
      image: "project_windeggstrasse_12.png",
    },
  ];
  for (const [index, item] of items.entries()) {
    const data = new FormData();
    data.append("title", item.title);
    data.append("description", item.description);
    data.append("order", String(index));
    data.append("image", fileBlob(item.image), item.image);
    await pb.collection("projects").create(data);
  }
});

await seedOnce("team_members", "team_members", async () => {
  const items = [
    {
      name: "Leonardo Salvatore",
      position: "Inhaber & Leiter Installation",
      phone: "+41 79 892 94 76",
      email: "l.salvatore@lc-gebaeudetechnik.ch",
      description:
        "Vertrauen Sie uns, um Ihre Heizsysteme wieder zum Leben zu erwecken. Wir stellen Wärme und Funktionalität wieder her und sorgen dafür, dass Ihr Raum gemütlich bleibt.",
      image: "leonardo_salvatore.png",
    },
    {
      name: "Cosimo Ardito",
      position: "Inhaber & Leiter Verkauf",
      phone: "+41 78 303 07 09",
      email: "c.ardito@lc-gebaeudetechnik.ch",
      description:
        "Regelmässige Wartung ist der Schlüssel zur optimalen Leistung. Unsere gründlichen Inspektionen sorgen dafür, dass Ihre Systeme das ganze Jahr über reibungslos laufen.",
      image: "cosimo_ardito.png",
    },
  ];
  for (const [index, item] of items.entries()) {
    const data = new FormData();
    data.append("name", item.name);
    data.append("position", item.position);
    data.append("phone", item.phone);
    data.append("email", item.email);
    data.append("description", item.description);
    data.append("order", String(index));
    data.append("image", fileBlob(item.image), item.image);
    await pb.collection("team_members").create(data);
  }
});

console.log("Done.");
