const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [ Product ]}).then(  
      (tagStuff) => {
        res.json(tagStuff)
      }
    )
  })

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {id: req.params.id },
    include: [ Product ]}).then(  
      (tagStuff) => {
        res.json(tagStuff)
      }
    )
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(  
      (tagStuff) => {
        res.json(tagStuff)
      }
    )
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body,
    {
    where: {id: req.params.id },
    include: [ Product ]}).then(  
      (tagStuff) => {
        res.json(tagStuff)
      }
    )

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id: req.params.id },
    // include: [ Product ]
  }).then(  
      (tagStuff) => {
        res.json(tagStuff)
      }
    )
});

module.exports = router;
