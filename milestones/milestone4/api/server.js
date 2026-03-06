const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cst391'
})

db.connect(err => {
  if (err) { console.error(err) }
  else { console.log('Connected to MySQL') }
})

/* GET ALL */
app.get('/consignments', (req, res) => {
  const sql = `SELECT reference_number, sender_name, receiver_name, status, created_at FROM consignments`
  db.query(sql, (err, result) => {
    if (err) { res.status(500).json(err) } else { res.json(result) }
  })
})

/* GET BY ID */
app.get('/consignments/:id', (req, res) => {
  const sql = `SELECT * FROM consignments WHERE reference_number = ?`
  db.query(sql, [req.params.id], (err, result) => {
    if (err) { res.status(500).json(err) }
    else if (result.length === 0) { res.status(404).json({ message: 'Not found' }) }
    else { res.json(result[0]) }
  })
})

/* CREATE */
app.post('/consignments', (req, res) => {
  const { sender_name, receiver_name, status, delivery_address } = req.body
  const reference_number = 'REF-' + String(Math.floor(Math.random() * 9000) + 1000)
  const sql = `INSERT INTO consignments (reference_number, sender_name, receiver_name, status, delivery_address) VALUES (?, ?, ?, ?, ?)`
  db.query(sql, [reference_number, sender_name, receiver_name, status, delivery_address], (err, result) => {
    if (err) {
      console.error('CREATE ERROR:', err)
      res.status(500).json(err)
    } else {
      res.status(201).json({ reference_number, message: 'Created' })
    }
  })
})

/* UPDATE */
app.put('/consignments/:id', (req, res) => {
  const { sender_name, receiver_name, status, delivery_address } = req.body
  const sql = `UPDATE consignments SET sender_name=?, receiver_name=?, status=?, delivery_address=? WHERE reference_number=?`
  db.query(sql, [sender_name, receiver_name, status, delivery_address, req.params.id], (err, result) => {
    if (err) {
      console.error('UPDATE ERROR:', err)
      res.status(500).json(err)
    } else {
      res.json({ message: 'Updated' })
    }
  })
})

/* DELETE */
app.delete('/consignments/:id', (req, res) => {
  const sql = `DELETE FROM consignments WHERE reference_number = ?`
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error('DELETE ERROR:', err)
      res.status(500).json(err)
    } else {
      res.json({ message: 'Deleted' })
    }
  })
})

/* SERVER START */
app.listen(3000, () => {
  console.log('Server running on port 3000')
})