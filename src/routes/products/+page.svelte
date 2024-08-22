<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: products = data.products;
</script>

<div>
	<h1>Halaman product</h1>

	<ul>
		{#each products as product}
			<li>
				<img src={product.thumbnail} alt="" />
				<h3><a href="/products/{product.id}">{product.title}</a></h3>
				<p>{product.description}</p>
				<p>{product.price}</p>
				<p>{product.stock}</p>
				<p>{product.category}</p>
				<p>{product.brand}</p>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
	}
	img {
		width: 100%;
	}
	div {
		background: white;
		padding: 10px;
	}
</style>
