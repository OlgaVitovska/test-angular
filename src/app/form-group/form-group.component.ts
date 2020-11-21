import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  formSetting: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.formSetting = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.maxLength(150)]]
    });
  }

  sendForm() {
    console.log(this.formSetting.value);
    this.commentService.addComment(this.formSetting.value);
    }

    get form() {
      return this.formSetting.controls;
    }
}