var express = require("express");
var router = express.Router();
var Note = require("../models/note");
//GET - complete list
router.get("/", function (req, res) {
  Note.find().then(function (notes) {
    res.json(notes);
  });
});
// GET - one with ID
router.get("/:id", function (req, res) {
  var id = req.params.id;
  Note.findById(id).then(function (note) {
    res.json(note);
  });
});
// POST -Create new
router.post("/", function (req, res) {
  var title = req.body.title;
  var content = req.body.content;
  var note = new Note();
  note.title = title;
  note.content = content;
  note.save().then(function (note) {
    res.json(note);
  });

});
// DELETE - one with id
router.delete("/:id", function (req, res) {
  var id = req.params.id;
  Note.findByIdAndDelete(id).then(function (note) {
    res.send("Note deleted succesfully!!");
  });
});
// PUT - update one with id
router.put("/:id", function (req, res) {
  var id = req.params.id;
  var title = req.body.title;
  var content = req.body.content;

  Note.findByIdAndUpdate(id, {
    title: title,
    content: content
  }, { new: true }).then(function (note) {
    res.json(note);
  });
});



module.exports = router;
