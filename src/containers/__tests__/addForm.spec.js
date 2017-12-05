import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddForm } from '../addForm';



describe('rendering', () => {
  const wrapper = shallow(<AddForm />);

  it('defaults type to buying', () => {
    expect(wrapper.find('select').props().value).toEqual('buy');
  })

  it('defaults price to zero', () => {
    expect(wrapper.find('input[name="price"]').props().value).toEqual(0);
  })

  it('defaults shares to zero', () => {
    expect(wrapper.find('input[name="shares"]').props().value).toEqual(0);
  })
})

describe('submitting a stock', () => {
  const addStock = jasmine.createSpy("addStock");
  const removeStock = jasmine.createSpy("removeStock");
  const selectedStock = {
    "Meta Data": { 
      "2. Symbol": 'MSFT'
    }
  }; 

  const props = {
    addStock, 
    removeStock, 
    selectedStock
  }; 

  const wrapper = mount(<AddForm {...props}/>);

  it('calls add stock when buying', () => {
    const button = wrapper.find('button'); 
    button.simulate('submit');
    expect(props.addStock).toHaveBeenCalled();
  })

  it('calls remove stock when selling', () => {
    wrapper.find('select').simulate('change', { target: { name: 'type', value: 'sell'}});
    wrapper.find('button').simulate('submit'); 
    expect(props.removeStock).toHaveBeenCalled();
  })
})
