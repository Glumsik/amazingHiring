import React from "react";
import  { connect } from 'react-redux';
import Table from '../Table/Table'
import {setSort, setTable, setSortBy, setLastSort} from "../../store/actions";
import _ from 'lodash';


class TableContainer extends React.Component
{
    componentDidMount()
    {
        fetch('https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json')
            .then(res => res.json())
            .then(
                (result) =>
                {
                    this.props.setTable(result);
                    this.sortSave()
                },
                (error) =>
                {
                    console.error(error)
                }
            )
    }


    onSort = (sortField) =>
    {
        let sortType = 'asc';
        if(sortField === this.props.lastSort)
        {
            sortType = this.props.sort === 'asc' ? 'desc' : 'asc';
        }

        this.props.setLastSort(sortField);

        this.sortState(sortField, sortType);

        sessionStorage.setItem('sortSave', JSON.stringify([{sortBy : sortField},{sort : sortType}]))
    };


    sortSave = () =>
    {
        if(sessionStorage.getItem('sortSave') !== null)
        {
            const sessionSave = JSON.parse(sessionStorage.sortSave);
            const sortField = sessionSave[0].sortBy;
            const sortType = sessionSave[1].sort;

            this.sortState(sortField, sortType);
        }
    };


    sortState = (sortField, sortType) =>
    {

        const orderedData = _.orderBy(this.props.dataTable, user => user[sortField].toLowerCase(), sortType);


        this.props.setTable(orderedData);
        this.props.setSortBy(sortField);
        this.props.setSort(sortType);
    };


    render()
    {
        return (
            <>
                {this.props.dataTable.length > 0  && <Table dataTable={this.props.dataTable} onSort={(item) => this.onSort(item)}/>}
            </>
        )
    }
}

const mapStateToProps = (state) =>
{
    return {
        dataTable: state.dataTable,
        sortBy: state.sortBy,
        sort: state.sort,
        lastSort: state.lastSort
    };
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        setTable: (data) => dispatch(setTable(data)),
        setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
        setSort: (sort) => dispatch(setSort(sort)),
        setLastSort: (lastSort) => dispatch(setLastSort(lastSort))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);