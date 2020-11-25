import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment: Comment[] = [];

  constructor() { }

  addComment(comment) {
    console.log(comment);
    this.comment.push(comment);
  }
  commentDel(i) {
    console.log(i);
    this.comment.splice(i, 1);
  }
}
