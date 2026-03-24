import * as Plot from '@observablehq/plot';

/**
 * A Svelte action that renders an Observable Plot visualization.
 *
 * @param {HTMLDivElement} node
 * @param {import('@observablehq/plot').PlotOptions} opts
 */
export function ObservablePlot(node, opts) {
	/** @type {(((SVGSVGElement | HTMLElement) & Plot.Plot) | undefined)} */
	let viz;

	/**
	 * Removes any existing visualization before rendering the next one.
	 *
	 * @param {import('@observablehq/plot').PlotOptions} plotOptions
	 */
	function render(plotOptions) {
		if (viz) viz.remove();
		viz = Plot.plot(plotOptions);
		node.append(viz);
	}

	render(opts);

	return {
		/**
		 * Re-render the visualization when the plot options change.
		 *
		 * @param {import('@observablehq/plot').PlotOptions} newOptions
		 */
		update(newOptions) {
			render(newOptions);
		},

		destroy() {
			if (viz) viz.remove();
		}
	};
}
