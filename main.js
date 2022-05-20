import './style.css'

import('decoders')
if (false) {
  // UNCOMMENT THE FOLLOWING LINE TO TRIGGER THE BUG
  // import('@sentry/node')
}

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

document.addEventListener('dblclick', () => {
  import('@sentry/node')
})
