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
router.post("/", (req, res) => {
  // Create a new author
  const author = new Author({
    name: req.body.name,
  });
  author.save((err, newAuthor) => {
    if (err) {
      res.render("authors/new", {
        author: author,
        errorMessage: "Error creating author",
      });
    }
    // res.redirect(`/authors/${newAuthor.id}`);
    res.redirect(`/authors`);
  });
});

export default router;
