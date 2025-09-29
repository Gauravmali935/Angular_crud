import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserStore } from './store/user-store';

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
  userStore : UserStore
  constructor() {
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      age : [''],
      gender: ['']
    });
    this.userStore = new UserStore();
    }
    save()
    {
      let userdata = this.userForm.value;
      console.log(userdata);
      this.userStore.addUser(userdata);
      this.userForm.reset();
    }
    clearForm()
    {
      this.userForm.reset();
    }
}
