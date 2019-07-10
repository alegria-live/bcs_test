import React, {useContext} from 'react';
import {connect} from 'react-redux';
import CharacterContext from '../../context/character-context';
import Card from '../../components/UI/Card/Card';
import {Switch} from 'antd';

const ListBuilder = props => {
    const {characterId, setCharacterId} = useContext(CharacterContext);
    const showDetails = (val) => {        
        val = Number(val);        
        val === characterId ? setCharacterId(null) : setCharacterId(val)
    };    
    const avatarsArr = props.characters.map(character => {
        return <li 
            key={character.id} 
            id={character.id}>
            <Card
                img={character.image}      
                switch = {
                    <Switch
                        id={character.id}
                        checked ={characterId === character.id }
                        onChange={(checked, event) => showDetails(event.target.id)}
                    />
                }
            />
        </li>
    });

    return(
        <ul style={{listStyle: 'none', padding: 0}}>
            {avatarsArr}
        </ul>
    )
};

const mapStateToProps = state => {
    return {
        characters: state.listReducer.results
    }
};
export default connect(mapStateToProps)(ListBuilder)