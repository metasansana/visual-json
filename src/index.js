import Context from './Context';
import Types from './Types';
import Filters from './Filters';

export default {

    getDefaultContext() {

        var ctx = new Context();

        return ctx.addFilters(Filters).
            addHandlers({}).
            addTypes(Types);

    },
    getContext() {

        return new Context();

    }
}