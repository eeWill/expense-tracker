import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {DashboardButton} from '../app/components/DashboardButton.js';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly', () => {
  const wrapper = shallow(
    <DashboardButton
       iconType="insert-chart"
       text="Charts"
    />
  );
  
  expect(wrapper).toMatchSnapshot();
});
