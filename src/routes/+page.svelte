<script lang="ts">
	import { goto, afterNavigate, beforeNavigate } from '$app/navigation';

	afterNavigate((n) => {
		console.log(n);
	});

	beforeNavigate((n) => {
		console.log(n);
	});
</script>

<h1>Halaman utama</h1>
