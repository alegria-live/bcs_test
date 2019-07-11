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
    it('should contains <img src="https://img.com" alt="Rick Sanchez" ', () => {
        wrapper.setProps({name: 'Rick Sanchez', img: "https://img.com"});
        expect(wrapper.contains(<img src='https://img.com' alt='Rick Sanchez' />)).toEqual(true);
    });
});