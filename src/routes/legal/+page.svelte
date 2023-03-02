<script lang="ts">
	import serialize from '../../utils/serialize'
	import type { PageData } from './$types'
	export let data: PageData
	const legalText = { children: data.legal.text }
</script>

<div class="prose-xl flex flex-col items-center rounded bg-neutral p-5 shadow-lg">
	<h2 class="">Impressum</h2>
	<div>
		{@html serialize(legalText)}
	</div>
</div>
