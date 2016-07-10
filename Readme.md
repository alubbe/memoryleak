# A Memory Leak in v8 and how Jade is affected
Demo: https://alubbe.github.io/memoryleak/

Some time between 3.24.35.22 and 3.26.33, v8 introduced a performance regression, where
```js
for(var i = 0; i < 500000; i++) {
  (function() {
    var array = [{a: 1, b: 'r'}];
    array.push({a:2, b:'s'});
  })()
}
```
suddenly causes a memory leak. Presumably, v8 doesn't recognize the shared hidden class ```{lineno: Integer, filename: String}``` behind the objects.

Jade is affected because, when the ```compileDebug``` flag is enabled, as it is by default, it generates these lines, which fall prey to the above v8 memory leak:

```js
var jade_debug = [{ lineno: 1, filename: "/home/andreas/code/sampleexpress/views/fortunes/index.jade" }];
jade_debug.unshift({ lineno: 0, filename: "/home/andreas/code/sampleexpress/views/layout.jade" });
```

# 'Fixing' the bug

There is an outstanding fix to [Jade](https://github.com/jadejs/jade/pull/1951) and an issue at [v8](https://code.google.com/p/v8/issues/detail?id=4121).

Until then, it is highly recommended to explicitly disable ```compileDebug``` outside of your development environment:

```js
// app is the instance of your express app
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.locals.compileDebug = false;
}
```

# Reproducing the bug

This repo contains a small express app and a very small jade file, taken from Techempowers Framework benchmarks.

There are two ways to reproduce this bug for v8 and three ways to reproduce it for jade:

## v8

1. Open Chrome's dev tools and taskmanager. Watch the RAM grown as you run ```for(var i = 0; i < 500000; i++) {(function() {var array = [{a: 1, b: 'r'}];array.push({a:2, b:'s'});})()}```.
2. Run ```/usr/bin/time -v node -e "for(var i = 0; i < 500000; i++) (function(){var array = [{a: 1, b: 'r'}]; array.push({a:2, b:'s'});})()"``` on your shell.

## jade

1. Run the browser file and watch its RAM usage as you click the buttons.
2. Run the express app (index.js), hit it with wrk or ab and watch your mem explode. Then uncomment line 9, restart the server and watch the leak disappear.
3. Run the following commands from your command line. Also, run them in both 0.10/0.11.13 vs 0.11.14/0.12/iojs to see the performance regression caused by v8:

```sh
/usr/bin/time -v node -e "for(var i = 0; i < 300000; i++) require('./compiledWithDebug')();"
/usr/bin/time -v node -e "for(var i = 0; i < 300000; i++) require('./compiledWithoutDebug')();"
/usr/bin/time -v node -e "for(var i = 0; i < 300000; i++) require('./fixedMemoryLeak')();"
```

# Affected versions
This bug affects:

- node 0.11.14+
- node 0.12.*
- all iojs releases
