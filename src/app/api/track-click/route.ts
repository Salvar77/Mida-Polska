import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import ClickTrack from "@/models/ClickTrack";

export async function POST(req: NextRequest) {
  try {
    const { source, target, page } = await req.json();
    await dbConnect();
    
    // Get IP reliably
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(',')[0] : "unknown";

    await ClickTrack.create({
      source: source || "form-click",
      target: target || "unknown",
      page: page || "unknown",
      ip: ip,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Click tracking error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
