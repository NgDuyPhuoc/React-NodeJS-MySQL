function StudentForm({ form, setForm, onSubmit, editingId }) {
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!form.ten.trim()) {
            alert("Họ tên không được để trống!");
            return false;
        }
        else if (!form.email.trim()) {
            alert("Email không được để trống!");
            return false;
        }
        else if (isNaN(form.tuoi) || form.tuoi <= 0) {
            alert("Tuổi phải là số hợp lệ!");
            return false;
        }
        else if (!form.lop.trim()) {
            alert("Lớp không được để trống!");
            return false;
        } else {
            return true;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) onSubmit();
    };

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>{editingId ? "Cập nhật sinh viên" : "Thêm sinh viên"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="ten"
                    placeholder="Họ tên"
                    value={form.ten}
                    onChange={handleChange}
                />
                <br />
                <input
                    name="tuoi"
                    placeholder="Tuổi"
                    value={form.tuoi}
                    onChange={handleChange}
                />
                <br />
                <input
                    name="lop"
                    placeholder="Lớp"
                    value={form.lop}
                    onChange={handleChange}
                />
                <br />
                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <br />
                <button type="submit" style={{ marginTop: "10px" }}>
                    {editingId ? "Lưu thay đổi" : "Thêm"}
                </button>
            </form>
        </div>
    );
}

export default StudentForm;
