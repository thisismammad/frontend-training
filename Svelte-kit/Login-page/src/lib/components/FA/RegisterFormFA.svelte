<script lang="ts">
  import type { User } from "$lib/types/user";
  import { fromZodError } from "zod-validation-error";
  import { formDateSchema, type formDateType } from "$lib/schemas/registerFA";
  import Cover from "../Cover.svelte";
  import FormWrapper from "../FormWrapper.svelte";
  import { goto } from "$app/navigation";
  import { username } from "$lib/stores/user";
  import ErrorMessage from "../ErrorMessage.svelte";
  import { gender } from "$lib/stores/gender";
  let errors: string[] = $state([]);
  let { addUser }: { addUser: (user: User) => void } = $props();
  let errKey = $state(0);
  let title = "خوب جایی اومدی برا ثبت نام";
  let description = "زیاد وقتت رو نمی گیره. یکمی هم با ما بد بگذرون ";
  let formData: formDateType = $state({
    username: "",
    gender: "Male",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function submitForm(e: SubmitEvent) {
    e.preventDefault();
    errKey += 1;
    const check = formDateSchema.safeParse(formData);
    if (!check.success) {
      errors = fromZodError(check.error).message.split(";");
    } else {
      let user: User = {
        username: formData.username,
        gender: formData.gender,
        email: formData.email,
        password: formData.password,
      };

      addUser(user);
      username.set(user.username);
      goto("/login");
      errors = [];
    }
  }
  $effect(() => {
    gender.set(formData.gender);
  });
</script>

{#if errors.length > 0}
  {#key errKey}
    <ErrorMessage isError={true} texts={errors} />
  {/key}
{/if}

<FormWrapper>
  <section class="flex-3 font-vazir rounded-2xl">
    <Cover {title} {description} />
  </section>
  <section
    class="flex-4 font-vazir md:px-16 flex flex-col p-8 items-center justify-center"
  >
    <form onsubmit={submitForm}  class="flex flex-col gap-5 w-full">
      <div>
        <label class="flex items-center justify-between">
          نام کاربری
          <input type="text" bind:value={formData.username} />
        </label>
      </div>
      <div class="flex justify-between">
        جنسیت
        <div class="flex gap-16">
          <label
            class="cursor-pointer flex items-center relative justify-between"
          >
            <input
              type="radio"
              class="peer bg-transparent appearance-none inline-block w-8 h-8 aspect-square rounded-full"
              bind:group={formData.gender}
              name="gender"
              value="Male"
            />
            <i
              class="fa-solid text-xl text-amber-400 opacity-30 peer-checked:opacity-100 fa-mars absolute right-1 top-2"
            ></i>
            مرد
          </label>
          <label
            class="cursor-pointer flex items-center relative justify-between"
          >
            <input
              type="radio"
              class="peer bg-transparent appearance-none inline-block w-8 h-8 aspect-square rounded-full"
              name="gender"
              bind:group={formData.gender}
              value="Female"
            />
            <i
              class="fa-solid text-xl text-amber-400 opacity-30 peer-checked:opacity-100 fa-venus absolute right-1 top-2"
            ></i>
            زن
          </label>
        </div>
      </div>
      <div>
        <label class="flex items-center justify-between">
          رمز عبور
          <input type="password" bind:value={formData.password} />
        </label>
      </div>
      <div>
        <label class="flex items-center justify-between">
          تکرار رمز
          <input type="password" bind:value={formData.confirmPassword} />
        </label>
      </div>
      <div>
        <label class="flex items-center justify-between">
          ایمیل
          <input type="email" bind:value={formData.email} />
        </label>
      </div>
      <div class="flex mt-8 items-center justify-center gap-14">
        <button
          class="outline outline-amber-300 w-24 h-11 cursor-pointer rounded-xl hover:bg-amber-100"
          ><a
            href="/login"
            class="flex items-center justify-center w-full h-full">صرف نظر</a
          ></button
        >
        <button
          type="submit"
          class="cursor-pointer w-24 h-11 bg-amber-300 rounded-xl hover:bg-amber-400 flex items-center justify-center"
        >
          ذخیره</button
        >
      </div>
    </form>
  </section>
</FormWrapper>
