import React from 'react';
import ReactDOM from 'react-dom';
import Text from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Text label="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
