const dotenv = require("dotenv");

dotenv.config({ path: "../.env.local" });

const express = require("express");
const cors = require("cors");
const { getRecipeFromChefClaude } = require("./ai");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chef Claude server is running!");
});

app.post("/api/recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;

    const recipe = await getRecipeFromChefClaude(ingredients);

    res.json({ recipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
