import {SAVE_LIST, REMOVE_ITEM, NAME} from '../actions/types';

const initialState = {
  list: [],
  name: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case REMOVE_ITEM: {
      const updatedData = state.list.filter(
        (item) => item.date !== action.payload,
      );
      return {
        ...state,
        list: updatedData,
      };
    }

    case NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
export default Reducer;
