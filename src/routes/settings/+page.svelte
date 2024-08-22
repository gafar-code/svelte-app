<script>
    import { goto } from '$app/navigation';
</script>

<h1>Main settings</h1>
<p>ini adalah halaman main setting berisi menu setting</p>
<button on:click={() => goto('/settings/general')}>General</button>
<button on:click={() => goto('/settings/profile')}>Profile</button>