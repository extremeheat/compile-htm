#!/usr/bin/env node
const { transformFileSync } = require('@babel/core')
const fs = require('fs')
const args = require('basic-args')({
  name: 'compile-htm',
  version: '1.0.0',
  description: 'Compile htm template literal code to standard JavaScript builders',
  options: {
    builder: { type: String, description: 'Builder function to use', default: 'h' },
    output: { type: String, description: 'Output file to use', default: null }
  },
  positionals: [
    { name: 'inputFile', type: String, description: 'Input file path' }
  ],
  examples: [
    'compile-htm <inputFile> [--builder functionName] [--output fileName]',
    'compile-htm input.js\tCompile input.js into input.compiled.js'
  ]
})
const inputFile = args.inputFile
const outputFile = args.output || inputFile.replace(/\.js$/, '.compiled.js')

try {
  const result = transformFileSync(inputFile, {
    plugins: [
      ['babel-plugin-htm', {
        pragma: 'h', // Customize as needed
        tag: 'html'
      }]
    ]
  })
  fs.writeFileSync(outputFile, result.code)
  console.log(`Compiled ${inputFile} to ${outputFile}`)
} catch (err) {
  console.error('Error:', err.message)
  process.exit(1)
}
