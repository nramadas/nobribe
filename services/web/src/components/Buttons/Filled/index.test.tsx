import React from 'react';
import ReactDOM from 'react-dom';
import Filled from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filled />, div);
  ReactDOM.unmountComponentAtNode(div);
});
