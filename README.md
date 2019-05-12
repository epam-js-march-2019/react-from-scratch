1. Install react with friends:
```bash
npm i react react-dom
```

2. Install webpack with loaders and plugins:
```bash
npm i webpack webpack-dev-server webpack-cli html-webpack-plugin babel-loader -D
```

3. Install babel with presets and plugins:
```bash
npm i @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties -D
```

4. Install Jest for testing:
```bash
npm i jest @types/jest -D
```

5. Setup Webpack (`webpack.config.js`):
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
};
```

6. Setup Babel (`.babelrc`):
```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}
```

7. Setup `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>React from scratch</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

8. Setup `main.js`:
```jsx
import React from 'react';
import { render } from 'react-dom';

import App from './src/components/App';

render(
    <App />,
    document.getElementById('root'),
);
```

9. Setup `App.js`:
```jsx
import React from 'react';

const App = () => (
    <h1>
        { 'Hello, world!' }
    </h1>
);

export default App;
```

10. Change `package.json`:
```diff
"scripts": {
-   "test": "echo \"Error: no test specified\" && exit 1",
+   "test": "jest",
+   "dev": "webpack-dev-server --mode=development",
+   "build": "webpack --mode=production"
},
```
