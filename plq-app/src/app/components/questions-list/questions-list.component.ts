import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '@models/question';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  @Input() public questions: Question[] = [];
  @Input() public loading = false;

  @Output() public like = new EventEmitter<Question>();
  @Output() public disLike = new EventEmitter<Question>();

  public displayedColumns: string[] = ['Text', 'LikesAmount'];

  constructor() {}

  ngOnInit() {}

  public addLike(question: Question): void {
    this.like.next(question);
  }

  public removeLike(question: Question): void {
    this.disLike.next(question);
  }
}
