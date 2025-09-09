<script lang="ts">
	import TasksForm from '$lib/components/tasks-form.svelte';
	import TasksList from '$lib/components/tasks-list.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import type { Task, Filter } from '../app';
	let tasks = $state<Task[]>([]);
	function addNewTask(newTask: string) {
		tasks.push({
			id: uuidv4(),
			text: newTask,
			isDone: false
		});
	}
	function deleteTask(taskId: string) {
		let index = tasks.findIndex((task) => (task.id = taskId));
		tasks.splice(index, 1);
	}
	let currenFilter = $state<Filter>('all');
	let doneCount = $derived(tasks.reduce((count, task) => count + Number(task.isDone), 0));
	let filteredList = $derived.by(() => {
		switch (currenFilter) {
			case 'all':
				return tasks;
			case 'done':
				return tasks.filter((task) => task.isDone);
			case 'todo':
				return tasks.filter((task) => !task.isDone);
		}
		return tasks;
	});
</script>

{#snippet filterButtons(filter: Filter)}
	<button
		class="button taps"
		class:active={currenFilter === filter}
		onclick={() => {
			currenFilter = filter;
		}}>{filter}</button
	>
{/snippet}

<main>
	<h1 class="my-4 w-max text-3xl">Tasks App</h1>
	<TasksForm {addNewTask} />
	<div class="xs:flex-row! mt-12 flex flex-col-reverse items-center justify-between gap-4">
		<p class="ml-4 text-left">
			{#if tasks.length}
				{doneCount} / {tasks.length} tasks is done
			{:else}
				Add some tasks
			{/if}
		</p>
		{#if tasks.length}
			<div class="flex justify-end gap-2">
				{@render filterButtons('all')}
				{@render filterButtons('todo')}
				{@render filterButtons('done')}
			</div>
		{/if}
	</div>
	<TasksList tasks={filteredList} {deleteTask} />
</main>
