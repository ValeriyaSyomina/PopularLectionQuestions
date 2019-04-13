import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '@models/question';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  public load(): Observable<Question[]> {
    return of([
      {
        Id: '123',
        Text: '12121',
        LikesAmount: 0,
        LikedByCurrentUser: false
      }
    ]);
  }

  public create(data: Question): Observable<Question> {
    return of({
      ...data,
      Id: Math.random()
        .toString(36)
        .substring(7)
    });
  }

  public setLike(data: Question): Observable<Question> {
    return of({
      ...data,
      LikesAmount: data.LikesAmount + 1,
      LikedByCurrentUser: true
    });
  }

  public removeLike(data: Question): Observable<Question> {
    return of({
      ...data,
      LikesAmount: data.LikesAmount - 1,
      LikedByCurrentUser: false
    });
  }
}
