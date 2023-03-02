<script lang="ts">
	import currentImageUrl from '../stores/currentImageUrl'
</script>

<input type="checkbox" id="img-modal" class="modal-toggle" />
<label for="img-modal" class="modal cursor-pointer backdrop-brightness-50">
	<label class="modal-box relative max-w-fit p-0" for="">
		<img src={$currentImageUrl} alt="Modal" class="lg:h-[80vh]" />
	</label>
</label>
