# Harmony

Harmony is a React component library by Evmera.

It provides reusable UI components for building consistent interfaces across Evmera products.

## Installation

Install Harmony from npm:

```bash
npm install @evmera/harmony
```

## Usage

Import the Harmony stylesheet:

```js
import '@evmera/harmony/styles.css'
```

Import components directly from the package:

```jsx
import { Button } from '@evmera/harmony'

export default function App() {
  return <Button>Continue</Button>
}
```

## Font

Harmony includes Google Sans.

To use Google Sans as the application font, set the global body font variable:

```css
:root {
  --global-font-body: 'Google Sans', sans-serif;
}
```

## Development

Install dependencies:

```bash
npm install
```

Start Storybook:

```bash
npm run storybook
```

Build the library:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Storybook

Harmony uses Storybook for component development and documentation.

```bash
npm run storybook
```

Storybook will be available at:

```text
http://localhost:6006
```

## Package

Harmony is published on npm as:

```text
@evmera/harmony
```

Install the latest version with:

```bash
npm install @evmera/harmony
```

## License

Copyright © Evmera.
