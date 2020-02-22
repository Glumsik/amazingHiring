import React from "react";
import Table from "./components/Containers/TableContainer";
import { createStore } from 'redux';
import tableReducer from './store/reducers';
import { Provider } from 'react-redux';

const store = createStore(tableReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends React.Component
{
    render()
    {
        return (
            <Provider store={store}>
                <div>
                    <Table/>
                </div>
            </Provider>
        )
    }
}