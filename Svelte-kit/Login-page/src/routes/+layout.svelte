<script lang="ts">
  import type { Snippet } from "svelte";
  import "../app.css";
  import { lang } from "$lib/stores/lang";
  import { changeLang } from "$lib";

  // let getLang: string = $state("");
  // afterNavigate(({ to, from }) => {
  //   if (to?.url.pathname) {
  //     getLang = to?.url.pathname;
  //   }
  // });
  // let pageLang = $derived.by(() => {
  //   let parts;
  //   parts = getLang.split("/");
  //   return parts[parts.length - 1];
  // });

  // $effect(() => {
  //   if (pageLang === "fa" || pageLang === "en") {
  //     lang.set(pageLang.toUpperCase());
  //   } else {
  //     lang.set("EN");
  //   }

  //   document.documentElement.lang = pageLang;
  //   document.documentElement.dir = pageLang === "fa" ? "rtl" : "ltr";
  // });
  $lang = $lang === "" ? "EN" : "FA";
  let { children }: { children: Snippet } = $props();
  function toggleLang() {
    lang.set($lang === "FA" ? "EN" : "FA");
    changeLang($lang.toLowerCase());
    // const pathName = page.url.pathname;
    // const parts = pathName.split("/");
    // let pageLang = parts[parts.length - 1];
    // let newPath;
    // if (pageLang === "fa" || pageLang === "en") {
    //   parts[parts.length - 1] = $lang.toLowerCase();
    //   newPath = parts.join("/");
    // } else {
    //   newPath = pathName + "/" + $lang.toLowerCase();
    // }

    // goto(newPath);
  }
</script>

<header class="relative z-30">
  <button
    onclick={toggleLang}
    class="absolute hover:text-amber-400 cursor-pointer p-2 top-4 right-4"
    >{$lang}</button
  >
</header>

{@render children?.()}

<section
  class="bgGrid absolute opacity-15 -z-10 top-0 w-full left-0 h-screen"
></section>
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
    integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
