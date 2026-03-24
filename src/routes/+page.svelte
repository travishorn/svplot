<script>
	import * as Plot from '@observablehq/plot';
	import { ObservablePlot } from '$lib';

	let data = $state([
		{ category: 'East', value: 1 },
		{ category: 'North', value: 6 },
		{ category: 'South', value: 8 },
		{ category: 'West', value: 5 }
	]);

	let options = $derived({
		grid: true,
		marks: [
			Plot.barY(data, {
				x: 'category',
				y: 'value',
				fill: 'category'
			})
		]
	});

	setInterval(() => {
		const i = Math.floor(Math.random() * data.length); // Choose a random bar
		data[i] = { ...data[i], value: Math.random() * 10 }; // Set a random value
		data = [...data]; // Trigger reactivity
	}, 1000);
</script>

<div use:ObservablePlot={options} role="img"></div>
