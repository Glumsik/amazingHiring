export const DATA_TABLE = 'DATA_TABLE';
export const SORT_TABLE = 'SORT_TABLE';
export const SORT_BY = 'SORT_BY';
export const LAST_SORT = 'LAST_SORT';

export const setTable = (data) =>
    ({
        type: DATA_TABLE,
        payload: data
    });

export const setSort = (sort) =>
    ({
        type: SORT_TABLE,
        payload: sort
    });

export const setSortBy = (sortBy) =>
    ({
        type: SORT_BY,
        payload: sortBy
    });

export const setLastSort = (lastSort) =>
    ({
        type: LAST_SORT,
        payload: lastSort
    });