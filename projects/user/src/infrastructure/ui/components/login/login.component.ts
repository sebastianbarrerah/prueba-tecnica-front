import { Component, input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IUser } from '../../../../domain/model/user.model';

@Component({
  selector: 'lib-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  data = input<IUser[]>([]);

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      let existingEmail = this.data().find(item => item.email == this.form.value.email);
      if(existingEmail){
        this.router.navigate(['/candidates']);
        console.log('Existe');
        localStorage.setItem('userActive', "true");
        localStorage.setItem('name', this.form.value.name);
        alert('Inicio de sesión exitoso');
      }
      else{
        alert('Correo no registrado, registrate para poder iniciar sesión');
        this.router.navigate(['/users/register']);
      }
    } else {
      console.log('Formulario inválido');
    }
  }
}
