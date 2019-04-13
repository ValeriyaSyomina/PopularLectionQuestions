import { Action } from '@ngrx/store';
import { Question } from '@models/question';

export enum ActionTypes {
  AddLike = '[Question] Add like',
  AddLikeSuccess = '[Question] Add like success',
  AddLikeFail = '[Question] Add like fail',
  RemoveLike = '[Question] Remove like',
  RemoveLikeSuccess = '[Question] Remove like success',
  RemoveLikeFail = '[Question] Remove like fail',
  Create = '[Question] Create',
  CreateSuccess = '[Question] Create success',
  CreateFail = '[Question] Create fail'
}

export class AddLike implements Action {
  public readonly type = ActionTypes.AddLike;
  constructor(public payload: Question) {}
}

export class AddLikeSuccess implements Action {
  public readonly type = ActionTypes.AddLikeSuccess;
  constructor(public payload: Question) {}
}

export class AddLikeFail implements Action {
  public readonly type = ActionTypes.AddLikeFail;
  constructor(public error: string) {}
}

export class RemoveLike implements Action {
  public readonly type = ActionTypes.RemoveLike;
  constructor(public payload: Question) {}
}

export class RemoveLikeSuccess implements Action {
  public readonly type = ActionTypes.RemoveLikeSuccess;
  constructor(public payload: Question) {}
}

export class RemoveLikeFail implements Action {
  public readonly type = ActionTypes.RemoveLikeFail;
  constructor(public error: string) {}
}

export class Create implements Action {
  public readonly type = ActionTypes.Create;
  constructor(public payload: Question) {}
}

export class CreateSuccess implements Action {
  public readonly type = ActionTypes.CreateSuccess;
  constructor(public payload: Question) {}
}

export class CreateFail implements Action {
  public readonly type = ActionTypes.CreateFail;
  constructor(public error: string) {}
}

export type Actions =
  | RemoveLike
  | RemoveLikeSuccess
  | RemoveLikeFail
  | AddLike
  | AddLikeSuccess
  | AddLikeFail
  | Create
  | CreateSuccess
  | CreateFail;
