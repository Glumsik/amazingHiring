import React from 'react';
import './Table.css';

export default (props) => (
    <table className="table table-bordered">
        <thead> 
        <tr className="tableHead">
            <th onClick={() => props.onSort('Name')}>
                 Name {props.sortBy === 'Name' ? <div className={props.sort === 'asc' ? 'up' : 'down'}></div> : null}
            </th>
            <th onClick={() => props.onSort('Email')}>
                 Email {props.sortBy === 'Email' ? <div className={props.sort === 'asc' ? 'up' : 'down'}></div> : null}
            </th>
            <th onClick={() => props.onSort('Phone')}>
                 Phone {props.sortBy === 'Phone' ? <div className={props.sort === 'asc' ? 'up' : 'down'}></div> : null}
            </th>
            <th onClick={() => props.onSort('Company')}>
                Company {props.sortBy === 'Company' ? <div className={props.sort === 'asc' ? 'up' : 'down'}></div> : null}
            </th>  
        </tr>
        </thead>
        <tbody>
            { 
                props.dataTable.map((item, index) => (
                    <tr key={index}>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.Phone}</td>
                        <td>{item.Company}</td>   
                    </tr>
            ))
            }
        </tbody>
    </table>
)
