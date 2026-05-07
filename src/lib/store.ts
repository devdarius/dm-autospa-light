// Simple file-based storage for gallery and pricing (no external DB needed)
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const DATA_DIR = join(process.cwd(), "data");
const GALLERY_FILE = join(DATA_DIR, "gallery.json");
const PRICING_FILE = join(DATA_DIR, "pricing.json");

function ensureDataDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  cat: string;
  createdAt: string;
};

export type PricingItem = {
  id: string;
  category: string;
  name: string;
  price: string;
  duration: string;
};

export function readGallery(): GalleryItem[] {
  ensureDataDir();
  if (!existsSync(GALLERY_FILE)) return [];
  try { return JSON.parse(readFileSync(GALLERY_FILE, "utf-8")); } catch { return []; }
}

export function writeGallery(items: GalleryItem[]) {
  ensureDataDir();
  writeFileSync(GALLERY_FILE, JSON.stringify(items, null, 2));
}

export function readPricing(): PricingItem[] {
  ensureDataDir();
  if (!existsSync(PRICING_FILE)) return [];
  try { return JSON.parse(readFileSync(PRICING_FILE, "utf-8")); } catch { return []; }
}

export function writePricing(items: PricingItem[]) {
  ensureDataDir();
  writeFileSync(PRICING_FILE, JSON.stringify(items, null, 2));
}
