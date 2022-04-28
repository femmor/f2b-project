import express from "express";
import Author from "../models/author.js";

const router = express.Router();

// All authors route
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New author route
router.get("/new", (req, res) => {
  res.render("authors/new", {
    author: new Author(),
  });
});

// Create author route
router.post("/", async (req, res) => {
  // Create a new author
  const author = new Author({
    name: req.body.name,
  });
  // Save the author
  try {
    const newAuthor = await author.save();
    // res.redirect(`/authors/${newAuthor.id}`);
    res.redirect(`/authors`);
  } catch (error) {
    res.render("authors/new", {
      author,
      errorMessage: "Error creating author",
    });
  }
});

export default router;
