import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CardContainer from './../../src/components/Card/CardContainer';
import { CardDeck } from 'reactstrap';
import CustomInput from './../../src/components/Input/CustomInput';
import {ContainerMockData, InputMockData} from './ContainerMockData';

import CardDetail from './../../src/components/Card/CardDetail';


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