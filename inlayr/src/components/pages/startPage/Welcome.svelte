<script>
	import { fly } from 'svelte/transition';
</script>

<main>
	<div class="image-container">
		<img src="../static/images/backgrounds/newLogo.png" alt="logo" />
		<div in:fly={{ y: 50, duration: 200 }} class="text-container">
			<h1>
				Want to <br /> create a <br />website <br />together?
			</h1>
			<div class="button-container">
				<div class="contact-container">
					<a href="/contact">Contact</a>
				</div>
				<div class="aboutus-container">
					<a href="/about">About us</a>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	* {
		overflow-y: hidden;
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.image-container {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.text-container {
		position: absolute;
		left: 20%;
		top: 25%;
		padding: 1rem;
	}
	.button-container {
		display: flex;
		height: 5vh;
		gap: 0.5rem;
		align-items: center;
		justify-content: space-around;
		margin-top: 1rem;
	}
	.contact-container,
	.aboutus-container {
		flex: 1;
		height: 90%;
		width: 45%;
		overflow: visible;
		transition: var(--transition-standard);
	}
	a {
		display: flex;
		height: 90%;
		background-color: transparent;
		border: 2px solid black;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		font-size: 1rem;
		transition: var(--transition-standard);
		text-decoration: none;
		color: black;
	}
	.contact-container:hover,
	.aboutus-container:hover {
		height: 100%;
		width: 50%;
	}

	.contact-container:hover > a,
	.aboutus-container:hover > a {
		border: 2px solid var(--primary-red);
		color: var(--primary-red);
		background-color: rgb(75, 72, 72, 0.1);
	}
	.image-container h1 {
		font-size: 4rem;
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
</style>
