<script>
  import Cover from "./Cover.svelte";
  let title = "Let's get you set up";
  let description =
    "It should only take a couple of minutes to pair with your match";
</script>

<section
  class="flex bg-slate-50 rounded-2xl flex-col sm:flex-row max-w-[800px]"
>
  <section class="flex-2 rounded-2xl">
    <Cover {title} {description} />
  </section>
  <section class="flex-3 flex flex-col p-8 items-center justify-center">
    <form class="flex flex-col gap-5 w-full">
      <div>
        <label class="flex items-center justify-between">
          Username
          <input type="text" />
        </label>
      </div>
      <div class="flex justify-between">
        Gender
        <div class="flex gap-16">
          <label
            class="cursor-pointer flex items-center relative justify-between"
          >
            <input
              type="radio"
              class="peer bg-transparent appearance-none inline-block w-8 h-8 aspect-square rounded-full"
              name="gender"
            />
            <i
              class="fa-solid text-xl text-amber-400 opacity-30 peer-checked:opacity-100 fa-mars absolute left-1 top-2"
            ></i>
            Male
          </label>
          <label
            class="cursor-pointer flex items-center relative justify-between"
          >
            <input
              type="radio"
              class="peer bg-transparent appearance-none inline-block w-8 h-8 aspect-square rounded-full"
              name="gender"
            />
            <i
              class="fa-solid text-xl text-amber-400 opacity-30 peer-checked:opacity-100 fa-venus absolute left-1 top-2"
            ></i>
            Female
          </label>
        </div>
      </div>
      <div>
        <label class="flex items-center justify-between">
          Password
          <input type="password" />
        </label>
      </div>
      <div>
        <label class="flex items-center justify-between">
          Confirm Password
          <input type="password" />
        </label>
      </div>
      <div>
        <label class="flex items-center justify-between">
          Email
          <input type="email" />
        </label>
      </div>
      <div class="flex mt-8 items-center justify-center gap-14">
        <button
          class="outline outline-amber-300 w-24 h-11 cursor-pointer rounded-xl hover:bg-amber-100 flex items-center justify-center"
          >Cancel</button
        >
        <button
          class="cursor-pointer w-24 h-11 bg-amber-300 rounded-xl hover:bg-amber-400 flex items-center justify-center"
          >Save</button
        >
      </div>
    </form>
  </section>
</section>
