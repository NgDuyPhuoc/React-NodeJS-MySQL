import { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm.js";
import StudentList from "./components/StudentList.js";

function App() {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ ten: "", tuoi: "", lop: "", email: "" });

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Lỗi GET:", err));
  };

  const handleEdit = (student) => {
    setForm({
      ten: student.ten,
      tuoi: student.tuoi,
      lop: student.lop,
      email: student.email,
    });
    setEditingId(student.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
      axios
        .delete(`http://localhost:3000/students/${id}`)
        .then(() => {
          alert("Đã xóa sinh viên!");
          loadStudents();
        })
        .catch((err) => console.error("Lỗi DELETE:", err));
    }
  };

  const handleSubmit = () => {
    if (editingId !== null) {
      axios
        .put(`http://localhost:3000/students/${editingId}`, form)
        .then(() => {
          alert("Cập nhật sinh viên thành công!");
          loadStudents();
          setForm({ ten: "", tuoi: "", lop: "", email: "" });
          setEditingId(null);
        })
        .catch((err) => console.error("Lỗi PUT:", err));
    } else {
      axios
        .post("http://localhost:3000/students", form)
        .then(() => {
          alert("Thêm sinh viên thành công!");
          loadStudents();
          setForm({ ten: "", tuoi: "", lop: "", email: "" });
        })
        .catch((err) => console.error("Lỗi POST:", err));
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Danh sách sinh viên</h2>

      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <StudentForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        editingId={editingId}
      />
    </div>
  );
}

export default App;
