import { persisted } from 'svelte-local-storage-store'
import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type { Article } from '../typings/typings'

//  Shopping Cart Store which writes to browsers local storage for peristance
export const storeShoppingCart: Writable<Array<Article>> = persisted('storeShoppingCart', [])

// Is Shopping Cart drawer visible?
export const shoppingCartVisible: Writable<boolean> = writable(false)
