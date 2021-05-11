
<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		await fetch('/api/cv.json').then((r) => r.json()); // workin
		await fetch('/api/cv').then((r) => r.json()); // not working
	});

</script>

<section>
	
</section>