<script lang="ts">
  import RegisterForm from "$lib/components/RegisterForm.svelte";
  import { users } from "$lib/stores/user";
  import type { User } from "$lib/types/user";

  function addUser(user: User) {
    $users = [...$users, user];
  }
</script>

<section class="h-screen flex flex-col items-center sm:justify-center">
  <RegisterForm {addUser} />
</section>
