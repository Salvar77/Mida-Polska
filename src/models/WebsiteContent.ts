import mongoose, { Schema, models } from "mongoose";

const WebsiteContentSchema = new Schema(
  {
    sectionId: {
      type: String, // e.g. "hero", "fleet", "recruitment"
      required: true,
      unique: true,
    },
    data: {
      type: Schema.Types.Mixed, // flexible JSON payload for different structures
      required: true,
    },
  },
  { timestamps: true }
);

const WebsiteContent = models.WebsiteContent || mongoose.model("WebsiteContent", WebsiteContentSchema);
export default WebsiteContent;
