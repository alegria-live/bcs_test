import React, {useContext} from 'react';
import {connect} from 'react-redux';
import AppContext from '../../context/app-context';
import Detail from '../../components/Detail/Detail';

export const DetailBuilder = props => {
    const {characterId} = useContext(AppContext);
    const character = props.characters.find(character => character.id === characterId) 
    return (
        !characterId || !props.loaded ? <Detail /> :
        <Detail
        img={character.image}
        name={character.name}
        species={character.species}
        location={character.location.name}
        gender={character.gender}
        />
    )
};
const mapStateToprops = state => {
    return {
        characters : state.listReducer.results,
        loaded: state.listReducer.loaded
    }
};
export default connect(mapStateToprops)(DetailBuilder)