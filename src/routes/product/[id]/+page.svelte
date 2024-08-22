<script>
    import { page } from '$app/stores';

    $:console.log($page.params.id)
</script>

<h1>Product page</h1>
<p>product id: {$page.params.id}</p>

<a href="/product/124">Another product</a>