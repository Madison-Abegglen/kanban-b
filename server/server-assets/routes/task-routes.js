const router = require('express').Router()
const Tasks = require('../models/task')

// GET
router.get('/:listId', (req, res, next) => {
  Tasks.find({ listId: req.params.listId })
    .then(tasks => {
      res.send(tasks)
    })
    .catch(error => {
      console.log('[GET TASKS ERROR]', error)
      next(error)
    })
})

// POST
router.post('/', (req, res, next) => {
  Tasks.create(req.body)
    .then(task => res.send(task))
    .catch(error => {
      console.log('[POST TASK ERROR]', error)
      next(error)
    })
})

// PUT
router.put('/:id', (req, res, next) => {
  Tasks.findByIdAndUpdate(req.params.id, req.body)
    .then(task => {
      res.send({ message: 'Successfully updated task: ', task })
    })
    .catch(error => {
      console.log('[PUT TASK ERROR]', error)
      next(error)
    })
})

// DELETE
router.delete('/:id', (req, res, next) => {
  Tasks.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully DELORTED' }))
    .catch(error => {
      console.log('[DELETE TASK ERROR]', error)
      next(error)
    })
})

// ----- COMMENTS REQ'S -----
// GET
router.get('/comments/:taskId', (req, res, next) => {
  Tasks.find({ taskId: req.params.taskId })
    .then(task => res.send(task.comments))
    .catch(error => {
      console.log('[GET TASK COMMENTS ERROR]', error)
      next(error)
    })
})

// POST
router.post('/comments/:taskId', (req, res, next) => {
  Tasks.findById(req.params.taskId)
    .then(task => {
      task.comments = task.comments.concat(req.body)
      const comment = task.comments[task.comments.length - 1]
      task.save(error => {
        if (error) {
          return next(error)
        }
        res.send(comment)
      })
    })
    .catch(error => {
      console.log('[POST TASK COMMENT ERROR]', error)
      next(error)
    })
})

// DELETE
router.delete('/comments/:taskId/:commentId', (req, res, next) => {
  Tasks.findById(req.params.taskId)
    .then(task => {
      task.comments = task.comments.filter(comment => comment._id !== commentId)
      task.save(error => {
        if (error) {
          return next(error)
        }
        res.send({ message: 'Successfully DELORTED comment' })
      })
    })
    .catch(error => {
      console.log('[DELETE TASK COMMENT ERROR]', error)
      next(error)
    })
})

module.exports = router