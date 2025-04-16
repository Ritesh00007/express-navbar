const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  // Redirect to GitHub repo
  res.redirect("https://github.com/Ritesh00007/Climate-Crisis?tab=readme-ov-file");
  
  // Alternatively, if you want to redirect to the deployed site:
  // res.redirect("https://climatefacts.netlify.app/");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  // Redirect to GitHub repo
  res.redirect("https://github.com/Ritesh00007/typesetting");
  
  // Alternatively, if you want to redirect to the deployed site:
  // res.redirect("https://ritesh00007.github.io/typesetting/");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  // Redirect to GitHub repo
  res.redirect("https://github.com/Ritesh00007/sorting-algorithms");
  
  // Alternatively, if you want to redirect to the deployed site:
  // res.redirect("https://ritesh00007.github.io/sorting-algorithms/");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});