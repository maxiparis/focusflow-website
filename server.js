import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4153;

// Derive __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, "dist")));

// Fallback for single-page applications
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server on port 4153
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
