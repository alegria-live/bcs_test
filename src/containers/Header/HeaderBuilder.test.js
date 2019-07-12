import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HeaderBuilder } from './HeaderBuilder';
import Header from '../../components/Header/Header';


configure({adapter: new Adapter()});

describe('<HeaderBuilder />', () => {
    
    const props = {info:{count:436}, listProcessHandler: ()=>{}}
   
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HeaderBuilder {...props} />);
    });
    
    it('should render one element <Header />' , () => {        
        expect(wrapper.find(Header)).toHaveLength(1);
    });
    it('should contains prop title="THE RICK AND MORTY API"', ()=> {       
        expect(wrapper.props().title).toEqual('THE RICK AND MORTY API');
    });
    it('should contains prop total=436', ()=> {       
        expect(wrapper.props().total).toEqual(436);
    });
})