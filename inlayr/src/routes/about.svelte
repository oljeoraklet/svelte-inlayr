<script>
	import { fadeIn, fadeOut } from '../actions/pageFade';
	import { disableScrollHandling } from '$app/navigation';
	import inView from '../components/inViewTest.svelte';

	let scrollY;

	let textH = 'Hello';

	// Disable jumping when clicking on navlinks
	import { onMount } from 'svelte';
	import InViewTest from '../components/inViewTest.svelte';

	onMount(async () => {
		disableScrollHandling();
		scrollY = 0;
	});
	let count = 1;
</script>

<svelte:window bind:scrollY />

<main in:fadeIn out:fadeOut>
	<div class="container">
		<h1>This is about</h1>
		<h2>{count}</h2>
		<button on:click={() => (count += 1)}>Click me!</button>
		<a href="/">Go back</a>
	</div>
	<div class="container">
		<h1>
			Hey inView {textH}
		</h1>
		<InViewTest />
	</div>
</main>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		flex-direction: column;
	}
</style>
