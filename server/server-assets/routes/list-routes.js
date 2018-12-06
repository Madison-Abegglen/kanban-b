const router = require('express').Router()
const Lists = require('../models/list')

// GET
router.get('/:boardId', (req, res, next) => {
  Lists.find({ boardId: req.params.boardId })
    .then(lists => {
      res.send(lists)
    })
    .catch(error => {
      console.log('[GET LISTS ERROR]', error)
      next(error)
    })
})

// POST
router.post('/', (req, res, next) => {
  Lists.create(req.body)
    .then(list => res.send(list))
    .catch(error => {
      console.log('[POST LIST ERROR]', error)
      next(error)
    })
})

// PUT
router.put('/:id', (req, res, next) => {
  Lists.findById(req.params.id)
    .then(list => {
      list.update(req.body, (error) => {
        if (error) {
          console.log('[UPDATE LIST ERROR]')
        }
        res.send({ message: 'Successfully updated list: ', list })
      })
    })
    .catch(error => {
      console.log('[UPDATE LIST ERROR]', error)
      next(error)
    })
})


// DELETE
router.delete('/:id', (req, res, next) => {
  Lists.findByIdAndDelete(req.params.id)
    .then(() => res.send({ message: 'Successfully DELORTED' }))
    .catch(error => {
      console.log('[DELETE LIST ERROR]', error)
      next(error)
    })
})

module.exports = router