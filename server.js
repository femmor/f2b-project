import express from "express";
import expressLayouts from "express-ejs-layouts";

// Fixes the path name error
import path from "path";
import { fileURLToPath } from "url";

// Defines the file path name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

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

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
