<script lang="ts">
	import { fly, fade } from 'svelte/transition'
	import Article from '../../components/Article.svelte'
	import ShoppingCart from '../../components/ShoppingCart.svelte'
	import { shoppingCartVisible } from '../../stores/shoppingCart'
	import { IconX } from '@tabler/icons-svelte'
	import type { PageData } from './$types'
	export let data: PageData
	const { articles } = data
	let currentStep = 1
	$: console.log($shoppingCartVisible)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex h-full w-full flex-col items-center justify-center">
	<!-- Drawer -->
	{#if $shoppingCartVisible}
		<div
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 200, delay: 300 }}
			on:click|self={() => ($shoppingCartVisible = false)}
			class="fixed top-0 left-0 z-20 h-screen w-screen bg-black bg-opacity-40"
		>
			<div
				in:fly={{ duration: 300, delay: 300, x: 1000 }}
				out:fly={{ duration: 300, x: 1000 }}
				class="absolute top-0 right-0 flex h-full w-full flex-col items-center bg-base-100 p-5 font-sans text-base md:text-lg lg:w-2/3 2xl:w-1/2"
			>
				<!-- Drawer Header -->
				<div class="flex w-full">
					<div class="flex flex-grow justify-center">
						<ul class="steps">
							<li class={`step ${currentStep === 1 && 'step-secondary'}`}><span class="hidden md:inline">Summary</span></li>
							<li class={`step ${currentStep === 2 && 'step-secondary'}`}><span class="hidden md:inline">Shipping</span></li>
							<li class={`step ${currentStep === 3 && 'step-secondary'}`}><span class="hidden md:inline">Payment</span></li>
							<li class={`step ${currentStep === 4 && 'step-secondary'}`}><span class="hidden md:inline">Confirmation</span></li>
						</ul>
					</div>
					<button on:click={() => ($shoppingCartVisible = false)} class="self-start"><IconX size={30} /></button>
				</div>
				<div class="mt-10 flex h-full w-full flex-col items-center justify-between">
					<!-- Drawe Content -->
					<ShoppingCart {articles} />
					<!-- Drawe Footer -->
					<div class="flex w-full justify-between">
						<button class="btn">&lt Back</button>
						<button class="btn">Next &gt</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
	<div class="my-14 flex flex-col gap-14 lg:my-20 xl:gap-28">
		{#each articles as article}
			<Article {article} />
		{/each}
	</div>
</div>
