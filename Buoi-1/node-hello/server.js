import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello NodeJS");
});

server.listen(PORT, "localhost", () => {
  console.log(`Server chạy tại http://localhost:${PORT}/`);
});
