<script lang="ts">
  import Cover from "$lib/components/Cover.svelte";
  import LoginForm from "$lib/components/LoginForm.svelte";
  import RegisterForm from "$lib/components/RegisterForm.svelte";
  let { isLoggedIn }: { isLoggedIn: boolean } = $props();
  function redirect(href: string) {
    if (typeof window !== "undefined") {
      window.location.href = "/" + href;
    }
  }
</script>

<section class="h-screen flex flex-col my-2 items-center sm:justify-center">
  {#if !isLoggedIn}
    {redirect("login")}
  {/if}
</section>
