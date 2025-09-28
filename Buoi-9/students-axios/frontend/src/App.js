import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [students, setStudents] = useState([]);
    const [form, setForm] = useState({ ten: "", tuoi: "", lop: "", email: "" });

    useEffect(() => {
        axios.get("http://localhost:3000/students")
            .then(res => setStudents(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/students", form)
            .then(res => {
                alert(res.data.message);
                setStudents([...students, form]);
                setForm({ ten: "", tuoi: "", lop: "", email: "" });
            })
            .catch(err => console.error(err));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách sinh viên</h2>
            <ul>
                {students.map((s, i) => (
                    <li key={i}>{s.ten} - {s.tuoi} - {s.lop} - {s.email}</li>
                ))}
            </ul>

            <h2>Thêm sinh viên</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="ten" placeholder="Họ tên" value={form.ten} onChange={handleChange} required />
                </div>

                <div>
                    <input name="tuoi" placeholder="Tuổi" value={form.tuoi} onChange={handleChange} required />
                </div>

                <div>
                    <input name="lop" placeholder="Lớp" value={form.lop} onChange={handleChange} required />
                </div>

                <div>
                    <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                </div>


                <button type="submit">Thêm</button>
            </form>
        </div>
    );
}

export default App;
