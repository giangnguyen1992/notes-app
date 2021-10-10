const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// add, remove , read, list

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "A body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  title: {
    describe: "Note title",
    demandOption: true,
    type: "string",
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List a note",
  handler: () => {
    console.log("List a note");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: () => {
    console.log("read a note");
  },
});

yargs.parse();
