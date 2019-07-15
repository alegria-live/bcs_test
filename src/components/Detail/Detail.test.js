import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Detail from './Detail';

configure({adapter: new Adapter()});

describe('<Detail />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Detail />);
    });
    it('should contains <h3>Rick Sanchez</h3>', () => {
        wrapper.setProps({name: 'Rick Sanchez'});
        expect(wrapper.contains(<h3>Rick Sanchez</h3>)).toEqual(true);
    });
    it('should contains src="https://img.com"', () => {
        wrapper.setProps({img: "https://img.com"});
        expect(wrapper.find({src:"https://img.com"})).toHaveLength(2);
    });
});