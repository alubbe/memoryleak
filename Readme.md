# Showcase of a Jade Memory Leak (v8's fault)
Newer versions of v8 introduced a performance regression, where
```sh
/usr/bin/time -v node -e "for(var i = 0; i < 500000; i++) (function(){var array = [{a: 1, b: 'r'}]; array.push({a:2, b:'s'});})()"
```
suddenly causes a memory leak. Presumably, v8 doesn't recognize the shared hidden class behind the objects. There is an outstanding fix to Jade here: https://github.com/alubbe/jade/tree/fix-memory-leak

This repo contains a small express app and a very small jade file, taken from Techempowers Framework benchmarks.

There are three ways to test this bug:

1. Run the browser file and watch its RAM usage as you click the buttons.
2. Run the express app (index.js), hit it with wrk or ab and watch your mem explode. Then uncomment line 9, restart the server and watch the leak disappear.
3. Run the following commands from your command line. Also, run them in both 0.10 and 0.12/iojs to see the performance regression caused by v8:

```sh
/usr/bin/time -v node -e "for(var i = 0; i < 300000; i++) require('./compiledWithDebug')();"
/usr/bin/time -v node -e "for(var i = 0; i < 300000; i++) require('./compiledWithoutDebug')();"
/usr/bin/time -v node -e "for(var i = 0; i < 300000; i++) require('./fixedMemoryLeak')();"
```
