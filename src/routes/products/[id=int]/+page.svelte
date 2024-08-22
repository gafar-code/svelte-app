<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h1>Detail product</h1>
	<img src={data.product.thumbnail} alt="" />
	<h3>{data.product.title}</h3>
	<p>{data.product.description}</p>
	<p>{data.product.price}</p>
	<p>{data.product.stock}</p>
	<p>{data.product.category}</p>
	<p>{data.product.brand}</p>
	<p>{data.product.rating}</p>
	<p>{data.product.discountPercentage}</p>
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
