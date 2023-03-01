<script lang="ts">
	import { IconBrandInstagram, IconMail } from '@tabler/icons-svelte';
</script>

<div
	class="flex w-full flex-col items-center justify-center gap-5 rounded-t-[3rem] bg-neutral py-8"
>
	<a
		href="https://www.instagram.com/lifecreatesart"
		class="flex items-center gap-2 !text-base-content !no-underline"
	>
		<IconBrandInstagram size={30} stroke={1} />
		Follow me on Instagram
	</a>
	<a class="!no-underline" href="mailto:info@lifecreates.art"
		><IconMail size={23} stroke={1} class="mr-2 inline" /><span>info@lifecreates.art</span></a
	>
	<div class="">
		<a
			class="mr-5 border-b border-transparent !no-underline transition-all duration-200 ease-in-out hover:border-base-content"
			href="/impressum"
		>
			Impressum
		</a>
		<a
			class="border-b border-transparent !no-underline transition-all duration-200 ease-in-out hover:border-base-content"
			href="/legal">Legal</a
		>
	</div>
	<div>Lifecreatesart © {new Date().getFullYear()}</div>
</div>
