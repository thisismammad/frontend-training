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

type product = {
  featuresList: string[];
  description: string;
  imgUrl: string;
};

type review = {
  name: string;
  review: string;
  features: string[];
};
type faq = {
  question: string;
  ans: string;
};

export { product, review, faq };
