<script>
  import Conversion from "$lib/components/Conversion.svelte";
  import FaQs from "$lib/components/FAQs.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Product from "$lib/components/Product.svelte";
  import Reviews from "$lib/components/Reviews.svelte";
</script>

<main class="flex flex-col">
  <Hero />
  <Product />
  <Reviews />
  <FaQs />
  <Conversion />
</main>
