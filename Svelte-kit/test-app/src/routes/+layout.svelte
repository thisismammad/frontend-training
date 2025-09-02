<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Test APP</title>
</svelte:head>


<nav class="flex gap-4 bg-slate-400 rounded-sm p-4">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/blog">Blog</a>
  <a href="/api/calc">Calculator</a>
</nav>
{@render children?.()}
