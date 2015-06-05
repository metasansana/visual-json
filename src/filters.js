

export default {

    /**
     *
     * @param value
     * @param context
     * @param next
     * @returns {*}
     */
    uppercase: function(value, context, next){

        if(typeof value === 'string')
        value = value.toUpperCase();

        return next(value);

    }
}