import { useState } from "react";

export default function StudentState() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        className: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dữ liệu Form:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Tên" value={formData.name} onChange={handleChange} />
            <input name="age" type="number" placeholder="Tuổi" value={formData.age} onChange={handleChange} />
            <input name="className" placeholder="Lớp" value={formData.className} onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
