import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CardDetail from './../../src/components/Card/CardDetail';
import {CardDetailMockData} from './MockData';

function setupCardDetail() {
  const props = CardDetailMockData;
  const component = shallow(<CardDetail {...props}/>);

  return component;
}

describe('<CardDetail />', () => {
    it('should renders <CardDetail /> components', () => {
      const wrapper = setupCardDetail();

      expect(wrapper.find(".roomInfo")).to.have.length(1);
    });
});