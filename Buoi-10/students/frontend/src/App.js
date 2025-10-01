import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ ten: "", tuoi: "", lop: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    axios.get("http://localhost:3000/students")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }

  const updateStudents = () => {
    console.log("PUT tới:", editingId, form);
    axios.put(`http://localhost:3000/students/${editingId}`, form)
      .then(() => {
        loadStudents();
        setForm({ ten: "", tuoi: "", lop: "", email: "" });
        setEditingId(null);
      })
      .catch(err => console.error(err));
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      updateStudents();
    } else {
      axios.post("http://localhost:3000/students", form)
        .then(res => {
          alert(res.data.message);
          loadStudents();
          setForm({ ten: "", tuoi: "", lop: "", email: "" });
        })
        .catch(err => console.error(err));
    }
  };

  const handleEdit = (student) => {
    setForm({
      ten: student.ten,
      tuoi: student.tuoi,
      lop: student.lop,
      email: student.email
    });
    setEditingId(student.id);
  }

  const handleDelete = (id) => {
    console.log("DELETE tới:", id);
    if (window.confirm("Bạn có chắc chắn sẽ xóa?")) {
      axios.delete(`http://localhost:3000/students/${id}`)
        .then(() => loadStudents())
        .catch(err => console.error(err));
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.ten} | {s.tuoi} | {s.lop} | {s.email}
            <button onClick={() => handleEdit(s)}>Sửa</button>
            <button onClick={() => handleDelete(s.id)}>Xóa</button>
          </li>
        )
        )}
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
        <button type="submit">
          {editingId !== null ? "Cập nhật" : "Thêm"}
        </button>

      </form>
    </div>
  );
}

export default App;
