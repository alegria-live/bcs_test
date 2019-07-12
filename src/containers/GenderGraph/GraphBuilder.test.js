import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GraphBuilder} from './GraphBuilder';
import Chart from '../../components/UI/Charts/ApexChart';

configure({adapter: new Adapter()});

describe('<GraphBuilder />', () => {

    const charactersArr = [{id:1, gender:"Male"}, {id:2, gender:"Female"}, {id:3, gender:"unknown"}]
    const props = { characters : charactersArr, loaded: true }

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<GraphBuilder {...props} />);
    });

    it('should render element <Chart />', () => {       
        expect(wrapper.find(Chart)).toHaveLength(1)
    });    
    it('should contains prop type=bar', ()=> {        
        expect(wrapper.props().type).toEqual('bar');
    });
    it('should contains prop series=[{"data": [], "name": "Quantity"}]', ()=> {       
        expect(wrapper.props().series).toEqual([{"data": [], "name": "Quantity"}]);
    })
})