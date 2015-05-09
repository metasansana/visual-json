import dot from 'dot-component';

/**
 * Processor is used to convert a type to an actual react component
 */
class Processor {

    /**
     * @param {Object} types
     */
    constructor(types){
        this.types = types;
    }

    filter(list, value, context){
        return value;
    }

    /**
     *
     * @param {Object} schema The schema for the item being processed
     * @param {Object} defaults A map of key value pairs that can be queried for default values
     * @returns {React.Element}
     */
    process(schema, defaults) {

        //get defaultValue and filter it
        if(defaults)
        if(schema.name)
            schema.defaultValue =
                this.filter(schema.filters,
                    (dot.get(defaults, schema.name) || schema.defaultValue), defaults);

        if(schema.type in this.types)
        return this.types[schema.type](schema, defaults, this);

        return this.types.default(schema, defaults, this);

    }


}

export default Processor;

