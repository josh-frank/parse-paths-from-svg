# parse-paths-from-svg

An absolutely dead simple tool to parse path descriptors from an SVG file. Install and require, then use the `parse` method on an SVG file for an array of path descriptor strings:

```
const parsePathsFromSvg = require( "parse-paths-from-svg" );

parsePathsFromSvg.parse( <your SVG as a string> );
   -> [
  'm 50,50 l 100,0 l 0,100 l -100,0 z',
  'm 300 300 a 50 50 90 1 1 100 0 a 50 50 90 1 1 -100 0 z',
  'm 744 136 h -202 c -10 0 -18 8 -18 18 h 238 c 0 -10 -8 -18 -18 -18 z',
  ...and so on
]
```

To test in the console, run `yarn cli <filepath in quotes>`.
