<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import '../app.css';
	let {children} = $props();
</script>

<header>
	<a href="/">Gainzatron</a>
	<Button onclick={() => {
		window?.toggleTheme && window.toggleTheme()
	}}>toggle theme</Button>
</header>
{@render children?.()}

<footer>
	Made with 💖 by <a target="_blank" href="https://github.com/thisismammad">Thisismammad</a>
</footer>
