export class ParsePathsFromSvg {

    static matchPathTag = /<path[\s\S]*?\/>/gmi;
    static matchDescriptor = /(?<=\sd=")[\s\S]*?(?=")/gmi;
    static cleanUpWhiteSpace = /[\n\s]+/g;

    static parse( svgFile ) {
        return svgFile.match( this.matchPathTag )
            .map( pathTag => pathTag.match( this.matchDescriptor )
            .join( "" )
            .replace( this.cleanUpWhiteSpace, " " ) );
    }

}
