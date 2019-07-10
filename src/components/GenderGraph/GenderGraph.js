import React from 'react';
import { Row, Col } from 'antd';
import classes from './GenderGraph.css';
import GraphBuilder from '../../containers/GenderGraph/GraphBuilder';

const GenderGraph = () => (
    
    <Row >
        <Col span={24} className={classes.GenderGraph} >
            <GraphBuilder />
            <h4>This section displays the current List’s gender totals.</h4>
        </Col>      
  </Row>
);
export default GenderGraph