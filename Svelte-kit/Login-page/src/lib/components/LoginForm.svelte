<script lang="ts">
  import { users } from "$lib/stores/user";
  import Cover from "./Cover.svelte";
  import FormWrapper from "./FormWrapper.svelte";
  import type { User } from "$lib/types/user";
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/stores/isLoggedIn";
  let title = "Ready to jump back in? Let’s go";
  let description =
    "Welcome back! Your personal space is ready and waiting. Log in to continue where you left off";
  import { username } from "$lib/stores/user";
  import ErrorMessage from "./ErrorMessage.svelte";

  let userList: User[];
  userList = $users;
  let password = $state("");
  let error = $state("");
  let errorKey = $state(0);
  function login(e: SubmitEvent) {
    e.preventDefault();
    errorKey += 1;
    error = "";
    if ($username === "") {
      error = "Enter your username";
      return;
    }
    let loginUser = userList.find((user) => user.username === $username);
    if (loginUser) {
      if (loginUser.password === password) {
        isLoggedIn.set(true);
        goto("/");
      } else {
        error = "Incorrect password!";
        password = "";
      }
    } else {
      error = "User not Found";
    }
  }
</script>

{#if error}
  {#key errorKey}
    <ErrorMessage isError={true} texts={[error]} />
  {/key}
{/if}
<FormWrapper>
  <section class="flex-2 md:max-w-[350px] rounded-2xl">
    <Cover {title} {description} />
  </section>
  <section
    class="flex-3 w-full max-w-[400px] mx-auto flex flex-col p-8 items-center justify-center"
  >
    <form onsubmit={login} class="flex flex-col gap-5 w-full">
      <div>
        <label class="flex items-center justify-between">
          Username
          <input type="text" bind:value={$username} />
        </label>
      </div>
      <div>
        <label class="flex items-center justify-between">
          Password
          <input type="password" bind:value={password} />
        </label>
      </div>

      <div class="flex mt-8 items-center justify-center gap-14">
        <button
          class="cursor-pointer w-24 h-11 bg-amber-300 rounded-xl hover:bg-amber-400 flex items-center justify-center"
          >Login</button
        >
      </div>
    </form>
    <p class="cursor-pointer mt-10 text-sm hover:text-amber-300">
      <a href="/register">Don't have account? click here!</a>
    </p>
  </section>
</FormWrapper>
