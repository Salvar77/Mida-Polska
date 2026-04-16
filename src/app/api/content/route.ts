import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import connectToDatabase from "@/lib/mongoose";
import WebsiteContent from "@/models/WebsiteContent";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";

// POBIERANIE TREŚCI
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sectionId = searchParams.get("sectionId");

    await connectToDatabase();

    if (sectionId) {
      const content = await WebsiteContent.findOne({ sectionId });
      return NextResponse.json(content || { sectionId, data: {} });
    }

    const allContent = await WebsiteContent.find({});
    return NextResponse.json(allContent);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// AKTUALIZACJA TREŚCI (Tylko dla zalogowanych)
export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Brak autoryzacji" }, { status: 401 });
    }

    const { sectionId, data } = await req.json();

    await connectToDatabase();

    const updatedContent = await WebsiteContent.findOneAndUpdate(
      { sectionId },
      { sectionId, data },
      { upsert: true, new: true }
    );

    // Natychmiastowe unieważnienie cache strony głównej po zapisie w adminie
    revalidatePath("/");

    return NextResponse.json(updatedContent);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
