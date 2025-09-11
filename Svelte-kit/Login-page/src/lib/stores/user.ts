import { writable } from "svelte/store";
import type { User } from "$lib/types/user";
export const username = writable("");
export const users = writable<User[]>([]);

