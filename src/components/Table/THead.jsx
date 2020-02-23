import React from 'react';
import TCell from './TCell'


export default props => {
    return (
        <thead>
            <tr className="tableHead">
                {
                    Object.keys(props.dataTable).map((item, index) =>
                        (
                            <TCell key={index} onClick={() => props.onSort(item)} type={'head'}>
                                <div className="column-header"><span>{item}  &nbsp;</span>{props.sortBy === item && <div
                                    className={props.sort === 'asc' ? (item === 'Phone' ? 'upPhone' : 'up') : (item === 'Phone' ? 'downPhone' : 'down')}/>}
                                </div>
                            </TCell>
                        ))
                }
            </tr>
        </thead>
    )
}