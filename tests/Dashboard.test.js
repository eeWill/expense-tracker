import React from 'react';
import {DashboardText} from '../app/components/DashboardText.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <DashboardText
       valueText="$845"
       labelText="Total Expenses"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();

});

