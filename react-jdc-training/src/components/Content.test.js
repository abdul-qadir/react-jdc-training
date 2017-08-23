import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Content from './Content';

describe('Content', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content text="Hi Testing" />, div);
  });

  it('properly shows given text', () => {
    throw 'TODO';
  });
});