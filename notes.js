const fs = require("fs");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
  } else {
    console.log("Notes title taken!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  if (notes.length !== 0) {
    const updatedNotes = notes.filter((note) => {
      return note.title !== title;
    });
    saveNotes(updatedNotes);
  } else {
    console.log("There are no notes");
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length !== 0) {
    notes.forEach((note) => console.log(note.title));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log("No note found");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
