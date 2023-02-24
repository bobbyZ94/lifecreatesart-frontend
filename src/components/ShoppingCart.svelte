<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import { storeShoppingCart } from '../utils/stores';
	import { IconPlus, IconMinus } from '@tabler/icons-svelte';
	export let articles: Array<Article>;

	interface Article {
		slug: string;
		date: string;
		images: [Image];
		quantity: number;
		text: string;
		title: string;
		price: number;
		id: string;
	}

	interface Image {
		image: {
			title: string;
			url: string;
		};
	}

	function onCompleteHandler(e: Event): void {
		console.log('event:complete', e);
	}

	let sum: number = 0;
	$storeShoppingCart.forEach((item) => (sum += item.price));

	$: console.log($storeShoppingCart);

	function reduceItemQuantity(index: number, itemQuantity: number, itemId: string): void {
		console.log('quant', itemQuantity);
		console.log('index', index);
		if (itemQuantity > 1) {
			const copy = $storeShoppingCart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : { ...item }));
			$storeShoppingCart = copy;
		} else {
			console.log('here');
			$storeShoppingCart.pop();
		}
	}

	function increaseItemQuantity(index: number, itemQuantity: number, itemId: string): void {
		const quantityOfArticleInDb = articles.find((article) => article.id === $storeShoppingCart[index].id)?.quantity ?? 0;

		if (itemQuantity < quantityOfArticleInDb) {
			const copy = $storeShoppingCart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : { ...item }));
			$storeShoppingCart = copy;
		}
	}
</script>

<div class="p-5">
	<Stepper on:complete={onCompleteHandler} stepTerm="">
		<Step regionHeader="text-center" regionContent="">
			<svelte:fragment slot="header"><h1 class="mt-10">Shopping Cart</h1></svelte:fragment>
			<div class="my-10 flex flex-col gap-5 items-center">
				{#key $storeShoppingCart}
					{#each $storeShoppingCart as item, index}
						<div class="flex items-center">
							<div class="max-w-[15rem]"><img src={item.imageUrl} alt={item.title} class="object-contain" /></div>
							<div class="flex flex-col gap-2 ml-5">
								<div class="text-xl">{item.title}</div>
								<div class="flex gap-2 bg-primary-500 rounded p-1">
									<button on:click={() => reduceItemQuantity(index, item.quantity, item.id)}>
										<IconMinus />
									</button>
									Quantity: {item.quantity}
									<button on:click={() => increaseItemQuantity(index, item.quantity, item.id)}>
										<IconPlus />
									</button>
								</div>
								<div>{new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(item.price * item.quantity)}</div>
							</div>
						</div>
					{/each}
				{/key}
				<div class="font-bold text-lg mt-5">Sum: {new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(sum)}</div>
			</div>
		</Step>
		<Step regionHeader="text-center" regionContent="flex flex-col items-center">
			<svelte:fragment slot="header"><h1>Shipping</h1></svelte:fragment>
			<div>Adress Form</div>
		</Step>
		<Step regionHeader="text-center" regionContent="flex flex-col items-center">
			<svelte:fragment slot="header"><h1>Payment</h1></svelte:fragment>
			<div>Paypal API</div>
		</Step>
		<Step regionHeader="text-center" regionContent="flex flex-col items-center">
			<svelte:fragment slot="header"><h1>Order Confirmation</h1></svelte:fragment>
			<div>Summary</div>
		</Step>
	</Stepper>
</div>
