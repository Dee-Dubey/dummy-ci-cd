const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());            // allow frontend to call API
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

app.get("/healthz", (_, res) => res.send("ok"));

const PORT = process.env.PORT || 3000; // Railway injects PORT
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
