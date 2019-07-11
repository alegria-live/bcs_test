import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenderGraph from './GenderGraph';
import GraphBuilder from '../../containers/GenderGraph/GraphBuilder';

configure({adapter: new Adapter()});

describe('<GenderGraph />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<GenderGraph />);
    });
    it('should render <GraphBuilder /> element', () => {       
        expect(wrapper.find(GraphBuilder)).toHaveLength(1);
    });    
});