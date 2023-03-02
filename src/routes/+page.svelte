<script lang="ts">
	import serialize from '../utils/serialize.js'
	import type { PageData } from './$types'
	export let data: PageData
	const aboutText = { children: data.about.text }
	const arr = [1, 2, 3]
</script>

<div class="my-20 max-w-4xl">
	<img src="/images/logo.jpg" alt="logo" class="object-cover" />
	<div class="m:mx-10 relative mt-[5rem] shadow-lg backdrop-contrast-[1.05] xl:mx-0 xl:mt-[15rem] xl:mb-[10rem] xl:shadow-none xl:backdrop-contrast-100">
		<img src="/images/easel.webp" alt="easel" class="hidden object-contain xl:block" />
		<div
			class="prose-a:text-primary-900 prose-lg prose mt-16 mb-10 max-w-none transform break-words rounded-xl px-7 py-1 
      font-bold tracking-widest xl:prose-2xl prose-a:inline-block prose-a:font-bold prose-a:duration-200 prose-a:ease-in-out hover:prose-a:scale-105 
      xl:absolute xl:top-[20rem] xl:left-[9rem] xl:m-0 xl:max-w-2xl xl:rotate-[2.5deg]"
		>
			{@html serialize(aboutText)}
		</div>
	</div>
</div>
