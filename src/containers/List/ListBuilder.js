import React, {useState} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/UI/Card/Card';
import {Switch} from 'antd';

const ListBuilder = props => {
   
    const [id, setId] = useState(1);

    const showDetails = (val) => {
        console.log(typeof val)
        val = Number(val);
        
        val === id ? setId(null) :setId(val)
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
                        checked ={id === character.id }
                        onChange={(checked, event) => showDetails(event.target.id)}
                    />
                }
            />
        </li>
    });

    return(
        <ul style={{listStyle: 'none'}}>
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