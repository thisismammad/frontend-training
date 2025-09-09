<script lang="ts">
  import type { review } from "../../app";
  let {
    reviewItem,
    left,
    index,
  }: { reviewItem: review; left?: boolean; index: number } = $props();
</script>

<div
  class="flex flex-col gap-2 w-full max-w-[500px] mx-auto relative"
  class:reviewCardEven={left && index % 2 === 1}
  class:reviewCardOdd={!left && index % 2 === 0}
>
  <div class="flex relative">
    <div
      class="absolute rounded-full bg-white aspect-square hidden md:grid place-items-center h-4 top-0"
      class:right-0={index % 2 === 0}
      class:-mr-8={index % 2 === 0}
      class:translate-x-[50%]={index % 2 === 0}
      class:left-0={index % 2 !== 0}
      class:-ml-8={index % 2 !== 0}
      class:-translate-x-[50%]={index % 2 !== 0}
    >
      <div class="rounded-full bg-slate-950 aspect-square h-2"></div>
    </div>
    <div class="flex items-center gap-2">
      <i class="fa-solid fa-user"></i>
      <h3 class="text-lg sm:text-xl md:text-2xl">
        {reviewItem.name}
      </h3>
    </div>
  </div>
  <div class="h-[1.5px] bg-slate-950 w-1/4 mr-auto mb-4 mt-2"></div>
  <div class="flex items-center flex-wrap gap-2 text-xs sm:text-sm mb-4">
    {#each reviewItem.features as keywork}
      <div
        class="p-1 py-0.5 rounded-md border border-solid border-indigo-400 bg-indigo-50 text-indigo-400"
      >
        <p>{keywork}</p>
      </div>
    {/each}
  </div>
  <p>{reviewItem.review}</p>
</div>
