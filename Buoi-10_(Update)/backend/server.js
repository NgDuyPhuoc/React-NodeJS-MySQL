import express from "express";
import cors from "cors";
import studentsRoutes from "./Routes/studentsRouter.js";

const app = express();
const PORT = 3000;
const routes = "/students";

app.use(cors());
app.use(express.json());

app.use(`${routes}`, studentsRoutes);

app.listen(PORT, () => {
    console.log(`Kết nối thành công tới: http://localhost:${PORT}${routes}`);
})