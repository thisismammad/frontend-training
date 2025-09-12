<script>
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/stores/isLoggedIn";
</script>

<section
  class="h-screen font-vazir w-full flex items-center justify-center relative"
>
  <button
    onclick={() => {
      isLoggedIn.set(false);
      goto("/login");
    }}
    class="absolute cursor-pointer hover:text-amber-400 left-5 top-5"
  >
    خروج</button
  >
  <h1 class="text-6xl text-center leading-20">خوش اومدی صفا آوردی &hearts;</h1>
</section>
