import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer: ', () => {
  describe('should render Footer component', () => {
    test('should contain link', () => {
      const component = shallow(<Footer />);
      const a = component.find('a');
      expect(a.length).toBe(1);
    });
  });
});
