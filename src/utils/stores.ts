import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

interface Item {
  id: string,
  title: string
  quantity: number
  price: number
  imageUrl: string
}

//  Shopping Cart Store which writes to browsers local storage for peristance
export const storeShoppingCart: Writable<Array<Item>> = localStorageStore('storeShoppingCart', []);

