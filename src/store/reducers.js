import {DATA_TABLE, LAST_SORT, SORT_BY, SORT_TABLE} from "./actions";

const defaultState =
    {
        dataTable: [],
        sortBy: '',
        sort: '',
        lastSort: ''
    };

export default (state = defaultState, action) =>
{
    switch (action.type)
    {
        case DATA_TABLE:
            return {
                ...state,
                dataTable: action.payload
            };

        case SORT_TABLE:
            return {
                ...state,
                sort: action.payload
            };

        case SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            };

        case LAST_SORT:
            return {
                ...state,
                lastSort: action.payload
            };
        // no default
    }

    return state
};