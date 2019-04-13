import { Component, OnInit } from '@angular/core';
import { Question } from '@models/question';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@redux/reducers';
import * as fromQuestion from '@redux/question';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.scss']
})
export class QuestionsContainerComponent implements OnInit {
  constructor(public store$: Store<fromRoot.State>) {}

  public questions$ = this.store$.pipe(
    select(fromRoot.selectQuestionsSortedByLikesAmount)
  );
  public loading$ = this.store$.pipe(select(fromRoot.selectQuestionsLoading));

  ngOnInit() {}

  public onCreateQuestion(question: Question): void {
    this.store$.dispatch(new fromQuestion.Create(question));
  }

  public onAddLike(question: Question): void {
    this.store$.dispatch(new fromQuestion.AddLike(question));
  }

  public onRemoveLike(question: Question): void {
    this.store$.dispatch(new fromQuestion.RemoveLike(question));
  }
}
