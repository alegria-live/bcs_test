import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import Spinner from '../components/UI/Spinner/Spinner';
import Layout from '../hoc/Layout/Layout';


configure({adapter: new Adapter()});

describe('<App />', () => {    
    const props = {isLoading: true, autoInitListHandler: ()=>{}};   
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App {...props} />);
    });
    
    it('should render one element <Spinner />' , () => {        
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });
    it('should no render element <Layout />' , () => {        
        expect(wrapper.find(Layout)).toHaveLength(0);
    });
    it('should render one element <Layout /> and any <Spinner />', () => {
        wrapper.setProps({isLoading: false})      
        expect(wrapper.find(Layout)).toHaveLength(1);
        expect(wrapper.find(Spinner)).toHaveLength(0);
    });
})