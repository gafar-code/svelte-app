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
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/about">About page</a><br>
<a href="/product/123">Product page</a><br><br>
<a href="/file/123/a/b/c/d">File Edit page</a><br><br>

<button on:click={() => goto('/about')}>Goto About</button>
<button on:click={() => goto('/product/123')}>Goto Product</button>
<button on:click={() => goto('/file/123/a/b/c/d')}>Goto file edit</button>