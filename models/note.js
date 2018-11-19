var mongoose = require("mongoose");

//Schema Creation
var NoteSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required : true }
  },
  {
    timestamps: true //createdAt: '', updatedAt: ''
  },
  {
    _id: {type: mongoose.Schema.ObjectId, select: false},
    __v: {type: Number, select: false},
  }
);

//Model Creation
var Note = mongoose.model("Note", NoteSchema);

var Note = mongoose.model("Note", NoteSchema);
module.exports = Note;
