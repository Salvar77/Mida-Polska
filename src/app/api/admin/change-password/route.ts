import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectToDatabase from "@/lib/mongoose";
import AdminUser from "@/models/AdminUser";
import bcrypt from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Brak autoryzacji" }, { status: 401 });
    }

    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "Uzupełnij wszystkie pola." }, { status: 400 });
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ error: "Nowe hasło musi mieć min. 8 znaków." }, { status: 400 });
    }

    await connectToDatabase();

    const user = await AdminUser.findOne({ email: session.user?.email });
    if (!user) {
      return NextResponse.json({ error: "Nie znaleziono użytkownika." }, { status: 404 });
    }

    const isValid = await bcrypt.compare(currentPassword, user.password);
    if (!isValid) {
      return NextResponse.json({ error: "Obecne hasło jest nieprawidłowe." }, { status: 400 });
    }

    const hashed = await bcrypt.hash(newPassword, 12);
    user.password = hashed;
    await user.save();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
