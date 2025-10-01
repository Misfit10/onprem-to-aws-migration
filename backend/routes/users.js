import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Database query failed" });
    } else {
      res.json(result);
    }
  });
});

export default router;
