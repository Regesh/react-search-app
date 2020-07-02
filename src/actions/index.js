export const FETCH_TESTERS = 'FETCH_TESTERS';
export const FETCH_TESTERS_SUCCESS = 'FETCH_TESTERS_SUCCESS';
export const FETCH_TESTERS_FAILURE = 'FETCH_TESTERS_FAILURE';

export const fetchTesters = () => {
    return {
      type: FETCH_TESTERS
    };
}

export const fetchTestersSuccess = testers => {
    return {
        type: FETCH_TESTERS_SUCCESS,
        payload: testers
    }
}

export const fetchTestersFailure = () => {
    return {
        type: FETCH_TESTERS_FAILURE
    }
}

export const orderTesters = (data) => {
    return {
        type: 'ORDER_TESTERS',
        payload: data
    }
}