<script lang="ts">
	// @ts-nocheck
	import type { PageData } from './$types'
	export let data: PageData
	const showcase = data.showcase.sort((itemA, itemB) => new Date(itemB.date) - new Date(itemA.date))
	import Masonry from 'svelte-bricks'

	let [minColWidth, maxColWidth, gap]: [minColWith: number | undefined, maxColWidth: number | undefined, gap: number | undefined] = [400, 1500, 30]
	let masonryWidth: number | undefined
	let masonryHeight: number | undefined
</script>

<div class="my-10 max-w-[100rem] px-5 sm:my-20 sm:px-20">
	<Masonry items={showcase} {minColWidth} {maxColWidth} {gap} let:item bind:masonryWidth bind:masonryHeight>
		<button />
		<img src={item.image.url} alt={item.image.title} class="m-0 object-cover p-0 drop-shadow-lg duration-200 ease-in-out hover:scale-105" />
	</Masonry>
</div>
