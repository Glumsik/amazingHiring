import React from "react";
import THead from './THead';
import TBody from './TBody';

export default props => {
    return (
        <table className="table table-bordered">
            <THead dataTable={props.dataTable[0]} onSort={(item) => props.onSort(item)} sortBy={props.sortBy}
                   sort={props.sort}/>
            <TBody dataTable={props.dataTable}/>
        </table>
    )
}




