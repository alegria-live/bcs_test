import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import AppContext from '../context/app-context';
import classes from './App.css';
import Spinner from '../components/UI/Spinner/Spinner';
import Layout from '../hoc/Layout/Layout';

export const App = props => {
  
  useEffect(()=> {
    props.autoInitListHandler()
    // eslint-disable-next-line
  }, []);
  const ScreenWidth = window.innerWidth;
  let startId = 1;

  if(ScreenWidth <= 992) startId = null;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [characterId, setCharacterId] = useState(startId);
  const [showDrawer, setShowDrawer] = useState(false)

  const setId = (id) => setCharacterId(id);
  const setPage = (page) => setCurrentPage(page);
  const setDrawer = (val) => setShowDrawer(val);
    
  return (
    <div className={classes.App} >
      {props.isLoading ? <Spinner /> : 
      <AppContext.Provider value={{
        characterId,
        setCharacterId: setId,
        currentPage,
        setCurrentPage: setPage,
        showDrawer,
        setShowDrawer: setDrawer
        }}>
        <Layout />
      </AppContext.Provider>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.listReducer.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    autoInitListHandler: ()=> dispatch(actions.autoInitList())
  }
};
export default connect(mapStateToProps ,mapDispatchToProps)(App);
