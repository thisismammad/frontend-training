<script lang="ts">
  import Cover from "$lib/components/Cover.svelte";
  import LoginForm from "$lib/components/LoginForm.svelte";
  import RegisterForm from "$lib/components/RegisterForm.svelte";

  let isLoggedIn = $props();
</script>

<section class="h-screen flex flex-col my-2 items-center  sm:justify-center">
  <!-- <RegisterForm /> -->
   <LoginForm />
</section>
<!-- <Cover /> -->
