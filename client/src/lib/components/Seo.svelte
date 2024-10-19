<script type="ts">
	import { page } from '$app/stores';
	const brand = 'Freedom Cash';
	export let title = brand;
	export let description =
		'FreedomCash Helps Those Who Help Each Other Into Freedom, Fairness, Love and Peace.';
	export let image =
		'https://github.com/user-attachments/assets/d0f5d5f2-1895-4991-84c7-37d90dbf07cc';
	export let url = `https://${$page.url.host}${$page.url.pathname}`;
</script>

<svelte:head>
	<title>{title} - {brand}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${title} - ${brand}`} />
	<meta property="og:site_name" content={brand} />
	<meta property="og:description" content={description} />
	<meta property="og:image" name="og:image" content={image} />
	<meta name="og:url" content={url} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${title} - ${brand}`} />
	<meta name="twitter:description" content={description} />
</svelte:head>
