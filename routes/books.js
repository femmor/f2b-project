import express from "express";

const router = express.Router();

// All books route
router.get("/", (req, res) => {
  res.render("books/index");
});

// New book route
router.get("/new", (req, res) => {
  res.render("books/new");
});

// Create book route
router.post("/", (req, res) => {
  res.send("Create book");
});

export default router;
