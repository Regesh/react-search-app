import {FETCH_TESTERS, FETCH_TESTERS_FAILURE, FETCH_TESTERS_SUCCESS} from '../actions'

const testersReducer = (state = {testers: []}, action) => {
    switch (action.type) {
        case FETCH_TESTERS:
            return Object.assign(state, {
                loading: true,
                failed: false,
                testers: []
            });
        case FETCH_TESTERS_SUCCESS:
            return Object.assign(state, {
                loading: false,
                failed: false,
                testers: (Array.isArray(action.payload)) ? action.payload.sort(compareValues('firstName', 'asc')) : [action.payload]
            });
        case FETCH_TESTERS_FAILURE:
            return Object.assign(state, {
                loading: false,
                failed: true,
                testers: []
            });
        case 'ORDER_TESTERS':
            const payload = action.payload;
            return Object.assign(state, {
                loading: false,
                failed: false,
                testers: state.testers.sort(compareValues(payload.field, payload.order))
            });
        default:
            return {
                loading: false,
                failed: false,
                testers: []
            };
    }
}

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

export default testersReducer;