import express from "express";
import db from "./config/db.js";
import usersRouter from "./routes/users.js";
import healthRouter from "./routes/health.js";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/users", usersRouter);
app.use("/api/health", healthRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
