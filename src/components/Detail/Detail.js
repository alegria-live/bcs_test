import React from 'react';
import { Row, Col } from 'antd';
import classes from './Detail.css';
const env = process.env.NODE_ENV === 'development';
const Detail = props => (
    <Row >
        <Col span={24} className={classes.Detail} style={{display: 'flex'}}>
            <img src={props.img} alt={props.name} style={!env ? {marginLeft: '1rem'} : null}/>
            <div className={classes.Spec}>
                <h1>Character details</h1>
                <h4>Name:</h4>
                <h3>{props.name}</h3>
                <h4>Species:</h4>
                <h3>{props.species}</h3>
                <h4>Location:</h4>
                <h3>{props.location}</h3>
                <h4>Gender:</h4>
                <h3>{props.gender}</h3>
            </div>
        </Col>      
  </Row>
);

export default Detail