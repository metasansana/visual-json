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

    _hasParseAndCompile(tree) {

        return (tree.hasOwnProperty('$compile')) && (tree.hasOwnProperty('$parse'))


    }

    _hasParseOrCompile(tree) {

        return (tree.hasOwnProperty('$compile')) || (tree.hasOwnProperty('$parse'));

    }

    apply(tree, scope) {

        var ret = null;

        if (this._hasParseAndCompile(tree)) throw new ParseAndCompileInSameBlockError(tree);
        if (!this._hasParseOrCompile(tree)) tree = {$compile: tree};

        this.order.slice().forEach(function ($) {

            if (tree.hasOwnProperty($)) {

                if ($ === '$parse')
                    return ret = this.apply(tree[$], scope);

                if ($ === '$compile')
                    return ret = this.provider.getDirectiveByName('$compile').
                        apply(tree[$], scope);

                this.provider.getDirectiveByName($).apply(tree[$], scope);
            }

        }.bind(this));

        return ret;

    }

    applyWithResource(tree, scope, done) {

        var schedule = this.order.slice();
        var directives = this.provider;

        schedule.unshift('$resource');

        if (this._hasParseAndCompile(tree)) throw new ParseAndCompileInSameBlockError(tree);
        if (!this._hasParseOrCompile(tree)) tree = {$compile: tree};

        var next = function () {

            var $ = schedule.shift();

            if (!$) throw new
                Error('ParseDirective: Reached end of directive order with no $compile section! JSON: ' +
                JSON.stringify(tree));

            if (tree.hasOwnProperty($)) {

                if ($ === '$parse')
                    return this.applyWithResource(tree[$], scope, done);

                if ($ === '$compile')
                    return done(directives.getDirectiveByName('$compile').apply(tree[$], scope));

                if ($ === '$resource')
                    return directives.getDirectiveByName($).apply(tree[$], scope, next);

                directives.getDirectiveByName($).apply(tree[$], scope);

            }

            next();

        }.bind(this);

        next();

    }

}

export default ParseDirective