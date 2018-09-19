Make sure you have Node and NPM installed both with `node -v && npm -v`.  
Install packages with `npm install`.  
Run server with `npm run dev` for using **Nodemon**.

If you use a Node version ≤ 8.2.1, you will need to add the " - harmony" flag for using spread operator in the package.json file.

`"dev": "node_modules/.bin/nodemon --harmony -e js",`