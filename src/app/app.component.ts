import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_crud_UI';
  formBuilder = inject(FormBuilder);
  userForm!: FormGroup;
  constructor() {
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      age : [''],
      gender: ['']
    });
    }
    save()
    {
      let userdata = this.userForm.value;
      console.log(userdata);
    }
    clearForm()
    {
      this.userForm.reset();
    }
}
