import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import { Button, Icon } from 'antd';

configure({adapter: new Adapter()});

describe('<Header />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('should contains <h2>Header Title</h2>', () => {
        wrapper.setProps({title: 'Header Title'});
        expect(wrapper.contains(<h2>Header Title</h2>)).toEqual(true);
    });
    it('should render two <Button /> elements', () => {
        expect(wrapper.find(Button)).toHaveLength(2);
    });
    it('should render two <Icon /> elements', () => {
        expect(wrapper.find(Icon)).toHaveLength(2);
    });
    it('should contains <span>463</span>', () => {
        wrapper.setProps({total: '463'});
        expect(wrapper.contains(<span>463</span>)).toEqual(true);
    });
})