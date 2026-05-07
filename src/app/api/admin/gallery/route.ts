import { NextRequest, NextResponse } from "next/server";
import { readGallery, writeGallery } from "@/lib/store";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";
import sharp from "sharp";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "dmautospa2025";

function checkAuth(req: NextRequest) {
  const auth = req.headers.get("x-admin-key");
  return auth === ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(readGallery());
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const alt = formData.get("alt") as string;
    const cat = formData.get("cat") as string;

    if (!file || !alt || !cat) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Compress with sharp → WebP
    const compressed = await sharp(buffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer();

    const id = randomUUID();
    const filename = `${id}.webp`;
    const uploadDir = join(process.cwd(), "public", "uploads");
    if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
    writeFileSync(join(uploadDir, filename), compressed);

    const item = { id, src: `/uploads/${filename}`, alt, cat, createdAt: new Date().toISOString() };
    const gallery = readGallery();
    gallery.unshift(item);
    writeGallery(gallery);

    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const gallery = readGallery().filter((i) => i.id !== id);
  writeGallery(gallery);
  return NextResponse.json({ success: true });
}
