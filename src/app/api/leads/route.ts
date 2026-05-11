import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Lead from "@/models/Lead";

export async function POST(req: Request) {
  try {
    const { name, phone, email, city, role, source } = await req.json();

    if (!name || !phone || !email || !city || !role) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane" },
        { status: 400 }
      );
    }

    await dbConnect();

    // 1. Zapis do własnej bazy MongoDB
    const newLead = await Lead.create({
      name,
      phone,
      email,
      city,
      role,
      source: source || "website",
      consent: true,
    });

    // 2. "Ciche" wysłanie do Google Forms w tle
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdSB57q44yGqiwr-sp_zqYAvbObJUPUSrTrtRMitvBm_vkjbA/formResponse";
    
    const formData = new URLSearchParams();
    formData.append("entry.1839200097", role);        // Chcesz rozpocząć pracę jako
    formData.append("entry.2121493421", name);        // Imię nazwisko
    formData.append("entry.891338267", phone);        // Numer telefonu
    formData.append("entry.435777645", email);        // Adres e-mail
    formData.append("entry.278861156", city);         // Miasto pracy
    formData.append("entry.1074255916", "TAK");       // Zgoda

    // Wysyłamy bez czekania na odpowiedź (fire and forget)
    fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    }).catch(err => console.error("Google Form background submission failed:", err));

    return NextResponse.json(
      { success: true, data: newLead },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
