<script>
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
	import Column from '../components/column.svelte';
</script>

<div class="container">
	<Nav />
	<Column isLeft={true} />
	<main>
		<slot />
	</main>
	<Column isLeft={false} />
	<Footer />
</div>

<style>
	:global(*) {
		/* this will apply to <body> */
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
		/* max-width: 100%; */
		overflow-x: hidden;
		scroll-behavior: smooth;
	}
	:global(:root) {
		--primary-red: #f07167;
		--primary-blue: #6883ba;
		--red-rgb: 240, 113, 103;
		--blue-rgb: 104, 131, 186;
		--offwhite-side: #eeeeef;
		--offwhite-page: #e6e7e9;
		--transition-standard: 150ms ease-in-out;
	}
</style>
