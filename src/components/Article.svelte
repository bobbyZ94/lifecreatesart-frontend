<script lang="ts">
	import { IconShoppingCartPlus, IconShoppingCartOff } from '@tabler/icons-svelte';
	import { storeShoppingCart } from '../utils/stores';
	export let article: Article;

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
	let currentlySelectedImage: number = 0;

	// Add to cart
	$: indexOfArticleInCart = $storeShoppingCart.findIndex((articleInStore) => articleInStore.id === article.id);
	function addArticleToShoppingCart(): void {
		// Check if article is already in shopping cart
		if (indexOfArticleInCart !== -1) {
			// True: Update quantity of article in shopping cart
			if (article.quantity > $storeShoppingCart[indexOfArticleInCart].quantity) {
				const copy = $storeShoppingCart.map((item) => (item.id === article.id ? { ...item, quantity: item.quantity + 1 } : { ...item }));
				$storeShoppingCart = copy;
			}
		} else {
			// False: Create new article object in shopping cart
			$storeShoppingCart = [
				...$storeShoppingCart,
				{
					id: article.id,
					title: article.title,
					quantity: 1,
					price: article.price,
					imageUrl: article.images[0].image.url
				}
			];
		}
	}
</script>

<div class="m-5 p-5 flex-col flex rounded shadow-lg gap-5 lg:flex-row items-center justify-center backdrop-contrast-[1.05]">
	<!-- Image Section -->
	<div class="flex flex-col items-center justify-center h-full">
		<h1 class="mb-7">{article.title}</h1>
		<div class="w-[20rem] h-[15rem] md:w-[30rem] md:h-[22rem] lg:w-[40rem] lg:h-[30rem]">
			<a class="unstyled" href={article.images[currentlySelectedImage].image.url}>
				<img src={article.images[currentlySelectedImage].image.url} alt={article.images[currentlySelectedImage].image.title} class="object-contain w-full h-full" />
			</a>
		</div>
		<!-- Images Container -->
		{#if article.images.length > 1}
			<div class="flex flex-wrap gap-3 my-3">
				{#each article.images as image, indexImage}
					<button on:click={() => (currentlySelectedImage = indexImage)}>
						<img src={image.image.url} alt={image.image.title} class="h-[3rem] w-[4rem] lg:h-[5rem] lg:w-[7rem] object-contain" />
					</button>
				{/each}
			</div>
		{/if}
	</div>
	<div class="flex flex-col h-full items-center justify-between lg:w-[20rem] lg:ml-10 lg:py-10">
		<!-- Text Section -->
		<div class="text-lg">{article.text}</div>
		<!-- Footer Section -->
		<div class="flex gap-5 items-center justify-center mt-10 font-sans text-base">
			<div>
				<div>{new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(article.price)}</div>
				<div>In store: {article.quantity} pcs</div>
			</div>
			{#if article.quantity > 0}
				<button on:click={addArticleToShoppingCart} class="btn bg-primary-600 rounded shadow font-bold">
					<span>Add to cart</span>
					<span><IconShoppingCartPlus size={30} /></span>
				</button>
			{:else}
				<button class="btn bg-primary-600 rounded shadow font-bold" disabled>
					<span>Sold out</span>
					<span><IconShoppingCartOff size={30} /></span>
				</button>
			{/if}
		</div>
	</div>
</div>
