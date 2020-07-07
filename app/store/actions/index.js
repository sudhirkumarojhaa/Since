import {SAVE_LIST, REMOVE_ITEM, NAME} from './types';

export const saveList = (data) => ({
  type: SAVE_LIST,
  payload: data,
});

export const removeItem = (key) => ({
  type: REMOVE_ITEM,
  payload: key,
});

export const name = (key) => ({
  type: NAME,
  payload: key,
});
