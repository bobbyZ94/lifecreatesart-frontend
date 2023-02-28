<script lang ts>
	import { IconMenu2, IconShoppingBag, IconShoppingCart } from '@tabler/icons-svelte';
	import { page } from '$app/stores';
</script>

<div class="navbar rounded-b-[2rem] bg-neutral px-8 pt-3 pb-0 font-bold shadow-lg">
	<!-- Navbar Left Side -->
	<div class="navbar-start w-3/4">
		<button class="md:hidden">
			<IconMenu2 size={30} />
		</button>
		<div class="hidden gap-8 font-semibold uppercase tracking-wider md:flex">
			<a
				href="/"
				class="border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-neutral-content"
				>Home</a
			>
			<a
				href="/shop"
				class="border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-neutral-content"
				>Art Shop</a
			>
			<a
				href="/showcase"
				class="border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-neutral-content"
				>Art Showcase</a
			>
			<a
				href="/blog"
				class="border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-neutral-content"
				>Blog</a
			>
		</div>
	</div>
	<!-- Navbar Right Side -->
	<div class="navbar-end w-1/4">
		<div class="flex h-12 items-center">
			{#if $page.url.pathname === '/shop'}
				<button>
					<IconShoppingCart size={30} />
				</button>
			{:else}
				<a href="/shop" class="">
					<button>
						<IconShoppingBag size={30} />
					</button>
				</a>
			{/if}
		</div>
	</div>
</div>
