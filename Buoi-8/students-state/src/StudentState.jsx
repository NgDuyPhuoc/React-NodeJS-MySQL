import { useState } from "react";

export default function StudentState() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        className: "",
        email: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Dữ liệu Form:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input name="name" placeholder="Tên" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <input name="age" type="number" placeholder="Tuổi" value={formData.age} onChange={handleChange} />
            </div>
            <div>
                <input name="className" placeholder="Lớp" value={formData.className} onChange={handleChange} />
            </div>
            <div>
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
