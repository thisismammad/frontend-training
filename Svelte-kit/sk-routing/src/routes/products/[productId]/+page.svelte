<script>
  import { page } from "$app/stores";
  const productId = $page.params.productId;
</script>

<h1>Details about product: {productId}</h1>

<style>
  h1 {
    background-color: slategray;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    padding: 2rem;
    border-radius: 0.5rem;
  }
</style>
