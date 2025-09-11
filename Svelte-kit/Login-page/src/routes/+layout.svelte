<script lang="ts">
  import type { Snippet } from "svelte";
  import "../app.css";
  import ErrorMessage from "$lib/components/ErrorMessage.svelte";

  let { children }: { children: Snippet } = $props();
</script>

{@render children?.()}
<section
  class="bgGrid absolute opacity-15 -z-10 top-0 w-full left-0 h-screen"
></section>
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
    integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
