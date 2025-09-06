<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    name,
    fakeName = "ali",
    children,
  }: {
    name: string;
    fakeName?: string;
    children?: Snippet;
    secondChild?: Snippet;
  } = $props();
</script>

<!-- <h1>Hello {name}</h1> -->
<!-- <h2>{name.toUpperCase()}</h2> -->

<!-- <h2>{fakeName}</h2> -->

<div class="underline selection:bg-purple-600 selection:text-slate-50">
  <h1>{name ? name : "User"}'s form</h1>
  <!-- {@render children()} -->
  <!-- <h3>{@render secondChild("tesssssss")}</h3> -->
</div>
