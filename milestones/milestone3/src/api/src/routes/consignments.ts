import { Router } from "express";
import { pool } from "../db/db";

const router = Router();

// READ all consignments
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM consignments");
  res.json(rows);
});

// CREATE a consignment
router.post("/", async (req, res) => {
  const { reference_number, sender_name, receiver_name, status } = req.body;

  const [result] = await pool.query(
    "INSERT INTO consignments (reference_number, sender_name, receiver_name, status) VALUES (?, ?, ?, ?)",
    [reference_number, sender_name, receiver_name, status]
  );

  res.status(201).json({ message: "Consignment created" });
});

export default router;

// UPDATE a consignment
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    await pool.query(
      "UPDATE consignments SET status = ? WHERE id = ?",
      [status, id]
    );
  
    res.json({ message: "Consignment updated" });
  });
  
  // DELETE a consignment
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    await pool.query(
      "DELETE FROM consignments WHERE id = ?",
      [id]
    );
  
    res.json({ message: "Consignment deleted" });
  });
  