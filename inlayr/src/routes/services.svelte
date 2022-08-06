<script>
	import { fadeIn, fadeOut } from '../actions/pageFade';
</script>

<main in:fadeIn out:fadeOut>
	<div class="container">
		<h1>Services</h1>
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
