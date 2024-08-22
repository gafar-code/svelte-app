<script>
	import { goto, afterNavigate, beforeNavigate } from "$app/navigation";
	
	afterNavigate((n) => {
		console.log(n)
	})

	beforeNavigate((n) => {
		console.log(n)
	})
</script>
<h1>Welcome to SvelteKit</h1>

<button on:click={() => goto('/about')}>Goto About</button>
<button on:click={() => goto('/product/123')}>Goto Product</button>
<button on:click={() => goto('/file/123/a/b/c/d')}>Goto file edit</button>