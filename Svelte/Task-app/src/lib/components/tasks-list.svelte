<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Task } from '../../app';
	let { tasks, deleteTask }: { tasks: Task[]; deleteTask: (id: string) => void } = $props();
</script>

<ul class="list">
	{#each tasks as task}
		<li class="list-item" in:fly={{ y: -100 }} out:fly={{ y: -50 }}>
			<label class:done={task.isDone}>
				<input type="checkbox" bind:checked={task.isDone} />
				{task.text}
			</label>
			<button onclick={() => deleteTask(task.id)} class=" button delete">Remove</button>
		</li>
	{/each}
</ul>
