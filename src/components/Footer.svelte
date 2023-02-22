<script lang="ts">
	import { IconBrandInstagram, IconMail } from '@tabler/icons-svelte';
</script>

<div class="flex flex-col items-center justify-center gap-5 py-8 shadow !bg-lifecreatesart-foreground">
	<a href="https://www.instagram.com/lifecreatesart" class="!no-underline !text-black flex items-center gap-2">
		<IconBrandInstagram size={30} stroke={1} />
		Follow me on Instagram
	</a>
	<a class="!no-underline !text-black" href="mailto:info@lifecreates.art"><IconMail size={23} stroke={1} class="inline mr-2" /><span>info@lifecreates.art</span></a>
	<div class="">
		<a class="mr-5 !no-underline !text-black hover:border-black border-b border-transparent transition-all duration-200 ease-in-out" href="/impressum"> Impressum </a>
		<a class="!no-underline !text-black hover:border-black border-b border-transparent transition-all duration-200 ease-in-out" href="/legal">Legal</a>
	</div>
	<div>Lifecreatesart © {new Date().getFullYear()}</div>
</div>
