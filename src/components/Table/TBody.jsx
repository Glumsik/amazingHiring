import React from 'react';
import TCell from './TCell'


export default props => {
    return (
        <tbody>
        {
            props.dataTable.map((item, index) =>
                (
                    <tr key={index}>
                        {
                            Object.values(item).map((rowData, index) =>
                                (
                                    <TCell key={index} type={'body'}>
                                        {rowData}
                                    </TCell>
                                ))
                        }
                    </tr>
                ))
        }
        </tbody>
    )
}

