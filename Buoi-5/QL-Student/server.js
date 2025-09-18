import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;
const routes = "/students";

app.set("json spaces", 2);

const students = [
  { id: "1", name: "Nguyễn Duy Phước", age: 19, sex: "Nam" },
  { id: "2", name: "Dương Thúy Kiều", age: 19, sex: "Nữ" },
  { id: "3", name: "Cao Thiên Quí", age: 19, sex: "Nam" },
  { id: "4", name: "Trần Huy Hoàng", age: 19, sex: "Nam" },
  { id: "5", name: "Nguyễn Minh Toàn", age: 19, sex: "Nam" },
  { id: "6", name: "Nguyễn Thị Huyền Trân", age: 19, sex: "Nữ" },
];

app.get(`${routes}/:id`, (req, res) => {
  const id = req.params.id;
  const findStudent = students.find((s) => s.id === id);

  if (findStudent) {
    res.json(findStudent);
  } else {
    res.send(`Không tìm thấy sinh viên.`);
  }
});

app.post(routes, (req, res) => {
  const student = req.body;
  students.push(student);
  res.json(student);
});

app.listen(PORT, () => {
  console.log(
    `Server đã chạy thành công tại: http://localhost:${PORT}${routes}`
  );
});
