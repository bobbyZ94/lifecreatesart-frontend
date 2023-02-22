<script lang="ts">
	import Article from '../../components/Article.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col items-center justify-center w-full h-full">
	<div class="my-20 flex flex-col gap-10 lg:max-w-none">
		{#each data.articles as article}
			<!-- Single Article -->
			<Article {article} />
		{/each}
	</div>
</div>
