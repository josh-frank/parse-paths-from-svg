// class ParsePathsFromSvg {

//     static matchPathTag = /<path[\s\S]*?\/>/gmi;
//     static matchDescriptor = /(?<=\sd=")[\s\S]*?(?=")/gmi;
//     static cleanUpWhiteSpace = /[\n\s]+/g;

//     static parse( svg ) {
//         return svg.match( this.matchPathTag )
//             .map( pathTag => pathTag.match( this.matchDescriptor )
//             .join( "" )
//             .replace( this.cleanUpWhiteSpace, " " ) );
//     }

// }

exports.parse = svg => {
    const matchPathTag = /<path[\s\S]*?\/>/gmi,
        matchDescriptor = /(?<=\sd=")[\s\S]*?(?=")/gmi,
        cleanUpWhiteSpace = /[\n\s]+/g;
    return svg.match( matchPathTag )
        .map( pathTag => pathTag.match( matchDescriptor )
        .join( "" )
        .replace( cleanUpWhiteSpace, " " ) );
}
