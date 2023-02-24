<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import ShoppingCart from '../components/ShoppingCart.svelte';

	import type { LayoutData } from './$types';

	// Setup header and floatui for skeletondev popup elements
	import { AppShell, storePopup, Drawer } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	export let data: LayoutData;
</script>

<Drawer bgDrawer="bg-lifecreatesart-background" position="right" width="max-w-5xl w-full" rounded="rounded">
	<ShoppingCart articles={data.articles} />
</Drawer>

<AppShell class="bg-lifecreatesart-background font-indieFlower text-xl">
	<!-- Header -->
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- Footer -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
