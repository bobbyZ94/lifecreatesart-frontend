import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const currentImageUrl: Writable<string> = writable('')

export default currentImageUrl
