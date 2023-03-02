<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
	const { settings } = data
</script>

<div class="prose-xl flex flex-col items-center rounded bg-neutral p-5 shadow-lg">
	<h2 class="">Impressum</h2>
	<div>{settings.company}</div>
	<div>{settings.owner}</div>
	<div>{settings.street}</div>
	<div>{settings.city}</div>
	<div>{settings.email}</div>
</div>
