import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardComp } from './Card';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

configure({adapter: new Adapter()});

describe('<CardComp />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<CardComp />);
    });
    
    it('should render one <Card /> element', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
    });
    it('should render one <Mata /> element', () => {
        expect(wrapper.find(Meta)).toHaveLength(1);
    });
    it('should render two <Avatar /> elements', () => {
        expect(wrapper.find(Avatar)).toHaveLength(2);
    });
    it('should find element with title="Show details"', () => {
        expect(wrapper.find({title: "Show details"})).toHaveLength(1);
    });
    it('should find element with description="Switch"', () => {
        wrapper.setProps({switch: 'Switch'});
        expect(wrapper.find({description: "Switch"})).toHaveLength(1);
    });    
})