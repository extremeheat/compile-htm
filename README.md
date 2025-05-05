# compile-htm
[![NPM version](https://img.shields.io/npm/v/compile-htm.svg)](http://npmjs.com/package/compile-htm)
[![Build Status](https://github.com/extremeheat/compile-htm/actions/workflows/ci.yml/badge.svg)](https://github.com/extremeheat/compile-htm/actions/workflows/)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/extremeheat/compile-htm)

Compile JavaScript code with JSX htm template literals (html``) to standard javascript with builder functions over CLI.

This tool works with React, Preact or any other library using JSX syntax.

This uses [`babel-plugin-htm`](https://github.com/developit/htm/tree/master/packages/babel-plugin-htm).

## Instal
```
npm install -g compile-htm
```

or access directly via npx:
```
npx compile-htm --help
```

## Usage

```
compile-htm - v1.0.0
Compile htm template literal code to standard JavaScript builders

Positionals:
  inputFile     Input file path

Options:
  --builder     Builder function to use  (default: h)
  --output      Output file to use  (default: null)

Usage:
  compile-htm <inputFile> [--builder functionName] [--output fileName]
  compile-htm input.js                        # Compile input.js into input.compiled.js
```

## Example

```js
html`<span>I use <div>Template</div><p with="properties">Strings!</p><${Box}><${Cat} /></${Box}></span>`
```

will be converted into

```js
h("span", null, "I use ", h("div", null, "Template"), h("p", {
  "with": "properties"
}, "Strings!"), h(Box, null, h(Cat, null)));
```