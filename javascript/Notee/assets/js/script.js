const $ = document;
let isDeleted = false;
let notes;
let deleteBtns;

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
$.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== menuBtn) {
    menu.classList.remove("w-52!");
    copy.classList.add("hidden");
  }
});

// reload btn
const reload = $.querySelector("#reload");
reload.addEventListener("click", () => window.location.reload());

// open and close input for add note
const inputTxt = $.querySelector("#input-txt");
const inputTitle = $.querySelector("#input-title");
const inputTxtSec = $.querySelector("#input-txt-sec");
inputTxt.addEventListener("focus", () => {
  inputTxtSec.classList.remove("close-input");
  inputTxtSec.classList.add("open-input");
  inputTitle.classList.remove("hidden");
});
$.addEventListener("click", (e) => {
  if (!inputTxtSec.contains(e.target)) {
    inputTxtSec.classList.remove("open-input");
    inputTxtSec.classList.add("close-input");
    setTimeout(() => {
      inputTitle.classList.add("hidden");
    }, 450);
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
    newNote.id = list[list.length - 1] ? list[list.length - 1].id + 1 : 1;
    newNote.title = inputTitle.value;
    newNote.text = inputTxt.value;
    newNote.color = bgColor;
    newNote.isDeleted = false;
    list.push(newNote);
    localStorage.setItem("noteList", JSON.stringify(list));
    loadNotes(list);
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
    newNoteDiv.classList.add("note", "cursor-pointer", "close-note");

    if (note.color) {
      note.color.forEach((colorItem) => {
        newNoteDiv.classList.add(colorItem);
      });
    }
    const noteDeleteBtnElm = $.createElement("I");
    noteDeleteBtnElm.classList.add(
      "fa-solid",
      "fa-trash",
      "note-delete-btn",
      "hidden!"
    );

    noteDeleteBtnElm.id = `trash-note-btn-${note.id}`;
    const newNoteTitleElm = $.createElement("H3");
    newNoteTitleElm.classList.add("note-title");
    const newNoteTxtElm = $.createElement("P");
    newNoteTxtElm.classList.add("note-text");
    newNoteTitleElm.innerText = note.title;
    newNoteTxtElm.innerText = note.text;
    newNoteDiv.append(newNoteTitleElm, newNoteTxtElm, noteDeleteBtnElm);
    if (note.isDeleted) {
      const noteRestoreBtnElm = $.createElement("I");
      noteRestoreBtnElm.classList.add(
        "fa-solid",
        "fa-clock-rotate-left",
        "note-restore-btn",
        "hidden!"
      );
      noteRestoreBtnElm.id = `trash-note-btn-${note.id}`;
      newNoteDiv.appendChild(noteRestoreBtnElm);
    }
    inputTitle.value = "";
    inputTxt.value = "";
    noteListElm.insertBefore(newNoteDiv, noteListElm.firstChild);
    notes = $.querySelectorAll(".note");
    deleteBtns = $.querySelectorAll(".note-delete-btn");
    openNote();
    deleteNote();
    restoreNote();
  });
}
window.addEventListener("load", () => {
  let noteList = [];
  noteList = JSON.parse(localStorage.getItem("noteList")) || [];
  loadNotes(noteList);
  notes = $.querySelectorAll(".note");
  deleteBtns = $.querySelectorAll(".note-delete-btn");
  openNote();
  deleteNote();
  restoreNote();
});

// open note
function openNote() {
  notes.forEach((note) => {
    note.addEventListener("click", (e) => {
      note.classList.remove("close-note");
      note.classList.add("open-note");
      note.querySelector(".note-delete-btn").classList.remove("hidden!");
      note.querySelector(".note-restore-btn")
        ? note.querySelector(".note-restore-btn").classList.remove("hidden!")
        : null;
    });
    $.addEventListener("click", (e) => {
      if (!note.contains(e.target)) {
        note.classList.remove("open-note");
        note.classList.add("close-note");
        note.querySelector(".note-delete-btn").classList.add("hidden!");
        note.querySelector(".note-restore-btn")
          ? note.querySelector(".note-restore-btn").classList.add("hidden!")
          : null;
      }
    });
  });
}

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
        menu.classList.add("w-52!");
        copy.classList.remove("hidden");
      }
      if (item.id === "notes") {
        isDeleted = false;
        loadNotes(noteList);
      } else if (item.id === "trash") {
        isDeleted = true;
        loadNotes(noteList);
      }
    }
  });
});

// delete note
function deleteNote() {
  const newDeletedState = { isDeleted: true };
  deleteBtns = $.querySelectorAll(".note-delete-btn");
  deleteBtns.forEach((item) => {
    item.addEventListener("click", () => {
      const noteId = Number(item.id.split("-")[3]);
      let noteList = [];
      noteList = JSON.parse(localStorage.getItem("noteList")) || [];
      let updatedList;
      const found = noteList.find((item) => item.id === noteId);
      if (found && found.isDeleted) {
        updatedList = noteList.filter((item) => item.id !== noteId);
      } else {
        updatedList = noteList.map((item) => {
          if (noteId === item.id) {
            return { ...item, ...newDeletedState };
          }
          return item;
        });
      }
      localStorage.setItem("noteList", JSON.stringify(updatedList));
      loadNotes(updatedList);
    });
  });
}

// restore note
function restoreNote() {
  const newDeletedState = { isDeleted: false };
  restoreBtns = $.querySelectorAll(".note-restore-btn");
  restoreBtns.forEach((item) => {
    item.addEventListener("click", () => {
      const noteId = Number(item.id.split("-")[3]);
      let noteList = [];
      noteList = JSON.parse(localStorage.getItem("noteList")) || [];
      let updatedList;
      updatedList = noteList.map((item) => {
        if (noteId === item.id) {
          return { ...item, ...newDeletedState };
        }
        return item;
      });

      localStorage.setItem("noteList", JSON.stringify(updatedList));
      loadNotes(updatedList);
    });
  });
}
