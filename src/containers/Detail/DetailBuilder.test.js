import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DetailBuilder } from './DetailBuilder';
import Detail from '../../components/Detail/Detail';


configure({adapter: new Adapter()});

describe('<DetailBuilder />', () => {
    const charactersArr = [{
            id:1,
            image:"Test Image",
            name: "Test Name",
            species: "Test species",
            location: "Test location",
            gender: "Test gender"
        }]
    const props = { characters : charactersArr, loaded: true }
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<DetailBuilder {...props} />);
    });    
   
    it('should render one element <Detail />' , () => {        
        expect(wrapper.find(Detail)).toHaveLength(1);
    });
    it('should' , () => {
        wrapper.setContext({characterId : 1});    
        expect(wrapper.find({
            img:'Test Image',
            name:'Test Name',
            species:'Test species',
            location:'Test location',
            gender:"Test gender"
        })).toHaveLength(1);
    }); 
})