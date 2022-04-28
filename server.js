import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expressLayouts from "express-ejs-layouts";
import indexRouter from "./routes/index.js";

// Fixes the path name error
import path from "path";
import { fileURLToPath } from "url";

// Defines the file path name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", err => {
  console.error(err);
  process.exit(1);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Check the connection environment
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// Set view engine
app.set("view engine", "ejs");
// Set view directory
app.set("views", __dirname + "/views");
// Set layout directory
app.set("layout", "layouts/layout");
// Use express layout
app.use(expressLayouts);
// Set public files directory
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/", indexRouter);

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
