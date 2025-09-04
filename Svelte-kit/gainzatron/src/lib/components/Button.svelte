<script lang="ts">
	import type {Snippet} from 'svelte';
	import {Button, type ButtonRootProps} from 'bits-ui';
	type Props = {
		children: Snippet;
	} & ButtonRootProps;

	let {children, ...props}: Props = $props();
</script>

<Button.Root
	{...props}
	class="inline-block cursor-pointer rounded-xl bg-orange-600 px-4 py-2 text-orange-50 hover:bg-orange-700"
>
	{@render children?.()}
</Button.Root>
