import React, {useContext} from 'react';
import {connect} from 'react-redux';
import AppContext from '../../context/app-context';
import * as actions from '../../store/actions';
import Header from '../../components/Header/Header';

export const HeaderBuilder = props => {
    const {currentPage, setCurrentPage, setCharacterId} = useContext(AppContext);
    const maxWidth = window.innerWidth >= 992;
    const onChangePage = (next, prev) => {
        if(next) {
            props.listProcessHandler(`?page=${currentPage + 1}`);
            if (maxWidth) setCharacterId((currentPage + 1) * 20 - 19);
            setCurrentPage(currentPage +1);
        };
        if(prev) {
            props.listProcessHandler(`?page=${currentPage - 1}`);
            if (maxWidth) setCharacterId((currentPage - 1) * 20 - 19);
            setCurrentPage(currentPage -1);           
        };
    };
    return (
        <Header 
            title="THE RICK AND MORTY API"
            total={props.info.count}
            currentPage={currentPage}
            totalPages={props.info.pages} 
            changePage={onChangePage}
            firstPage = {currentPage - 1 === 0}
            lastPage = {props.info.pages - currentPage === 0}
        />
    )
};
const mapStateToProps = state => {
    return{
        info: state.listReducer.info
    }
};
const mapDispatchToProps = dispatch => {
    return {
        listProcessHandler: (page) => dispatch(actions.listProcess(page))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBuilder)