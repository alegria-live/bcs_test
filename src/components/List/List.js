import React from 'react';
import { Row, Col } from 'antd';
import ListBuilder from '../../containers/List/ListBuilder';
import classes from './List.css'
const env = process.env.NODE_ENV === 'development';

const List = () => (
    <Row >
      <Col className={classes.List} span={24} >
          <div style={!env ? {margin: '0 1rem'}: null}>
            <h2>Characters list</h2>
          </div>
          <ListBuilder />
      </Col>      
    </Row>
);
export default List