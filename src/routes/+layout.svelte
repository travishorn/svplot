<script>
	let { children } = $props();
</script>

<svelte:head>
	<title>svplot</title>
</svelte:head>

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		max-width: 960px;
		margin: 0 auto;
		padding: 10px;
	}
</style>
