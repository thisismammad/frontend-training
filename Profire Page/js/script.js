const $ = document;

const darkmodeBtn = $.querySelector("#dark-mode");
const root = $.documentElement;
const header = $.querySelector("header");
const menuBtn = $.querySelector(".menu-btn");
const menu = $.querySelector(".menu");

darkmodeBtn.addEventListener("click", () => {
	changeMode();
});
let isMenuOpen = false;
let isDark = false;
function changeMode() {
	if (isDark) {
		darkmodeBtn.innerHTML = '<i class="fa-solid fa-moon">';
		isDark = false;
		root.style.setProperty("--primary-black", "#2f3640");
		root.style.setProperty("--primary-logo", "#000000");
		root.style.setProperty("--light-gray", "#f6f6f6");
		root.style.setProperty("--primary-white", "#ffffff");
		root.style.setProperty("--shadow", "#c6c6c6");
		header.style.backgroundImage = "url(./images/cover.jpg)";
	} else {
		darkmodeBtn.innerHTML = "<i class='fa-solid fa-sun'></i>";
		root.style.setProperty("--primary-black", "#ffffff");
		root.style.setProperty("--primary-logo", "#ffffff");
		root.style.setProperty("--light-gray", "#242424");
		root.style.setProperty("--primary-white", "#2f3640");
		root.style.setProperty("--shadow", "#242424");
		header.style.backgroundImage = "url(./images/cover2.jpg)";
		isDark = true;
	}
}

menuBtn.addEventListener("click", () => {
	if (isMenuOpen) {
		menu.style.height = "0";
		isMenuOpen = false;
	} else {
		menu.style.height = "185px";
		isMenuOpen = true;
	}
});

window.addEventListener("resize", () => {
	if (isMenuOpen) {
		menu.style.height = "0";
		isMenuOpen = false;
	}
});
