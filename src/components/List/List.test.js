import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './List';
import ListBuilder from '../../containers/List/ListBuilder';

configure({adapter: new Adapter()});

describe('<List />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<List />);
    });

    it('should contains <h2>Characters list</h2>', () => {       
        expect(wrapper.contains(<h2>Characters list</h2>)).toEqual(true);
    });
    it('should render two <Button /> elements', () => {
        expect(wrapper.find(ListBuilder)).toHaveLength(1);
    });
})