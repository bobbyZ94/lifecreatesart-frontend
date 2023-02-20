<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar, AppShell, menu } from '@skeletonlabs/skeleton';
	import {
		IconMenu2,
		IconShoppingBag,
		IconShoppingCart,
		IconBrandInstagram,
		IconMail
	} from '@tabler/icons-svelte';
	import { page } from '$app/stores';
	import Page from './legal/+page.svelte';
	$: console.log($page.url.pathname);
</script>

<AppShell>
	<!-- Header Navbar -->
	<svelte:fragment slot="pageHeader">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-start"
			slotTrail="place-self-end"
			class="shadow"
		>
			<svelte:fragment slot="lead">
				<div class="relative">
					<button use:menu={{ menu: 'hamburger' }}>
						<IconMenu2 size={30} />
					</button>
					<div class="p-4 shadow-xl list-nav card" data-menu="hamburger">
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/shop">Shop</a></li>
							<li><a href="/showcase">Art Showcase</a></li>
							<li><a href="/blog">My Blog</a></li>
						</ul>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if $page.url.pathname === '/'}
					<a href="/shop">
						<button>
							<IconShoppingBag size={30} />
						</button>
					</a>
				{:else}
					<button>
						<IconShoppingCart size={30} />
					</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- Footer -->
	<svelte:fragment slot="footer">
		<div
			class="flex flex-col items-center justify-center gap-5 py-8 shadow bg-surface-100-800-token"
		>
			<a
				href="https://www.instagram.com/lifecreatesart"
				class="!no-underline !text-black flex items-center gap-2"
			>
				<IconBrandInstagram size={30} stroke={1} />Follow me on Instagram
			</a>
			<a class="!no-underline !text-black" href="mailto:info@lifecreates.art"
				><IconMail size={23} stroke={1} class="inline mr-2" /><span>info@lifecreates.art</span></a
			>
			<div class="">
				<a
					class="mr-5 !no-underline !text-black hover:border-black border-b border-transparent transition-all duration-200 ease-in-out"
					href="/impressum"
				>
					Impressum
				</a>
				<a
					class="!no-underline !text-black hover:border-black border-b border-transparent transition-all duration-200 ease-in-out"
					href="/legal">Legal</a
				>
			</div>
			<div>Lifecreatesart © {new Date().getFullYear()}</div>
		</div>
	</svelte:fragment>
</AppShell>
