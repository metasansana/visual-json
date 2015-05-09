/**
 * Fmt can be used to format data before it is displayed.
 */
class Fmt {

    /**
     * format is the main entry point formatting data.
     *
     * It takes a list of pipe (|) separated formatters and applies them internally.
     *
     * @param {String} fmts
     * @param {*} value
     * @param {Object} context
     * @returns {String}
     * @throws {UnknownFormatterError}
     */
    format(fmts, value, context) {
        if(!fmts) return value;
    }

}

export default new Fmt();