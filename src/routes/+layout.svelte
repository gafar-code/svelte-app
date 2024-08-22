<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

{#if data.user}
	<p>Logged in as {data.user.name}</p>
{/if}

<div style:background="#f092" style:padding="10px">
	<h1>Root Layout</h1>
	<nav style:padding="10px">
		<a href="/">Home</a>
		<a href="/products">Products</a>
	</nav>
	<slot />
</div>
