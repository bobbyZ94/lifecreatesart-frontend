<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import ImageModal from '../components/ImageModal.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-between font-indieFlower text-xl"
>
	<Header />
	<slot />
	<Footer />
</div>
<ImageModal />
