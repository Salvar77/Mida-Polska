import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Proszę podać imię i nazwisko"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Proszę podać numer telefonu"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Proszę podać adres e-mail"],
    trim: true,
  },
  city: {
    type: String,
    required: [true, "Proszę wybrać miasto"],
  },
  role: {
    type: String,
    required: [true, "Proszę wybrać stanowisko"],
  },
  consent: {
    type: Boolean,
    default: true,
  },
  source: {
    type: String,
    default: "website",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
