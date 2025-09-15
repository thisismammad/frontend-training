<script lang="ts">
  import { page } from "$app/state";
  const initHash = JSON.parse(atob(page.url.hash.substring(1)) || "{}");
  console.log(initHash);
  let user = $state({
    name: initHash?.name || "",
    age:initHash?.age || ""
  });
  function inputHandle({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) {
    user[name] = value;
    window.location.hash = btoa(JSON.stringify(user));
  }
 
</script>

<section class="mx-auto mt-4 bg-slate-500 max-w-3xl p-4">
  <input
    type="text"
    class="p-2 bg-slate-300"
    name="name"
    value={user.name}
    oninput={inputHandle}
  />
  <input
    type="text"
    class="p-2 bg-slate-300"
    name="age"
    value={user.age}
    oninput={inputHandle}
  />

</section>
