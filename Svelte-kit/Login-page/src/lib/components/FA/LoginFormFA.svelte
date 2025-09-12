<script lang="ts">
  import { users } from "$lib/stores/user";
  import Cover from "../Cover.svelte";
  import FormWrapper from "../FormWrapper.svelte";
  import type { User } from "$lib/types/user";
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/stores/isLoggedIn";
  let title = "سلام به سایت ما خوش اومدی";
  let description =
    "فضای شخصی شما آماده و منتظر شماست. برای ادامه از جایی که متوقف شدید، وارد شوید.";
  import { username } from "$lib/stores/user";
  import ErrorMessage from "../ErrorMessage.svelte";

  let userList: User[];
  userList = $users;
  let password = $state("");
  let errors: string[] = $state([]);
  let errorKey = $state(0);
  function login(e: SubmitEvent) {
    e.preventDefault();
    errorKey += 1;
    errors = [""];
    if ($username === "") {
      errors = ["ما رو چی فرض کردی؟"];
      return;
    }
    let loginUser = userList.find((user) => user.username === $username);
    if (loginUser) {
      if (loginUser.password === password) {
        isLoggedIn.set(true);
        goto("/");
      } else {
        errors = ["داری اشتباه میزنی !"];
        password = "";
      }
    } else {
      errors = ["پیدات نمی کنم!!!"];
    }
  }
</script>

{#if errors.length > 0}
  {#key errorKey}
    <ErrorMessage isError={true} texts={errors} />
  {/key}
{/if}
<FormWrapper>
  <section class="flex-1 font-vazir md:max-w-[350px] rounded-2xl">
    <Cover {title} {description} />
  </section>
  <section
    class="flex-3 w-full font-vazir max-w-[400px] mx-auto flex flex-col p-8 items-center justify-center"
  >
    <form onsubmit={login}  class="flex flex-col gap-5 w-full">
      <div>
        <label class="flex items-center justify-between">
          نام کاربری
          <input type="text" bind:value={$username} />
        </label>
      </div>
      <div>
        <label class="flex items-center justify-between">
          رمز عبور
          <input type="password" bind:value={password} />
        </label>
      </div>

      <div class="flex mt-8 items-center justify-center gap-14">
        <button
          class="cursor-pointer w-24 h-11 bg-amber-300 rounded-xl hover:bg-amber-400 flex items-center justify-center"
          >ورود</button
        >
      </div>
    </form>
    <p class="cursor-pointer mt-10 text-sm hover:text-amber-300">
      <a href="/register">حساب کاربری نداری؟ بریم درست کنیم!!</a>
    </p>
  </section>
</FormWrapper>
