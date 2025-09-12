<script>
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/stores/isLoggedIn";
</script>

<section class="h-screen w-full flex items-center justify-center relative">
  <button
    onclick={() => {
      isLoggedIn.set(false);
      goto("/login");
    }}
    class="absolute cursor-pointer hover:text-amber-400 left-5 top-5"
  >
    LogOut</button
  >
  <h1 class="text-6xl text-center">Welcome Back</h1>
</section>
