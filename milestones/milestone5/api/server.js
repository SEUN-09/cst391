const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',  // ← put your password here
  database: 'cst391'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('MySQL connected!');
});

// GET all consignments
app.get('/api/consignments', (req, res) => {
  db.query('SELECT * FROM consignments', (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
});

// GET single consignment by ID
app.get('/api/consignments/:id', (req, res) => {
  db.query('SELECT * FROM consignments WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Not found' });
    res.json(results[0]);
  });
});

// POST create new consignment
app.post('/api/consignments', (req, res) => {
  const { reference_number, sender_name, receiver_name, status, delivery_address } = req.body;
  db.query(
    'INSERT INTO consignments (reference_number, sender_name, receiver_name, status, delivery_address) VALUES (?, ?, ?, ?, ?)',
    [reference_number, sender_name, receiver_name, status || 'Pending', delivery_address],
    (err, result) => {
      if (err) return res.status(400).json({ message: err.message });
      res.status(201).json({ id: result.insertId, ...req.body });
    }
  );
});

// PUT update consignment
app.put('/api/consignments/:id', (req, res) => {
  const { reference_number, sender_name, receiver_name, status, delivery_address } = req.body;
  db.query(
    'UPDATE consignments SET reference_number=?, sender_name=?, receiver_name=?, status=?, delivery_address=? WHERE id=?',
    [reference_number, sender_name, receiver_name, status, delivery_address, req.params.id],
    (err, result) => {
      if (err) return res.status(400).json({ message: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Not found' });
      res.json({ id: req.params.id, ...req.body });
    }
  );
});

// DELETE consignment
app.delete('/api/consignments/:id', (req, res) => {
  db.query('DELETE FROM consignments WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Consignment deleted' });
  });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));