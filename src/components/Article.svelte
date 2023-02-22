<script lang="ts">
	import { IconShoppingCartPlus, IconShoppingCartOff } from '@tabler/icons-svelte';
	export let article: Article;
	interface Article {
		slug: string;
		date: string;
		images: [Image];
		quantity: number;
		text: string;
		title: string;
	}

	interface Image {
		image: {
			title: string;
			url: string;
		};
	}
	let currentlySelectedImage: number = 0;
</script>

<div class="m-5 p-5 flex-col flex rounded shadow-lg gap-5 lg:flex-row items-center justify-center">
	<!-- Image Section -->
	<div class="flex flex-col items-center">
		<h1 class="mb-7">{article.title}</h1>
		<div class="w-[20rem] h-[15rem] md:w-[30rem] md:h-[22rem] lg:w-[40rem] lg:h-[30rem]">
			<img src={article.images[currentlySelectedImage].image.url} alt={article.images[currentlySelectedImage].image.title} class="object-contain w-full h-full" />
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
		<div>{article.text}</div>
		<!-- Footer Section -->
		{#if article.quantity > 0}
			<button class="mt-10 btn bg-primary-600 rounded shadow">
				<span>Add to cart</span>
				<span><IconShoppingCartPlus size={30} /></span>
			</button>
		{:else}
			<button class="mt-10 btn bg-primary-600 rounded shadow" disabled>
				<span>Sold out</span>
				<span><IconShoppingCartOff size={30} /></span>
			</button>
		{/if}
	</div>
</div>
