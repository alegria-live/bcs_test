import React from 'react';
import { Row, Col, Drawer } from 'antd';

import classes from './Detail.css';
const env = process.env.NODE_ENV === 'development';
const Detail = props => {   
    const detailData = (
        <React.Fragment>
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
        </React.Fragment>        
    );
    const detailDrawer = (
        <Drawer className={classes.ShowDrawer}
          height='80%'         
          placement="bottom"
          closable={false}
          onClose={props.onClose}
          visible={props.showDrawer || props.showDrawer !== undefined}
          >
            <div className={classes.Drawer}>
                {detailData}  
            </div>        
        </Drawer>
    );
    return (
        <Row >
        <Col span={24} className={classes.Detail} style={{display: 'flex'}}>
            {detailDrawer}
            {detailData}
        </Col>      
  </Row>
    )
}

export default Detail