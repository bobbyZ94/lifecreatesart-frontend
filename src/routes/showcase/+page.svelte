<script lang="ts">
	// @ts-nocheck
	import type { PageData } from './$types'
	export let data: PageData
	const { showcase } = data
	import Masonry from 'svelte-bricks'

	let [minColWidth, maxColWidth, gap] = [200, 800, 20]
	let width: number
	let height: number
</script>

Masonry size: <span>{width}px</span> &times; <span>{height}px</span> (w &times; h)

<Masonry {showcase} {minColWidth} {maxColWidth} {gap} let:item bind:width bind:height>
	<!-- <img src={showcase.image.url} alt={showcase.image.title} /> -->
	<div class="h-20 w-20 bg-green-500" />
</Masonry>
