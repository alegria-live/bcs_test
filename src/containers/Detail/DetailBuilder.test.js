import React from 'react';
import { configure, mount } from 'enzyme';
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
            location: {location: {name: "Test location Name"}},
            gender: "Test gender"
        }]
    const props = { characters : charactersArr, loaded: true }
    const context = {characterId: 1};
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<DetailBuilder {...props} />, {context});
    });
    
    it('should render one element <Detail />' , () => {        
        expect(wrapper.find(Detail)).toHaveLength(1);
    });

    it('should contains prop gender = undefined', ()=> {       
        expect(wrapper.props().gender).toEqual(undefined);
    });
})