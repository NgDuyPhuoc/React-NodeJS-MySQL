import express from 'express';
import mysql2, { createConnection } from 'mysql2';

const app = express();
const PORT = 5000;
const routes = '/students';

app.use(express.json());

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "25082006",
    database: "quanly_sinhvien"
})

db.connect(err => {
    if (err) {
        console.log("Kết nối tới database thất bại!", err);
    }
    else {
        console.log("Kết nói tới database thành công!");
    }
})

app.get(`${routes}`, (req, res) => {
    const sql = "SELECT * FROM sinhvien";

    db.query(sql, (err, results) => {
        if (err) {
            return res.json({ error: err });
        } else {
            return res.json(results);
        }
    })
})

app.post(`${routes}`, (req, res) => {
    const { name, gender, email } = req.body;

    const sql = "INSERT INTO sinhvien (name, gender, email) VALUES (?, ?, ?)";
    db.query(sql, [name, gender, email], (err, results) => {
        if (err) {
            return res.json({ error: "Lỗi thêm sinh viên!" });
        } else {
            return res.json({ message: "Thêm sinh viên thành công!" });
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server đã chạy thành công tại: http://localhost:${PORT}${routes}`);
})
