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
</script>

<ObservablePlot {options} />
