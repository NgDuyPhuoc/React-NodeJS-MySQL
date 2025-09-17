function App() {
  const students = [
    { mssv: "151", name: "Nguyễn Duy Phước", age: 19, sex: "Nam" },
    { mssv: "051", name: "Dương Thúy Kiều", age: 19, sex: "Nữ" },
    { mssv: "542", name: "Cao Thiên Quí", age: 19, sex: "Nam" },
    { mssv: "643", name: "Trần Huy Hoàng", age: 19, sex: "Nam" },
    { mssv: "632", name: "Nguyễn Minh Toàn", age: 19, sex: "Nam" },
    { mssv: "531", name: "Nguyễn Thị Huyền Trân", age: 19, sex: "Nữ" },
  ];

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>MSSV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {students.map((sv) => (
            <tr key={sv.mssv}>
              <td>{sv.mssv}</td>
              <td>{sv.name}</td>
              <td>{sv.age}</td>
              <td>{sv.sex}</td>
              <td>
                <button onClick={() => alert(sv.name)}>Xem</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
