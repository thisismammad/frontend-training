const $ = document;

const header = $.querySelector("header");

const body = $.body;

const bodyChildren = body.children;

const list = $.querySelector("#list");
const newLI = $.createElement("li");
newLI.innerText = "add with js";
const clone = list.querySelector("li").cloneNode();
newLI.style.backgroundColor = "#aaff11";

newLI.classList.add(clone.classList);

list.appendChild(newLI);

const mainTitle = $.querySelector("#main-title");

const btn = $.querySelector("input[type=button]");

btn.addEventListener("click", () => {
  const inter = setInterval(() => {
    if (list.children.length>0) {
      console.log("R");
      list.removeChild(list.lastChild);
      console.log(list.children);
      console.log(list.children.length);
    } else {
      clearInterval(inter);
    }
  }, 1000);
});
