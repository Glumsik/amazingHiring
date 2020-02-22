import React from "react";
import './Table.css'


export default props => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr className="tableHead">
                    {
                        Object.keys(props.dataTable[0]).map((item, index) =>
                            (
                                <th key={index} onClick={() => props.onSort(item)}>
                                    {item} {props.sortBy === item && <div className={props.sort === 'asc' ? 'up' : 'down'}/>}
                                </th>
                            ))
                    }
                </tr>
            </thead>
            <tbody>
            {
                props.dataTable.map((item, index) =>
                    (
                        <tr key={index}>
                            {
                                Object.values(item).map((rowData, index) =>
                                    (
                                        <td key={index}>{rowData}</td>
                                    ))
                            }
                        </tr>
                    ))
            }
            </tbody>
        </table>
    )
}




