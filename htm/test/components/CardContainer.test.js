import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CardContainer from './../../src/components/Card/CardContainer';
import { CardDeck } from 'reactstrap';
import CustomInput from './../../src/components/Input/CustomInput';
import {ContainerMockData, InputMockData} from './ContainerMockData';

import CardDetail from './../../src/components/Card/CardDetail';

function setup() {
  const props = ContainerMockData;

  const component = shallow(
    <CardDeck
      {...props}
    />);
  return {
    component
  };
}

function setupCustomInput() {
  const props = InputMockData;
  const onChange = sinon.spy();
  const component = shallow(
    <CustomInput
      {...props} onChange={onChange}
    />);
  return {
    component
  };
}


describe('<CardContainer />', () => {
    it('should renders <CardContainer /> components', () => {
      const wrapper = shallow(<CardContainer />);
      expect(wrapper.find("#cardContainer")).to.have.length(1);
    });

   /*  it('should renders 5 CardDetail', () => {
      const { component } = setup();
      expect(component.find(".card-deck")).to.have.length(5);
    }); */
    it('should renders 1 CustomInput', () => {
      const wrapper = setupCustomInput();
      expect(wrapper.find("input")).to.have.length(1);
    });

});