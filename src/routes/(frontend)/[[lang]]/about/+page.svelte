<script>
	import { goto } from '$app/navigation';
    import { page } from '$app/stores';
</script>

<h1>About page</h1>
<p>params: {JSON.stringify($page.params)}</p>
<button on:click={() => goto('/')}>Back to home</button>

