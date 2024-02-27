export const fetchData = (URL) => {
    return async dispatch => {
        dispatch({ type: 'FETCH_PENDING' });
        try {
            const response = await fetch(URL);
            const data = await response.json();
            if(data.Error){
            dispatch({ type: 'FETCH_FAILURE', payload: data.Error });
            } else{
            dispatch({ type: 'FETCH_SUCCESS', payload: data.Search });
            }
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE', payload: error.Message });
        }
    };
};