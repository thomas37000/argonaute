const express = require("express");
const connection = require("../../config/config");

const router = express.Router();

router.get("/", (req, res) => {
  connection.query(
    "SELECT * from equipage ORDER BY nom ASC",
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else if (results.length < 1) {
        res.status(404).send("il n 'y a pas d' équipages ici !");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.get("/skills", (req, res) => {
  connection.query(
    "SELECT * from softSkills",
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else if (results.length < 1) {
        res.status(404).send("ces softSkills n'existent pas !");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.post("/", (req, res) => {
  const { nom, age } = req.body;
  connection.query(
    "INSERT INTO equipage (nom, age) VALUES (?, ?)",
    [nom, age],
    (error, result) => {
      if (error) {
        res.status(500).json({ error: error });
      } else {
        res.status(201).json({
          id: result.insertId,
          ...req.body,
        });
      }
    }
  );
});

router.post("/skills", (req, res) => {
  const { skill, skill_2, skill_3 } = req.body;
  connection.query(
    "INSERT INTO softSkills (skill, skill_2, skill_3) VALUES (?, ?, ?)",
    [skill, skill_2, skill_3],
    (error, result) => {
      if (error) {
        res.status(500).json({ error: error });
      } else {
        res.status(201).json({
          id: result.insertId,
          ...req.body,
        });
      }
    }
  );
});



module.exports = router;
