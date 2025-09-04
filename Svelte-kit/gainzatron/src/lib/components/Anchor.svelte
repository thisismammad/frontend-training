<script lang="ts">
	import type {Snippet} from 'svelte';

	type Props = {
		href: string;
		target?:string;
		children: Snippet;
	};
	let {href,target, children}: Props = $props();
</script>

<a {href} {target} class="rounded-xl inline-block bg-orange-600 px-4 py-2 text-orange-50 hover:bg-orange-700">
	{@render children?.()}
</a>
