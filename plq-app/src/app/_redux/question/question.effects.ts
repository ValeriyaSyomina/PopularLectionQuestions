import { Injectable } from '@angular/core';
import { QuestionService } from './question.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as questionActions from './question.actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class QuestionEffects {
  public constructor(
    public questionService: QuestionService,
    public actions$: Actions
  ) {}

  @Effect()
  public createQuestion$ = this.actions$.pipe(
    ofType(questionActions.ActionTypes.Create),
    mergeMap((action: questionActions.Create) => {
      console.log('Sending request to add question');
      return this.questionService.create(action.payload).pipe(
        map(x => new questionActions.CreateSuccess(x)),
        catchError(x => of(new questionActions.CreateFail(x)))
      );
    })
  );

  @Effect()
  public addLikeQuestion$ = this.actions$.pipe(
    ofType(questionActions.ActionTypes.AddLike),
    mergeMap((action: questionActions.AddLike) => {
      console.log('Sending request to set like');
      return this.questionService.setLike(action.payload).pipe(
        map(x => new questionActions.AddLikeSuccess(x)),
        catchError(x => of(new questionActions.AddLikeFail(x)))
      );
    })
  );

  @Effect()
  public removeLikeQuestion$ = this.actions$.pipe(
    ofType(questionActions.ActionTypes.RemoveLike),
    mergeMap((action: questionActions.RemoveLike) => {
      console.log('Sending request to remove like');
      return this.questionService.removeLike(action.payload).pipe(
        map(x => new questionActions.RemoveLikeSuccess(x)),
        catchError(x => of(new questionActions.RemoveLikeFail(x)))
      );
    })
  );
}
