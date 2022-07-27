export default (root = '') => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <!-- <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script> -->
  
  
      <script crossorigin src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
  
      <title>test</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${root}</div>
    </body>
    <script src="/assets/widget-1/client//widget.js"></script>
    <script src="/assets/widget-2/client//widget.js"></script>
    <script src="/assets/app/root.js"></script>
  </html>
  `
}