<script>
	import { getStorage, ref, getDownloadURL } from 'firebase/storage';

	let imageURL = '';
	export let imageName;
	let size = 200;

	const storage = getStorage();

	let promise = getImage();

	async function getImage() {
		const res = await getDownloadURL(ref(storage, `Pictures/${imageName}.jpg`));
		return res;
	}
</script>

{#await promise then url}
	<img src={url} alt={imageName} style="--size: {size}px" />
{/await}

<style>
	img {
		height: var(--size);
	}
</style>
