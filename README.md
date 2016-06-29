# node-async-sample
Just the basic setup needed to code and debug node.js with async/await and other ES7 features

# Current Issues
Setup works when running:

```babel-node src/server.js```

When using webpack by running "webpack", it emits the following error:

```ERROR in ./src/server.js
Module parse failed: C:\dev\node-async-sample\src\server.js Unexpected token (9:22)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (9:22)```

Opened question on stack overflow here at http://stackoverflow.com/questions/38067405/error-using-es7-async-await-with-node-webpack-and-babel-loader
