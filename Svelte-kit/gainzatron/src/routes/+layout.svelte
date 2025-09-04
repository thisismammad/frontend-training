<script lang="ts">
	import '../app.css';

	let {children} = $props();
</script>

<header>
	<a href="/">Gainzatron</a>
</header>

{@render children?.()}

<footer>
	Made with 💖 by <a target="_blank" href="https://github.com/thisismammad">Thisismammad</a>
</footer>
 