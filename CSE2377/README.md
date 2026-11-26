# CSE2377 Web Technologies Labs

This repository contains small HTML, CSS, browser JavaScript, and Node.js exercises. The examples use modern HTML and JavaScript, with one concept per file where that makes the flow easier to follow.

## Browser exercises

Open the HTML files in folders `1` through `6` in a browser. In folders `4` through `6`, the page loads its JavaScript from a neighboring `.js` file.

## Node.js exercises

Install the Express dependency once:

```sh
npm install
```

Run either server:

```sh
npm run server:http
npm run server:express
```

Both servers use port `8080` by default. Set `PORT` to choose a different one.

The file-system exercise is an explicit command, so it does not modify files when the HTTP server starts:

```sh
npm run files:demo
```

It writes, appends to, and renames demonstration files in folder `7`.
