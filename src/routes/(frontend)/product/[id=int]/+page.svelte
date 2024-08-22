<script>
    import { page } from '$app/stores';
	import ProductHeader from './ProductHeader.svelte';

    $:console.log($page.params.id)
</script>

<ProductHeader />
<p>product id: {$page.params.id}</p>

<a href="/product/124">Another product</a>