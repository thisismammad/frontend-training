<script lang="ts">
  let a = 0;
  let b = 0;
  let total = 0;

  async function calc() {
    const response = await fetch("/api/calc", {
      method: "POST",
      body: JSON.stringify({ a, b }),
      headers: {
        "content-type": "application/json",
      },
    });

    total = await response.json();
  }
</script>

<div class="flex w-1/2 mx-auto mt-4 items-center gap-2">
  <input type="number" class="w-16 text-center p-2 bg-slate-200 rounded-sm " bind:value={a} />+
  <input type="number" class="w-16 text-center p-2 bg-slate-200 rounded-sm " bind:value={b} /> =
  <span class="w-16 p-2 text-center bg-blue-200 rounded-sm ">{total}</span>

  <button class="ml-5 px-3 cursor-pointer hover:bg-amber-400 py-2 rounded-sm bg-yellow-300" onclick={calc}>Calculate</button>
</div>
