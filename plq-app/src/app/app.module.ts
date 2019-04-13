import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionsContainerComponent } from './components/questions-container/questions-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material';
// import { MatIconModule } from '@angular/material/icon';
// import { MatTableModule } from '@angular/material/table';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';
import { APP_SERVICES } from '@redux/services';
import { APP_EFFECTS } from '@redux/effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@redux/reducers';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    QuestionsListComponent,
    QuestionsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // MatButtonModule,
    // MatInputModule,
    // MatTableModule,
    // MatIconModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MatCardModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([...APP_EFFECTS])
  ],
  providers: [...APP_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule {}
