<script lang="ts">
	import serialize from '../utils/serialize.js';
	import type { PageData } from './$types';
	export let data: PageData;
	const aboutText = { children: data.about.text };
</script>

<div class="flex items-center justify-center w-full h-full">
	<div class="max-w-4xl my-20">
		<img src="/images/logo3.jpg" alt="logo" class="object-cover" />
		<div class="break-words px-7 py-1 mt-20 tracking-widest bg-lifecreatesart-foreground shadow-lg mx-5 prose prose-lg max-w-none font-bold prose-a:font-bold prose-a:text-primary-900 2xl:prose-xl">
			{@html serialize(aboutText)}
		</div>
	</div>
</div>
