<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>
		SwelteApp{$page.data.title ? ` - ${$page.data.title}` : ''}
	</title>
	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

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
