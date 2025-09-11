<script lang="ts">
  import { goto } from "$app/navigation";
  import Home from "$lib/components/Home.svelte";
  import { isLoggedIn } from "$lib/stores/isLoggedIn";
</script>

<section class="h-screen flex flex-col my-2 items-center sm:justify-center">
  {#if !isLoggedIn}
    {goto("/login")}
  {:else}
    <Home />
  {/if}
</section>
