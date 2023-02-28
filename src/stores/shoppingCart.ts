import { persisted } from 'svelte-local-storage-store'
import type { Writable } from 'svelte/store';
import type { Article } from '../typings/typings';

//  Shopping Cart Store which writes to browsers local storage for peristance
const storeShoppingCart: Writable<Array<Article>> = persisted('storeShoppingCart', []);

export default storeShoppingCart;

