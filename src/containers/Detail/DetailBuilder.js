import React, {useContext} from 'react';
import {connect} from 'react-redux';
import AppContext from '../../context/app-context';
import Detail from '../../components/Detail/Detail';
import PropTypes from 'prop-types';

export const DetailBuilder = props => {
    const {characterId, setCharacterId, showDrawer, setShowDrawer} = useContext(AppContext);  
    const character = props.characters.find(character => character.id === characterId);
    const onCloseDrawer = () => {        
        setShowDrawer(false);
        setCharacterId(null);
    }   
    return (
        !characterId || !props.loaded ? <Detail /> :
        <Detail
        img={character.image}
        name={character.name}
        species={character.species}
        location={character.location.name}
        gender={character.gender}        
        onClose={onCloseDrawer}
        showDrawer={showDrawer}
        />
    )
};

DetailBuilder.contextTypes = {
    characterId: PropTypes.number,
  };

const mapStateToprops = state => {
    return {
        characters : state.listReducer.results,
        loaded: state.listReducer.loaded
    }
};
export default connect(mapStateToprops)(DetailBuilder)