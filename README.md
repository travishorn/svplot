# svplot

Reusable Svelte 5 component for rendering [Observable Plot](https://observablehq.com/plot) charts.

## Install

```sh
npm install svplot @observablehq/plot
```

`@observablehq/plot` is a peer dependency because you'll typically want to
create marks and plot options directly.

## Usage

```svelte
<script>
	import * as Plot from '@observablehq/plot';
	import { ObservablePlot } from 'svplot';

	const data = [
		{ category: 'East', value: 1 },
		{ category: 'North', value: 6 },
		{ category: 'South', value: 8 },
		{ category: 'West', value: 5 }
	];

	const options = {
		grid: true,
		marks: [
			Plot.barY(data, {
				x: 'category',
				y: 'value',
				fill: 'category'
			})
		]
	};
</script>

<ObservablePlot {options} />
```

## API

### `ObservablePlot`

Props:

- `options`: `Plot.PlotOptions` used to create the chart.
- Any additional `div` attributes are forwarded to the container element.

When `options` changes, the component disposes the current plot and renders a new one.

## Development

Clone the repository:

```bash
git clone https://github.com/travishorn/svplot
```

Change into the directory:

```bash
cd svplot
```

Install dependencies:

```bash
npm install
```

`src/lib` contains the published library code. `src/routes` contains a demo app.

Run the development server:

```bash
npm run dev
```

You can see the demo in your browser at http://localhost:5173.

Check the integrity:

```bash
npm run check
```

## License

The MIT License

Copyright 2026 Travis horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
