<script>
	import { page } from '$app/stores';
</script>

<div style:background="green" style:padding="10px">
	<h1>Root Layout</h1>
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
