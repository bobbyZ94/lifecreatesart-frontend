<script lang="ts">
	import {
		IconShoppingCartPlus,
		IconShoppingCartOff,
		IconCornerLeftUp,
		IconArrowsDiagonal2
	} from '@tabler/icons-svelte';
	import currentImageUrl from '../stores/currentImageUrl';
	import storeShoppingCart from '../stores/shoppingCart';
	import type { Article } from '../typings/typings';

	export let article: Article;

	let currentlySelectedImage: number = 0;
	let readMore = false;

	// Add to cart
	$: indexOfArticleInCart = $storeShoppingCart.findIndex(
		(articleInStore) => articleInStore.id === article.id
	);

	function addArticleToShoppingCart(): void {
		// Check if article is already in shopping cart
		if (indexOfArticleInCart !== -1) {
			// True: Update quantity of article in shopping cart
			if (article.quantity > $storeShoppingCart[indexOfArticleInCart].quantity) {
				const copy = $storeShoppingCart.map((item) =>
					item.id === article.id ? { ...item, quantity: item.quantity + 1 } : { ...item }
				);
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
					slug: article.slug,
					date: article.date,
					images: article.images,
					text: article.text
				}
			];
		}
	}
</script>

<div
	class="grid max-w-6xl grid-cols-1 rounded p-8 shadow-lg backdrop-contrast-[1.05] xl:grid-cols-3"
>
	<!-- Image Section -->
	<div class="flex h-full flex-col items-center justify-center pb-5 xl:col-span-2 xl:mr-16">
		<h1 class="mb-8 font-serif text-4xl sm:text-6xl">{article.title}</h1>

		<label
			for="img-modal"
			class="flex h-[15rem] w-[20rem] cursor-pointer items-center sm:h-[22rem] sm:w-[30rem] lg:h-[30rem] lg:w-[40rem]"
		>
			<button
				on:click={() => ($currentImageUrl = article.images[currentlySelectedImage].image.url)}
			>
				<img
					src={article.images[currentlySelectedImage].image.url}
					alt={article.images[currentlySelectedImage].image.title}
					class="h-full w-full overflow-hidden border-none object-contain drop-shadow-lg "
				/>
			</button>
		</label>

		<!-- Images Container -->
		{#if article.images.length > 1}
			<div class="my-3 flex max-w-[40rem] flex-wrap gap-3">
				{#each article.images as image, indexImage}
					<button on:click={() => (currentlySelectedImage = indexImage)}>
						<img
							src={image.image.url}
							alt={image.image.title}
							class="h-[3rem] w-[4rem] object-contain lg:h-[5rem] lg:w-[7rem]"
						/>
					</button>
				{/each}
			</div>
		{/if}
	</div>
	<div class="xlpy-16 flex h-full w-full flex-col items-center justify-between xl:col-span-1">
		<!-- Text Section -->
		<div class={`text-xl ${readMore ? '' : 'line-clamp-[8] xl:line-clamp-none'}`}>
			{article.text}
		</div>
		<button
			on:click={() => (readMore === true ? (readMore = false) : (readMore = true))}
			class="btn-sm btn mt-2 !bg-neutral xl:hidden"
		>
			{#if readMore}
				<IconCornerLeftUp />
			{:else}
				Read More ..
			{/if}
		</button>
		<!-- Footer Section -->
		<div class="mt-10 flex items-center justify-center gap-5 font-sans text-base">
			<div>
				<div>
					{new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(
						article.price
					)}
				</div>
				<div>In store: {article.quantity} pcs</div>
			</div>
			{#if article.quantity > 0}
				<button
					on:click={addArticleToShoppingCart}
					class="bg-primary-600 btn rounded font-bold shadow"
				>
					<span>Add to cart</span>
					<span><IconShoppingCartPlus size={30} /></span>
				</button>
			{:else}
				<button class="bg-primary-600 btn rounded font-bold shadow" disabled>
					<span>Sold out</span>
					<span><IconShoppingCartOff size={30} /></span>
				</button>
			{/if}
		</div>
	</div>
</div>
