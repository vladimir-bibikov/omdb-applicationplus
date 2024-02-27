const initialState = {
    pending: false,
    error: "",
    movies: [],
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PENDING':
        return {...state, pending: true, error: "", movies: []};
      case 'FETCH_SUCCESS':
        return {...state, pending: false, error: "", movies: action.payload};
      case 'FETCH_FAILURE':
        return {...state, pending: false, error: action.payload, movies: []};  
      default:
        return state;
    }
  }
  
  export default moviesReducer;