import React from 'react';
import Form from '../Form';
import sources from './form.json';

React.render(<Form className="form-horizontal" schema={sources}/>, document.getElementById('mountPoint'));