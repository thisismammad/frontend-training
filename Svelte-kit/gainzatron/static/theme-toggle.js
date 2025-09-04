const STORAGE_KEY = 'theme';

const getTheme = () => {
	if (typeof localStorage !== 'undefined') {
		if (localStorage.getItem(STORAGE_KEY)) {
			return localStorage.getItem(STORAGE_KEY);
		} else {
			return false;
		}
	}
	return false;
};

const setTheme = (theme) => {
	if (theme !== false) {
		localStorage.setItem(STORAGE_KEY, theme);
		document.documentElement.classList.add(theme);
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.clear();
	}
};
setTheme(getTheme());
const toggleTheme = () => {
	document.documentElement.classList.toggle('dark');
	localStorage.getItem(STORAGE_KEY) ? localStorage.clear() : setTheme('dark');
};

// const themeObserver = new MutationObserver(() => {
// 	const nextTheme = document.documentElement.dataset.theme;
// 	if (nextTheme) {
// 		localStorage.setItem(STORAGE_KEY, nextTheme);
// 	}
// });

// themeObserver.observe(document.documentElement, {
// 	attributes: true,
// 	attributeFilter: ['data-theme'],
// });

// const toggleTheme = () => {
// 	const currentTheme = getTheme();
// 	const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
// 	setTheme(nextTheme);
// };

window.toggleTheme = toggleTheme;
