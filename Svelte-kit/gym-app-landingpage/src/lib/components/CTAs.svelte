<script lang="ts">
  let { dark }: { dark: boolean } = $props();
</script>

<div class="flex items-center gap-4">
  <button class="specialBtn" class:bg-[#181b34]={dark}>
    <p class="text-base sm:text-lg md:text-xl">Contact Us</p>
  </button>
  <button class="specialBtnDark">
    <p class="text-base sm:text-lg md:text-xl">Get Started &rarr;</p>
  </button>
</div>
