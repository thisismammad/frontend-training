<script lang="ts">
  import type { LayoutProps } from "./$types";
  let { data, children }: LayoutProps = $props();
</script>

<h1>Blog</h1>
<ul>
  {#each data.sections as section}
    <a class="block" href="/blog/{section.slug}"> {section.title}</a>
  {/each}
</ul>
{@render children()}
