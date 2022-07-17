import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Thing } from '../stories/Thing.stories';
import { Buttons } from '../stories/Libreary/component/Button.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing />, div);
    ReactDOM.render(<Buttons />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
