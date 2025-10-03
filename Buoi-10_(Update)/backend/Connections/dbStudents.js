import mysql2 from "mysql2";

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "25082006",
    database: "quanly_sinhvien"
})

db.connect(err => {
    if (err) {
        console.log("Kết nối tới Databa thất bại!");
    } else {
        console.log("Kết nối tới Database thành công!");
    }
})

export default db;