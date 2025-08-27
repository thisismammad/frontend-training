<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
let name:string = "mammad"
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<h1>{name.toUpperCase()}</h1>

{@render children?.()}
