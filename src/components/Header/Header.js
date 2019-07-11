import React from 'react'
import classes from './Header.css';
import { Button, Icon } from 'antd';
const Header = props => (
    <div className={classes.Header}>
        <div>
            <h2>{props.title}</h2>
        </div>        
        <div>
            <Button.Group >
                <Button
                    type="dashed"
                    disabled={props.firstPage}
                    onClick={() => props.changePage(null, 'prev')}>
                    <Icon type="left" />
                    Prev
                </Button>
                    <Button
                        type="dashed"
                        disabled={props.lastPage}
                        onClick={() => props.changePage('next')}>
                        Next
                    <Icon type="right" />
                </Button>
            </Button.Group>
        </div>
        <div>
            <span>Total characters:</span>
            <span>{props.total}</span>
            <span>Total pages:</span>
            <span>{props.totalPages}</span>
            <span>Current page:</span>
            <span>{props.currentPage}</span>
        </div>
        
    </div>

);
export default Header