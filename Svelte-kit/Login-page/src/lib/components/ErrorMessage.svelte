<script lang="ts">
  let { texts, isError }: { texts: String[]; isError: boolean } = $props();
  let show = $state(true);
  setTimeout(() => {
    show = false;
  }, 4000);
</script>

<section class="fixed top-5 z-20">
  {#each texts as text}
    <section
      class:block!={show}
      class:bg-red-100!={isError}
      class=" delay-1000 mt-2 bg-green-100 px-4 py-3 hidden rounded-full"
    >
      <p class="text-green-800 text-center" class:text-red-800!={isError}>{text}</p>
    </section>
  {/each}
</section>
