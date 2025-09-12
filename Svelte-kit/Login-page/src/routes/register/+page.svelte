<script lang="ts">
  import RegisterForm from "$lib/components/RegisterForm.svelte";
  import { users } from "$lib/stores/user";
  import type { User } from "$lib/types/user";
  import RegisterFormFa from "$lib/components/FA/RegisterFormFA.svelte";
  import { lang } from "$lib/stores/lang";
  import { changeLang } from "$lib";
  function addUser(user: User) {
    $users = [...$users, user];
  }
  // let lang: string = $state("");

  // afterNavigate(({ to, from }) => {
  //   if (to?.url.pathname) lang = to?.url.pathname;
  // });
  // let pageLang = $derived.by(() => {
  //   let parts;
  //   parts = lang.split("/");
  //   return parts[parts.length - 1];
  // });
  let pageLang = $state("");
  $effect(() => {
    pageLang = changeLang($lang.toLowerCase());
  });
</script>

<section class="h-screen flex flex-col items-center sm:justify-center">
  {#if pageLang && pageLang === "fa"}
    <RegisterFormFa {addUser} />
  {:else}
    <RegisterForm {addUser} />
  {/if}
</section>
