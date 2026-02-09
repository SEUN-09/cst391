import express from "express";
import consignmentRoutes from "./routes/consignments";

const app = express();
app.use(express.json());

app.use("/api/consignments", consignmentRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
