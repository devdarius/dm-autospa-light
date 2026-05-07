import { NextRequest, NextResponse } from "next/server";
import { readPricing, writePricing, PricingItem } from "@/lib/store";
import { randomUUID } from "crypto";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "dmautospa2025";

function checkAuth(req: NextRequest) {
  return req.headers.get("x-admin-key") === ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(readPricing());
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const { category, name, price, duration } = body;
  if (!category || !name || !price) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const item: PricingItem = { id: randomUUID(), category, name, price, duration: duration || "" };
  const pricing = readPricing();
  pricing.push(item);
  writePricing(pricing);
  return NextResponse.json(item, { status: 201 });
}

export async function PUT(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const pricing = readPricing().map((i) => i.id === body.id ? { ...i, ...body } : i);
  writePricing(pricing);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  writePricing(readPricing().filter((i) => i.id !== id));
  return NextResponse.json({ success: true });
}
