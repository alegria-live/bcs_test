import React from 'react';
import { Row, Col } from 'antd';
import ListBuilder from '../../containers/List/ListBuilder';
import classes from './List.css'

const List = () => (
    <Row>
      <Col className={classes.List} span={24}>
          <ListBuilder />
      </Col>      
    </Row>
);
export default List