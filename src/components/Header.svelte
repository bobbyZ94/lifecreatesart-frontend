<script lang="ts">
	import { IconMenu2, IconShoppingBag, IconShoppingCart } from '@tabler/icons-svelte'
	import { page } from '$app/stores'
	import { shoppingCartVisible } from '../stores/shoppingCart'
	import { storeShoppingCart } from '../stores/shoppingCart'

	$: articlesInShoppingCart = $storeShoppingCart.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0)

	// Animates shopping cart icon when article added
	function iconShoppingCartClass(className: string) {
		return function (node: HTMLElement, toggled: number) {
			return {
				update() {
					node.classList.add(className)
					setTimeout(() => node.classList.remove(className), 300)
				},
				destroy() {
					node.classList.remove(className)
				},
			}
		}
	}
	const classScale110 = iconShoppingCartClass('scale-110')
</script>

<div class="navbar sticky top-0 z-10 rounded-b-[2rem] bg-neutral bg-opacity-70 px-8 pt-3 pb-0 font-bold shadow-lg backdrop-blur-md">
	<!-- Navbar Left Side -->
	<div class="navbar-start w-3/4">
		<button class="md:hidden">
			<IconMenu2 size={30} />
		</button>
		<div class="hidden gap-8 font-semibold uppercase tracking-wider md:flex">
			<a href="/" class="border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-neutral-content">Home</a>
			<a href="/shop" class="border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-neutral-content">Art Shop</a>
			<a href="/showcase" class="border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-neutral-content">Art Showcase</a>
			<a href="/blog" class="border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-neutral-content">Blog</a>
		</div>
	</div>
	<!-- Navbar Right Side -->
	<div class="navbar-end w-1/4">
		<div class="flex h-12 items-center">
			{#if $page.url.pathname === '/shop'}
				<button on:click={() => ($shoppingCartVisible ? ($shoppingCartVisible = false) : ($shoppingCartVisible = true))}>
					<div use:classScale110={articlesInShoppingCart} class="transistion-all relative duration-200 ease-in-out">
						{#if $storeShoppingCart.length > 0}
							<div
								class="absolute -top-2 left-5 z-30 flex h-5 w-5 items-center justify-center rounded-full border border-black bg-white font-sans text-sm font-bold"
							>
								{articlesInShoppingCart}
							</div>
						{/if}
						<IconShoppingCart size={30} />
					</div>
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
