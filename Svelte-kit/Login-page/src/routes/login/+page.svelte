<script lang="ts">
  import LoginForm from "$lib/components/LoginForm.svelte";
  import { lang } from "$lib/stores/lang";
  import { changeLang } from "$lib";
  import LoginFormFa from "$lib/components/FA/LoginFormFA.svelte";

  let pageLang = $state("");
  $effect(() => {
    pageLang = changeLang($lang.toLowerCase());
  });
</script>

<section class="h-screen flex flex-col items-center sm:justify-center">
  {#if pageLang && pageLang === "fa"}
    <LoginFormFa />
  {:else}
    <LoginForm />
  {/if}
</section>
