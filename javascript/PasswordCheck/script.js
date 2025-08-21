const $ = document;

const pass = $.querySelector("#pass");
const confirmPass = $.querySelector("#confirm");
const lenCheckLabel = $.querySelector("#len");
const caseCheckLabel = $.querySelector("#case");
const numberCheckLabel = $.querySelector("#number");
const charCheckLabel = $.querySelector("#char");
const matchCheckLabel = $.querySelector("#match");

confirmPass.addEventListener("focus", checkMatch);
pass.addEventListener("focus", (e) => {
  matchCheckLabel.style.color = "black";
});

function checkMatch() {
  if (confirmPass.value) {
    if (confirmPass.value === pass.value) {
      matchCheckLabel.style.color = "green";
    } else {
      matchCheckLabel.style.color = "red";
    }
  }
  confirmPass.addEventListener("keyup", (e) => {
    if (e.target.value === pass.value) {
      matchCheckLabel.style.color = "green";
    } else {
      matchCheckLabel.style.color = "red";
    }
  });
}

pass.addEventListener("keyup", (e) => {
  if (e.target.value) {
    if (e.target.value.length >= 8) {
      lenCheckLabel.style.color = "green";
    } else {
      lenCheckLabel.style.color = "red";
    }

    const caseReg = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    if (caseReg.test(e.target.value)) {
      caseCheckLabel.style.color = "green";
    } else {
      caseCheckLabel.style.color = "red";
    }

    const numReg = /\d/;
    if (numReg.test(e.target.value)) {
      numberCheckLabel.style.color = "green";
    } else {
      numberCheckLabel.style.color = "red";
    }

    const charReg = /[^a-zA-Z0-9]/;
    if (charReg.test(e.target.value)) {
      charCheckLabel.style.color = "green";
    } else {
      charCheckLabel.style.color = "red";
    }
  } else {
    lenCheckLabel.style.color = "black";
    caseCheckLabel.style.color = "black";
    numberCheckLabel.style.color = "black";
    charCheckLabel.style.color = "black";
  }
});
