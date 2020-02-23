import React from "react";
import Table from "./components/Containers/TableContainer";
import { createStore } from 'redux';
import tableReducer from './store/reducers';
import { Provider } from 'react-redux';
import './App.css'

const store = createStore(tableReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends React.Component
{
    render()
    {
        return (
            <Provider store={store}>
                <div className="outerContainer">
                    <Table/>
                </div>
            </Provider>
        )
    }
}