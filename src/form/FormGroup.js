import React from 'react';

class Wrapper extends React.Component {

    render() {

        return (<div className={this.props.wrapClass}>{this.props.children}</div>)
    }

}
/**
 * FormGroup
 */
class FormGroup extends React.Component {

    render() {

        var label;
        var controls;
        var handler = this.props.handler;

        if (this.props.label)
            label = (<label className={'control-label '+this.props.label.className} {...this.props.label.attrs}>
                {this.props.label.value}</label>);

        if (this.props.controls.length === 1) {
            controls = this.props.controls[0];
            if (controls.wrapClass) {
                controls = (
                    <Wrapper wrapClass={controls.wrapClass}>
                        {React.cloneElement(controls.control, {handler:handler})}
                    </Wrapper>);
            } else {
                controls = React.cloneElement(controls.control, {handler:handler});
            }
        } else {

            controls = this.props.controls.map(function (control, i) {

                if (control.wrapClass)
                    return (
                        <Wrapper key={i} wrapClass={control.wrapClass}>
                            {React.cloneElement(control.control, {handler:handler})}
                        </Wrapper>)

                return React.cloneElement(control.control, {handler:handler});
            });

        }

        return (
            <div className="form-group">
                {label}
                {controls}
            </div>
        )
    }


}

FormGroup.propTypes = {
    label: React.PropTypes.shape({
        className: React.PropTypes.string,
        value: React.PropTypes.node.isRequired,
        attrs: React.PropTypes.object
    }),
    controls: React.PropTypes.arrayOf(React.PropTypes.shape({
        wrapClass: React.PropTypes.string,
        control: React.PropTypes.node.isRequired
    })).isRequired

}

export default FormGroup;

