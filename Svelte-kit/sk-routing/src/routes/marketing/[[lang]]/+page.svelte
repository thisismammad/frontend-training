<script lang="ts">
  import { page } from "$app/stores";
  interface Langs {
    [key: string]: string;
  }
  const greetings: Langs = {
    en: "hello!",
    es: "Hola!",
    fa: "!سلام",
  };

  const lang = $page.params.lang || "en";
</script>

{#if typeof lang === "string"}
  <h1>{greetings[lang]}</h1>
{/if}
