import React, {useContext, useState} from 'react';
import {connect} from 'react-redux';
import AppContext from '../../context/app-context';
import Card from '../../components/UI/Card/Card';
import {Switch} from 'antd';

export const ListBuilder = props => {
    const {characterId, setCharacterId, setShowDrawer} = useContext(AppContext);    
    const ScreenWidth = window.innerWidth;
    console.log(ScreenWidth);
    const showDetails = (val) => {        
        val = Number(val);
        if (ScreenWidth < 992) {
             setCharacterId(val);
             setShowDrawer(true)
             return
            }
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
        <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column'}}>
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