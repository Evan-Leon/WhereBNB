//Thanks to Robert Ballistreri for filter/search help
import { fetchListings } from './listing_actions';
import { changeCity, resetMap } from './map_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER= "CLEAR_FILTER";

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const clearFilter = () => ({
    type: CLEAR_FILTER,
})

export const updateFilter = (filter, value, zoom, latitude, longitude) => (dispatch, getState) => {
    if (filter == 'city'){
        value = ['New York City, New York', 'Austin, TX', 'Boston, MA', 'Chicago, IL', 'Miami, FL', 'Seattle, WA', 'San Francisco, CA']
            .includes(value) ? value : "";
        dispatch(changeCity({latitude, longitude}, zoom))
    }else {
        dispatch(resetMap)
    }
    dispatch(changeFilter(filter, value));
    return fetchListings(getState().ui.filters)(dispatch);
}

export const removeFilter = () => (dispatch, getState) => {
    dispatch(clearFilter());
    dispatch(resetMap());
    return fetchListings(getState.ui.filters)(dispatch)
}