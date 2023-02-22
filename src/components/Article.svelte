<script lang="ts">
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
	let hideMoreText: boolean = true;
</script>

<div class="m-5 p-5 flex-col flex rounded shadow-lg gap-5 lg:flex-row">
	<!-- Image Section -->
	<div class="flex flex-col items-center">
		<h1 class="mb-7">{article.title}</h1>
		<div class="w-[20rem] h-[15rem] lg:w-[40rem] lg:h-[30rem]">
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
	<div class="flex flex-col justify-center items-center lg:w-[20rem]">
		<!-- Text Section -->
		<div class={`${hideMoreText && 'line-clamp-[15]'}`}>{article.text}</div>
		<button on:click={() => (hideMoreText = false)} class="underline text-primary-900">read more ...</button>
		<!-- Footer Section -->
		<div class="">Footer</div>
	</div>
</div>
