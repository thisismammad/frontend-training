<script lang="ts">
  let src = $state("images/man.jpg");
  let innerWidth = $state(0);
  let { title, description }: { title: string; description: string } = $props();
</script>

<svelte:window bind:innerWidth />
<section
  class="bg-yellow-300 flex rounded-2xl flex-col justify-center items-center gap-4 p-4 h-full"
>
  <div class="w-1/2 max-w-52 aspect-square rounded-full overflow-hidden">
    <img {src} alt={src.split("/")[1]} />
  </div>
  <div class="flex flex-col gap-4 items-center">
    <h1 class="text-center text-3xl">{title}</h1>
    <p class="text-center">
      {description}
    </p>
  </div>
  <div
    class="w-10 cursor-pointer bg-yellow-950 aspect-square rounded-full flex items-center justify-center text-white"
  >
    {#if innerWidth < 640}
      <i class="fa-solid text-2xl fa-angle-down"></i>
    {:else}
      <i class="fa-solid text-2xl fa-angle-right"></i>
    {/if}
  </div>
</section>
