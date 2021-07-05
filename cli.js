"use strict";

const pathsFromSVG = require( "." );

/* eslint no-process-exit: 0 */
/* eslint global-require: 0 */

const parseFile = ( error, data ) => {
    if ( error ) {
        console.error( error );
        return;
    }
    console.log( pathsFromSVG.parse( data ) );
};

if ( require.main === module ) {
  let sliceN = 1;
  if ( process.argv.indexOf( module.filename ) > -1 || require( "path" ).basename( process.argv[ 1 ] ) === "parse-paths-from-svg" ) sliceN = 2;
  const args = process.argv.slice( sliceN, process.argv.length );
  if ( args.length === 0 ) {
    console.error( "You must pass an SVG file path in quotes as a parameter" );
    process.exit( 1 );
  }
  require( "fs" ).readFile( args[ 0 ], "utf8" , parseFile );
}
