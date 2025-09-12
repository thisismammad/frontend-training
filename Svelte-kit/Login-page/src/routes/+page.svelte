<script lang="ts">
  import { goto } from "$app/navigation";
  import { changeLang } from "$lib";
  import Home from "$lib/components/Home.svelte";
  import HomeFa from "$lib/components/FA/HomeFA.svelte";
  import { isLoggedIn } from "$lib/stores/isLoggedIn";
  import { lang } from "$lib/stores/lang";
  import { onMount } from "svelte";
  onMount(() => {
    if (!$isLoggedIn) goto("/login");
  });

  let pageLang = $state("");
  $effect(() => {
    pageLang = changeLang($lang.toLowerCase());
  });
</script>

<section class="h-screen flex flex-col my-2 items-center sm:justify-center">
  {#if pageLang && pageLang === "fa"}
    <HomeFa />
  {:else}
    <Home />
  {/if}
</section>
