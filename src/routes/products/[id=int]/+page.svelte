<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	{#await data.product}
		<title>SwelteApp - Loading ...</title>
	{:then product}
		<title>
			SwelteApp - {product.title}
		</title>
		{#if product.description}
			<meta name="description" content={product.description} />
		{/if}
	{/await}
</svelte:head>

<div>
	<h1>Detail product</h1>
	{#await data.product}
		<p>Loading ...</p>
	{:then product}
		<img src={product.thumbnail} alt="" />
		<h3>{product.title}</h3>
		<p>{product.description}</p>
		<p>{product.price}</p>
		<p>{product.stock}</p>
		<p>{product.category}</p>
		<p>{product.brand}</p>
		<p>{product.rating}</p>
		<p>{product.discountPercentage}</p>
	{/await}
</div>

<style>
	div {
		background: white;
		padding: 10px;
	}
	img {
		width: 100%;
		height: 100%;
	}
</style>
