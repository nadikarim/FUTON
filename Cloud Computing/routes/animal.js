const router = require('express').Router();
const Animal = require('../model/Animal');
const { tokenVerified } = require('./verifyToken');

router.post('/lists', tokenVerified, async (req, res) => {
  const animal = new Animal({
    name: req.body.name,
    description: req.body.description,
    photo: req.body.photo,
  });

  try {
    const savedAnimal = await animal.save();
    res.send({ animal });
    // res.status(200).send(savedAnimal);
    // Animal.insertMany({ animal });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/lists', tokenVerified, (req, res) => {
  Animal.find()
    .then((animal) => {
      res.status(200).json({ animal });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err,
      });
    });
});

module.exports = router;
