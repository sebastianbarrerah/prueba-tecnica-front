import { LoginContaierComponent } from "../containers/login-contaier/login-contaier.component";
import { RegisterLayoutComponent } from "../layout/register-layout/register-layout.component";

export const userRoute = [
  {
    path: '',
    component: LoginContaierComponent,
  },
  {
    path: 'register',
    component: RegisterLayoutComponent
  }
]

