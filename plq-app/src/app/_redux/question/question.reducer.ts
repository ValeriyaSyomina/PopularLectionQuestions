import { Question } from '@models/question';
import { Actions, ActionTypes } from './question.actions';
import * as R from 'ramda';

export interface State {
  entities: { [key: string]: Question };
  ids: string[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: State = {
  entities: {},
  ids: [],
  loaded: false,
  loading: false,
  error: null
};

const addId = (id: string, ids: string[]): string[] => {
  return ids.indexOf(id) === -1 ? ids.concat(id) : ids;
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.Create: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }

    case ActionTypes.CreateSuccess: {
      const result = action.payload as Question;
      const id = result && result.Id;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: result
        },
        ids: addId(id, state.ids),
        loaded: true,
        loading: false
      };
    }

    case ActionTypes.CreateFail: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }

    case ActionTypes.AddLike: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }

    case ActionTypes.AddLikeSuccess: {
      const result = action.payload as Question;
      const id = result && result.Id;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: result
        },
        ids: addId(id, state.ids),
        loaded: true,
        loading: false
      };
    }

    case ActionTypes.AddLikeFail: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }

    case ActionTypes.RemoveLike: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }

    case ActionTypes.RemoveLikeSuccess: {
      const result = action.payload as Question;
      const id = result && result.Id;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: result
        },
        ids: addId(id, state.ids),
        loaded: true,
        loading: false
      };
    }

    case ActionTypes.RemoveLikeFail: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }

    default: {
      return state;
    }
  }
}

export const selectIds = (state: State): string[] => state && state.ids;
export const selectEntities = (state: State): { [key: string]: Question } =>
  state && state.entities;
export const selectLoaded = (state: State): boolean => state && state.loaded;
export const selectLoading = (state: State): boolean => state && state.loading;
export const selectError = (state: State): string => state && state.error;
