// place files you want to import through the `$lib` alias in this folder.

export function changeLang(lang: string) {
  document.documentElement.lang = lang;

  let dir = lang === "fa" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  return lang;
}
