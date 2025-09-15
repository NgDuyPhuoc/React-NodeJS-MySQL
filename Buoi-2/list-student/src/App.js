import React from "react";

export default function App() {
  const students = [
    { mssv: "151", name: "Nguyen Duy Phuoc", age: 19, sex: "Nam" },
    { mssv: "114", name: "Duong Thuy Kieu", age: 19, sex: "Nu" },
    { mssv: "542", name: "Cao Thien Qui", age: 19, sex: "Nam" },
    { mssv: "643", name: "Tran Huy Hoang", age: 19, sex: "Nam" },
    { mssv: "632", name: "Nguyen Minh Toan", age: 19, sex: "Nam" },
  ];

  return (
    <div>
      <h1>Danh sách sinh viên</h1>
      <ul>
        {students.map((sv) => (
          <li key={sv.mssv}>
            MSSV: {sv.mssv} - {sv.name}, {sv.age} tuổi, Giới tính: {sv.sex}
          </li>
        ))}
      </ul>
    </div>
  );
}
