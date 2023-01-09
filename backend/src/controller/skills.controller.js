const express = require('express');
const connection = require('../../config/config');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * from softSkills', (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json(error);
    } else if (results.length < 1) {
      res.status(404).send("ces softSkills n'existent pas !");
    } else {
      res.status(200).json(results);
    }
  });
});

router.post('/', (req, res) => {
  const { skill, skill_2, skill_3 } = req.body;
  connection.query(
    'INSERT INTO softSkills (skill, skill_2, skill_3) VALUES (?, ?, ?)',
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

router.put('/:id', (req, res) => {
  const idSkill = req.params.id;
  const newSkill = req.body;
  connection.query(
    `UPDATE softSkills SET ? WHERE idSoftSkills = ?`,
    [newSkill, idSkill],
    (error) => {
      if (error) {
        res.status(500).json({ errorMessage: error.message });
      } else {
        res.status(200).json({ ...req.body });
      }
    }
  );
});

router.delete('/:id', (req, res) => {
  const idSkill = req.params.id;
  connection.query(
    'DELETE FROM softSkills SET ? WHERE idSoftSkills = ?'[idSkill],
    (error) => {
      if (error) {
        res.status(500).send("la suppression n' a pas marché !");
      } else {
        res.status(200).send('la softSkill a bien était supprimée !');
      }
    }
  );
});

module.exports = router;
