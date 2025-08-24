import { v4 as uuidv4 } from "uuid";

type User = {
  id: string;
  name: string;
  email: string;
};

const formElm = document.querySelector<HTMLFormElement>("#form");
const nameElm = document.querySelector<HTMLInputElement>("#name");
const emailElm = document.querySelector<HTMLInputElement>("#email");
const userListElm = document.querySelector<HTMLDivElement>("#user-list");

const users: User[] = loadData();
users.forEach(addUserToDom);

formElm?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameElm?.value === undefined || emailElm?.value === undefined) return;

  const newUser: User = {
    id: uuidv4(),
    name: nameElm.value,
    email: emailElm.value,
  };
  addUserToDom(newUser);
  nameElm.value = "";
  emailElm.value = "";
  users.push(newUser);
  saveData();
});

function addUserToDom(user: User) {
  const newDivElm = document.createElement("DIV");
  newDivElm.classList.add("p-4", "bg-slate-400", "rounded-md");
  const newNameElm = document.createElement("P");
  const newEmailElm = document.createElement("P");
  newNameElm.append(user.name);
  newEmailElm.append(user.email);
  newDivElm.append(newNameElm, newEmailElm);
  userListElm?.append(newDivElm);
}

function saveData() {
  localStorage.setItem("user-list", JSON.stringify(users));
}
function loadData(): User[] {
  const date = localStorage.getItem("user-list");
  if (date == null) return [];
  return JSON.parse(date);
}
