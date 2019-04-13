import * as fromQuestion from './question';
import * as R from 'ramda';

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Question } from '@models/question';

export interface State {
  question: fromQuestion.State;
}

export const reducers: ActionReducerMap<State> = {
  question: fromQuestion.reducer
};

const emptyArray = [];
export const matchEntities = <T>(
  ids: string[],
  entities: { [key: string]: T }
): T[] => {
  return ids ? ids.map(id => entities[id]) : emptyArray;
};

const sortFunction = R.sortBy(R.prop('LikesAmount'));

/**
 * Questions
 */
export const selectQuestionsState = createFeatureSelector<fromQuestion.State>(
  'question'
);

export const selectQuestionsIds = createSelector(
  selectQuestionsState,
  fromQuestion.selectIds
);

export const selectQuestionsEntities = createSelector(
  selectQuestionsState,
  fromQuestion.selectEntities
);

export const selectQuestionsLoading = createSelector(
  selectQuestionsState,
  fromQuestion.selectLoading
);

export const selectQuestions = createSelector(
  selectQuestionsIds,
  selectQuestionsEntities,
  matchEntities
);

export const selectQuestionsSortedByLikesAmount = createSelector(
  selectQuestions,
  (data: Question[]) => {
    return data && data.length
      ? data.sort((a, b) => {
          if (a.LikesAmount > b.LikesAmount) {
            return -1;
          }
          if (b.LikesAmount > a.LikesAmount) {
            return 1;
          }
          return 0;
        })
      : [];
  }
);
