<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex h-full w-full flex-col items-center font-indieFlower text-xl">
	<Header />
	<div class="max-w-4xl">
		<slot />
	</div>
	<Footer />
</div>
