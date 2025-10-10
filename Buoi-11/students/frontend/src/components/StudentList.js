function StudentList({ students, onEdit, onDelete }) {
    return (
        <ul>
            {students.map((s, index) => (
                <li key={s.id}>
                    {index + 1}. {s.ten} | {s.tuoi} | {s.lop} | {s.email}{" "}
                    <button onClick={() => onEdit(s)}>Sửa</button>
                    <button onClick={() => onDelete(s.id)}>Xóa</button>
                </li>
            ))}
        </ul>
    );
}

export default StudentList;
