<script lang="ts">
  import { lang } from "$lib/stores/lang";
  import { fly } from "svelte/transition";

  let { texts, isError }: { texts: String[]; isError: boolean } = $props();
  let interval = setInterval(() => {
    texts.pop();
    if (texts.length <= 0) clearInterval(interval);
  }, 3000);
</script>

<section class="fixed top-5 z-20 flex flex-col items-center">
  {#each texts as text}
    <section
      class:bg-red-100!={isError}
      in:fly
      out:fly={{ delay: 500, y: -100 }}
      class:font-vazir={$lang === "FA"}
      class=" delay-1000 mt-2 bg-green-100 px-4 py-3 rounded-full"
    >
      <p class="text-green-800 text-center" class:text-red-800!={isError}>
        {text}
      </p>
    </section>
  {/each}
</section>
