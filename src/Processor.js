import dot from 'dot-component';

var inputs = {
    text: 1, date: 1, datetime: 1, range: 1, button: 1, color: 1, 'datetime-local': 1,
    email: 1, file: 1, hidden: 1, image: 1, month: 1, number: 1, password: 1, search: 1, tel: 1,
    time: 1, url: 1, week: 1
};

var count = 1;

var isObjectLike = function (o) {
    return (typeof o === 'object');
}

/**
 * Processor is used to convert a type to an actual react component
 */
class Processor {

    /**
     * @param {Filter} filters
     * @param {TypeSet} types
     * @param {Object} handlers
     */
    constructor(types, filters, handlers) {
        this.types = types;
        this.filters = filters;
        this.handlers = handlers;
    }

    /**
     * filter the a value based on a '\' delimited string of filters.
     * @param {*} value
     * @param {String} list
     * @param {Object} context
     * @param {Function} cb
     * @returns {*}
     */
    filter(value, list, context) {

        if (!list) return value;

        var self = this;

        var filters = list.split('|').map(str =>  str.trim().split(' '));

        var next = function (thisValue) {

            if (filters.length < 1)
                return thisValue;

            var nextFilterArray = filters.shift();
            var nextFilterMethodName = nextFilterArray.shift();

            if (!self.filters.hasOwnProperty(nextFilterMethodName))
                throw new Error('Unknown filter ' + nextFilterMethodName + '!');

            nextFilterArray.unshift(thisValue);
            nextFilterArray.push(context);
            nextFilterArray.push(next);
            return self.filters[nextFilterMethodName].apply(self.filters, nextFilterArray);
        }

        return next(value);

    }

    swap$$$(schema, defaults) {

        var self = this;

        if (!isObjectLike(schema))
            throw new Error('$$$ fields must be objects or arrays!');

        if (!Array.isArray(schema))
            return self._process(self.preProcess(schema, defaults), defaults);

        var res = schema.map(function (schemaThatShouldBeObject) {

            if (Array.isArray(schemaThatShouldBeObject)) {
                console.log('This object should not be an array: ', schemaThatShouldBeObject);
                throw new Error('swap$$$() first level of a $$$ field should not contain arrays!');
            }

            return self._process(
                self.preProcess(schemaThatShouldBeObject, defaults), defaults);


        });

        if(res.length === 1)
        return res[0];

        return res;

    }

    /**
     * preProcess the schema
     * @param {Object} schema
     * @param {Object} defaults
     * @returns {*}
     */
    preProcess(schema, defaults) {

        var self = this;
        var target;

        for (var key in schema)
            if (schema.hasOwnProperty(key)) {

                target = schema[key];

                if (typeof target === 'function') {

                    throw new Error('Found a function during pre processing, generally you should never see this error.' +
                        ' Review the key \'' + key + '\' key for schema: ', schema, '.');

                } else if (key.slice(0, 3) === '$$$') {

                    schema[key.substr(3)] = self.swap$$$(target, defaults);
                    delete schema[key];

                }
                else if (Array.isArray(target)) {

                    schema[key] = target.map(function (member) {
                        return self.preProcess(member, defaults);
                    })

                } else if (typeof target === 'object') {

                    schema[key] = self.preProcess(target, defaults);

                } else if (key === '$$filter') {

                    schema.filter = function (filters, context) {

                        return function (value) {
                            return self.filter(value, filters, context);
                        }
                    }(schema.$$filter, defaults);

                    delete schema.$$filter;

                } else if (key === '$$handler') {

                    if (this.handlers.hasOwnProperty(target)) {
                        schema[key] = this.handlers[target];
                        delete schema[key];
                    }
                }
            }


        return schema;

    }


    _process(schema, defaults) {

        if (defaults)
            if (schema.name)
                schema.defaultValue = (dot.get(defaults, schema.name) || schema.defaultValue);

        if (schema.type in this.types)
            return this.types[schema.type](schema, defaults, this);

        if (schema.type in inputs)
            return this.types.input(schema, defaults, this);

        return this.types.default(schema, defaults, this);
    }

    /**
     *
     * @param {Object} schema The schema for the item being processed
     * @param {Object} defaults A map of key value pairs that can be queried for default values
     * @returns {React.Element}
     */
    process(schema, defaults) {

        if (Array.isArray(schema))
            throw new Error('process() should be called with an object not an array!');

        if (!schema.$$NO_PRE_PROCESS$$) //Don't pre process, especially if data set is huge
            schema = this.preProcess(schema, defaults);

        return this._process(schema, defaults);


    }


}

export default Processor;

