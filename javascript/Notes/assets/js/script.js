const $ = document;
let isDeleted = false;
// dark mode toggle
const html = $.documentElement;
const darkToggle = $.querySelector("#dark-toggle");
const darkToggleIcon = $.querySelector("#dark-toggle-icon");
darkToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  darkToggleIcon.classList.toggle("fa-moon");
});

// menu toggle
const menuBtn = $.querySelector("#menu-btn");
const menu = $.querySelector("#menu");
const copy = $.querySelector("#copy");
menuBtn.addEventListener("click", (e) => {
  menu.classList.toggle("w-52!");
  copy.classList.toggle("hidden");
});

// reload btn
const reload = $.querySelector("#reload");
reload.addEventListener("click", () => window.location.reload());

// open and close input for add note
const inputTxt = $.querySelector("#input-txt");
const inputTitle = $.querySelector("#input-title");
const inputTxtSec = $.querySelector("#input-txt-sec");
inputTxt.addEventListener("focus", () => {
  inputTxtSec.classList.remove("h-6");
  inputTitle.classList.remove("hidden");
});
$.addEventListener("click", (e) => {
  if (!inputTxtSec.contains(e.target)) {
    inputTxtSec.classList.add("h-6");
    inputTitle.classList.add("hidden");
  }
});

// change background of input
let bgColor;
const colors = $.querySelectorAll(".color-plate");
colors.forEach((item) => {
  item.addEventListener("click", (e) => {
    bgColor = Array.from(e.target.classList).filter((className) =>
      className.includes("bg-")
    );
    const oldBgColor = Array.from(inputTxtSec.parentElement.classList).filter(
      (className) => className.includes("bg-")
    );
    oldBgColor.forEach((item) => {
      inputTxtSec.parentElement.classList.remove(item);
    });
    bgColor.forEach((colorItem) => {
      inputTxtSec.parentElement.classList.add(colorItem);
    });
  });
});

// add new Note
const addNoteBtn = $.querySelector("#add-note-btn");
const noteListElm = $.querySelector("#note-list");
addNoteBtn.addEventListener("click", addNewNote);

function addNewNote(list) {
  if (inputTxt.value || inputTitle.value) {
    list = JSON.parse(localStorage.getItem("noteList")) || [];
    const newNote = {};
    newNote.title = inputTitle.value;
    newNote.text = inputTxt.value;
    newNote.color = bgColor;
    newNote.isDeleted = false;
    list.push(newNote);
    localStorage.setItem("noteList", JSON.stringify(list));
    loadNotes(list, false);
  }
}

function loadNotes(list) {
  noteListElm.innerHTML = "";
  if (isDeleted) {
    list = list.filter((item) => item.isDeleted);
  } else {
    list = list.filter((item) => !item.isDeleted);
  }
  list.forEach((note) => {
    const newNoteDiv = $.createElement("DIV");
    newNoteDiv.classList.add("note");

    if (note.color) {
      note.color.forEach((colorItem) => {
        newNoteDiv.classList.add(colorItem);
      });
    }
    const newNoteTitleElm = $.createElement("H3");
    newNoteTitleElm.classList.add("note-title");
    const newNoteTxtElm = $.createElement("P");
    newNoteTxtElm.classList.add("note-text");
    newNoteTitleElm.innerText = note.title;
    newNoteTxtElm.innerText = note.text;
    newNoteDiv.append(newNoteTitleElm, newNoteTxtElm);
    inputTitle.value = "";
    inputTxt.value = "";
    noteListElm.insertBefore(newNoteDiv, noteListElm.firstChild);
  });
}
window.addEventListener("load", () => {
  let noteList = [];
  noteList = JSON.parse(localStorage.getItem("noteList")) || [];
  loadNotes(noteList);
});

// search function
const searchInput = $.querySelector("#search");
searchInput.addEventListener("keyup", search);

function search(input) {
  const searchInputValue = input.target.value;
  let noteList = [];
  noteList = JSON.parse(localStorage.getItem("noteList")) || [];
  if (searchInputValue) {
    const filteredList = noteList.filter((note) => {
      if (
        note.title.toUpperCase().includes(searchInputValue.toUpperCase()) ||
        note.text.toUpperCase().includes(searchInputValue.toUpperCase())
      ) {
        return note;
      }
    });
    loadNotes(filteredList);
  } else {
    loadNotes(noteList);
  }
}

// change menu
const menuItems = $.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    menuItems.forEach((item) => item.classList.remove("active"));
    if (
      item === event.target.parentElement.parentElement ||
      item === event.target.parentElement ||
      item === event.target
    ) {
      let noteList = [];
      noteList = JSON.parse(localStorage.getItem("noteList")) || [];
      if (item.id !== "dark-toggle") {
        item.classList.add("active");
      }
      if (item.id === "notes") {
          isDeleted = false
        loadNotes(noteList);
      } else if (item.id === "trash") {
        isDeleted = true;
        loadNotes(noteList);
      }
    }
  });
});
