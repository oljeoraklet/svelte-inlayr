<script>
	import { fadeIn, fadeOut } from '../../../actions/pageFade';
</script>

<main>
	<div class="title">
		<h1>Just some previous work</h1>
	</div>
	<div class="card-container">
		<div class="left">
			<div class="card">
				<img in:fadeIn out:fadeOut src="../static/images/PreviousWork/Mobler.png" alt="" />
				<div class="slider-container">
					<div class="slider left-side">
						<p>Möbler AB</p>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="card">
				<div class="slider-container right-side">
					<div class="slider">
						<p>Avanza</p>
					</div>
				</div>
				<img src="../static/images/PreviousWork/Avanza.png" alt="" />
			</div>

			<div class="card">
				<div class="slider-container right-side">
					<div class="slider">
						<p>Café Random</p>
					</div>
				</div>
				<img src="../static/images/PreviousWork/CafeRandom.png" alt="" />
			</div>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 95%;
		overflow-x: visible;
	}
	.title {
		width: 100%;
		height: 5%;
		text-align: right;
		padding-top: 1rem;
		font-size: 1.5rem;
	}
	.card-container {
		display: flex;
		width: 100%;
		flex: 1;
		align-items: center;
		justify-content: center;
		overflow-y: hidden;
	}
	.right,
	.left {
		display: flex;
		justify-content: center;
		flex: 1;
		height: 100%;
		overflow-x: visible;
	}
	.right {
		flex-direction: column;
	}
	.slider-container {
		position: relative;
		width: 12rem;
		height: 5rem;
	}
	.right-side {
		display: flex;
		justify-content: flex-end;
	}
	.slider {
		position: absolute;
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 5rem;
		width: 9rem;
		background-color: var(--primary-red);
		transition: var(--transition-standard);
	}
	.left-side {
		background-color: var(--primary-blue);
	}
	.slider:hover {
		width: 12rem;
	}
	.slider:hover > p {
		font-size: 1.5rem;
	}
	.left img {
		height: 75%;
	}
	p {
		color: white;
		font-weight: 700;
		transition: var(--transition-standard);
	}
	.card {
		display: flex;
		width: 100%;
		height: 100%;
		overflow-x: visible;
		justify-content: center;
		align-items: center;
		margin-left: 0;
	}
</style>
