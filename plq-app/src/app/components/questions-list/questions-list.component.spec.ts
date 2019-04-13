import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsListComponent } from './questions-list.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('QuestionsListComponent', () => {
  let component: QuestionsListComponent;
  let fixture: ComponentFixture<QuestionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsListComponent],
      imports: [SharedModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
