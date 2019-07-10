import React from 'react';
import classes from './Layout.css';
import List from '../../components/List/List';
import Detail from '../../containers/Detail/DetailBuilder';

const Layout = () => {
    return(
        <div className={classes.Layout}>
                <List />
            <div>
                <Detail />               
            </div>
        </div>
    );
};
export default Layout;