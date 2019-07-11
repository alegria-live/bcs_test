import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import AppContext from '../context/app-context';
import classes from './App.css';
import Spinner from '../components/UI/Spinner/Spinner';
import Layout from '../hoc/Layout/Layout';

const App = props => {
  
  useEffect(()=> {
    props.autoInitListHandler()
    // eslint-disable-next-line
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [characterId, setCharacterId] = useState(1);

  const setId = (id) => {
    setCharacterId(id)
  };
  const setPage = (page) => {
    setCurrentPage(page)
  };
  
  return (
    <div className={classes.App} >
      {props.isLoading ? <Spinner /> : 
      <AppContext.Provider value={{
        characterId,
        setCharacterId: setId,
        currentPage,
        setCurrentPage: setPage
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
