<script lang="ts">
      let numbers: number[] = [0, 1, 2, 3, 4];
</script>

<div class="flex items-center justify-center gap-2 text-base">
  <p>4.6</p>
  {#each numbers as index}
    <div class="grid place-items-center relative">
      <i class="fa-solid fa-star opacity-0"></i>
      <div
        class="absolute top-0 left-0 grid place-items-center"
        class:w-[60%]={index === 4}
        class:overflow-hidden={index === 4}
      >
        <i class="fa-solid fa-star text-amber-400"></i>
      </div>
    </div>
  {/each}
  <p>500+</p>
</div>
