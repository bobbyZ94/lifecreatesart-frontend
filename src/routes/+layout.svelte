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
	$: console.log($page.url.pathname);
</script>

<AppShell class="bg-lifecreatesart-background">
	<!-- Header Navbar -->
	<svelte:fragment slot="header">
		<AppBar class="shadow-lg !bg-lifecreatesart-foreground px-8 h-16">
			<svelte:fragment slot="lead">
				<div class="relative ">
					<!-- Hamburger -->
					<button use:menu={{ menu: 'hamburger' }} class="md:hidden">
						<IconMenu2 size={30} />
					</button>
					<div
						class="p-4 shadow-xl list-nav card bg-lifecreatesart-background"
						data-menu="hamburger"
					>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/shop">Shop</a></li>
							<li><a href="/showcase">Art Showcase</a></li>
							<li><a href="/blog">My Blog</a></li>
						</ul>
					</div>
					<!-- Menu -->
					<div class="hidden gap-8 font-semibold tracking-wider uppercase md:flex">
						<a
							href="/"
							class="transition-all duration-200 ease-in-out border-b border-transparent hover:border-black"
							>Home</a
						>
						<a
							href="/shop"
							class="transition-all duration-200 ease-in-out border-b border-transparent hover:border-black"
							>Art Shop</a
						>
						<a
							href="/showcase"
							class="transition-all duration-200 ease-in-out border-b border-transparent hover:border-black"
							>Art Showcase</a
						>
						<a
							href="/blog"
							class="transition-all duration-200 ease-in-out border-b border-transparent hover:border-black"
							>Blog</a
						>
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
	<svelte:fragment slot="pageFooter">
		<div
			class="flex flex-col items-center justify-center gap-5 py-8 shadow !bg-lifecreatesart-foreground"
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
