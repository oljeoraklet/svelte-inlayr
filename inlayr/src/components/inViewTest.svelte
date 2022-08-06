<script>
	import { fadeIn, fadeOut } from '../actions/pageFade';
	import { inview } from 'svelte-inview';

	let isInView;
	const options = {
		rootMargin: '-250px'
		// unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => {
		isInView = detail.inView;
		console.log(detail.inView);
	};
	const handleLeave = ({ detail }) => {
		isInView = !isInView;
		console.log(detail.inView);
	};
</script>

<div use:inview={options} on:enter={handleChange} on:leave={handleLeave}>
	{#if isInView}
		<img in:fadeIn src="../../static/favicon.png" alt="test" />
	{:else}
		<div class="placeholder" />
	{/if}
</div>
