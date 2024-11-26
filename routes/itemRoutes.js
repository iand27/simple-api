import express from "express";
import { ModelItem } from "../models/Item.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await ModelItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/", async (req, res) => {
  const { nama, deskripsi } = req.body;

  try {
    await ModelItem.create({ nama, deskripsi });
    res.status(201).json({ msg: "Berhasil Dibuat" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

export default router;
