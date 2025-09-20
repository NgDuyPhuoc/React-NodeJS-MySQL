import express, { json } from "express";
import mysql, { createConnection } from "mysql2";

const app = express();
app.use(express.json());

const PORT = 3000;
const routes = "/students";

app.set("json spaces", 2);

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "25082006",
  database: "quanly_sinhvien"
})

db.connect((err) => {
  if (err) {
    console.error("Kết nối thất bại.");
    return;
  } else {
    console.log("Kết nối thành công.");
  }
})

app.get(`${routes}/:id`, (req, res) => {
  const sql = "SELECT * FROM sinhvien";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Lỗi truy vấn" });
    } else {
      res.json(results);
    }
  })
});

app.post(routes, (req, res) => {
  const { ten, tuoi, lop, email } = req.body;

  if (!ten || !tuoi || !lop || !email) {
    res.json(400).json({ error: "Thiếu thông tin sinh viên" });
  }

  const sql = "INSERT INTO sinhvien (ten, tuoi, lop, email) VALUES (?, ?, ?, ?)";
  db.query(sql, [ten, tuoi, lop, email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Lỗi thêm sinh viên." });
    }
    else {
      return json({ messege: "Thêm sinh viên thành công.", id: results.insertId });
    }
  })
});

app.listen(PORT, () => {
  console.log(
    `Server đã chạy thành công tại: http://localhost:${PORT}${routes}`
  );
});
