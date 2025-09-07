// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
type Task={
	id:string,
	text:string,
	isDone:boolean
}

type Filter = "all" | "todo" | "done"

export {Task, Filter};
