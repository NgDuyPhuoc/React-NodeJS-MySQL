import express from "express";
import mysql2 from "mysql2";
import cors from "cors";


const app = express();
const PORT = 3000;
const routes = "/students";

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "25082006",
    database: "quanly_sinhvien"
});

db.connect(err => {
    if (err) {
        console.log("Kết nối thất bại:", err);
    } else {
        console.log("Kết nối databate thành công!");
    }
});

app.get(`${routes}`, (req, res) => {
    const sql = "SELECT * FROM sinhvien";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        } else {
            return res.json(results);
        }
    });
});

app.post(`${routes}`, (req, res) => {
    const { ten, tuoi, lop, email } = req.body;
    const sql = "INSERT INTO sinhvien (ten, tuoi, lop, email) VALUES (?, ?, ?, ?)";
    db.query(sql, [ten, tuoi, lop, email], (err) => {
        if (err) {
            return res.json({ error: "Lỗi thêm sinh viên" });
        } else {
            return res.json({ message: "Thêm sinh viên thành công" });
        }
    });
});

app.put(`${routes}/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const { ten, tuoi, lop, email } = req.body;
    const sql = "UPDATE sinhvien SET ten=?, tuoi=?, lop=?, email=? WHERE id=?";

    db.query(sql, [ten, tuoi, lop, email, id], (err) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.json({ message: "Cập nhật sinh viên thành công!" });
        }
    }
    )
})

app.delete(`${routes}/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const sql = "DELETE FROM sinhvien WHERE id=?";

    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.json({ message: "Xóa sinh viên thành công!" });
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server chạy tại: http://localhost:${PORT}`);
    console.log("Các route:");
    console.log("GET    /students");
    console.log("POST   /students");
    console.log("PUT    /students/:id");
    console.log("DELETE /students/:id");
});
