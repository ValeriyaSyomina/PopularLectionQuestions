import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsContainerComponent } from './questions-container.component';
import { Store } from '@ngrx/store';
import * as fromRoot from '@redux/reducers';
import { APP_SERVICES } from '@redux/services';

import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { APP_EFFECTS } from '@redux/effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { QuestionsListComponent } from '../questions-list/questions-list.component';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Question } from '@models/question';
import * as fromQuestion from '@redux/question';
import { SharedModule } from '@shared/shared.module';

describe('QuestionsContainerComponent', () => {
  let component: QuestionsContainerComponent;
  let fixture: ComponentFixture<QuestionsContainerComponent>;
  let store$: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionsContainerComponent,
        QuestionsListComponent,
        AddQuestionComponent
      ],
      imports: [
        StoreModule.forRoot(fromRoot.reducers),
        BrowserAnimationsModule,
        EffectsModule.forRoot([...APP_EFFECTS]),
        SharedModule
      ],
      providers: [...APP_SERVICES]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store$ = fixture.debugElement.injector.get(Store) as Store<fromRoot.State>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch AddLike', () => {
    spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const question: Question = {
      Text: 'Text',
      LikesAmount: 1,
      LikedByCurrentUser: false
    };
    component.onAddLike(question);
    fixture.detectChanges();
    const action = new fromQuestion.AddLike(question);
    expect(store$.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch RemoveLike', () => {
    spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const question: Question = {
      Text: 'Text',
      LikesAmount: 1,
      LikedByCurrentUser: true
    };
    component.onRemoveLike(question);
    fixture.detectChanges();
    const action = new fromQuestion.RemoveLike(question);
    expect(store$.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch Create Question', () => {
    spyOn(store$, 'dispatch');
    fixture.detectChanges();

    const question: Question = {
      Text: 'Text',
      LikesAmount: 1,
      LikedByCurrentUser: true
    };
    component.onCreateQuestion(question);
    fixture.detectChanges();
    const action = new fromQuestion.Create(question);
    expect(store$.dispatch).toHaveBeenCalledWith(action);
  });
});
