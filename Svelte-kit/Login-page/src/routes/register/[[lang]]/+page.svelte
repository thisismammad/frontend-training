<script lang="ts">
  import RegisterForm from "$lib/components/RegisterForm.svelte";
  import { users } from "$lib/stores/user";
  import type { User } from "$lib/types/user";
  import { page } from "$app/state";
  import RegisterFormFa from "$lib/components/RegisterFormFA.svelte";
  function addUser(user: User) {
    $users = [...$users, user];
  }
  let lang: string = $state("");
  import { afterNavigate } from "$app/navigation";

  afterNavigate(({ to, from }) => {
    if (to?.url.pathname) lang = to?.url.pathname;
  });
  let pageLang = $derived.by(() => {
    let parts;
    parts = lang.split("/");
    return parts[parts.length - 1];
  });
</script>

<section class="h-screen flex flex-col items-center sm:justify-center">
  {#if pageLang && pageLang === "fa"}
    {#key pageLang}
      <RegisterFormFa {addUser} />
    {/key}
  {:else}
    {#key pageLang}
      <RegisterForm {addUser} />
    {/key}
  {/if}
</section>
