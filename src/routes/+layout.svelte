<script>
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname.startsWith('/settings')}
	<slot />
{:else}
	<div style:background="green" style:padding="10px">
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/settings">Setting</a>
			<a href="/product/123">Product</a>
			<a href="/file/123/a/b/c/d">File</a>
		</nav>
		<slot />

		<footer>All right reserved</footer>
	</div>
{/if}
