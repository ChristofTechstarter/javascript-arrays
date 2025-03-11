import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/content", (req, res) => {
  res.send("<h1>Inhalt</h1><p>Hier könnte ihre Werbung stehen!</p>");
});

app.get("/api/data", (req, res) => {
  res.json({ userName: "maexchen", firstName: "Max", lastName: "Mustermann" });
});

app.listen(3000, () => {
  console.log("Der Server läuft auf Port 3000!");
});
