<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	let level = $state('loading');

	onMount(async () => {
		try {
			const response = await axios.get('/api/battery/get');
			console.log(response);
			level = response.data;
		} catch (error) {
			console.error(error);
		}
	});
</script>

<h1>Welcome to aaaaaa</h1>

<div>
	my phnoe btarerr level: {level}%
</div>
