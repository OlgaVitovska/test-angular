import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment: Comment[];

  constructor() { }

  addComment(comment) {
    this.comment.values ({
      name,
      email,
      comment
    });
  }
}
