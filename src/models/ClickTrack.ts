import mongoose from "mongoose";

const clickTrackSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  ip: String,
  source: String,
  target: String,
  page: String,
});

export default mongoose.models.ClickTrack || mongoose.model("ClickTrack", clickTrackSchema);
