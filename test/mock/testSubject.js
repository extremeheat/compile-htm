import { html } from 'this-is-a-syntax-test'
function Cat () {}
function Box () {}
html`<span>I use <div>Template</div><p with="properties">Strings!</p><${Box}><${Cat} /></${Box}></span>`
