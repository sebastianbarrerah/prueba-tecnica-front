import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../domain/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  execute(user: IUser){
    return this.http.post<IUser>('http://localhost:8000/api/voters', user);
  }


}
