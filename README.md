

# React Form Builder

This is a questions/form builder example app using node and react.

## To use

There is a simple node server implementation included. It serves static files from `public/` and handles requests to `/api/questions` to fetch or add data. Start a server with Node:

### Node

```sh
npm install
node server.js
```

And visit <http://localhost:3000/>.

### Webpack

This project is using webpack to bundle javascript files.

```sh
webpack
```
or

```sh
npm build
```


## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 node server.js
```
