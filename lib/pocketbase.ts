const POCKETBASE_URL = process.env.POCKETBASE_URL;

// How long a fetched page is allowed to serve stale content before Next.js
// refetches it in the background. Content here changes rarely, so this
// keeps load on PocketBase low while still picking up edits quickly.
const REVALIDATE_SECONDS = 60;

type ListResponse<T> = {
  items: T[];
};

async function fetchCollection<T>(collection: string, params = ""): Promise<T[]> {
  if (!POCKETBASE_URL) {
    throw new Error("POCKETBASE_URL is not set. See .env.local.example.");
  }

  const res = await fetch(
    `${POCKETBASE_URL}/api/collections/${collection}/records?${params}`,
    { next: { revalidate: REVALIDATE_SECONDS } }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch "${collection}" from PocketBase: ${res.status} ${res.statusText}`);
  }

  const data: ListResponse<T> = await res.json();
  return data.items;
}

export function pbFileUrl(record: { collectionName: string; id: string }, filename: string): string {
  return `${POCKETBASE_URL}/api/files/${record.collectionName}/${record.id}/${filename}`;
}

export type Settings = {
  hero_title: string;
  hero_subtitle: string;
  hero_text: string;
  hero_cta_email: string;
  hero_image: string;
  services_heading: string;
  services_text: string;
  projects_heading: string;
  projects_text: string;
  team_heading: string;
  team_text: string;
  contact_company: string;
  contact_address_line1: string;
  contact_address_line2: string;
  contact_phone: string;
  contact_email: string;
  collectionName: string;
  id: string;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: "fire" | "wrench" | "home-modern" | "sun";
  order: number;
};

export type Project = {
  id: string;
  collectionName: string;
  title: string;
  description: string;
  image: string;
  order: number;
};

export type TeamMember = {
  id: string;
  collectionName: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  description: string;
  image: string;
  order: number;
};

export async function getSettings(): Promise<Settings> {
  const [settings] = await fetchCollection<Settings>("settings", "perPage=1");
  if (!settings) {
    throw new Error('No "settings" record found in PocketBase. Did you run pocketbase/seed.mjs?');
  }
  return settings;
}

export async function getFeatures(): Promise<Feature[]> {
  return fetchCollection<Feature>("features", "sort=order&perPage=200");
}

export async function getProjects(): Promise<Project[]> {
  return fetchCollection<Project>("projects", "sort=order&perPage=200");
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return fetchCollection<TeamMember>("team_members", "sort=order&perPage=200");
}
