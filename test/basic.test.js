/* eslint-env mocha */
const assert = require('assert')
const fs = require('fs')
const cp = require('child_process')
const crypto = require('crypto')

const testSubject = __dirname + '/mock/testSubject.js' // eslint-disable-line

describe('basic cli usage', () => {
  it('works', () => {
    cp.execSync(`npx compile-htm ${testSubject}`)
    // Hash the output file to check if it was created
    const outputFile = testSubject.replace(/\.js$/, '.compiled.js')
    const hash = crypto.createHash('sha256')
    const fileBuffer = fs.readFileSync(outputFile)
    hash.update(fileBuffer)
    const hashValue = hash.digest('hex')
    // Check if the hash matches the expected value
    console.log(hashValue)
    assert.strictEqual(hashValue, '131c22b36f4ff01e9da3b4d724d99b67e605810c60ff5b6518df8ec2982c64e3')
  })
})
