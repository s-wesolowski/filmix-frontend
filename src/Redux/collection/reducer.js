const initialState = {
  collection: localStorage.getItem("collection")
    ? JSON.parse(localStorage.getItem("collection"))
    : {},
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "COLLECTION_SET": {
      return {
        ...state,
        collection: {
          ...state.collection,
          [action.userId]: action.items,
        },
      };
    }
    case "COLLECTION_ADD": {
      localStorage.setItem(
        "collection",
        JSON.stringify({
          ...state.collection,
          [action.userId]: [
            ...(state.collection[action.userId] || []),
            action.item,
          ],
        })
      );
      return {
        ...state,
        collection: {
          ...state.collection,
          [action.userId]: [
            ...(state.collection[action.userId] || []),
            action.item,
          ],
        },
      };
    }
    case "COLLECTION_REMOVE": {
      localStorage.setItem(
        "collection",
        JSON.stringify({
          ...state.collection,
          [action.userId]: (state.collection[action.userId] || []).filter(
            (item) => item.data.id !== action.item.data.id
          ),
        })
      );
      return {
        ...state,
        collection: {
          ...state.collection,
          [action.userId]: (state.collection[action.userId] || []).filter(
            (item) => item.data.id !== action.item.data.id
          ),
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
