import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import { AdInquiryEmail } from "@/lib/email/templates/AdInquiryEmail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, company, city, phone } = body;

    if (!firstName || !lastName || !company || !city || !phone) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane." },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString("pl-PL", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

    const html = await render(
      AdInquiryEmail({ firstName, lastName, company, city, phone, submittedAt })
    );

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "ssl0.ovh.net",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "biuro@mida-polska.pl",
        pass: process.env.SMTP_PASSWORD || "",
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"Mida Polska – Strona" <${process.env.SMTP_USER || "biuro@mida-polska.pl"}>`,
      to: "biuro@mida-polska.pl",
      subject: `📩 Zapytanie reklamowe – ${company} (${city})`,
      html,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Ad inquiry email error:", err);
    return NextResponse.json({ error: "Błąd serwera." }, { status: 500 });
  }
}
