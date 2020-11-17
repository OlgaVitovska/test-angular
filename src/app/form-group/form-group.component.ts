import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Output() getComment = new EventEmitter<string>();
  
  formSetting: FormGroup;
  
  constructor(
    private fb: FormBuilder
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
    }

    get form() {
      return this.formSetting.controls;
    }

    addComment() {
      this.formSetting.value;
      this.getComment.emit();
      }
    }