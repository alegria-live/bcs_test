import React from 'react';
import classes from './App.css';
import Spinner from '../components/UI/Spinner/Spinner';
import Layout from '../hoc/Layout/Layout';

function App() {
  return (
    <div className={classes.App} >
     <Spinner />
     <Layout />
    </div>
  );
}

export default App;
