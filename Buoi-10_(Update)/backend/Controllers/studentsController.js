import db from "../Connections/dbStudents.js";

export const getStudents = (req, res) => {
    const sql = "SELECT * FROM sinhvien";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        } else {
            return res.json(results);
        }
    })
}

export const postStudents = (req, res) => {
    const { ten, tuoi, lop, email } = req.body;

    const sql = "INSERT INTO sinhvien (ten, tuoi, lop, email) VALUES (?, ?, ?, ?)";
    db.query(sql, [ten, tuoi, lop, email], err => {
        if (err) {
            return res.status(500).json({ error: "Lỗi thêm sinh viên!" });
        } else {
            return res.json({ message: "Thêm sinh viên thành công!" });
        }
    })
}

export const putStudents = (req, res) => {
    const id = parseInt(req.params.id);
    const { ten, tuoi, lop, email } = req.body;
    const sql = "UPDATE sinhvien SET ten=?, tuoi=?, lop=?, email=? WHERE id=?";

    db.query(sql, [ten, tuoi, lop, email, id], err => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.json({ message: "Cập nhật sinh viên thành công!" });
        }
    })
}

export const deleteStudents = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = "DELETE FROM sinhvien WHERE id=?";

    db.query(sql, [id], err => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.json({ message: "Xóa sinh viên thành công!" });
        }
    })
}