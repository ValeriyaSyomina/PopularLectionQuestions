import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsContainerComponent } from './components/questions-container/questions-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuestionsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
