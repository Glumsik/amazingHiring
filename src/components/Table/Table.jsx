import React from "react";


export default props => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr className="tableHead">
                    {
                        Object.keys(props.dataTable[0]).map((item, index) =>
                            (
                                <th key={index} onClick={() => props.onSort(item)}>
                                    <div className="column-header"><span>{item}</span>{props.sortBy === item && <div className={props.sort === 'asc' ? (item === 'Phone' ? 'upPhone' : 'up') : (item === 'Phone' ? 'downPhone' : 'down')}/>}</div>
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




