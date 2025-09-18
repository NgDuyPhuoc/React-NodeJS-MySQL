import express from "express";

const app = express();
const PORT = 3000;
const routes = "/students";

app.set("json spaces", 2);

const students = [
  { mssv: "151", name: "Nguyễn Duy Phước", age: 19, sex: "Nam" },
  { mssv: "051", name: "Dương Thúy Kiều", age: 19, sex: "Nữ" },
  { mssv: "542", name: "Cao Thiên Quí", age: 19, sex: "Nam" },
  { mssv: "643", name: "Trần Huy Hoàng", age: 19, sex: "Nam" },
  { mssv: "632", name: "Nguyễn Minh Toàn", age: 19, sex: "Nam" },
  { mssv: "531", name: "Nguyễn Thị Huyền Trân", age: 19, sex: "Nữ" },
];

app.get(routes, (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(
    `Server đã chạy thành công tại: http://localhost:${PORT}${routes}`
  );
});
