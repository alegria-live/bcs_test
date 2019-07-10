import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import classes from './App.css';
import Spinner from '../components/UI/Spinner/Spinner';
import Layout from '../hoc/Layout/Layout';

const App = props => {
  
  useEffect(()=> {
    props.autoInitListHandler()
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className={classes.App} >
      {props.isLoading ? <Spinner /> : <Layout />}
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
