<script lang="ts">
	let newTask = $state('');
	let { addNewTask }: { addNewTask: (newTask: string) => void } = $props();

	function formSubmitted(e: SubmitEvent) {
		e.preventDefault();
		addNewTask(newTask);
		newTask = '';
	}
</script>

<form class="mb-4 flex gap-2" onsubmit={formSubmitted}>
	<input type="text" class="w-full" bind:value={newTask} placeholder="New Task" />
	<button class="button min-w-16 bg-blue-900 hover:bg-blue-800">Add</button>
</form>
