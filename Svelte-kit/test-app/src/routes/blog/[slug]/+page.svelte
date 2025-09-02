<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
  import { page } from "$app/state";
</script>

<h1>{page.params.slug}</h1>
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
