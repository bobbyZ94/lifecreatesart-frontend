<script lang="ts">
	import { fly, fade } from 'svelte/transition'
	import Article from '../../components/Article.svelte'
	import ShoppingCart from '../../components/ShoppingCart.svelte'
	import Confirmation from '../../components/Confirmation.svelte'
	import Payment from '../../components/Payment.svelte'
	import Shipping from '../../components/Shipping.svelte'
	import { shoppingCartVisible } from '../../stores/shoppingCart'
	import { IconX } from '@tabler/icons-svelte'
	import type { PageData } from './$types'
	export let data: PageData
	const { articles } = data
	$: currentStep = 1
	$: console.log('STEP', currentStep)

	// Workaround to hide scrollbar when drawer opens
	function bodyClass(className: string) {
		return function (node: HTMLElement, toggled: boolean) {
			node.classList.toggle(className, toggled)

			return {
				update(toggled: boolean) {
					node.classList.toggle(className, toggled)
				},
				destroy() {
					node.classList.remove(className)
				},
			}
		}
	}
	const classOverflowHidden = bodyClass('overflow-hidden')
	const classCustomScrollbarThumb = bodyClass('scrollbar-thumb-neutral')
	const classCustomScrollbarTrack = bodyClass('scrollbar-track-base-100')
	const classCustomScrollbarWidth = bodyClass('scrollbar-thin')
</script>

<svelte:body
	use:classOverflowHidden={$shoppingCartVisible}
	use:classCustomScrollbarThumb={$shoppingCartVisible ? false : true}
	use:classCustomScrollbarTrack={$shoppingCartVisible ? false : true}
	use:classCustomScrollbarWidth={$shoppingCartVisible ? false : true}
/>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex h-full w-full flex-col items-center justify-center">
	<!-- Drawer -->
	{#if $shoppingCartVisible}
		<div
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 200, delay: 300 }}
			on:click|self={() => ($shoppingCartVisible = false)}
			class="fixed top-0 left-0 z-20 h-full min-h-screen w-screen overflow-y-scroll bg-black bg-opacity-40 scrollbar-thin scrollbar-track-base-100 scrollbar-thumb-neutral"
		>
			<div
				in:fly={{ duration: 300, delay: 300, x: 300 }}
				out:fly={{ duration: 300, x: 500 }}
				class="absolute top-0 right-0 flex min-h-full w-full flex-col items-center bg-base-100 p-5 font-sans text-base md:text-lg lg:w-2/3 2xl:w-1/2"
			>
				<!-- Drawer Header -->
				<div class="flex w-full">
					<div class="flex flex-grow justify-center">
						<ul class="steps">
							<li class={`step ${currentStep >= 1 && 'step-secondary'}`}><span class="hidden md:inline">Summary</span></li>
							<li class={`step ${currentStep >= 2 && 'step-secondary'}`}><span class="hidden md:inline">Shipping</span></li>
							<li class={`step ${currentStep >= 3 && 'step-secondary'}`}><span class="hidden md:inline">Payment</span></li>
							<li class={`step ${currentStep >= 4 && 'step-secondary'}`}><span class="hidden md:inline">Confirmation</span></li>
						</ul>
					</div>
					<button on:click={() => ($shoppingCartVisible = false)} class="self-start"><IconX size={30} /></button>
				</div>
				<div class="mt-10 flex h-full w-full flex-grow flex-col items-center justify-between">
					<!-- Drawer Content -->
					{#if currentStep === 1}
						<ShoppingCart {articles} />
					{:else if currentStep === 2}
						<Shipping />
					{:else if currentStep === 3}
						<Payment />
					{:else}
						<Confirmation />
					{/if}
					<!-- Drawe Footer -->
					<div class="flex w-full justify-around px-10 pb-5">
						{#if currentStep !== 4}
							{#if currentStep === 1}
								<button class="btn" disabled>&lt Back</button>
							{:else}
								<button on:click={() => (currentStep -= 1)} class="btn">&lt Back</button>
							{/if}
							<button on:click={() => (currentStep += 1)} class="btn">Next &gt</button>
						{:else}
							<button
								on:click={() => {
									$shoppingCartVisible = false
									currentStep = 1
								}}
								class="btn">Continue Shopping ..</button
							>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}
	<div class="my-14 flex flex-col gap-14 overflow-hidden lg:my-20 xl:gap-28">
		{#each articles as article}
			<Article {article} />
		{/each}
	</div>
</div>
