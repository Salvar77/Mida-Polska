import mongoose, { Schema, models } from "mongoose";

const WebsiteContentSchema = new Schema(
  {
    sectionId: {
      type: String,
      required: true,
      unique: true,
    },
    data: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);

const WebsiteContent = models.WebsiteContent || mongoose.model("WebsiteContent", WebsiteContentSchema);
export default WebsiteContent;
