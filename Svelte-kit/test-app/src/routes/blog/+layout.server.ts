import type { LayoutServerLoad } from "./$types";
import { posts } from "./data.js";

export const load: LayoutServerLoad = () => {
  let sections: { slug: string; title: string }[] = [];
  posts.forEach((item) => {
    sections.push({ slug: item.slug, title: item.title });
  });
  return {
    sections,
  };
};
