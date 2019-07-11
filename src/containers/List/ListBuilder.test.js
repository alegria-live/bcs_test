import React from 'react';
import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ListBuilder} from './ListBuilder';
import Card from '../../components/UI/Card/Card';
import {Switch} from 'antd';

configure({adapter: new Adapter()});

describe('<ListBuilder />', () => {
    const charactersArr = [{id:1, image:"image"}, {id:2, image:"image"}]
    const props = { characters : charactersArr }
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ListBuilder {...props} />);
    });
    it('should render two <Card /> elements', () => {
        expect(wrapper.find(Card)).toHaveLength(2);
    });
    it('should render two <Switch /> elements', () => {
        expect(wrapper.find(Switch)).toHaveLength(2);
    });    
});