<script lang="ts">
  import { fly, slide } from "svelte/transition";
  import Header from "./Header.svelte";
  import { sl } from "zod/locales";

  // let name: string = $state("thisismammad");
  // let fullName = $derived(name + " dv");
  // let fakeName = "fake";

  // let status: "OPEN" | "CLOSED" = $state("OPEN");
  // const onclick = () => {
  //   status = status === "OPEN" ? "CLOSED" : "OPEN";
  // };

  let formState = $state({
    answers: {},
    step: 0,
    error: "",
  });

  const Questions = [
    {
      question: "What's your name?",
      id: "name",
      type: "text",
    },
    {
      question: "What's your birthday?",
      id: "bday",
      type: "date",
    },

    {
      question: "What's your favorite color?",
      id: "color",
      type: "color",
    },
  ];

  const nextStep = (id: string) => {
    if (formState.answers[id]) {
      formState.step += 1;
      formState.error = "";
    } else {
      formState.error = "Please fill the input";
    }
  };

  // $inspect(formState.step)
</script>

<!-- 
<Header {name} {fakeName} />

<input type="text" bind:value={name} />

<p>The store is now {status}</p>
<button {onclick}>
  Toggle</button
>
<h2 class="text-2xl m-4 bg-blue-100">{fullName}</h2> -->

<!-- <Header name={formState.name}>
  <p>Hello</p>
  {#snippet secondChild(secondChildName:string)}
  <p>Second Child {secondChildName}</p>
    
  {/snippet}
</Header> -->
<!-- {JSON.stringify(formState)} -->
<Header name={formState.answers.name} />
<main>
  {#if formState.step >= Questions.length}
    <h3>Thanks !</h3>
  {:else}
    <p>Step: {formState.step + 1}</p>
  {/if}

  <!-- {#if formState.step === 0}
    <div>
      <label for="name">Your Name:</label>
      <input type="text" id="name" bind:value={formState.name} />
    </div>
    <button
      onclick={() => {
        if (formState.name !== "") {
          formState.step += 1;
          formState.error = "";
        } else {
          formState.error = "Your Name is empty";
        }
      }}>Next</button
    >
  {:else if formState.step === 1}
    <div>
      <label for="bday">Your Birthday:</label>
      <input type="date" id="bday" bind:value={formState.birthday} />
    </div>
    <button
      onclick={() => {
        if (formState.birthday !== "") {
          formState.step += 1;
          formState.error = "";
        } else {
          formState.error = "Your Birthday is empty!!!";
        }
      }}>Next</button
    >
  {/if} -->
  {#each Questions as question, index (question.id)}
    {#if formState.step === index}
      <div transition:slide={{ duration: 400 }}>
        {@render formStep(question)}
      </div>
    {/if}
  {/each}
  {#if formState.error}
    <h4 class="text-red-600">{formState.error}</h4>
  {/if}
</main>
{#snippet formStep({
  question,
  id,
  type,
}: {
  question: string;
  id: string;
  type: string;
})}
  <article>
    <div>
      <label for={id}>{question}</label>
      <input {type} {id} bind:value={formState.answers[id]} />
    </div>
    <button onclick={() => nextStep(id)}>Next</button>
  </article>
{/snippet}
