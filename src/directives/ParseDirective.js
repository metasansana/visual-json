import Utils from '../core/Utils';
import ParseAndCompileInSameBlockError from './ParseAndCompileInSameBlockError';

/**
 * ParseDirective handles a `$parse` directive.
 *
 * The work of this directive is limited to scaning for and calling other directives.
 * Directives found are handled in this order:
 * 1. $resource
 * 2. $set
 * 3. $request
 * 4. $parse | $compile
 *
 * A `$parse directive must have a $parse or a $compile but not both!
 * In the case of an embedded $parse, this $parse SHOULD have a `$compile` or
 * some `$parse` that has a `$compile` in its ancestors.
 *
 * In other words, the work of a compiler MUST end with a $compile.
 */
class ParseDirective {

    constructor(order, provider) {
        this.order = order;
        this.provider = provider;
    }

    _checkHasParseAndCompile(tree) {

        if(tree.hasOwnProperty('$compile'))
        if(tree.hasOwnProperty('$parse'))
        throw new ParseAndCompileInSameBlockError(tree);

    }

    apply(tree, scope, done) {

        var schedule = this.order.slice();
        var directives = this.provider;

        this._checkHasParseAndCompile(tree);

        var next = function () {

            var name = schedule.shift();

            if (!name) throw new
                Error('ParseDirective: Reached end of directive order with no $compile section! JSON: '+
                JSON.stringify(tree));

            if (tree.hasOwnProperty(name)) {

                if (name === '$parse') return this.apply(tree[name], scope, done);

                if (name === '$compile') return directives.getByName('$compile').
                    apply(tree[name], scope, done);

                return directives.getByName(name).apply(tree[name], scope, next);

            }

            next();

        }.bind(this);

        next();

    }

}

export default ParseDirective