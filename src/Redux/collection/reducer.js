const initialState = {
  movieCollection: null,
  tvSeriesCollection: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVIECOLLECTION_SET": {
      return {
        ...state,
        movieCollection: action.data,
      };
    }
    case "MOVIECOLLECTION_ADD": {
      const newMovieCollection = state.movieCollection;
      newMovieCollection.push(action.movieID);
      return {
        ...state,
        movieCollection: newMovieCollection,
      };
    }
    case "MOVIECOLLECTION_REMOVE": {
      const newMovieCollection = state.movieCollection.filter(
        (movie) => movie !== action.movieID
      );
      return {
        ...state,
        movieCollection: newMovieCollection,
      };
    }

    case "TVSERIESCOLLECTION_SET": {
      return {
        ...state,
        tvSeriesCollection: action.data,
      };
    }
    case "TVSERIESCOLLECTION_ADD": {
      const newTvSeriesCollection = state.tvSeriesCollection;
      newTvSeriesCollection.push(action.tvSeriesID);
      return {
        ...state,
        tvSeriesCollection: newTvSeriesCollection,
      };
    }
    case "TVSERIESCOLLECTION_REMOVE": {
      const newTvSeriesCollection = state.tvSeriesCollection.filter(
        (tvSeries) => tvSeries !== action.tvSeriesID
      );
      return {
        ...state,
        tvSeriesCollection: newTvSeriesCollection,
      };
    }
    default:
      return state;
  }
};

export default reducer;
