<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children?: Snippet } = $props();
</script>

<section
  class="flex bg-slate-50 rounded-2xl shadow-xl flex-col sm:flex-row max-w-[800px]"
>
  {@render children?.()}
</section>
