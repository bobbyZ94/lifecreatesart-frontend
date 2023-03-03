<script lang="ts">
	import '../app.css'
	import Header from '../components/Header.svelte'
	import Footer from '../components/Footer.svelte'
	import ImageModal from '../components/ImageModal.svelte'
	import { shoppingCartVisible } from '../stores/shoppingCart'

	// Workaround to hide scrollbar when shop drawer opens
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

<div class="flex min-h-screen w-full flex-col items-center justify-between font-indieFlower text-xl">
	<Header />
	<slot />
	<Footer />
</div>
<ImageModal />
