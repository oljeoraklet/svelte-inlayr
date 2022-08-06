<script>
	let scrollY;
	let innerHeight;
	export let isLeft = false;
	let isSticky = false;

	$: {
		isSticky = scrollY > innerHeight;
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />
{#if isLeft}
	<div class:stickyLeft={isSticky} class="column">
		<div class="containercontainer">
			<div class="container">
				<p>Say hi! - hello@inlayr.se</p>
			</div>
		</div>
	</div>
{:else if !isLeft}
	<div class="sticky column" />
{/if}

<style>
	.column {
		height: 200vh;
		width: 5vw;
		background-color: var(--offwhite-side);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
		position: absolute;
	}
	.containercontainer {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	.container {
		/* transform-origin: 0 0; */
		position: absolute;
		transform: rotate(-90deg);
		width: 300px;
		top: 40%;
		text-align: center;
	}
	p {
		width: 100%;
		height: 100%;
	}
	.sticky {
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 1;
	}
	.stickyLeft {
		position: fixed;
		bottom: 0;
	}
</style>
