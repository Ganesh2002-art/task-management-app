import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "TASK_SECRET";

// mock user
const USER = { email: "test@test.com", password: "123456" };

// mock tasks
let tasks = [
  { id: 1, title: "Visit client", status: "pending", remarks: "" },
  { id: 2, title: "Submit report", status: "pending", remarks: "" },
  { id: 3, title: "Call manager", status: "done", remarks: "Completed" }
];

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === USER.email && password === USER.password) {
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1d" });
    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid credentials" });
});

// AUTH MIDDLEWARE
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// GET TASKS
app.get("/tasks", auth, (req, res) => {
  res.json(tasks);
});

// UPDATE TASK
app.put("/tasks/:id", auth, (req, res) => {
  const id = parseInt(req.params.id);
  const { status, remarks } = req.body;

  tasks = tasks.map(t =>
    t.id === id ? { ...t, status, remarks } : t
  );

  res.json({ message: "Task updated" });
});

app.listen(3000, () => console.log("Backend running on 3000"));
