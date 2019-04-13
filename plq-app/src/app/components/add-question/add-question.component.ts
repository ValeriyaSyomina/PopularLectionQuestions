import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { Question } from '@models/question';

const MAX_TEXT_LENGTH = 256;

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  public form: FormGroup = null;

  @Output() public create = new EventEmitter<Question>();

  ngOnInit() {
    this.form = this.initializeForm();
  }

  public get enableSubmit(): boolean {
    return this.form && this.form.valid && this.form.dirty;
  }

  public submitForm(): void {
    if (this.enableSubmit) {
      const question: Question = {
        Text: this.form.value.Text,
        LikesAmount: 0,
        LikedByCurrentUser: false
      };
      this.create.next(question);
      this.form.patchValue({
        Text: null
      });
      this.form.markAsPristine();
      this.form.markAsUntouched();
    }
  }

  public get maxQuestionTextLength(): number {
    return MAX_TEXT_LENGTH;
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      Text: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(MAX_TEXT_LENGTH)
        ])
      )
    });
  }
}
