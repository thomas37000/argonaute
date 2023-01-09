const express = require('express');
const connection = require('../../config/config');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query(
    'SELECT * from equipage ORDER BY nom ASC',
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else if (results.length < 1) {
        res.status(404).send("il n 'y a pas d' équipages ici !");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.get('/argonaute/:id', (req, res) => {
  connection.query(
    'SELECT * FROM equipage WHERE idEquipage = ?',
    [req.params.id],
    (error, results) => {
      if (error) {
        res.status(500).json(error);
      } else if (results.length < 1) {
        res.status(404).send('Argonaute inconnu(e)!');
      } else {
        res.status(200).json(results[0]);
      }
    }
  );
});

router.post('/', (req, res) => {
  const { nom, age } = req.body;
  connection.query(
    'INSERT INTO equipage (nom, age) VALUES (?, ?)',
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

router.put('/:id', (req, res) => {
  const idArgonaute = req.params.id;
  const newArgonaute = req.body;
  connection.query(
    `UPDATE equipage SET ? WHERE idEquipage = ?`,
    [newArgonaute, idArgonaute],
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
  const idArgonaute = req.params.id;
  connection.query(
    'DELETE FROM equipage WHERE idEquipage = ?',
    [idArgonaute],
    (error) => {
      if (error) {
        res.status(500).send("la suppression n' a pas marché !");
      } else {
        res
          .status(200)
          .send("l'argonaute a bien était supprimé et envoyé aux requins !");
      }
    }
  );
});

module.exports = router;
