import React from 'react';
import ReactDOM from 'react-dom';
import Outlined from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Outlined />, div);
  ReactDOM.unmountComponentAtNode(div);
});
