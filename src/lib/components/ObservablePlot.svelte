<script>
	import * as Plot from '@observablehq/plot';

	/** @typedef {import('svelte/elements').HTMLAttributes<HTMLDivElement> & { options: import('@observablehq/plot').PlotOptions }} Props */

	/** @type {Props} */
	let { options, ...restProps } = $props();

	/**
	 * A generic Svelte Action to manage an Observable Plot visualization.
	 *
	 * @param {HTMLDivElement} node - The HTML element to bind the visualization to
	 * @param {import('@observablehq/plot').PlotOptions} opts - The Observable Plot configuration
	 */
	function renderPlot(node, opts) {
		/** @type {(((SVGSVGElement | HTMLElement) & Plot.Plot) | undefined)} */
		let viz;

		/**
		 * Renders a visualization using Observable Plot. Removes any existing
		 * visualization, generates a new one, and appends it to the DOM.
		 *
		 * @param {Plot.PlotOptions} plotOptions
		 */
		function render(plotOptions) {
			if (viz) viz.remove();
			viz = Plot.plot(plotOptions);
			node.append(viz);
		}

		render(opts);

		return {
			/**
			 * Handle options updates. When options are updated, render a new
			 * visualization.
			 *
			 * @param {Plot.PlotOptions} newOptions
			 */
			update(newOptions) {
				render(newOptions);
			},

			/**
			 * Handle destroying the visualization. When destroyed, this
			 * function removes it from the DOM.
			 */
			destroy() {
				if (viz) viz.remove();
			}
		};
	}
</script>

<div use:renderPlot={options} role="img" {...restProps}></div>
