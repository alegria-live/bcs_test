import React, {useContext} from 'react';
import {connect} from 'react-redux';
import CharacterContext from '../../context/character-context';
import Detail from '../../components/Detail/Detail';

const DetailBuilder = props => {
    const {characterId} = useContext(CharacterContext);
    const character = props.characters[characterId-1]

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
}
export default connect(mapStateToprops)(DetailBuilder)