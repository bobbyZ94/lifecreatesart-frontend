<script lang="ts">
	import { storeShoppingCart } from '../stores/shoppingCart'
	import { IconPlus, IconMinus } from '@tabler/icons-svelte'
	import type { Article } from '../typings/typings'
	export let articles: Array<Article>

	$: sum = $storeShoppingCart.reduce((previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity, 0)

	function reduceItemQuantity(index: number, itemQuantity: number, itemId: string): void {
		if (itemQuantity > 1) {
			storeShoppingCart.set($storeShoppingCart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : { ...item })))
		} else {
			$storeShoppingCart.splice(index, 1)
			storeShoppingCart.set($storeShoppingCart)
		}
	}

	function increaseItemQuantity(index: number, itemQuantity: number, itemId: string): void {
		const quantityOfArticleInDb = articles.find((article) => article.id === $storeShoppingCart[index].id)?.quantity ?? 0
		if (itemQuantity < quantityOfArticleInDb) {
			storeShoppingCart.set($storeShoppingCart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : { ...item })))
		}
	}
</script>

<div class="my-5 flex flex-col items-center gap-2">
	{#if $storeShoppingCart.length > 0}
		{#each $storeShoppingCart as item, index}
			<div class="flex items-center">
				<div class="max-w-[15rem]"><img src={item.images[0].image.url} alt={item.title} class="object-contain" /></div>
				<div class="ml-5 flex flex-col gap-2">
					<div class="text-xl">{item.title}</div>
					<div class="bg-primary-500 flex gap-2 rounded p-1">
						<button on:click={() => reduceItemQuantity(index, item.quantity, item.id)}>
							<IconMinus />
						</button>
						<div class="whitespace-nowrap break-keep">Pcs: {item.quantity}</div>
						<button on:click={() => increaseItemQuantity(index, item.quantity, item.id)}>
							<IconPlus />
						</button>
					</div>
					<div>{new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(item.price * item.quantity)}</div>
				</div>
			</div>
			<div class="divider m-0" />
		{/each}
	{/if}

	<div class="mt-5 text-lg font-bold">Sum: {new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(sum)}</div>
</div>
