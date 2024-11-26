import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ItemRoutes from "./routes/itemRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/simpleapi")
  .then(() => console.log("Berhasil Terkoneksi ke database"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/itemnya", ItemRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server bejalan di port ${PORT}`));
