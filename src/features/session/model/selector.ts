const getFilter = (state: RootState) => ({ ...state });

const selectFilterQuery = (state: RootState) => state.filter.query;

export { getFilter, selectFilterQuery };
