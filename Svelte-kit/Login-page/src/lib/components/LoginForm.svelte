<script>
  import Cover from "./Cover.svelte";
  let title = "Hi"
  let description = "this is description"
</script>

<section
  class="flex bg-slate-50 rounded-2xl flex-col sm:flex-row max-w-[800px]"
>
  <section class="flex-2 rounded-2xl">
    <Cover {title} {description}/>
  </section>
  <section class="flex-3 flex flex-col p-8 items-center justify-center">
    <form class="flex flex-col gap-5 w-full">
      <div>
        <label class="flex items-center justify-between">
          Username
          <input type="text" />
        </label>
      </div>
      <div>
        <label class="flex items-center justify-between">
          Password
          <input type="password" />
        </label>
      </div>

      <div class="flex mt-8 items-center justify-center gap-14">
        <button
          class="cursor-pointer w-24 h-11 bg-amber-300 rounded-xl hover:bg-amber-400 flex items-center justify-center"
          >Login</button
        >
      </div>
    </form>
  </section>
</section>
