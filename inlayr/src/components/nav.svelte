<script>
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
	import { navLinks } from '../stores/navLinks';

	let currentLanguage = 'ENG';
</script>

<aside>
	<div class="nav-container">
		<div class="blackbar" />
		<nav>
			<div class="language">
				<p class:selected={currentLanguage === 'ENG'} on:click={() => (currentLanguage = 'ENG')}>
					ENG
				</p>
				<svg width="2" viewBox="0 0 2 59" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.39062 0.222168V58.8888" stroke="black" />
				</svg>
				<p class:selected={currentLanguage === 'SVE'} on:click={() => (currentLanguage = 'SVE')}>
					SVE
				</p>
			</div>
			<div class="logo-and-text">
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.9">
						<path
							d="M29.9619 0H2.03809C0.912483 0 0 0.902193 0 2.01511V29.6241C0 30.737 0.912483 31.6392 2.03809 31.6392H29.9619C31.0875 31.6392 32 30.737 32 29.6241V2.01511C32 0.902193 31.0875 0 29.9619 0Z"
							fill="url(#paint0_linear_331_104)"
						/>
						<path
							d="M4.78955 18.928H24.1106C24.9328 18.928 25.7212 19.2509 26.3026 19.8257C26.8839 20.4005 27.2105 21.1801 27.2105 21.993C27.2105 22.8058 26.8839 23.5854 26.3026 24.1602C25.7212 24.735 24.9328 25.0579 24.1106 25.0579H4.78955V18.928Z"
							fill="#6783BB"
						/>
						<path
							d="M7.88948 8.16919H27.2085V14.2971H7.88948C7.06839 14.2971 6.28084 13.975 5.69966 13.4016C5.11849 12.8281 4.79117 12.05 4.78955 11.2382V11.2382C4.78902 10.8354 4.8688 10.4364 5.02435 10.064C5.1799 9.69172 5.40815 9.35336 5.69606 9.06832C5.98397 8.78329 6.32588 8.55716 6.70225 8.40288C7.07862 8.2486 7.48205 8.16919 7.88948 8.16919V8.16919Z"
							fill="#EE7168"
						/>
					</g>
					<defs>
						<linearGradient
							id="paint0_linear_331_104"
							x1="16"
							y1="0"
							x2="16"
							y2="31.6392"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#9AB2DD" stop-opacity="0.41" />
							<stop offset="1" stop-color="#9AB2DD" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>

				<h2>inLAYR</h2>
			</div>
			<ul class="navlinks">
				{#each $navLinks as link}
					{#if link === 'Home'}
						<li class:active={path === '/'}>
							<a href="/">Home</a>
						</li>
					{:else}
						<li class:active={path === '/' + link.toLowerCase()}>
							<a href="/{link.toLowerCase()}">{link}</a>
						</li>
					{/if}
				{/each}
			</ul>
			<div class="social-media-links">
				<ul class="social-media">
					<li id="facebook">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 3C7.03832 3 3 7.03832 3 12C3 16.9617 7.03832 21 12 21C16.9617 21 21 16.9617 21 12C21 7.03832 16.9617 3 12 3ZM12 4.5C16.151 4.5 19.5 7.84898 19.5 12C19.5 15.7705 16.7338 18.871 13.1162 19.4092V14.187H15.252L15.5874 12.0176H13.1162V10.8325C13.1162 9.93177 13.4121 9.13184 14.2544 9.13184H15.6079V7.23926C15.3702 7.20701 14.867 7.13672 13.916 7.13672C11.93 7.13672 10.7666 8.18521 10.7666 10.5747V12.0176H8.72461V14.187H10.7666V19.3901C7.20664 18.803 4.5 15.7298 4.5 12C4.5 7.84898 7.84898 4.5 12 4.5Z"
								fill="black"
							/>
						</svg>
					</li>
					<li id="instagram">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.60156 3.75C5.93848 3.75 3.75 5.93555 3.75 8.60156V15.3984C3.75 18.0615 5.93555 20.25 8.60156 20.25H15.3984C18.0615 20.25 20.25 18.0645 20.25 15.3984V8.60156C20.25 5.93848 18.0645 3.75 15.3984 3.75H8.60156ZM8.60156 5.25H15.3984C17.2529 5.25 18.75 6.74707 18.75 8.60156V15.3984C18.75 17.2529 17.2529 18.75 15.3984 18.75H8.60156C6.74707 18.75 5.25 17.2529 5.25 15.3984V8.60156C5.25 6.74707 6.74707 5.25 8.60156 5.25ZM16.4297 6.89062C16.0518 6.89062 15.75 7.19238 15.75 7.57031C15.75 7.94824 16.0518 8.25 16.4297 8.25C16.8076 8.25 17.1094 7.94824 17.1094 7.57031C17.1094 7.19238 16.8076 6.89062 16.4297 6.89062ZM12 7.5C9.52441 7.5 7.5 9.52441 7.5 12C7.5 14.4756 9.52441 16.5 12 16.5C14.4756 16.5 16.5 14.4756 16.5 12C16.5 9.52441 14.4756 7.5 12 7.5ZM12 9C13.667 9 15 10.333 15 12C15 13.667 13.667 15 12 15C10.333 15 9 13.667 9 12C9 10.333 10.333 9 12 9Z"
								fill="black"
							/>
						</svg>
					</li>
					<li id="linkedin">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.48193 3C5.38768 3 4.5 3.88622 4.5 4.98047C4.5 6.07472 5.38697 6.98145 6.48047 6.98145C7.57397 6.98145 8.4624 6.07472 8.4624 4.98047C8.4624 3.88697 7.57618 3 6.48193 3ZM16.1514 8.25C14.4871 8.25 13.5349 9.12034 13.0781 9.98584H13.0298V8.48291H9.75V19.5H13.1675V14.0464C13.1675 12.6094 13.2759 11.2207 15.0542 11.2207C16.8069 11.2207 16.8325 12.8592 16.8325 14.1372V19.5H20.2456H20.25V13.4487C20.25 10.4877 19.6134 8.25 16.1514 8.25ZM4.77246 8.48291V19.5H8.19287V8.48291H4.77246Z"
								fill="black"
							/>
						</svg>
					</li>
					<li id="twitter">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 6.41894C20.3379 6.71191 19.626 6.91113 18.8789 6.99902C19.6406 6.54199 20.2266 5.81836 20.502 4.95703C19.79 5.37891 18.999 5.68652 18.1582 5.85352C17.4844 5.13574 16.5234 4.68457 15.4629 4.68457C13.4238 4.68457 11.7686 6.33984 11.7686 8.37891C11.7686 8.66895 11.8008 8.95019 11.8652 9.21973C8.79492 9.06738 6.07324 7.59668 4.25391 5.36133C3.93457 5.90625 3.75293 6.54199 3.75293 7.21875C3.75293 8.49902 4.40332 9.62988 5.39648 10.292C4.79004 10.2715 4.22168 10.1074 3.72363 9.8291C3.72363 9.84668 3.72363 9.86133 3.72363 9.87598C3.72363 11.666 4.99512 13.1602 6.68555 13.4971C6.375 13.582 6.0498 13.6289 5.71289 13.6289C5.47559 13.6289 5.24121 13.6055 5.01855 13.5615C5.4873 15.0293 6.85254 16.0957 8.4668 16.1279C7.2041 17.1182 5.61035 17.707 3.88184 17.707C3.58301 17.707 3.29004 17.6895 3 17.6543C4.63477 18.7031 6.57422 19.3154 8.66016 19.3154C15.4541 19.3154 19.1689 13.6875 19.1689 8.80664C19.1689 8.64844 19.1631 8.4873 19.1572 8.3291C19.8779 7.80762 20.5049 7.15723 21 6.41894Z"
								fill="black"
							/>
						</svg>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="buffer" />
</aside>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.buffer {
		height: 12vh;
	}
	.nav-container {
		position: fixed;
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100vw;
		height: 12vh;
		border-bottom: 1px solid black;
		z-index: 999;
	}
	.blackbar {
		height: 3vh;
		background-color: black;
		width: 100vw;
	}
	nav {
		width: 100%;
		height: 100%;
		display: flex;
		gap: 2vw;
		background-color: rgba(255, 255, 255, 0.8);
		justify-content: space-around;
		align-items: center;
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);
	}
	.language {
		display: flex;
		height: 100%;
		flex: 1;
		justify-content: space-around;
		align-items: center;
	}
	.language p {
		cursor: pointer;
		transition: var(--transition-standard);
	}
	.language p:hover {
		font-weight: 600;
	}
	.selected {
		font-weight: 600;
	}
	.logo-and-text {
		flex: 3;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logo-and-text svg {
		height: 60%;
		border-radius: 5px;
		width: auto;
		aspect-ratio: 1 / 1;
		margin-right: 1vw;
		box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.2);
	}
	.logo-and-text h2 {
		font-size: 3rem;
	}
	.navlinks {
		flex: 5;
		display: flex;
		align-items: center;
		list-style: none;
		gap: 1em;
	}
	.navlinks li {
		flex: 1;
		text-align: center;
	}
	.navlinks a {
		text-decoration: none;
		color: black;
		transition: var(--transition-standard);
	}
	a:hover {
		color: var(--primary-red);
	}
	.active a {
		color: var(--primary-blue);
		font-weight: 600;
	}
	.social-media-links {
		flex: 1;
		margin-left: 0;
	}
	.social-media {
		width: 100%;
		display: flex;
		align-items: center;
		list-style: none;
	}
	.social-media li {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		aspect-ratio: 1/1;
	}
	path {
		transition: var(--transition-standard);
	}
	.social-media li:hover path {
		fill: var(--primary-red);
	}
</style>
