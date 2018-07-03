import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CardContainer from './../../src/components/Card/CardContainer';
import CustomInput from './../../src/components/Input/CustomInput';
import {InputMockData} from './MockData';

function setupCustomInput() {
  const props = InputMockData;
  const component = shallow(<CustomInput {...props}/>);

  return component;
}


describe('<CardContainer />', () => {
    it('should renders <CardContainer /> components', () => {
      const wrapper = shallow(<CardContainer />);
      expect(wrapper.find("#cardContainer")).to.have.length(1);
    });

    it('should renders 1 CustomInput', () => {
      const component = setupCustomInput();
      expect(component.find("div")).to.have.length(1);
    });

});