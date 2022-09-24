const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [ Product ]}).then(  
      (tagStuff) => {
        res.json(tagStuff)
      }
    )
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {id: req.params.id },
    include: [ Product ]}).then(  
      (tagStuff) => {
        res.json(tagStuff)
      }
    )
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then(  
    (tagStuff) => {
      res.json(tagStuff)
    }
  )
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
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
  // delete on tag by its `id` value
  Tag.destroy({
    where: {id: req.params.id },
    // include: [ Product ]
  }).then(  
      (tagStuff) => {
        res.json(tagStuff)
      }
    )
});

module.exports = router;
