<script lang="ts">
	import Article from '../../components/Article.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<div class="my-10 flex flex-col gap-10 lg:my-20 xl:gap-28">
		{#each data.articles as article}
			<!-- Single Article -->
			<Article {article} />
		{/each}
	</div>
</div>
