<script>
	import { fadeIn, fadeOut } from '../actions/pageFade';
	import { disableScrollHandling } from '$app/navigation';
	import Welcome from '../components/pages/startPage/Welcome.svelte';
	import Info from '../components/pages/startPage/Info.svelte';
	import PreviousWork from '../components/pages/startPage/PreviousWork.svelte';

	// Disable jumping when clicking on navlinks
	let scrollY;
	import { onMount } from 'svelte';
	onMount(async () => {
		disableScrollHandling();
		scrollY = 0;
	});
</script>

<svelte:window bind:scrollY />

<main in:fadeIn out:fadeOut on:introend={() => (scrollY = 0)}>
	<section>
		<Welcome />
	</section>
	<section class="special">
		<Info />
	</section>
	<section>
		<PreviousWork />
	</section>
	<section>
		<div class="testimonials">
			<h1>Testimonials</h1>
		</div>
	</section>
	<section>
		<div class="about-us">
			<h1>About us</h1>
		</div>
	</section>
	<section>
		<div class="method-and-strategy">
			<h1>Method</h1>
		</div>
	</section>
	<section>
		<div class="latest-news">
			<h1>Latest news</h1>
		</div>
	</section>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		justify-self: center;
		height: 90vh;
		width: 90%;
	}
	.special {
		height: 30vh;
	}
</style>
