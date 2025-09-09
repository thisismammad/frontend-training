<script lang="ts">
  import { openModal } from "$lib";
</script>

<header class="flex flex-col relative z-20">
  <div
    class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6"
  >
    <a href="/">
      <h1 class="font-semibold">
        Swoley <span class="text-indigo-400">Moly</span>
      </h1>
    </a>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      onclick={() => $openModal =true}
      class="md:hidden grid place-items-center"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
    <nav class="hidden md:flex items-center gap-4 lg:gap-6">
      <a class="menuBtns" href="#product">Product</a>
      <a class="menuBtns" href="#reviews">Reviews</a>
      <a class="menuBtns" href="#faqs">FAQs</a>
      <button class="specialBtn">
        <p>Start free today</p>
      </button>
    </nav>
  </div>
</header>
