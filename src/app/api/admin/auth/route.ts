import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "dmautospa2025";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password === ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_session", ADMIN_PASSWORD, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 8, // 8h
      path: "/",
    });
    return res;
  }
  return NextResponse.json({ error: "Nieprawidłowe hasło" }, { status: 401 });
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete("admin_session");
  return res;
}
