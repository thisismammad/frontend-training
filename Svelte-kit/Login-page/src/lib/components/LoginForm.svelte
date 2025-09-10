<script>
  import Cover from "./Cover.svelte";
  let title = "Ready to jump back in? Let’s go"
  let description = "Welcome back! Your personal space is ready and waiting. Log in to continue where you left off"
</script>

<section
  class="flex bg-slate-50 rounded-2xl flex-col sm:flex-row max-w-[800px]"
>
  <section class="flex-2 md:max-w-[350px] rounded-2xl">
    <Cover {title} {description}/>
  </section>
  <section class="flex-3 w-full max-w-[400px]  mx-auto  flex flex-col p-8 items-center justify-center">
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
    <p class="cursor-pointer mt-10 text-sm hover:text-amber-300"><a href="/register">Don't have account? click here!</a></p>
  </section>
</section>
