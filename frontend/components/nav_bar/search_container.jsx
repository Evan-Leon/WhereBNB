import { connect } from 'react-redux';

import {updateFilter } from '../../actions/filter_actions';
import {asArray } from '../../reducers/selectors';
import Search from './search';

const mSTP = state => ({
    listings: asArray(state.entities),
    cities: asArray(state.entities.city),
    filters: state.ui.filters,
    map: state.ui.map, 

})

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(Search);