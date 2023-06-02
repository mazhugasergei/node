const Note = require('../models/note')

const index_get = (req, res) => {
  Note.find().sort({ createdAt: -1 })
    .then(result => res.render('index', { notes: result }))
    .catch(err => console.log(err))
}

const index_post = (req, res) => {
  const note = new Note(req.body)
  note.save()
    .then(result => res.redirect('/'))
    .catch(err => console.log(err))
}

const note_get = (req, res) => {
  Note.findById(req.params.id)
    .then(result => res.render('note', { note: result }))
    .catch(err => console.log(err))
}

const note_create = (req, res) => {
  res.render('create')
}

const note_delete = (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(result => res.json({ redirect: '/' }))
    .catch(err => console.log(err))
}

module.exports = {
  index_get, index_post,
  note_get, note_create, note_delete
}