import Form from './Form';
import Processor from './Processor';
import Types from './Types';
import Filters from './Filters';


export default {

    parseDefault(json, defaults) {

        return this.parse(json, defaults, new Processor(new Types()), new Filter());

    },
    parse(json, defaults, processor) {

        var childs;

        if(Array.isArray(json.visual))
            childs = json.visual.map(function(schema) {
                return processor.process(schema, defaults, processor);
            });

        return React.createElement(Form, json, childs);

    }
}