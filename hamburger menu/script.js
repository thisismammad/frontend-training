const sideMenu = document.querySelector(".side-menu");
const menuBtn = document.querySelector(".fa-solid");

let isOpen = false;
menuBtn.addEventListener("click", () => {
  showHideMenu()
});

function showHideMenu() {
	if (isOpen) {
		sideMenu.style.top = "-100%"
    isOpen = false
	} else {
		sideMenu.style.top = "24px"
    isOpen = true;
	}
}


window.addEventListener("resize",()=>{
  		sideMenu.style.top = "-100%";
			isOpen = false;
})