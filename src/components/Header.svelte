<script lang="ts">
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import { IconMenu2, IconShoppingBag, IconShoppingCart } from '@tabler/icons-svelte';
	import { page } from '$app/stores';

	// Hamburger floating ui settings
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	let hamburgerSettings: PopupSettings = {
		event: 'click',
		target: 'hamburgerPopup'
	};
</script>

<AppBar class="shadow-lg !bg-lifecreatesart-foreground px-8 h-16">
	<svelte:fragment slot="lead">
		<div class="relative ">
			<!-- Hamburger -->
			<button use:popup={hamburgerSettings} class="md:hidden">
				<IconMenu2 size={30} />
			</button>
			<div class="p-4 font-semibold tracking-wider uppercase shadow-xl list-nav bg-lifecreatesart-foreground" data-popup="hamburgerPopup">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/shop">Shop</a></li>
					<li><a href="/showcase">Art Showcase</a></li>
					<li><a href="/blog">My Blog</a></li>
				</ul>
			</div>
			<!-- Menu -->
			<div class="hidden gap-8 font-semibold tracking-wider uppercase md:flex">
				<a href="/" class="transition-all duration-200 ease-in-out border-b border-transparent hover:border-black">Home</a>
				<a href="/shop" class="transition-all duration-200 ease-in-out border-b border-transparent hover:border-black">Art Shop</a>
				<a href="/showcase" class="transition-all duration-200 ease-in-out border-b border-transparent hover:border-black">Art Showcase</a>
				<a href="/blog" class="transition-all duration-200 ease-in-out border-b border-transparent hover:border-black">Blog</a>
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
