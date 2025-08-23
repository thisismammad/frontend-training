const $ = document;
let onDeleted = false;
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
    list = getNotes();
    const newNote = {};
    newNote.id = list[list.length - 1] ? list[list.length - 1].id + 1 : 1;
    newNote.title = inputTitle.value.trim();
    newNote.text = inputTxt.value.trim();
    newNote.color = bgColor;
    newNote.isDeleted = false;
    list.push(newNote);
    localStorage.setItem("noteList", JSON.stringify(list));
    loadNotes(filterNotes(false));
  }
}
// load notes
function loadNotes(list) {
  noteListElm.innerHTML = "";
  list.forEach((note) => {
    const newNoteDiv = $.createElement("DIV");
    newNoteDiv.classList.add(
      "note",
      "cursor-pointer",
      "close-note",
      "select-text"
    );

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
  });
}
window.addEventListener("load", () => {
  let noteList = filterNotes(false);
  onDeleted = false;
  loadNotes(noteList);
});

// events on notes
noteListElm.addEventListener("click", (event) => {
  const targetItem = event.target.closest("div");
  // open note event
  if (targetItem && targetItem.classList.contains("note")) {
    openNote(targetItem);
  }
  // delete event
  if (event.target.classList.contains("note-delete-btn")) {
    const noteId = Number(event.target.id.split("-")[3]);
    noteListElm.removeChild(event.target.closest("div"));
    deleteNote(noteId);
  }
  // restore event
  if (event.target.classList.contains("note-restore-btn")) {
    const noteId = Number(event.target.id.split("-")[3]);
    noteListElm.removeChild(event.target.closest("div"));
    restoreNote(noteId);
  }
});

// get notes
function getNotes() {
  return JSON.parse(localStorage.getItem("noteList")) || [];
}

// filter notes
function filterNotes(isDeleted) {
  let noteList = getNotes();
  if (noteList.length > 0) {
    if (isDeleted) {
      noteList = noteList.filter((item) => item.isDeleted);
    } else {
      noteList = noteList.filter((item) => !item.isDeleted);
    }
  }
  return noteList;
}

// update database
function updateDatabase(list) {
  localStorage.setItem("noteList", JSON.stringify(list));
}
// open note
function openNote(noteElm) {
  noteElm.classList.remove("close-note");
  noteElm.classList.add("open-note");
  noteElm.querySelector(".note-delete-btn").classList.remove("hidden!");
  noteElm.querySelector(".note-restore-btn")
    ? noteElm.querySelector(".note-restore-btn").classList.remove("hidden!")
    : null;

  $.addEventListener("click", (e) => {
    if (!noteElm.contains(e.target)) {
      noteElm.classList.remove("open-note");
      noteElm.classList.add("close-note");
      noteElm.querySelector(".note-delete-btn").classList.add("hidden!");
      noteElm.querySelector(".note-restore-btn")
        ? noteElm.querySelector(".note-restore-btn").classList.add("hidden!")
        : null;
    }
  });
}

// delete note
function deleteNote(noteId) {
  const newDeletedState = { isDeleted: true };
  let noteList = getNotes();
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
  updateDatabase(updatedList);
}

// restore note
function restoreNote(noteId) {
  const newDeletedState = { isDeleted: false };
  let noteList = getNotes();
  let updatedList;
  updatedList = noteList.map((item) => {
    if (noteId === item.id) {
      return { ...item, ...newDeletedState };
    }
    return item;
  });

  updateDatabase(updatedList);
}

// change menu
menu.addEventListener("click", (event) => {
  const menuItem = event.target.closest("li");
  if (menuItem && menuItem.id !== "dark-toggle") {
    const notesTitleElm = $.querySelector("#notes-title");
    const menuItems = $.querySelectorAll(".menu-item");
    menuItems.forEach((item) => item.classList.remove("active"));
    const menuItemID = menuItem.id;
    let noteList = [];
    switch (menuItemID) {
      case "notes":
        menuItem.classList.add("active");
        notesTitleElm.innerText = "Notes:";
        noteList = filterNotes(false);
        onDeleted = false;
        break;
      case "trash":
        menuItem.classList.add("active");
        notesTitleElm.innerText = "Deleted Notes:";
        noteList = filterNotes(true);
        onDeleted = true;
        break;
    }
    loadNotes(noteList);
  }
});

// search function
const searchInput = $.querySelector("#search");
searchInput.addEventListener("keyup", search);

function search(input) {
  const searchInputValue = input.target.value;
  let noteList = [];
  if (onDeleted) {
    noteList = filterNotes(true);
  } else {
    noteList = filterNotes(false);
  }
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

// Old methods
// open note
// function openNote() {
//   notes.forEach((note) => {
//     note.addEventListener("click", (e) => {
//       note.classList.remove("close-note");
//       note.classList.add("open-note");
//       note.querySelector(".note-delete-btn").classList.remove("hidden!");
//       note.querySelector(".note-restore-btn")
//         ? note.querySelector(".note-restore-btn").classList.remove("hidden!")
//         : null;
//     });
//     $.addEventListener("click", (e) => {
//       if (!note.contains(e.target)) {
//         note.classList.remove("open-note");
//         note.classList.add("close-note");
//         note.querySelector(".note-delete-btn").classList.add("hidden!");
//         note.querySelector(".note-restore-btn")
//           ? note.querySelector(".note-restore-btn").classList.add("hidden!")
//           : null;
//       }
//     });
//   });
// }

// change menu
// const menuItems = $.querySelectorAll(".menu-item");
// const notesTitleElm = $.querySelector("#notes-title");
// menuItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     menuItems.forEach((item) => item.classList.remove("active"));
//     if (
//       item === event.target.parentElement.parentElement ||
//       item === event.target.parentElement ||
//       item === event.target
//     ) {
//       let noteList = [];
//       noteList = JSON.parse(localStorage.getItem("noteList")) || [];
//       if (item.id !== "dark-toggle") {
//         item.classList.add("active");
//       }
//       if (item.id === "notes") {
//         isDeleted = false;
//         notesTitleElm.innerText = "Notes:";

//         loadNotes(noteList);
//       } else if (item.id === "trash") {
//         isDeleted = true;
//         notesTitleElm.innerText = "Deleted Notes:";
//         loadNotes(noteList);
//       }
//     }
//   });
// });

// delete note
// function deleteNote(noteId) {
//   const newDeletedState = { isDeleted: true };
//   let noteList = [];
//   noteList = JSON.parse(localStorage.getItem("noteList")) || [];
//   let updatedList;
//   const found = noteList.find((item) => item.id === noteId);
//   if (found && found.isDeleted) {
//     updatedList = noteList.filter((item) => item.id !== noteId);
//   } else {
//     updatedList = noteList.map((item) => {
//       if (noteId === item.id) {
//         return { ...item, ...newDeletedState };
//       }
//       return item;
//     });
//   }
//   localStorage.setItem("noteList", JSON.stringify(updatedList));
//   loadNotes(updatedList);
// }

// restore note
// function restoreNote() {
//   const newDeletedState = { isDeleted: false };
//   restoreBtns = $.querySelectorAll(".note-restore-btn");
//   restoreBtns.forEach((item) => {
//     item.addEventListener("click", () => {
//       const noteId = Number(item.id.split("-")[3]);
//       let noteList = [];
//       noteList = JSON.parse(localStorage.getItem("noteList")) || [];
//       let updatedList;
//       updatedList = noteList.map((item) => {
//         if (noteId === item.id) {
//           return { ...item, ...newDeletedState };
//         }
//         return item;
//       });

//       localStorage.setItem("noteList", JSON.stringify(updatedList));
//       loadNotes(updatedList);
//     });
//   });
// }
