import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { GetUsersUseCase } from '../../../../application/get-users.usecase';
import { IUser } from '../../../../domain/model/user.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoginComponent } from "../../components/login/login.component";

@Component({
  selector: 'lib-login-contaier',
  imports: [ AsyncPipe, LoginComponent],
  templateUrl: './login-contaier.component.html',
})
export class LoginContaierComponent implements OnInit, OnDestroy{
  public users$: Observable<IUser[]>;
  private readonly _GetUserUseCase = inject(GetUsersUseCase);
  
  ngOnInit(): void {
    this._GetUserUseCase.initSubscriptions();
    this._GetUserUseCase.execute();
    this.users$ = this._GetUserUseCase.usersData$()
  }

  ngOnDestroy(): void {
    this._GetUserUseCase.destroySubscriptions();  
  }

  
}
