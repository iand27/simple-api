import mongoose from "mongoose";

const skemaitem = new mongoose.Schema(
  {
    nama: { type: String, required: true },
    deskripsi: { type: String, required: true },
  },
  { timestamps: true }
);

export const ModelItem = mongoose.model("Item", skemaitem);
